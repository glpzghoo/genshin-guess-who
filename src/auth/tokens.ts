import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET!;

export type AccessClaims = {
  sub: string;
  nick: string;
  ver: number;
  guest: boolean;
  mmr: number;
};
export function signAccess(c: AccessClaims, ttlSec = 15 * 60) {
  return jwt.sign(c, JWT_SECRET, { expiresIn: ttlSec });
}
export function verifyAccess(token: string): AccessClaims {
  return jwt.verify(token, JWT_SECRET) as AccessClaims;
}
