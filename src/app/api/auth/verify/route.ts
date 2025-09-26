import { NextResponse } from 'next/server';
import { db } from '@/lib/db/client';
import { users } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import jwt from 'jsonwebtoken';
import { signAuthToken, cookieOptions } from '@/lib/auth/jwt';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const token = url.searchParams.get('token');
    if (!token)
      return NextResponse.json(
        { ok: false, error: 'Missing token' },
        { status: 400 }
      );

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      sub: string;
      purpose?: string;
    };
    if (decoded.purpose !== 'email-verify') {
      return NextResponse.json(
        { ok: false, error: 'Invalid token' },
        { status: 400 }
      );
    }

    // Mark verified
    const [user] = await db
      .update(users)
      .set({ emailVerified: true })
      .where(eq(users.id, decoded.sub))
      .returning();

    if (!user)
      return NextResponse.json(
        { ok: false, error: 'User not found' },
        { status: 404 }
      );

    // Optional: auto sign-in after verification
    const jwtPayload = {
      sub: user.id,
      email: user.email,
      nickname: user.nickname,
      tokenVersion: user.tokenVersion,
      mmr: user.mmr,
    };
    const tokenOut = signAuthToken(jwtPayload, 7);

    const res = NextResponse.redirect(`${process.env.APP_URL}`);
    const opts = cookieOptions(7);
    res.cookies.set(opts.name, tokenOut, opts);
    return res;
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: 'Invalid or expired token' },
      { status: 400 }
    );
  }
}
