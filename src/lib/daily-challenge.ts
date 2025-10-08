import { useMemo } from 'react';
import * as characterExports from '@/lib/character_db/characters';
import type { Character } from '@/lib/types';

export type DailyHint = {
  id: string;
  label: string;
  value: string;
};

export type DailyStoredGuess = {
  characterId: string;
  correct: boolean;
  timestamp: number;
};

export type DailyStoredEntry = {
  solved: boolean;
  solvedAt?: number;
  guesses: DailyStoredGuess[];
};

export const MAX_FAILED_ATTEMPTS = 7;

export type ElementTheme = {
  gradient: string;
  glow: string;
  accent: string;
  surface: string;
  badge: string;
  badgeText: string;
  button: string;
};

const compareCharacterNames = (a: Character, b: Character): number => {
  const nameComparison = a.name.localeCompare(b.name, 'en', {
    sensitivity: 'base',
  });
  if (nameComparison !== 0) return nameComparison;
  return String(a.id).localeCompare(String(b.id), 'en', { numeric: true });
};

const allCharacters: Character[] = Object.values(characterExports).sort(
  compareCharacterNames
);

const characterMap = new Map<string, Character>(
  allCharacters.map((ch) => [String(ch.id), ch])
);

const genderByBodyType: Record<string, string> = {
  MALE: 'Male',
  BOY: 'Male',
  MAN: 'Male',
  LADY: 'Female',
  GIRL: 'Female',
  FEMALE: 'Female',
  WOMAN: 'Female',
  LOLI: 'Female',
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
  MAINACTOR: 'Traveler',
};

const formatWithFallback = (
  source: string,
  dictionary: Record<string, string>
) => {
  if (!source) return 'Unknown';
  if (dictionary[source]) return dictionary[source];

  const normalized = source.replace(/[_-]/g, ' ').toLowerCase();
  return normalized.replace(/\b\w/g, (token) => token.toUpperCase());
};

const formatBirthday = ([month, day]: number[]): string | null => {
  if (!month || !day) return null;
  try {
    const date = new Date(Date.UTC(2000, month - 1, day));
    return new Intl.DateTimeFormat('en', {
      month: 'long',
      day: 'numeric',
    }).format(date);
  } catch {
    return null;
  }
};

const formatRelease = (release: number): string | null => {
  if (!release) return null;
  try {
    const date = new Date(release * 1000);
    return new Intl.DateTimeFormat('en', {
      month: 'long',
      year: 'numeric',
    }).format(date);
  } catch {
    return null;
  }
};

const pickVoiceLine = (
  character: Character
): { title: string; text: string } | null => {
  const quotes = character?.VL?.quotes;
  if (!quotes) return null;

  const sortedKeys = Object.keys(quotes).sort();
  for (const key of sortedKeys) {
    const q = quotes[key];
    if (q?.text) {
      const cleanText = q.text.replace(/\\n/g, '\n').trim();
      if (cleanText.length === 0) continue;
      return {
        title: q.title || 'Voice Line',
        text: cleanText,
      };
    }
  }
  return null;
};

const dailyCharacters = allCharacters.filter((character) => character?.name);

const stringHash = (input: string): number => {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
};

export const getAllCharacters = (): Character[] => dailyCharacters;

export const findCharacterById = (id: string | number): Character | undefined =>
  characterMap.get(String(id));

export const getDisplayName = (character: Character): string => {
  if (character.name === 'Traveler') {
    return `${character.name} (${character.element})`;
  }
  return character.name;
};

export const getDailyKey = (dateInput: Date = new Date()): string => {
  const year = dateInput.getUTCFullYear();
  const month = dateInput.getUTCMonth();
  const day = dateInput.getUTCDate();
  return new Date(Date.UTC(year, month, day)).toISOString().slice(0, 10);
};

export const pickDailyCharacter = (dateInput: Date = new Date()): Character => {
  const key = getDailyKey(dateInput);
  const hash = stringHash(`genshin-${key}`);
  const index = hash % dailyCharacters.length;
  return dailyCharacters[index];
};

