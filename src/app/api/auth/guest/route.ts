import { NextRequest, NextResponse } from 'next/server';
import { signAuthToken, cookieOptions } from '@/lib/auth/jwt';
import { randomUUID } from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const guestId = `guest_${randomUUID()}`;
    const nickname = `Guest-${guestId.slice(-4)}`;
    const existingToken = req.cookies.get('auth')?.value;
    if (existingToken) {
      return NextResponse.json({ ok: true });
    }
    const token = signAuthToken(
      {
        sub: guestId,
        nickname,
        tokenVersion: 0,
        guest: true,
        mmr: 0,
      },
      3
    ); // guest cookie lasts 3 days

    const res = NextResponse.json({ ok: true });
    const opts = cookieOptions(3);
    res.cookies.set(opts.name, token, opts);
    return res;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false });
  }
}
