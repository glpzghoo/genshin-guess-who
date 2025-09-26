// rating.ts
export function expectedScore(rA: number, rB: number) {
  return 1 / (1 + Math.pow(10, (rB - rA) / 400));
}

// K grows with gap but is clamped
function kFactor(base = 24, gap = 0) {
  const bonus = Math.min(2.0, 1 + gap / 400); // +100 MMR gap => +0.25x ; +400 => +1x (2x total), clamp 2x
  return Math.round(base * bonus);
}

export function settleMatch(
  pA: { mmr: number },
  pB: { mmr: number },
  winner: 'A' | 'B'
) {
  const gap = Math.abs(pA.mmr - pB.mmr);
  const kA = kFactor(24, gap);
  const kB = kFactor(24, gap);

  const eA = expectedScore(pA.mmr, pB.mmr);
  const eB = expectedScore(pB.mmr, pA.mmr);

  const sA = winner === 'A' ? 1 : 0;
  const sB = 1 - sA;

  const deltaA = Math.round(kA * (sA - eA));
  const deltaB = Math.round(kB * (sB - eB));

  return { deltaA, deltaB };
}
