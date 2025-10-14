import {
  findCharacterById,
  getAllCharacters,
  getDailyKey,
} from '@/lib/daily-challenge';
import type { Character } from '@/lib/types';

export const STORAGE_KEY = 'genshindle-mode-progress';
export const HARD_MODE_STORAGE_KEY = 'genshindle-hard-mode';
export const ENDLESS_MODE_STORAGE_KEY = 'genshindle-endless-mode';
export const GENSHINDLE_STATS_KEY = 'genshindle-stats';
export const MAX_ATTEMPTS = 5;

export type GenshindleGuess = {
  character: Character;
  timestamp: number;
};

export type GenshindleState = {
  guesses: GenshindleGuess[];
  solved: boolean;
  solvedAt: number | null;
};

export const initialState: GenshindleState = {
  guesses: [],
  solved: false,
  solvedAt: null,
};

export type GenshindleDifficulty = 'normal' | 'hard';

export type GenshindleStreakRecord = {
  current: number;
  best: number;
  lastSolvedKey: string | null;
};

export type GenshindleModeStats = Record<
  GenshindleDifficulty,
  GenshindleStreakRecord
>;

export type GenshindleStats = {
  daily: GenshindleModeStats;
  endless: GenshindleModeStats;
};

const makeDefaultRecord = (): GenshindleStreakRecord => ({
  current: 0,
  best: 0,
  lastSolvedKey: null,
});

export const DEFAULT_GENSHINDLE_STATS: GenshindleStats = {
  daily: {
    normal: makeDefaultRecord(),
    hard: makeDefaultRecord(),
  },
  endless: {
    normal: makeDefaultRecord(),
    hard: makeDefaultRecord(),
  },
};

const coerceRecord = (
  maybeRecord?: Partial<GenshindleStreakRecord> | null
): GenshindleStreakRecord => ({
  current: Number(maybeRecord?.current) || 0,
  best: Number(maybeRecord?.best) || 0,
  lastSolvedKey:
    typeof maybeRecord?.lastSolvedKey === 'string'
      ? maybeRecord.lastSolvedKey
      : null,
});

const coerceModeStats = (
  maybeMode?:
    | Partial<GenshindleModeStats>
    | Partial<GenshindleStreakRecord>
    | null
): GenshindleModeStats => {
  const hasDifficultyBuckets =
    typeof maybeMode === 'object' &&
    maybeMode !== null &&
    ('normal' in maybeMode || 'hard' in maybeMode);

  if (hasDifficultyBuckets) {
    const mode = maybeMode as Partial<GenshindleModeStats>;
    return {
      normal: coerceRecord(mode.normal),
      hard: coerceRecord(mode.hard),
    };
  }

  const record = coerceRecord(
    maybeMode as Partial<GenshindleStreakRecord> | null | undefined
  );
  return {
    normal: { ...record },
    hard: { ...record },
  };
};

export const parseGenshindleStats = (raw: string | null): GenshindleStats => {
  if (!raw) {
    return DEFAULT_GENSHINDLE_STATS;
  }
  try {
    const parsed = JSON.parse(raw) as Partial<GenshindleStats> & {
      daily?: unknown;
      endless?: unknown;
    };
    return {
      daily: coerceModeStats(parsed?.daily as any),
      endless: coerceModeStats(parsed?.endless as any),
    };
  } catch {
    return DEFAULT_GENSHINDLE_STATS;
  }
};

export type GenshindleStoredGuess = {
  characterId: string;
  timestamp: number;
};

export type GenshindleStoredEntry = {
  solved: boolean;
  solvedAt?: number;
  guesses: GenshindleStoredGuess[];
  difficulty?: GenshindleDifficulty;
};

export type ParsedGenshindleEntry = {
  state: GenshindleState;
  difficulty: GenshindleDifficulty | null;
};

export type GenshindleCellId =
  | 'element'
  | 'weapon'
  | 'region'
  | 'body-type'
  | 'rarity'
  | 'release';

export type GenshindleCellStatus = 'correct' | 'incorrect';

export type GenshindleCell = {
  id: GenshindleCellId;
  label: string;
  value: string;
  status: GenshindleCellStatus;
  hint?: string;
};

