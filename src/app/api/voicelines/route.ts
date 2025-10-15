import { NextResponse } from 'next/server';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { Readable } from 'stream';
import { s3Client, voiceLineBucket } from '@/lib/server/s3-client';

const sanitizeRoute = (route: string): string[] => {
  return route
    .split('/')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => part.replace(/^\.+|\.+$/g, '')) // remove leading/trailing dots
    .map((part) => part.replace(/\.{2,}/g, '.')) // collapse suspicious sequences
    .map((part) => part.replace(/\s+/g, ' ')); // normalize whitespace
};

const sanitizeFileName = (file: string): string | null => {
  const withoutExt = file.replace(/\.(ogg|mp3|wav)$/i, '').trim();
  if (!withoutExt) return null;
  const cleaned = withoutExt.replace(/^\.+|\.+$/g, '').replace(/\.{2,}/g, '.');
  if (!cleaned) return null;
  return cleaned;
};

const toWebStream = (body: unknown): ReadableStream<Uint8Array> => {
  if (!body) {
    throw new Error('Missing S3 body stream');
  }

  if (body instanceof ReadableStream) {
    return body;
  }

  if (typeof (body as any).transformToWebStream === 'function') {
    return (body as any).transformToWebStream();
  }

  if (body instanceof Readable) {
    const nodeStream = body;

    return new ReadableStream<Uint8Array>({
      start(controller) {
        const onData = (chunk: unknown) => {
          if (chunk instanceof Uint8Array) {
            controller.enqueue(chunk);
            return;
          }
          if (typeof chunk === 'string') {
            controller.enqueue(new TextEncoder().encode(chunk));
            return;
          }
          if (chunk) {
            controller.enqueue(Uint8Array.from(chunk as ArrayLike<number>));
          }
        };

        function cleanup() {
          nodeStream.off('data', onData);
          nodeStream.off('error', onError);
          nodeStream.off('end', onEnd);
          nodeStream.off('close', onEnd);
        }

        function onError(err: unknown) {
          cleanup();
          controller.error(err);
        }

        function onEnd() {
          cleanup();
          controller.close();
        }

        nodeStream.on('data', onData);
        nodeStream.once('error', onError);
        nodeStream.once('end', onEnd);
        nodeStream.once('close', onEnd);
      },
      cancel(reason) {
        nodeStream.removeAllListeners();
        if (reason instanceof Error) {
          nodeStream.destroy(reason);
        } else {
          nodeStream.destroy();
        }
      },
    });
  }

  throw new Error('Unsupported stream type from S3');
};

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const route = url.searchParams.get('route') ?? '';
  const file = url.searchParams.get('file') ?? '';

  if (!route || !file) {
    return NextResponse.json(
      { error: 'Missing required query params: route, file' },
      { status: 400 }
    );
  }

  let routeSegments: string[];
  try {
    routeSegments = sanitizeRoute(route).map((segment) =>
      decodeURIComponent(segment)
    );
  } catch {
    return NextResponse.json(
      { error: 'Invalid route parameter' },
      { status: 400 }
    );
  }

  if (
    routeSegments.length === 0 ||
    routeSegments.some((seg) => seg.includes('..'))
  ) {
    return NextResponse.json(
      { error: 'Invalid route parameter' },
      { status: 400 }
    );
  }

  const sanitizedFile = sanitizeFileName(file);
  if (!sanitizedFile) {
    return NextResponse.json(
      { error: 'Invalid file parameter' },
      { status: 400 }
    );
  }

  const key = `voicelines/${routeSegments
    .map((segment) => encodeURIComponent(segment))
    .join('/')}/${encodeURIComponent(sanitizedFile)}.ogg`;

  const range = request.headers.get('range') ?? undefined;

  try {
    const command = new GetObjectCommand({
      Bucket: voiceLineBucket,
      Key: key,
      ...(range ? { Range: range } : {}),
    });

    const result = await s3Client.send(command);

    if (!result.Body) {
      return NextResponse.json(
        { error: 'Voice line not found' },
        { status: 404 }
      );
    }

    const headers = new Headers();
    headers.set('Content-Type', result.ContentType ?? 'audio/ogg');
    headers.set('Cache-Control', 'public, max-age=3600');

    if (result.AcceptRanges) {
      headers.set('Accept-Ranges', result.AcceptRanges);
    }

    if (result.ContentLength) {
      headers.set('Content-Length', result.ContentLength.toString());
    }

    if (result.ETag) {
      headers.set('ETag', result.ETag);
    }

    if (result.LastModified) {
      headers.set('Last-Modified', result.LastModified.toUTCString());
    }

    if (result.ContentRange) {
      headers.set('Content-Range', result.ContentRange);
    }

    const status = range ? 206 : 200;
    return new NextResponse(toWebStream(result.Body), {
      status,
      headers,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Failed to fetch voice line';

    if (
      message.includes('NoSuchKey') ||
      message.includes('NotFound') ||
      message.includes('was not found')
    ) {
      return NextResponse.json(
        { error: 'Voice line not found' },
        { status: 404 }
      );
    }

    console.error('Failed to fetch S3 voice line', error);
    return NextResponse.json(
      { error: 'Failed to load voice line' },
      { status: 500 }
    );
  }
}
