import { NextResponse } from 'next/server';
import { db } from '@/lib/db/client';
import { users } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { loginSchema } from '@/lib/validation/auth';
import { verifyPassword } from '@/lib/auth/password';
import { signAuthToken, cookieOptions } from '@/lib/auth/jwt';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { email, password } = parsed.data;
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (!user)
      return NextResponse.json(
        { ok: false, error: 'Invalid credentials' },
        { status: 401 }
      );
    if (!user.emailVerified) {
      return NextResponse.json(
        { ok: false, error: 'Please verify your email first' },
        { status: 403 }
      );
    }

    const valid = await verifyPassword(password, user.passwordHash);
    if (!valid)
      return NextResponse.json(
        { ok: false, error: 'Invalid credentials' },
        { status: 401 }
      );

    const payload = {
      sub: user.id,
      email: user.email,
      nickname: user.nickname,
      tokenVersion: user.tokenVersion,
      mmr: user.mmr,
    };
    const token = signAuthToken(payload, 7);

    const res = NextResponse.json({ ok: true });
    const opts = cookieOptions(7);
    res.cookies.set(opts.name, token, opts);
    return res;
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: 'Internal error' },
      { status: 500 }
    );
  }
}
