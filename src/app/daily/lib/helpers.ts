import {
  DailyHint,
  DailyStoredEntry,
  DailyStoredGuess,
  filterDependentHints,
  findCharacterById,
} from '@/lib/daily-challenge';
import type { Character } from '@/lib/types';

export const STORAGE_KEY = 'daily-mode-progress';
export const STATS_KEY = 'daily-mode-streaks';

export type DailyGuess = {
  character: Character;
  correct: boolean;
  timestamp: number;
};

export type GuessState = {
  history: DailyGuess[];
  solved: boolean;
  solvedAt: number | null;
  revealedHints: DailyHint[];
};

export type DailyStreakStats = {
  currentStreak: number;
  bestStreak: number;
  lastSolvedKey: string | null;
};

export const initialGuessState: GuessState = {
  history: [],
  solved: false,
  solvedAt: null,
  revealedHints: [],
};

export const DEFAULT_STREAK_STATS: DailyStreakStats = {
  currentStreak: 0,
  bestStreak: 0,
  lastSolvedKey: null,
};

const MILLIS_IN_DAY = 24 * 60 * 60 * 1000;

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

export const getUtcTimestampForKey = (key: string): number | null => {
  const [year, month, day] = key.split('-').map((part) => Number(part));
  if (
    Number.isNaN(year) ||
    Number.isNaN(month) ||
    Number.isNaN(day) ||
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31
  ) {
    return null;
  }
  return Date.UTC(year, month - 1, day);
};

export const isNextDay = (previousKey: string, currentKey: string): boolean => {
  const previous = getUtcTimestampForKey(previousKey);
  const current = getUtcTimestampForKey(currentKey);
  if (previous === null || current === null) {
    return false;
  }
  const diff = (current - previous) / MILLIS_IN_DAY;
  return Math.round(diff) === 1;
};

export const applySolvedStreak = (
  stats: DailyStreakStats,
  solvedKey: string
): DailyStreakStats => {
  if (stats.lastSolvedKey === solvedKey) {
    return stats;
  }
  const consecutive =
    stats.lastSolvedKey !== null && isNextDay(stats.lastSolvedKey, solvedKey);
  const currentStreak = consecutive ? stats.currentStreak + 1 : 1;
  const bestStreak = Math.max(stats.bestStreak, currentStreak);
  return {
    currentStreak,
    bestStreak,
    lastSolvedKey: solvedKey,
  };
};

export const parseDailyStats = (raw: string | null): DailyStreakStats => {
  if (!raw) {
    return DEFAULT_STREAK_STATS;
  }
  try {
    const parsed = JSON.parse(raw) as Partial<DailyStreakStats>;
    return {
      currentStreak: Number(parsed?.currentStreak) || 0,
      bestStreak: Number(parsed?.bestStreak) || 0,
      lastSolvedKey:
        typeof parsed?.lastSolvedKey === 'string' ? parsed.lastSolvedKey : null,
    };
  } catch {
    return DEFAULT_STREAK_STATS;
  }
};

export const parseDailyEntry = (
  entry: DailyStoredEntry | undefined,
  hints: DailyHint[]
): GuessState => {
  if (!entry) {
    return initialGuessState;
  }

  const history: DailyGuess[] = [];
  if (Array.isArray(entry.guesses)) {
    for (const guess of entry.guesses) {
      const character = findCharacterById(guess.characterId);
      if (!character) {
        continue;
      }
      history.push({
        character,
        correct: Boolean(guess.correct),
        timestamp:
          typeof guess.timestamp === 'number'
            ? guess.timestamp
            : Number(guess.timestamp) || Date.now(),
      });
    }
  }

  let revealedHints: DailyHint[] = [];
  if (Array.isArray(entry.revealedHints)) {
    revealedHints = entry.revealedHints.filter(
      (hint): hint is DailyHint =>
        !!hint &&
        typeof hint.id === 'string' &&
        typeof hint.label === 'string' &&
        typeof hint.value === 'string' &&
        (typeof hint.audioSrc === 'undefined' ||
          typeof hint.audioSrc === 'string')
    );
  }

  if (revealedHints.length === 0 && history.some((guess) => !guess.correct)) {
    const failed = history.filter((guess) => !guess.correct).length;
    revealedHints = filterDependentHints(hints.slice(0, failed));
  }

  return {
    history,
    solved: Boolean(entry.solved),
    solvedAt:
      typeof entry.solvedAt === 'number'
        ? entry.solvedAt
        : (entry.solvedAt ?? null),
    revealedHints,
  };
};

export const createStoredEntry = (state: GuessState): DailyStoredEntry => ({
  solved: state.solved,
  solvedAt: state.solved ? (state.solvedAt ?? Date.now()) : undefined,
  guesses: state.history.map<DailyStoredGuess>((guess) => ({
    characterId: String(guess.character.id),
    correct: guess.correct,
    timestamp: guess.timestamp,
  })),
  revealedHints: state.revealedHints,
});
