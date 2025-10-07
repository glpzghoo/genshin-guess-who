'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ChevronsUpDown,
  Check as CheckIcon,
  Trophy,
  Lightbulb,
} from 'lucide-react';
import { elements, weapons } from '@/lib/helper';
import {
  buildDailyHints,
  DailyHint,
  DailyStoredEntry,
  DailyStoredGuess,
  ElementTheme,
  findCharacterById,
  getAllCharacters,
  getDailyKey,
  getDailyShowcaseCharacters,
  getDisplayName,
  getRandomTheme,
  pickDailyCharacter,
} from '@/lib/daily-challenge';
import type { Character } from '@/lib/types';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Badge } from './ui/badge';

const STORAGE_KEY = 'daily-mode-progress';
const STATS_KEY = 'daily-mode-streaks';

type DailyGuess = {
  character: Character;
  correct: boolean;
  timestamp: number;
};

type GuessState = {
  history: DailyGuess[];
  solved: boolean;
  solvedAt: number | null;
};

const initialGuessState: GuessState = {
  history: [],
  solved: false,
  solvedAt: null,
};

type DailyStreakStats = {
  currentStreak: number;
  bestStreak: number;
  lastSolvedKey: string | null;
};

const DEFAULT_STREAK_STATS: DailyStreakStats = {
  currentStreak: 0,
  bestStreak: 0,
  lastSolvedKey: null,
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

const isNextDay = (previousKey: string, currentKey: string): boolean => {
  const previous = getUtcTimestampForKey(previousKey);
  const current = getUtcTimestampForKey(currentKey);
  if (previous === null || current === null) return false;
  const diff = (current - previous) / MILLIS_IN_DAY;
  return Math.round(diff) === 1;
};

const applySolvedStreak = (
  stats: DailyStreakStats,
  solvedKey: string
): DailyStreakStats => {
  if (stats.lastSolvedKey === solvedKey) return stats;
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

const guessVariant = {
  hidden: { opacity: 0, x: 12 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -12 },
};

const hintVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const renderElementWithIcon = (
  element: string,
  iconClass = 'h-4 w-4',
  wrapperClass = ''
) => {
  const meta = elements[element as keyof typeof elements];
  const classes = ['inline-flex items-center gap-2', wrapperClass]
    .filter(Boolean)
    .join(' ');

  if (!meta) {
    return <span className={classes}>{element}</span>;
  }

  return (
    <span className={classes}>
      <img
        src={`/assets/ui/${meta.icon}`}
        alt={`${element} icon`}
        className={iconClass}
        aria-hidden
      />
      <span>{element}</span>
    </span>
  );
};

const renderWeaponWithIcon = (
  weapon: string,
  iconClass = 'h-4 w-4',
  wrapperClass = ''
) => {
  const weaponMeta = weapons[weapon as keyof typeof weapons];
  const classes = ['inline-flex items-center gap-2', wrapperClass]
    .filter(Boolean)
    .join(' ');

  if (!weaponMeta?.icon) {
    return <span className={classes}>{weapon}</span>;
  }

  const WeaponIcon = weaponMeta.icon;

  return (
    <span className={classes}>
      <WeaponIcon className={iconClass} aria-hidden />
      <span>{weapon}</span>
    </span>
  );
};

export function DailyGame() {
  const [solution] = useState<Character>(() => pickDailyCharacter());
  const [dailyKey] = useState(() => getDailyKey());
  const [guessState, setGuessState] = useState<GuessState>(initialGuessState);
  const [selection, setSelection] = useState<Character | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [streakStats, setStreakStats] =
    useState<DailyStreakStats>(DEFAULT_STREAK_STATS);

  const characters = useMemo(() => getAllCharacters(), []);
  const hints = useMemo(() => buildDailyHints(solution), [solution]);
  const theme = useMemo<ElementTheme>(
    () => getRandomTheme(dailyKey),
    [dailyKey]
  );
  const showcase = useMemo(() => getDailyShowcaseCharacters(new Date(), 3), []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? (JSON.parse(raw) as Record<string, DailyStoredEntry>) : {};
      const entry = parsed?.[dailyKey];

      if (entry) {
        const history: DailyGuess[] = [];
        for (const guess of entry.guesses ?? []) {
          const character = findCharacterById(guess.characterId);
          if (!character) continue;
          history.push({
            character,
            correct: guess.correct,
            timestamp: guess.timestamp,
          });
        }

        setGuessState({
          history,
          solved: !!entry.solved,
          solvedAt: entry.solvedAt ?? null,
        });
      }

      const rawStats = window.localStorage.getItem(STATS_KEY);
      let stats = DEFAULT_STREAK_STATS;
      if (rawStats) {
        try {
          const parsedStats = JSON.parse(rawStats) as Partial<DailyStreakStats>;
          stats = {
            currentStreak: Number(parsedStats?.currentStreak) || 0,
            bestStreak: Number(parsedStats?.bestStreak) || 0,
            lastSolvedKey:
              typeof parsedStats?.lastSolvedKey === 'string'
                ? parsedStats.lastSolvedKey
                : null,
          };
        } catch {
          stats = DEFAULT_STREAK_STATS;
        }
      }

      if (entry?.solved) {
        const updated = applySolvedStreak(stats, dailyKey);
        if (updated !== stats) {
          stats = updated;
          try {
            window.localStorage.setItem(STATS_KEY, JSON.stringify(updated));
          } catch {
            // ignore storage failures
          }
        }
      }

      setStreakStats(stats);
    } catch (error) {
      console.warn('Failed to hydrate daily progress', error);
    }
  }, [dailyKey]);

  const persist = useCallback(
    (next: GuessState) => {
      if (typeof window === 'undefined') return;
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        const parsed: Record<string, DailyStoredEntry> = raw
          ? JSON.parse(raw)
          : {};
        const stored: DailyStoredEntry = {
          solved: next.solved,
          solvedAt: next.solved ? (next.solvedAt ?? Date.now()) : undefined,
          guesses: next.history.map<DailyStoredGuess>((guess) => ({
            characterId: String(guess.character.id),
            correct: guess.correct,
            timestamp: guess.timestamp,
          })),
        };
        parsed[dailyKey] = stored;
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      } catch (error) {
        console.warn('Failed to persist daily progress', error);
      }
    },
    [dailyKey]
  );

  const persistStats = useCallback((next: DailyStreakStats) => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(STATS_KEY, JSON.stringify(next));
    } catch (error) {
      console.warn('Failed to persist daily streaks', error);
    }
  }, []);

  const applySolvedForToday = useCallback(() => {
    setStreakStats((prev) => {
      const next = applySolvedStreak(prev, dailyKey);
      if (next === prev) return prev;
      persistStats(next);
      return next;
    });
  }, [dailyKey, persistStats]);

  const submitGuess = useCallback(
    (guess: Character) => {
      if (guessState.solved) return;
      const timestamp = Date.now();
      const correct = guess.id === solution.id;
      setGuessState((prev) => {
        const history = [
          ...prev.history,
          { character: guess, correct, timestamp },
        ];
        const solved = prev.solved || correct;
        const solvedAt = solved
          ? (prev.solvedAt ?? (correct ? timestamp : null))
          : null;
        const nextState: GuessState = {
          history,
          solved,
          solvedAt,
        };
        persist(nextState);
        return nextState;
      });
      if (!correct) {
        setSelection(null);
      } else {
        setSelection(guess);
        applySolvedForToday();
      }
      setPickerOpen(false);
    },
    [applySolvedForToday, guessState.solved, persist, solution.id]
  );

  const failedAttempts = useMemo(
    () => guessState.history.filter((guess) => !guess.correct).length,
    [guessState.history]
  );

  const revealedHints = hints.slice(0, failedAttempts);
  const stillGuessing = !guessState.solved;

  return (
    <div
      className="relative min-h-screen overflow-hidden text-white"
      style={{ backgroundImage: theme.gradient }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_55%)]" />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          background: `radial-gradient(circle at 80% 10%, ${theme.glow}, transparent 55%)`,
        }}
      />

      <div className="relative z-10">
        <div className="container mx-auto max-w-6xl px-4 py-8 space-y-8">
          <div className="flex items-center justify-between">
            <Button
              asChild
              variant="ghost"
              className="gap-2 text-white/80 hover:text-white"
            >
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Back to lobby
              </Link>
            </Button>
            <Badge className="bg-white/10 border border-white/20 text-white uppercase tracking-wide">
              Daily #{dailyKey.replace(/-/g, '')}
            </Badge>
          </div>

          <section className="grid gap-6 rounded-3xl border border-white/12 bg-black/35 px-6 py-8 shadow-2xl backdrop-blur-xl md:grid-cols-[1.15fr,0.85fr] md:items-start xl:grid-cols-[1.25fr,0.95fr]">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
                  <Trophy className="h-4 w-4 text-amber-300" />
                  Daily arena
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="h-9 rounded-full border-white/25 bg-white/10 px-4 text-xs font-medium uppercase tracking-wide text-white/80 hover:bg-white/20 hover:text-white"
                >
                  <Link href="/endless">Play endless mode</Link>
                </Button>
              </div>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                The shared Teyvat mystery
              </h1>
              <p className="text-white/75 text-sm md:text-base max-w-xl">
                Make a call, unlock hints on misses, and see how fast you solve
                it.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <Badge className="bg-white/10 border border-white/20 text-white">
                  Resets at midnight UTC
                </Badge>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-white/60">
                <span>Streaks</span>
                <Badge className="gap-2 border border-white/20 bg-white/10 text-white hover:bg-white/20">
                  <span className="font-semibold">
                    {streakStats.currentStreak} current
                  </span>
                  <span>• Best {streakStats.bestStreak}</span>
                </Badge>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-white/15 bg-black/30 p-6 backdrop-blur space-y-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-wide text-white/60">
                  <span>
                    {guessState.solved ? 'Solved' : 'Make your guess'}
                  </span>
                  <span>{guessState.history.length} attempts</span>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <CharacterCombobox
                    characters={characters}
                    selection={selection}
                    onSelect={setSelection}
                    onSubmitGuess={submitGuess}
                    open={pickerOpen}
                    onOpenChange={setPickerOpen}
                    disabled={!stillGuessing}
                  />
                </div>

                {!stillGuessing && (
                  <div className="rounded-xl border border-emerald-400/40 bg-emerald-500/15 px-4 py-3 text-sm text-emerald-100">
                    Solved in {guessState.history.length} attempt
                    {guessState.history.length === 1 ? '' : 's'}. Come back
                    tomorrow for a new challenge.
                  </div>
                )}
              </div>

              <div className="rounded-3xl border border-white/12 bg-black/35 p-6 backdrop-blur space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Unlocked hints</h2>
                  <Badge
                    className="border"
                    style={{
                      backgroundColor: theme.badge,
                      color: theme.badgeText,
                      borderColor: theme.accent,
                    }}
                  >
                    {revealedHints.length} / {hints.length}
                  </Badge>
                </div>
                <AnimatePresence initial={false} mode="popLayout">
                  {revealedHints.length === 0 ? (
                    <motion.div
                      className="rounded-xl border border-white/12 bg-white/8 p-4 text-sm text-white/70"
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 1 }}
                    >
                      No hints yet. Make a guess to unlock your first clue.
                    </motion.div>
                  ) : (
                    <div className="grid gap-3">
                      {revealedHints.map((hint) => (
                        <motion.div
                          key={hint.id}
                          variants={hintVariant}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          transition={{ duration: 0.25 }}
                          className="rounded-xl border border-white/12 bg-white/8 p-4"
                        >
                          <div className="text-xs uppercase tracking-wide text-white/55">
                            {hint.label}
                          </div>
                          <div className="mt-2 text-sm font-semibold whitespace-pre-line leading-6 text-white">
                            {hint.id === 'element'
                              ? renderElementWithIcon(hint.value)
                              : hint.id === 'weapon'
                              ? renderWeaponWithIcon(hint.value)
                              : hint.value}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </AnimatePresence>
              </div>

              <div className="rounded-3xl border border-white/12 bg-black/35 p-6 backdrop-blur space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Guess timeline</h2>
                  <p className="text-xs text-white/60">
                    Track your attempts and status
                  </p>
                </div>
                <AnimatePresence initial={false} mode="popLayout">
                  {guessState.history.length === 0 ? (
                    <motion.div
                      className="rounded-xl border border-dashed border-white/15 bg-white/8 p-4 text-sm text-white/70"
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 1 }}
                    >
                      No guesses yet. Time to make your first move!
                    </motion.div>
                  ) : (
                    <div className="space-y-3">
                      {guessState.history.map((guess, index) => (
                        <motion.div
                          key={`${guess.character.id}-${guess.timestamp}-${index}`}
                          variants={guessVariant}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className={`flex items-center justify-between rounded-xl border p-4 text-sm ${
                            guess.correct
                              ? 'border-emerald-400/60 bg-emerald-500/15 text-emerald-100'
                              : 'border-white/12 bg-white/8 text-white'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 overflow-hidden rounded-xl border border-white/15 bg-black/30">
                              <img
                                src={`/assets/ui/${guess.character.icon}.png`}
                                alt={guess.character.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="text-base font-semibold text-white">
                                {getDisplayName(guess.character)}
                              </div>
                              <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-white/70">
                                {renderElementWithIcon(
                                  guess.character.element,
                                  'h-3.5 w-3.5'
                                )}
                                {renderWeaponWithIcon(
                                  guess.character.weaponType,
                                  'h-3.5 w-3.5'
                                )}
                              </div>
                            </div>
                          </div>
                          <Badge
                            className={`flex items-center gap-1 ${
                              guess.correct
                                ? 'bg-emerald-500/20 border border-emerald-400/40 text-emerald-200'
                                : 'bg-white/10 border border-white/15 text-white/80'
                            }`}
                          >
                            <CheckIcon className="h-3.5 w-3.5" />
                            {guess.correct ? 'Correct' : 'Incorrect'}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </AnimatePresence>

                {guessState.history.some((g) => g.correct) && (
                  <div className="rounded-xl border border-white/12 bg-white/8 p-4 text-sm text-white/80">
                    <div className="font-semibold text-white">
                      Solution revealed: {getDisplayName(solution)}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-white/60">
                      {renderElementWithIcon(solution.element, 'h-3.5 w-3.5')}
                      {renderWeaponWithIcon(solution.weaponType, 'h-3.5 w-3.5')}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function CharacterCombobox({
  characters,
  selection,
  onSelect,
  onSubmitGuess,
  open,
  onOpenChange,
  disabled,
}: {
  characters: Character[];
  selection: Character | null;
  onSelect: (character: Character | null) => void;
  onSubmitGuess: (character: Character) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  disabled?: boolean;
}) {
  const displayValue = selection
    ? getDisplayName(selection)
    : 'Search by name, element or region';

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-12 w-full justify-between rounded-2xl border border-white/20 bg-white/10 text-left text-sm text-white/90 shadow-lg transition hover:bg-white/20 "
          disabled={disabled}
        >
          <span className="truncate">{displayValue}</span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-60" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 rounded-2xl border border-white/10 bg-slate-950/95 p-0 text-white shadow-xl">
        <Command>
          <CommandInput
            placeholder="Type to search..."
            className="border-b border-white/10 bg-transparent text-sm placeholder:text-white/50"
          />
          <CommandList>
            <CommandEmpty>No characters found.</CommandEmpty>
            <CommandGroup>
              {characters.map((character) => (
                <CommandItem
                  key={character.id}
                  value={String(character.id)}
                  keywords={[
                    character.name,
                    character.element,
                    character.weaponType,
                    character.region,
                  ]}
                  onSelect={() => {
                    if (disabled) return;
                    onSelect(character);
                    onOpenChange(false);
                    onSubmitGuess(character);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-white/10">
                      <img
                        src={`/assets/ui/${character.icon}.png`}
                        alt={character.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">
                        {getDisplayName(character)}
                      </span>
                      <span className="text-xs text-white/60">
                        {character.element} • {character.weaponType}
                      </span>
                    </div>
                    {selection?.id === character.id ? (
                      <CheckIcon className="ml-auto h-4 w-4 text-emerald-400" />
                    ) : null}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