export const buildDailyHints = (character: Character): DailyHint[] => {
  const hints: DailyHint[] = [
    {
      id: 'element',
      label: 'Element',
      value: character.element,
    },
    {
      id: 'weapon',
      label: 'Weapon',
      value: character.weaponType,
    },
    {
      id: 'region',
      label: 'Region',
      value: formatWithFallback(character.region, regionLabels),
    },
  ];

  const gender = genderByBodyType[character.bodyType] ?? 'Unknown';
  hints.push({
    id: 'gender',
    label: 'Gender',
    value: gender,
  });

  hints.push({
    id: 'rarity',
    label: 'Rarity',
    value: `${character.rank}-Star`,
  });

  const birthday = formatBirthday(character.birthday ?? []);
  if (birthday) {
    hints.push({
      id: 'birthday',
      label: 'Birthday',
      value: birthday,
    });
  }

  const release = formatRelease(character.release ?? 0);
  if (release) {
    hints.push({
      id: 'release',
      label: 'First Released',
      value: release,
    });
  }

  const voiceLine = pickVoiceLine(character);
  if (voiceLine) {
    hints.push({
      id: 'voice-line',
      label: `Voice Line – ${voiceLine.title}`,
      value: voiceLine.text,
    });
  }

  const vagueHints: DailyHint[] = [];
  if (character.region !== 'FONTAINE') {
    vagueHints.push({
      id: 'not-fontaine',
      label: 'Vague Hint',
      value: 'this character is not from fontaine',
    });
  }
  if (character.element !== 'Pyro') {
    vagueHints.push({
      id: 'not-pyro',
      label: 'Vague Hint',
      value: 'this character is not pyro',
    });
  }
  if (character.weaponType !== 'Sword') {
    vagueHints.push({
      id: 'not-sword',
      label: 'Vague Hint',
      value: 'this character is not sword',
    });
  }

  hints.push(...vagueHints);

  if (hints.length > 1) {
    let seed = stringHash(`hints-${character.id}`);
    for (let i = hints.length - 1; i > 0; i -= 1) {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      const swapIndex = seed % (i + 1);
      if (swapIndex !== i) {
        [hints[i], hints[swapIndex]] = [hints[swapIndex], hints[i]];
      }
    }
  }

  return hints;
};

export const useDailyHints = (character: Character): DailyHint[] =>
  useMemo(() => buildDailyHints(character), [character]);

export const filterDependentHints = (hints: DailyHint[]): DailyHint[] => {
  let hasElement = false;
  let hasWeapon = false;
  let hasRegion = false;

  const filtered: DailyHint[] = [];

  for (const hint of hints) {
    if (hint.id === 'element') {
      hasElement = true;
      filtered.push(hint);
      continue;
    }
    if (hint.id === 'weapon') {
      hasWeapon = true;
      filtered.push(hint);
      continue;
    }
    if (hint.id === 'region') {
      hasRegion = true;
      filtered.push(hint);
      continue;
    }

    if (hint.id === 'not-pyro' && hasElement) continue;
    if (hint.id === 'not-sword' && hasWeapon) continue;
    if (hint.id === 'not-fontaine' && hasRegion) continue;

    filtered.push(hint);
  }

  return filtered;
};

const elementThemes: Record<Character['element'], ElementTheme> = {
  Pyro: {
    gradient:
      'linear-gradient(135deg, rgba(251, 146, 60, 0.35) 0%, rgba(248, 113, 113, 0.28) 45%, rgba(244, 63, 94, 0.25) 100%)',
    glow: 'rgba(249, 115, 22, 0.45)',
    accent: '#fb923c',
    surface: 'rgba(15, 23, 42, 0.65)',
    badge: 'rgba(251, 146, 60, 0.22)',
    badgeText: '#fde68a',
    button: 'linear-gradient(120deg, #fb923c 0%, #f97316 45%, #ec4899 100%)',
  },
  Hydro: {
    gradient:
      'linear-gradient(140deg, rgba(56, 189, 248, 0.32) 0%, rgba(59, 130, 246, 0.26) 50%, rgba(186, 230, 253, 0.18) 100%)',
    glow: 'rgba(56, 189, 248, 0.45)',
    accent: '#38bdf8',
    surface: 'rgba(12, 20, 35, 0.68)',
    badge: 'rgba(56, 189, 248, 0.22)',
    badgeText: '#bae6fd',
    button: 'linear-gradient(120deg, #38bdf8 0%, #6366f1 50%, #0ea5e9 100%)',
  },
  Anemo: {
    gradient:
      'linear-gradient(135deg, rgba(45, 212, 191, 0.35) 0%, rgba(59, 130, 246, 0.22) 50%, rgba(20, 184, 166, 0.25) 100%)',
    glow: 'rgba(16, 185, 129, 0.45)',
    accent: '#34d399',
    surface: 'rgba(9, 28, 25, 0.7)',
    badge: 'rgba(45, 212, 191, 0.22)',
    badgeText: '#bbf7d0',
    button: 'linear-gradient(120deg, #34d399 0%, #22d3ee 50%, #6366f1 100%)',
  },
  Electro: {
    gradient:
      'linear-gradient(135deg, rgba(168, 85, 247, 0.38) 0%, rgba(236, 72, 153, 0.24) 55%, rgba(59, 130, 246, 0.26) 100%)',
    glow: 'rgba(168, 85, 247, 0.45)',
    accent: '#c084fc',
    surface: 'rgba(24, 16, 36, 0.72)',
    badge: 'rgba(192, 132, 252, 0.22)',
    badgeText: '#f5d0fe',
    button: 'linear-gradient(120deg, #c084fc 0%, #8b5cf6 50%, #ec4899 100%)',
  },
  Geo: {
    gradient:
      'linear-gradient(135deg, rgba(253, 186, 116, 0.32) 0%, rgba(234, 179, 8, 0.24) 55%, rgba(148, 163, 184, 0.2) 100%)',
    glow: 'rgba(234, 179, 8, 0.38)',
    accent: '#fbbf24',
    surface: 'rgba(39, 26, 5, 0.7)',
    badge: 'rgba(250, 204, 21, 0.22)',
    badgeText: '#fef3c7',
    button: 'linear-gradient(120deg, #fbbf24 0%, #f97316 45%, #facc15 100%)',
  },
  Cryo: {
    gradient:
      'linear-gradient(140deg, rgba(96, 165, 250, 0.28) 0%, rgba(103, 232, 249, 0.24) 45%, rgba(191, 219, 254, 0.2) 100%)',
    glow: 'rgba(125, 211, 252, 0.45)',
    accent: '#93c5fd',
    surface: 'rgba(12, 22, 40, 0.7)',
    badge: 'rgba(147, 197, 253, 0.22)',
    badgeText: '#e0f2fe',
    button: 'linear-gradient(120deg, #93c5fd 0%, #0ea5e9 50%, #6366f1 100%)',
  },
  Dendro: {
    gradient:
      'linear-gradient(135deg, rgba(132, 204, 22, 0.35) 0%, rgba(34, 197, 94, 0.24) 50%, rgba(134, 239, 172, 0.22) 100%)',
    glow: 'rgba(74, 222, 128, 0.4)',
    accent: '#86efac',
    surface: 'rgba(10, 26, 14, 0.72)',
    badge: 'rgba(74, 222, 128, 0.22)',
    badgeText: '#dcfce7',
    button: 'linear-gradient(120deg, #86efac 0%, #22c55e 45%, #14b8a6 100%)',
  },
};

