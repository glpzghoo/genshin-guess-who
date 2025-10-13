'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wand2, Trophy, CalendarDays } from 'lucide-react';

import {
  createStoredEntry,
  ENDLESS_MODE_STORAGE_KEY,
  DEFAULT_GENSHINDLE_STATS,
  getGenshindleKey,
  getRandomGenshindleDate,
  GENSHINDLE_STATS_KEY,
  initialState,
  MAX_ATTEMPTS,
  parseStoredEntry,
  parseGenshindleStats,
  pickGenshindleCharacter,
  STORAGE_KEY,
  HARD_MODE_STORAGE_KEY,
  isNextDayKey,
  type GenshindleState,
  type GenshindleStoredEntry,
  type GenshindleStats,
} from '../lib/helpers';
import {
  ElementTheme,
  getAllCharacters,
  getDisplayName,
  getRandomTheme,
} from '@/lib/daily-challenge';
import type { Character } from '@/lib/types';
import { CharacterCombobox } from '@/app/daily/components/character-combobox';
import { GuessErrorNotice } from '@/components/ResultMessage';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { GenshindleBoard } from './Board';
import { OutcomeNotice } from './OutcomeNotice';
import { AttemptsBar } from '../lib/HelperComponents';
import { StatsTracker } from './StatsTracker';

type GameMode = 'daily' | 'endless';

type GameConfig = {
  date: Date;
  key: string;
  solution: Character;
};

const HASH_DATE_PATTERN = /^\d{8}$/;

const formatHashFromDate = (date: Date): string => {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  return `${year}${month}${day}`;
};

const toLocalMidnight = (d: Date) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate());

const parseDailyKeyToLocalDate = (key: string): Date | null => {
  const [yearStr, monthStr, dayStr] = key.split('-');
  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);
  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day) ||
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31
  ) {
    return null;
  }
  return new Date(year, month - 1, day);
};

const parseHashDate = (rawHash: string): Date | null => {
  const sanitized = rawHash.startsWith('#')
    ? rawHash.slice(1).trim()
    : rawHash.trim();
  if (!HASH_DATE_PATTERN.test(sanitized)) {
    return null;
  }

  const year = Number(sanitized.slice(0, 4));
  const month = Number(sanitized.slice(4, 6));
  const day = Number(sanitized.slice(6, 8));
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return null;
  }

  const utcTimestamp = Date.UTC(year, month - 1, day);
  const candidate = new Date(utcTimestamp);

  if (
    candidate.getUTCFullYear() !== year ||
    candidate.getUTCMonth() + 1 !== month ||
    candidate.getUTCDate() !== day
  ) {
    return null;
  }

  return candidate;
};

const readHashDate = (): Date | null => {
  if (typeof window === 'undefined') return null;
  return parseHashDate(window.location.hash ?? '');
};

const createGameConfig = (
  mode: GameMode,
  overrideDate?: Date | null
): GameConfig => {
  const date =
    mode === 'endless'
      ? getRandomGenshindleDate()
      : (overrideDate ?? new Date());
  const key = getGenshindleKey(date);
  return {
    date,
    key,
    solution: pickGenshindleCharacter(date),
  };
};

