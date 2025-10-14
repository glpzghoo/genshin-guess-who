import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import {
  createAdminSessionToken,
  getAdminCookieName,
  verifyAdminSessionToken,
} from '@/lib/server/admin-auth';

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getAdminCookieName())?.value;
  const ok = verifyAdminSessionToken(token);
  return NextResponse.json({ authenticated: ok }, { status: ok ? 200 : 401 });
}

export async function POST(req: Request) {
  try {
    const { admin, password } = (await req.json()) as {
      admin?: string;
      password?: string;
    };

    if (!admin || !password) {
      return NextResponse.json(
        { error: 'Missing credentials' },
        { status: 400 }
      );
    }

    const envAdmin = process.env.ADMIN;
    const envPassword = process.env.HASHED_PASSWORD;
    if (envAdmin !== admin || envPassword !== password) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const token = createAdminSessionToken(admin);
    const res = NextResponse.json({ ok: true });
    res.headers.append(
      'Set-Cookie',
      `${getAdminCookieName()}=${token}; HttpOnly; Path=/; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}; Secure`
    );
    return res;
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.headers.append(
    'Set-Cookie',
    `${getAdminCookieName()}=deleted; HttpOnly; Path=/; SameSite=Lax; Max-Age=0; Secure`
  );
  return res;
}
