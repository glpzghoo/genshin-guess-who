import type { Character } from '@/lib/types';

export const STATS_KEY = 'endless-mode-stats';
export const MAX_ATTEMPTS = 7;

export type EndlessGuess = {
  character: Character;
  correct: boolean;
  timestamp: number;
};

export type EndlessStats = {
  totalSolved: number;
  totalGuesses: number;
  currentStreak: number;
  bestStreak: number;
};

export const DEFAULT_STATS: EndlessStats = {
  totalSolved: 0,
  totalGuesses: 0,
  currentStreak: 0,
  bestStreak: 0,
};

export const guessVariant = {
  hidden: { opacity: 0, x: 12 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -12 },
};

export const hintVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export const parseEndlessStats = (raw: string | null): EndlessStats => {
  if (!raw) {
    return DEFAULT_STATS;
  }
  try {
    const parsed = JSON.parse(raw) as Partial<EndlessStats>;
    return {
      totalSolved: Number(parsed?.totalSolved) || 0,
      totalGuesses: Number(parsed?.totalGuesses) || 0,
      currentStreak: Number(parsed?.currentStreak) || 0,
      bestStreak: Number(parsed?.bestStreak) || 0,
    };
  } catch {
    return DEFAULT_STATS;
  }
};
