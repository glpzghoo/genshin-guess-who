import { NextResponse } from 'next/server';
import { db } from '@/lib/db/client';
import { users } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { registerSchema } from '@/lib/validation/auth';
import { hashPassword } from '@/lib/auth/password';
import { sendVerificationEmail } from '@/lib/mail/transport';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = registerSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.flatten() },
        { status: 400 }
      );
    }
    const { email, nickname, password } = parsed.data;

    // Exists?
    const [existing] = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    if (existing) {
      return NextResponse.json(
        { ok: false, error: 'Email already registered' },
        { status: 409 }
      );
    }

    const passwordHash = await hashPassword(password);

    const [created] = await db
      .insert(users)
      .values({
        email,
        nickname,
        passwordHash,
      })
      .returning();

    // Create a short-lived email verification token
    const token = jwt.sign(
      { sub: created.id, purpose: 'email-verify' },
      process.env.JWT_SECRET!,
      { expiresIn: '1d' }
    );

    await sendVerificationEmail(email, token);

    return NextResponse.json({ ok: true, message: 'Verification email sent' });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: 'Internal error' },
      { status: 500 }
    );
  }
}
