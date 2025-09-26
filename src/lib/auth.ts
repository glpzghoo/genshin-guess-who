import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

export type SessionPayload = {
  sub: string; // user id
  email?: string;
  nickname?: string;
  tokenVersion?: number; // optional
  iat?: number;
  exp?: number;
};

export async function getSession(): Promise<SessionPayload | null> {
  const raw = (await cookies()).get('app_session')?.value;
  if (!raw) return null;
  try {
    const { payload } = await jwtVerify(raw, SECRET);
    return payload as SessionPayload;
  } catch {
    return null;
  }
}
