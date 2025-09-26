import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET!;
const COOKIE_NAME = 'auth';

export type AuthPayload = {
  sub: string; // user id or guest id
  email?: string;
  nickname: string;
  tokenVersion: number;
  guest?: boolean;
  mmr?: number;
};

export function signAuthToken(payload: AuthPayload, days = 7) {
  return jwt.sign(payload, SECRET, { expiresIn: `${days}d` });
}

export function verifyAuthToken<T = AuthPayload>(token: string): T {
  return jwt.verify(token, SECRET) as T;
}

export function cookieOptions(maxAgeDays = 7) {
  return {
    name: COOKIE_NAME,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge: 60 * 60 * 24 * maxAgeDays,
  };
}

export const AUTH_COOKIE_NAME = COOKIE_NAME;