const fallbackTheme: ElementTheme = {
  gradient:
    'linear-gradient(135deg, rgba(148, 163, 184, 0.25) 0%, rgba(79, 70, 229, 0.22) 55%, rgba(30, 64, 175, 0.25) 100%)',
  glow: 'rgba(79, 70, 229, 0.35)',
  accent: '#6366f1',
  surface: 'rgba(15, 23, 42, 0.7)',
  badge: 'rgba(99, 102, 241, 0.2)',
  badgeText: '#c7d2fe',
  button: 'linear-gradient(120deg, #6366f1 0%, #8b5cf6 50%, #22d3ee 100%)',
};

const themePalette: ElementTheme[] = [
  ...Object.values(elementThemes),
  fallbackTheme,
];

export const getElementTheme = (character: Character): ElementTheme =>
  elementThemes[character.element] ?? fallbackTheme;

export const getRandomTheme = (seed?: string | number): ElementTheme => {
  if (!themePalette.length) return fallbackTheme;

  if (seed !== undefined) {
    const numericSeed =
      typeof seed === 'number' ? seed : stringHash(String(seed));
    const index = Math.abs(numericSeed) % themePalette.length;
    return themePalette[index];
  }

  const index = Math.floor(Math.random() * themePalette.length);
  return themePalette[index];
};

export const getDailyShowcaseCharacters = (
  dateInput: Date = new Date(),
  count = 3
): Character[] => {
  const key = getDailyKey(dateInput);
  const solutionId = pickDailyCharacter(dateInput).id;
  const pool = dailyCharacters.filter((ch) => ch.id !== solutionId);
  const chosen: Character[] = [];

  if (!pool.length) return chosen;

  let seed = stringHash(`showcase-${key}`);
  const lcg = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed;
  };

  const available = [...pool];
  while (chosen.length < count && available.length) {
    const idx = lcg() % available.length;
    const [next] = available.splice(idx, 1);
    if (next) chosen.push(next);
  }

  return chosen;
};

export const getRandomCharacter = (
  exclude: Array<string | number> | Set<string | number> = []
): Character => {
  const excludeSet = Array.isArray(exclude)
    ? new Set(exclude.map(String))
    : new Set(Array.from(exclude).map(String));

  const pool = excludeSet.size
    ? dailyCharacters.filter(
        (character) => !excludeSet.has(String(character.id))
      )
    : dailyCharacters;

  if (!pool.length) {
    return dailyCharacters[Math.floor(Math.random() * dailyCharacters.length)];
  }

  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
};

export const shuffleCharacters = (list: Character[]): Character[] => {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