export function GenshindleGame() {
  const [hashOverrideDate, setHashOverrideDate] = useState<Date | null>(null);
  const initialConfigRef = useRef<GameConfig | null>(null);
  if (!initialConfigRef.current) {
    initialConfigRef.current = createGameConfig('daily', hashOverrideDate);
  }

  const [referenceDate, setReferenceDate] = useState<Date>(
    initialConfigRef.current.date
  );
  const [gameKey, setGameKey] = useState(initialConfigRef.current.key);
  const [solution, setSolution] = useState<Character>(
    initialConfigRef.current.solution
  );
  const [theme, setTheme] = useState<ElementTheme>(() =>
    getRandomTheme(
      `genshindle-${initialConfigRef.current!.key}-${initialConfigRef.current!.solution.id}`
    )
  );

  const [state, setState] = useState<GenshindleState>(initialState);
  const [selection, setSelection] = useState<Character | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [hardMode, setHardMode] = useState(false);
  const [endlessMode, setEndlessMode] = useState(false);
  const [stats, setStats] = useState<GenshindleStats>(DEFAULT_GENSHINDLE_STATS);
  const [playedKeys, setPlayedKeys] = useState<string[]>([]);

  const characters = useMemo(() => getAllCharacters(), []);
  const todayLocalDate = useMemo(() => toLocalMidnight(new Date()), []);
  const showTodayMonth = useCallback(
    () => setCalendarMonth(todayLocalDate),
    [todayLocalDate]
  );
  const [localSelected, setLocalSelected] = useState<Date>(() =>
    toLocalMidnight(referenceDate)
  );
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const applyHashDate = () => {
      const next = readHashDate();
      setHashOverrideDate((prev) => {
        if (prev === next) {
          return prev;
        }
        if (prev && next && getGenshindleKey(prev) === getGenshindleKey(next)) {
          return prev;
        }
        return next;
      });
    };

    applyHashDate();
    window.addEventListener('hashchange', applyHashDate);
    return () => {
      window.removeEventListener('hashchange', applyHashDate);
    };
  }, []);

  const resetGame = useCallback(
    (mode: GameMode, overrideDate?: Date | null) => {
      const config = createGameConfig(mode, overrideDate);
      setReferenceDate(config.date);
      setGameKey(config.key);
      setSolution(config.solution);
      setState({
        guesses: [],
        solved: false,
        solvedAt: null,
      });
      setSelection(null);
      setFeedbackMessage(null);
      setPickerOpen(false);
    },
    []
  );

  const calendarSelectedDate = useMemo(() => {
    // if referenceDate is a UTC canonical date, convert to local midnight for UI
    return toLocalMidnight(referenceDate);
  }, [referenceDate]);

  const [calendarMonth, setCalendarMonth] = useState<Date>(
    () => calendarSelectedDate
  );

  useEffect(() => {
    setLocalSelected(toLocalMidnight(referenceDate));
  }, [referenceDate]);

  useEffect(() => {
    setCalendarMonth(localSelected);
  }, [localSelected]);

  // ---- Played dates (LOCAL for UI) ----
  const playedDates = useMemo(() => {
    const seen = new Set<string>();
    const dates: Date[] = [];
    for (const key of playedKeys) {
      const parsed = parseDailyKeyToLocalDate(key); // should return a local Date
      if (!parsed) continue;
      const y = parsed.getFullYear();
      const m = parsed.getMonth();
      const d = parsed.getDate();
      const signature = `${y}-${m}-${d}`;
      if (seen.has(signature)) continue;
      seen.add(signature);
      dates.push(new Date(y, m, d)); // local midnight
    }
    return dates;
  }, [playedKeys]);

  const calendarButtonLabel = useMemo(() => {
    return new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(calendarSelectedDate);
  }, [calendarSelectedDate]);

  const playedModifierClass =
    "relative after:absolute after:left-1/2 after:bottom-1 after:h-1.5 after:w-1.5 after:-translate-x-1/2 after:rounded-full after:bg-emerald-400 after:content-['']";

  const handleDateSelect = useCallback(
    (date: Date | undefined) => {
      if (!date) return;

      // 1) update UI immediately with LOCAL date
      const local = toLocalMidnight(date);
      setLocalSelected(local);
      setCalendarMonth(local);

      // 2) compute UTC canonical for hash/storage
      const utc = new Date(
        Date.UTC(local.getFullYear(), local.getMonth(), local.getDate())
      );
      setHashOverrideDate(utc);

      // 3) update URL hash with UTC canonical
      if (typeof window !== 'undefined') {
        const nextHash = `#${formatHashFromDate(utc)}`;
        const target = `${window.location.pathname}${window.location.search}${nextHash}`;
        window.history.replaceState(null, '', target);
      }
    },
    [setHashOverrideDate]
  );

  const selectTodayDate = useCallback(
    () => handleDateSelect(todayLocalDate),
    [handleDateSelect, todayLocalDate]
  );

  const persistStats = useCallback((next: GenshindleStats) => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(GENSHINDLE_STATS_KEY, JSON.stringify(next));
    } catch (error) {
      console.warn('Failed to persist genshindle streak stats', error);
    }
  }, []);

  const updateStats = useCallback(
    (updater: (prev: GenshindleStats) => GenshindleStats) => {
      setStats((prev) => {
        const next = updater(prev);
        if (next === prev) {
          return prev;
        }
        persistStats(next);
        return next;
      });
    },
    [persistStats]
  );

  const applyDailyWin = useCallback(
    (dailyKey: string) => {
      updateStats((prev) => {
        const difficulty = hardMode ? 'hard' : 'normal';
        const bucket = prev.daily[difficulty];
        if (bucket.lastSolvedKey === dailyKey) {
          return prev;
        }
        const consecutive =
          bucket.lastSolvedKey !== null &&
          isNextDayKey(bucket.lastSolvedKey, dailyKey);
        const nextCurrent = consecutive ? bucket.current + 1 : 1;
        const nextBucket = {
          current: nextCurrent,
          best: Math.max(bucket.best, nextCurrent),
          lastSolvedKey: dailyKey,
        };
        if (
          nextBucket.current === bucket.current &&
          nextBucket.best === bucket.best &&
          nextBucket.lastSolvedKey === bucket.lastSolvedKey
        ) {
          return prev;
        }
        return {
          ...prev,
          daily: {
            ...prev.daily,
            [difficulty]: nextBucket,
          },
        };
      });
    },
    [hardMode, updateStats]
  );

  const applyDailyFailure = useCallback(() => {
    updateStats((prev) => {
      const difficulty = hardMode ? 'hard' : 'normal';
      const bucket = prev.daily[difficulty];
      if (bucket.current === 0) {
        return prev;
      }
      return {
        ...prev,
        daily: {
          ...prev.daily,
          [difficulty]: {
            ...bucket,
            current: 0,
          },
        },
      };
    });
  }, [hardMode, updateStats]);

  const applyEndlessWin = useCallback(() => {
    updateStats((prev) => {
      const difficulty = hardMode ? 'hard' : 'normal';
      const bucket = prev.endless[difficulty];
      const nextCurrent = bucket.current + 1;
      return {
        ...prev,
        endless: {
          ...prev.endless,
          [difficulty]: {
            current: nextCurrent,
            best: Math.max(bucket.best, nextCurrent),
            lastSolvedKey: null,
          },
        },
      };
    });
  }, [hardMode, updateStats]);

  const applyEndlessFailure = useCallback(() => {
    updateStats((prev) => {
      const difficulty = hardMode ? 'hard' : 'normal';
      const bucket = prev.endless[difficulty];
      if (bucket.current === 0) {
        return prev;
      }
      return {
        ...prev,
        endless: {
          ...prev.endless,
          [difficulty]: {
            ...bucket,
            current: 0,
          },
        },
      };
    });
  }, [hardMode, updateStats]);

  useEffect(() => {
    const prefix = endlessMode ? 'genshindle-endless' : 'genshindle';
    setTheme(getRandomTheme(`${prefix}-${gameKey}-${solution.id}`));
  }, [endlessMode, gameKey, solution.id]);

  useEffect(() => {
    if (typeof window === 'undefined' || endlessMode) return;

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const parsed: Record<string, GenshindleStoredEntry> = raw
        ? (JSON.parse(raw) as Record<string, GenshindleStoredEntry>)
        : {};
      setPlayedKeys(Object.keys(parsed));
      const entry = parsed[gameKey];
      const hydrated = parseStoredEntry(entry);
      setState(hydrated);
    } catch (error) {
      console.warn('Failed to hydrate genshindle progress', error);
    }
  }, [endlessMode, gameKey]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = window.localStorage.getItem(HARD_MODE_STORAGE_KEY);
      if (stored !== null) {
        setHardMode(stored === 'true');
      }
    } catch (error) {
      console.warn('Failed to hydrate genshindle hard mode preference', error);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = window.localStorage.getItem(ENDLESS_MODE_STORAGE_KEY);
      if (stored !== null) {
        setEndlessMode(stored === 'true');
      }
    } catch (error) {
      console.warn(
        'Failed to hydrate genshindle endless mode preference',
        error
      );
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = window.localStorage.getItem(GENSHINDLE_STATS_KEY);
      if (raw) {
        setStats(parseGenshindleStats(raw));
      }
    } catch (error) {
      console.warn('Failed to hydrate genshindle streak stats', error);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(
        HARD_MODE_STORAGE_KEY,
        hardMode ? 'true' : 'false'
      );
    } catch (error) {
      console.warn('Failed to persist genshindle hard mode preference', error);
    }
  }, [hardMode]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(
        ENDLESS_MODE_STORAGE_KEY,
        endlessMode ? 'true' : 'false'
      );
    } catch (error) {
      console.warn(
        'Failed to persist genshindle endless mode preference',
        error
      );
    }
  }, [endlessMode]);

  useEffect(() => {
    if (endlessMode) {
      resetGame('endless');
    } else {
      resetGame('daily', hashOverrideDate);
    }
  }, [endlessMode, hashOverrideDate, resetGame]);

  const persist = useCallback(
    (next: GenshindleState) => {
      if (typeof window === 'undefined' || endlessMode) return;
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        const parsed: Record<string, GenshindleStoredEntry> = raw
          ? (JSON.parse(raw) as Record<string, GenshindleStoredEntry>)
          : {};
        parsed[gameKey] = createStoredEntry(next);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
        setPlayedKeys(Object.keys(parsed));
      } catch (error) {
        console.warn('Failed to persist genshindle progress', error);
      }
    },
    [endlessMode, gameKey, setPlayedKeys]
  );

  const stillGuessing = !state.solved && state.guesses.length < MAX_ATTEMPTS;

  const submitGuess = useCallback(
    (guess: Character) => {
      if (!stillGuessing) return;
      if (state.guesses.some((entry) => entry.character.id === guess.id)) {
        setFeedbackMessage(`You already guessed ${getDisplayName(guess)}`);
        setPickerOpen(false);
        return;
      }

      setFeedbackMessage(null);
      const timestamp = Date.now();
      const correct = guess.id === solution.id;
      let recordedWin = false;
      let recordedFailure = false;

      setState((prev) => {
        if (prev.solved || prev.guesses.length >= MAX_ATTEMPTS) {
          return prev;
        }
        const nextGuesses = [...prev.guesses, { character: guess, timestamp }];
        const solved = prev.solved || correct;
        if (!prev.solved && solved) {
          recordedWin = true;
        }
        const exhausted = !solved && nextGuesses.length >= MAX_ATTEMPTS;
        if (exhausted && !prev.solved) {
          recordedFailure = true;
        }
        const solvedAt = solved
          ? (prev.solvedAt ?? (correct ? timestamp : null))
          : prev.solvedAt;
        const nextState: GenshindleState = {
          guesses: nextGuesses,
          solved,
          solvedAt,
        };
        persist(nextState);
        return nextState;
      });

      if (recordedWin) {
        if (endlessMode) {
          applyEndlessWin();
        } else if (hashOverrideDate === null) {
          applyDailyWin(gameKey);
        }
      } else if (recordedFailure) {
        if (endlessMode) {
          applyEndlessFailure();
        } else if (hashOverrideDate === null) {
          applyDailyFailure();
        }
      }

      if (correct) setSelection(guess);
      else setSelection(null);
      setPickerOpen(false);
    },
    [
      applyDailyFailure,
      applyDailyWin,
      applyEndlessFailure,
      applyEndlessWin,
      endlessMode,
      hashOverrideDate,
      gameKey,
      persist,
      solution.id,
      state.guesses,
      stillGuessing,
    ]
  );

  const attemptsUsed = state.guesses.length;
  const isOutOfAttempts = !state.solved && attemptsUsed >= MAX_ATTEMPTS;
  const toggleHardMode = useCallback(() => setHardMode((prev) => !prev), []);
  const disableHardMode = useCallback(() => setHardMode(false), []);
  const toggleEndlessMode = useCallback(
    () => setEndlessMode((prev) => !prev),
    []
  );
  const modeChipLabel = endlessMode ? 'Endless mode' : 'Genshindle mode';
  const puzzleBadgeLabel = endlessMode ? 'Endless puzzle' : `Genshindle`;

  return (
    <div
      className="relative min-h-screen overflow-hidden text-white"
      style={{ backgroundImage: theme.gradient }}
    >
      {/* Soft vignette + animated grain for depth */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.12)_0%,transparent_60%)]" />
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          background: `radial-gradient(circle at 80% 10%, ${theme.glow}, transparent 55%)`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:url('/assets/ui/noise.png')] [background-size:300px] mix-blend-soft-light" />

      <div className="relative z-10">
        <div className="container mx-auto max-w-6xl space-y-8 px-4 py-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Badge className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/90">
              {puzzleBadgeLabel}
            </Badge>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-white/70">
              <span>Puzzle date:</span>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 rounded-full border-white/20 bg-white/10 px-3 py-1 text-white/80 hover:bg-white/20 hover:text-white"
                  >
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                    <span className="normal-case tracking-normal">
                      {calendarButtonLabel}
                    </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto border border-white/20 bg-black/90 p-2 shadow-2xl backdrop-blur"
                  align="end"
                >
                  <div className="flex items-center justify-between gap-2 px-2 pb-2 pt-1">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="rounded-full border border-transparent bg-white/5 text-white/80 hover:bg-white/15 hover:text-white"
                      onClick={showTodayMonth}
                    >
                      Show today
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="rounded-full border-white/30 bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                      onClick={selectTodayDate}
                    >
                      Today
                    </Button>
                  </div>
                  <Calendar
                    mode="single"
                    selected={localSelected}
                    month={calendarMonth}
                    onMonthChange={setCalendarMonth}
                    onSelect={handleDateSelect}
                    initialFocus
                    modifiers={{ played: playedDates }}
                    modifiersClassNames={{ played: playedModifierClass }}
                    fromYear={2020}
                    toYear={new Date().getUTCFullYear() + 1}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <section className="grid gap-6 rounded-3xl border border-white/12 bg-black/35 px-6 py-8 shadow-2xl backdrop-blur-xl md:grid-cols-[1.15fr,0.85fr] md:items-start xl:grid-cols-[1.25fr,0.95fr]">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
                  <Wand2 className="h-4 w-4 text-emerald-300" />
                  {modeChipLabel}
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={toggleHardMode}
                    className={`h-9 rounded-full border-white/25 px-4 text-xs font-medium uppercase tracking-wide ${
                      hardMode
                        ? 'bg-white/80 text-black hover:bg-white'
                        : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {hardMode ? 'Hard mode on' : 'Hard mode off'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={toggleEndlessMode}
                    className={`h-9 rounded-full border-white/25 px-4 text-xs font-medium uppercase tracking-wide ${
                      endlessMode
                        ? 'bg-white/80 text-black hover:bg-white'
                        : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {endlessMode ? 'Endless mode on' : 'Endless mode off'}
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-9 rounded-full border-white/25 bg-white/10 px-4 text-xs font-medium uppercase tracking-wide text-white/80 hover:bg-white/20 hover:text-white"
                  >
                    <Link href="/daily">Daily mode - GW</Link>
                  </Button>
                </div>
              </div>
            </div>
            <StatsTracker
              stats={stats}
              hardMode={hardMode}
              endlessMode={endlessMode}
            />
            <div className="space-y-6">
              <div className="space-y-4 rounded-2xl border border-white/12 bg-black/30 p-6 backdrop-blur">
                <div className="flex items-center justify-between text-xs uppercase tracking-wide text-white/70">
                  <span>
                    {state.solved
                      ? 'Solved'
                      : isOutOfAttempts
                        ? 'Round complete'
                        : 'Make your guess'}
                  </span>
                  <span>
                    {attemptsUsed} / {MAX_ATTEMPTS} attempts
                  </span>
                </div>
                <AttemptsBar used={attemptsUsed} total={MAX_ATTEMPTS} />

                <CharacterCombobox
                  characters={characters}
                  selection={selection}
                  onSelect={setSelection}
                  onSubmitGuess={submitGuess}
                  open={pickerOpen}
                  onOpenChange={setPickerOpen}
                  disabled={!stillGuessing}
                />

                <GuessErrorNotice message={feedbackMessage} />

                <OutcomeNotice state={state} solution={solution} />
              </div>

              <div className="space-y-4 rounded-3xl border border-white/12 bg-black/35 p-6 backdrop-blur">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Attempts</h2>
                  <Badge className="flex items-center gap-1 border border-white/15 bg-white/12 text-xs uppercase tracking-wide text-white/90">
                    <Trophy className="h-4 w-4" aria-hidden />
                    {state.solved
                      ? 'Victory'
                      : `${MAX_ATTEMPTS - attemptsUsed} tries left`}
                  </Badge>
                </div>
                <GenshindleBoard
                  guesses={state.guesses}
                  solution={solution}
                  hardMode={hardMode}
                  onDisableHardMode={disableHardMode}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
