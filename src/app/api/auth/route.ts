import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { db } from '@/lib/db/client';
import { eq } from 'drizzle-orm';
import { users } from '@/lib/db/schema';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('auth')?.value;
    if (!token) {
      return NextResponse.json({ ok: false });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
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
      };
      return NextResponse.json({
        ok: true,
        user: guest_user,
        token,
        guest: decoded.guest,
      });
    }

    const user = await db.query.users.findFirst({
      where: eq(users.id, decoded.sub),
    });

    if (!user) {
      return NextResponse.json({ ok: false, message: 'user not found' });
    }

    return NextResponse.json({ ok: true, user, token });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, err });
  }
}
