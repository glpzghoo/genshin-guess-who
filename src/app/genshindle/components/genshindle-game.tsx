'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wand2, Trophy } from 'lucide-react';

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

const createGameConfig = (mode: GameMode): GameConfig => {
  const date = mode === 'endless' ? getRandomGenshindleDate() : new Date();
  const key = getGenshindleKey(date);
  return {
    date,
    key,
    solution: pickGenshindleCharacter(date),
  };
};

export function GenshindleGame() {
  const initialConfigRef = useRef<GameConfig | null>(null);
  if (!initialConfigRef.current) {
    initialConfigRef.current = createGameConfig('daily');
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

  const characters = useMemo(() => getAllCharacters(), []);

  const resetGame = useCallback((mode: GameMode) => {
    const config = createGameConfig(mode);
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
  }, []);

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
      const parsed = raw
        ? (JSON.parse(raw) as Record<string, GenshindleStoredEntry>)
        : undefined;
      const entry = parsed?.[gameKey];
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
    resetGame(endlessMode ? 'endless' : 'daily');
  }, [endlessMode, resetGame]);

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
      } catch (error) {
        console.warn('Failed to persist genshindle progress', error);
      }
    },
    [endlessMode, gameKey]
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
        } else {
          applyDailyWin(gameKey);
        }
      } else if (recordedFailure) {
        if (endlessMode) {
          applyEndlessFailure();
        } else {
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
  const puzzleBadgeLabel = endlessMode
    ? 'Endless puzzle'
    : `Genshindle #${gameKey.replace(/-/g, '')}`;
  const puzzleDateLabel = referenceDate.toISOString().slice(0, 10);

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
            <span className="text-xs uppercase tracking-wide text-white/70">
              Puzzle date: {puzzleDateLabel}
            </span>
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
                    <Link href="/daily">Daily mode</Link>
                  </Button>
                </div>
              </div>
            </div>
            <StatsTracker stats={stats} hardMode={hardMode} endlessMode={endlessMode} />
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
                  <h2 className="text-lg font-semibold">Guess grid</h2>
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
