import crypto from 'crypto';

const COOKIE_NAME = 'admin_session';
const DEFAULT_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

const getSecret = (): string => {
  // Prefer explicit secret if provided; otherwise fall back to PASSWORD hash
  const fromEnv = process.env.ADMIN_SESSION_SECRET || process.env.PASSWORD || '';
  return fromEnv || 'dev-fallback-secret';
};

const hmacSign = (payload: string): string => {
  const h = crypto.createHmac('sha256', getSecret());
  h.update(payload);
  return h.digest('hex');
};

export const createAdminSessionToken = (
  admin: string,
  maxAgeSeconds: number = DEFAULT_MAX_AGE_SECONDS
): string => {
  const now = Math.floor(Date.now() / 1000);
  const exp = now + maxAgeSeconds;
  const body = JSON.stringify({ a: admin, iat: now, exp });
  const b64 = Buffer.from(body).toString('base64url');
  const sig = hmacSign(b64);
  return `${b64}.${sig}`;
};

export const verifyAdminSessionToken = (token?: string): boolean => {
  if (!token || typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [b64, sig] = parts;
  const expected = hmacSign(b64);
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return false;
  try {
    const decoded = JSON.parse(Buffer.from(b64, 'base64url').toString('utf8')) as {
      a?: string;
      iat?: number;
      exp?: number;
    };
    if (!decoded || !decoded.a || !decoded.exp) return false;
    const now = Math.floor(Date.now() / 1000);
    return decoded.exp > now;
  } catch {
    return false;
  }
};

export const getAdminCookieName = (): string => COOKIE_NAME;