const regionLabels: Record<string, string> = {
  MONDSTADT: 'Mondstadt',
  LIYUE: 'Liyue',
  INAZUMA: 'Inazuma',
  SUMERU: 'Sumeru',
  FONTAINE: 'Fontaine',
  Snezhnaya: 'Snezhnaya',
  NATLAN: 'Natlan',
  'NOD-KRAI': 'Nod-Krai',
  RANGER: 'Outlander',
  OMNI_SCOURGE: 'Omni Scourge',
  OTHER: 'Other',
  MAINACTOR: 'Traveler',
};

const genderByBodyType: Record<string, string> = {
  MALE: 'Male',
  BOY: 'Boy',
  MAN: 'Man',
  LADY: 'Lady',
  GIRL: 'Girl',
  FEMALE: 'Female',
  WOMAN: 'Woman',
  LOLI: 'Kid (female)',
};

const formatWithFallback = (
  source: string,
  dictionary: Record<string, string>
): string => {
  if (!source) return 'Unknown';
  if (dictionary[source]) return dictionary[source];

  const normalized = source.replace(/[_-]/g, ' ').toLowerCase();
  return normalized.replace(/\b\w/g, (token) => token.toUpperCase());
};

const formatRegion = (region: string): string =>
  formatWithFallback(region, regionLabels);

const formatBodyType = (bodyType: string): string =>
  genderByBodyType[bodyType] ?? formatWithFallback(bodyType, {});

const formatRarity = (rank: number | null): string => {
  if (!rank || rank <= 0) return 'Unknown';
  return `${rank}-Star`;
};

const normalizeVersion = (version: unknown): number | null => {
  if (typeof version === 'number' && Number.isFinite(version)) {
    return version;
  }
  const parsed = Number(version);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
};

const formatVersion = (version: number | null): string => {
  if (version === null) return 'Unknown';
  return `Version ${
    Number.isInteger(version) ? version.toFixed(1) : version.toString()
  }`;
};

export const evaluateGuess = (
  guess: Character,
  solution: Character
): GenshindleCell[] => {
  const cells: GenshindleCell[] = [];

  cells.push({
    id: 'element',
    label: 'Element',
    value: guess.element,
    status: guess.element === solution.element ? 'correct' : 'incorrect',
  });

  cells.push({
    id: 'weapon',
    label: 'Weapon',
    value: guess.weaponType,
    status: guess.weaponType === solution.weaponType ? 'correct' : 'incorrect',
  });

  const guessRegion = formatRegion(String(guess.region ?? ''));
  const solutionRegion = formatRegion(String(solution.region ?? ''));
  cells.push({
    id: 'region',
    label: 'Region',
    value: guessRegion,
    status: guessRegion === solutionRegion ? 'correct' : 'incorrect',
  });

  const guessBody = formatBodyType(String(guess.bodyType ?? ''));
  const solutionBody = formatBodyType(String(solution.bodyType ?? ''));
  cells.push({
    id: 'body-type',
    label: 'Body Type',
    value: guessBody,
    status: guessBody === solutionBody ? 'correct' : 'incorrect',
  });

  const guessRank =
    typeof guess.rank === 'number' && Number.isFinite(guess.rank)
      ? guess.rank
      : Number(guess.rank) || null;
  const solutionRank =
    typeof solution.rank === 'number' && Number.isFinite(solution.rank)
      ? solution.rank
      : Number(solution.rank) || null;

  let rarityStatus: GenshindleCellStatus;
  let rarityHint: string | undefined;
  if (!guessRank || !solutionRank) {
    rarityStatus = 'incorrect';
    rarityHint = 'Rarity data unavailable.';
  } else if (guessRank === solutionRank) {
    rarityStatus = 'correct';
  } else if (guessRank > solutionRank) {
    rarityStatus = 'incorrect';
    rarityHint = 'Try a lower rarity character.';
  } else {
    rarityStatus = 'incorrect';
    rarityHint = 'Try a higher rarity character.';
  }
  cells.push({
    id: 'rarity',
    label: 'Rarity',
    value: formatRarity(guessRank),
    status: rarityStatus,
    hint: rarityHint,
  });

  const guessVersion = normalizeVersion(guess.VersionReleased);
  const solutionVersion = normalizeVersion(solution.VersionReleased);
  let versionStatus: GenshindleCellStatus;
  let versionHint: string | undefined;
  if (guessVersion === null || solutionVersion === null) {
    versionStatus = 'incorrect';
    versionHint = 'Version info unavailable.';
  } else if (guessVersion === solutionVersion) {
    versionStatus = 'correct';
  } else if (guessVersion > solutionVersion) {
    versionStatus = 'incorrect';
    versionHint = 'Solution released earlier.';
  } else {
    versionStatus = 'incorrect';
    versionHint = 'Solution released later.';
  }
  cells.push({
    id: 'release',
    label: 'Release',
    value: formatVersion(guessVersion),
    status: versionStatus,
    hint: versionHint,
  });

  return cells;
};

