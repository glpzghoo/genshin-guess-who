import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { db } from '@/lib/db/client';
import { eq } from 'drizzle-orm';
import { users } from '@/lib/db/schema';
import { signAuthToken } from '@/lib/auth/jwt';

export async function GET(req: NextRequest) {
  try {
    const oldToken = req.cookies.get('auth')?.value;
    if (!oldToken) {
      return NextResponse.json({ ok: false });
    }
    const decoded = jwt.verify(oldToken, process.env.JWT_SECRET!) as {
      sub: string;
      guest?: boolean;
      nickname: string;
    };

    if (decoded.guest) {
      const guest_user = {
        id: decoded.sub,
        nickname: decoded.nickname,
        adventureRank: 0,
        wins: 0,
        losses: 0,
        exp: 0,
        guest: decoded.guest,
      };
      return NextResponse.json({
        ok: true,
        user: guest_user,
        oldToken,
        guest: decoded.guest,
      });
    }

    const user = await db.query.users.findFirst({
      where: eq(users.id, decoded.sub),
    });

    if (!user) {
      return NextResponse.json({ ok: false, message: 'user not found' });
    }

    const payload = {
      sub: user.id,
      email: user.email,
      nickname: user.nickname,
      tokenVersion: user.tokenVersion,
      mmr: user.mmr,
    };
    const token = signAuthToken(payload, 7);

    return NextResponse.json({ ok: true, user, token });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, err });
  }
}
