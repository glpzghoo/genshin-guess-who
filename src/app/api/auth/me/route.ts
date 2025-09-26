import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { AUTH_COOKIE_NAME, verifyAuthToken } from '@/lib/auth/jwt';

export async function GET() {
  try {
    const token = (await cookies()).get(AUTH_COOKIE_NAME)?.value;
    if (!token)
      return NextResponse.json({ ok: false, user: null }, { status: 200 });
    const payload = verifyAuthToken(token);
    return NextResponse.json({ ok: true, user: payload });
  } catch {
    return NextResponse.json({ ok: false, user: null }, { status: 200 });
  }
}