export const parseStoredEntry = (
  entry: GenshindleStoredEntry | undefined
): ParsedGenshindleEntry => {
  if (!entry) {
    return {
      state: initialState,
      difficulty: null,
    };
  }

  const guesses: GenshindleGuess[] = [];
  if (Array.isArray(entry.guesses)) {
    for (const stored of entry.guesses) {
      const character = findCharacterById(stored.characterId);
      if (!character) continue;
      guesses.push({
        character,
        timestamp:
          typeof stored.timestamp === 'number'
            ? stored.timestamp
            : Number(stored.timestamp) || Date.now(),
      });
    }
  }

  const difficulty: GenshindleDifficulty | null =
    entry.difficulty === 'hard'
      ? 'hard'
      : entry.difficulty === 'normal'
        ? 'normal'
        : null;

  const state: GenshindleState = {
    guesses,
    solved: Boolean(entry.solved),
    solvedAt:
      typeof entry.solvedAt === 'number'
        ? entry.solvedAt
        : (entry.solvedAt ?? null),
  };

  return {
    state,
    difficulty,
  };
};

export const createStoredEntry = (
  state: GenshindleState,
  difficulty: GenshindleDifficulty = 'normal'
): GenshindleStoredEntry => ({
  solved: state.solved,
  solvedAt: state.solved ? (state.solvedAt ?? Date.now()) : undefined,
  guesses: state.guesses.map<GenshindleStoredGuess>((guess) => ({
    characterId: String(guess.character.id),
    timestamp: guess.timestamp,
  })),
  difficulty,
});

const stringHash = (input: string): number => {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
};

export const getGenshindleKey = (dateInput: Date = new Date()): string =>
  getDailyKey(dateInput);

export const getRandomGenshindleDate = (
  startYear = 2000,
  endDate: Date = new Date()
): Date => {
  const normalizedEnd = Date.UTC(
    endDate.getUTCFullYear(),
    endDate.getUTCMonth(),
    endDate.getUTCDate()
  );
  const start = Date.UTC(startYear, 0, 1);
  if (normalizedEnd <= start) {
    return new Date(start);
  }
  const dayMs = 24 * 60 * 60 * 1000;
  const totalDays = Math.floor((normalizedEnd - start) / dayMs);
  const offsetDays = Math.floor(Math.random() * (totalDays + 1));
  return new Date(start + offsetDays * dayMs);
};

const MILLIS_IN_DAY = 24 * 60 * 60 * 1000;

const getUtcTimestampForKey = (key: string): number | null => {
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

export const isNextDayKey = (
  previousKey: string | null,
  currentKey: string
): boolean => {
  if (!previousKey) {
    return false;
  }
  const previous = getUtcTimestampForKey(previousKey);
  const current = getUtcTimestampForKey(currentKey);
  if (previous === null || current === null) {
    return false;
  }
  const diff = (current - previous) / MILLIS_IN_DAY;
  return Math.round(diff) === 1;
};

export const pickGenshindleCharacter = (
  dateInput: Date = new Date()
): Character => {
  const all = getAllCharacters();
  const key = getGenshindleKey(dateInput);
  const hash = stringHash(`genshindle-${key}`);
  return all[hash % all.length];
};

export const badgeStyles: Record<GenshindleCell['status'], string> = {
  correct:
    'border-sky-400/50 bg-sky-500/15 text-sky-100 shadow-[0_0_22px_rgba(56,189,248,0.28)]',
  incorrect:
    'border-amber-400/50 bg-amber-500/15 text-amber-100 shadow-[0_0_22px_rgba(251,191,36,0.28)]',
};

export const wrapper = ({ won }: { won: boolean }): string =>
  'rounded-2xl border p-4 sm:p-5 shadow-2xl backdrop-blur ' +
  (won
    ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-100'
    : 'border-rose-400/30 bg-rose-500/10 text-rose-100');
