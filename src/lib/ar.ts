// lib/ar.ts
export type ARProgress = {
  level: number; // derived AR from exp
  percent: number; // 0..100 within current level
  current: number; // xp within current level
  needed: number; // xp to level up (current level span)
  label: string; // e.g., "250 XP to AR 46"
  mismatched?: boolean; // stored adventureRank !== derived level
};

const MAX_AR = 60;
const clamp = (n: number, min = 0, max = 100) =>
  Math.min(max, Math.max(min, n));

/**
 * XP needed to go from level L -> L+1 (tweak to your taste).
 * Gentle early, steeper later.
 */
export function xpNeededForLevel(L: number): number {
  return 200 + 10 * L + 2 * L * L; // e.g., L=1 -> 212, L=45 -> 4090
}

/** Total XP required to *start* a given level. */
function cumulativeToStart(level: number): number {
  let sum = 0;
  for (let l = 1; l < level; l++) sum += xpNeededForLevel(l);
  return sum;
}

/** Given total exp, derive current level and bracket [start, end). */
export function deriveLevelFromExp(exp: number) {
  if (exp <= 0) {
    const start = 0;
    const end = xpNeededForLevel(1);
    return { level: 1, start, end };
  }

  let start = 0;
  for (let L = 1; L < MAX_AR; L++) {
    const span = xpNeededForLevel(L);
    const end = start + span;
    if (exp < end) return { level: L, start, end };
    start = end;
  }

  // Maxed out
  const startAtMax = cumulativeToStart(MAX_AR);
  return { level: MAX_AR, start: startAtMax, end: Infinity };
}

/**
 * Main entry for your schema: takes stored adventureRank + total exp,
 * computes progress to next rank.
 */
export function calcARProgressFromSchema(input: {
  adventureRank: number | null | undefined;
  exp: number | null | undefined;
}): ARProgress {
  const totalExp = Math.max(0, Number(input.exp ?? 0));
  const storedAR = Math.max(1, Number(input.adventureRank ?? 1));

  const derived = deriveLevelFromExp(totalExp);
  const level = derived.level;

  const span = isFinite(derived.end) ? derived.end - derived.start : 1;
  const current = clamp(totalExp - derived.start, 0, span);
  const percent = clamp((current / span) * 100);
  const remain = Math.max(span - current, 0);

  const nextAR = Math.min(level + 1, MAX_AR);
  return {
    level,
    percent,
    current,
    needed: span,
    label: isFinite(derived.end) ? `${remain} XP to AR ${nextAR}` : `Max AR`,
    mismatched: storedAR !== level,
  };
}
