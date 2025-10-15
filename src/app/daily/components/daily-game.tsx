'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Check as CheckIcon, Trophy } from 'lucide-react';
import {
  buildDailyHints,
  ElementTheme,
  filterDependentHints,
  getAllCharacters,
  getDailyKey,
  getDisplayName,
  MAX_DAILY_ATTEMPTS,
  getRandomTheme,
  pickDailyCharacter,
} from '@/lib/daily-challenge';
import type { DailyStoredEntry } from '@/lib/daily-challenge';
import type { Character } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { VoiceLineHint } from '@/components/VoiceLineHint';
import { useVoiceLinePlayer } from '@/lib/hooks/use-voice-line-player';
import {
  applySolvedStreak,
  createStoredEntry,
  DailyStreakStats,
  DEFAULT_STREAK_STATS,
  guessVariant,
  GuessState,
  hintVariant,
  initialGuessState,
  parseDailyEntry,
  parseDailyStats,
  STATS_KEY,
  STORAGE_KEY,
} from '../lib/helpers';
import { CharacterCombobox } from './character-combobox';
import { renderElementWithIcon, renderWeaponWithIcon } from '@/lib/helpers';
import OutcomeNotice, { GuessErrorNotice } from '@/components/ResultMessage';

export function DailyGame() {
  const [solution] = useState<Character>(() => pickDailyCharacter());
  const [dailyKey] = useState(() => getDailyKey());
  const [guessState, setGuessState] = useState<GuessState>(initialGuessState);
  const [selection, setSelection] = useState<Character | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [streakStats, setStreakStats] =
    useState<DailyStreakStats>(DEFAULT_STREAK_STATS);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const characters = useMemo(() => getAllCharacters(), []);
  const hints = useMemo(() => buildDailyHints(solution), [solution]);
  const availableHintCount = useMemo(
    () => filterDependentHints(hints).length,
    [hints]
  );
  const theme = useMemo<ElementTheme>(
    () => getRandomTheme(dailyKey),
    [dailyKey]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const parsedEntries = raw
        ? (JSON.parse(raw) as Record<string, DailyStoredEntry>)
        : undefined;
      const entry = parsedEntries?.[dailyKey];
      const hydrated = parseDailyEntry(entry, hints);
      setGuessState(hydrated);

      const rawStats = window.localStorage.getItem(STATS_KEY);
      let stats = parseDailyStats(rawStats);
      if (entry?.solved) {
        const updated = applySolvedStreak(stats, dailyKey);
        if (updated !== stats) {
          stats = updated;
          window.localStorage.setItem(STATS_KEY, JSON.stringify(updated));
        }
      }
      setStreakStats(stats);
    } catch (error) {
      console.warn('Failed to hydrate daily progress', error);
    }
  }, [dailyKey, hints]);

  const persist = useCallback(
    (next: GuessState) => {
      if (typeof window === 'undefined') return;
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        const parsed: Record<string, DailyStoredEntry> = raw
          ? (JSON.parse(raw) as Record<string, DailyStoredEntry>)
          : {};
        parsed[dailyKey] = createStoredEntry(next);
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
      if (guessState.history.some((entry) => entry.character.id === guess.id)) {
        setFeedbackMessage(`You already guessed ${getDisplayName(guess)}`);
        setPickerOpen(false);
        return;
      }
      setFeedbackMessage(null);
      const timestamp = Date.now();
      const correct = guess.id === solution.id;
      let accepted = false;
      let solvedNow = false;
      setGuessState((prev) => {
        if (prev.solved || prev.history.length >= MAX_DAILY_ATTEMPTS) {
          return prev;
        }
        const history = [
          ...prev.history,
          { character: guess, correct, timestamp },
        ];
        const solved = prev.solved || correct;
        const solvedAt = solved
          ? (prev.solvedAt ?? (correct ? timestamp : null))
          : null;
        const failed = history.filter((entry) => !entry.correct).length;
        const revealedHints = failed
          ? filterDependentHints(hints.slice(0, failed))
          : [];
        const nextState: GuessState = {
          history,
          solved,
          solvedAt,
          revealedHints,
        };
        persist(nextState);
        accepted = true;
        solvedNow = solved && !prev.solved;
        return nextState;
      });
      if (!accepted) return;
      if (!correct) {
        setSelection(null);
      } else {
        setSelection(guess);
        if (solvedNow) {
          applySolvedForToday();
        }
      }
      setPickerOpen(false);
    },
    [
      applySolvedForToday,
      guessState.history,
      guessState.solved,
      hints,
      persist,
      solution.id,
    ]
  );

  const failedAttempts = useMemo(
    () => guessState.history.filter((guess) => !guess.correct).length,
    [guessState.history]
  );

  const revealedHints = useMemo(() => {
    if (guessState.revealedHints.length > 0) {
      return guessState.revealedHints;
    }
    if (failedAttempts === 0) {
      return [];
    }
    return filterDependentHints(hints.slice(0, failedAttempts));
  }, [failedAttempts, guessState.revealedHints, hints]);
  const attemptsUsed = guessState.history.length;
  const isOutOfAttempts =
    !guessState.solved && attemptsUsed >= MAX_DAILY_ATTEMPTS;
  const stillGuessing = !guessState.solved && !isOutOfAttempts;

  const {
    play: playVoiceLine,
    stop: stopVoiceLine,
    isPlaying: isVoiceLinePlaying,
    hasError: voiceLineError,
  } = useVoiceLinePlayer();

  useEffect(() => {
    const hasVoiceLine = revealedHints.some(
      (hint) => hint.id === 'voice-line' && hint.audioSrc
    );
    if (!hasVoiceLine) {
      stopVoiceLine();
    }
  }, [revealedHints, stopVoiceLine]);

  const renderHintValue = useCallback(
    (hint: (typeof revealedHints)[number]) => {
      if (hint.id === 'element') {
        return (
          <div className="text-sm font-semibold whitespace-pre-line leading-6 text-white">
            {renderElementWithIcon(hint.value)}
          </div>
        );
      }
      if (hint.id === 'weapon') {
        return (
          <div className="text-sm font-semibold whitespace-pre-line leading-6 text-white">
            {renderWeaponWithIcon(hint.value)}
          </div>
        );
      }
      if (hint.id === 'voice-line') {
        return (
          <VoiceLineHint
            text={hint.value}
            audioSrc={hint.audioSrc}
            onPlay={playVoiceLine}
            onStop={stopVoiceLine}
            isPlaying={isVoiceLinePlaying}
            hasError={voiceLineError}
            character={getDisplayName(solution)}
          />
        );
      }

      return (
        <div className="text-sm font-semibold whitespace-pre-line leading-6 text-white">
          {hint.value}
        </div>
      );
    },
    [isVoiceLinePlaying, playVoiceLine, voiceLineError]
  );

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
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    asChild
                    variant="outline"
                    className="h-9 rounded-full border-white/25 bg-white/10 px-4 text-xs font-medium uppercase tracking-wide text-white/80 hover:bg-white/20 hover:text-white"
                  >
                    <Link href="/endless">Play endless mode - GW</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-9 rounded-full border-white/25 bg-white/10 px-4 text-xs font-medium uppercase tracking-wide text-white/80 hover:bg-white/20 hover:text-white"
                  >
                    <Link href="/genshindle">Play genshindle</Link>
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-white/60">
                <span>Streaks</span>
                <Badge className="gap-2 border border-white/20 bg-white/10 text-white hover:bg-white/20">
                  <span className="font-semibold">
                    {streakStats.currentStreak} current
                  </span>
                  <span>• Best {streakStats.bestStreak}</span>
                </Badge>
                <Button
                  onClick={() => {
                    localStorage.removeItem(STATS_KEY);
                    localStorage.removeItem(STORAGE_KEY);
                    window.location.reload();
                  }}
                  variant={`ghost`}
                >
                  Reset Progress
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-white/15 bg-black/30 p-6 backdrop-blur space-y-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-wide text-white/60">
                  <span>
                    {guessState.solved ? 'Solved' : 'Make your guess'}
                  </span>
                  <span>
                    {attemptsUsed} / {MAX_DAILY_ATTEMPTS} attempts
                  </span>
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

                <GuessErrorNotice message={feedbackMessage} />

                <OutcomeNotice
                  guessState={guessState}
                  isOutOfAttempts={isOutOfAttempts}
                  solution={solution}
                />
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
                    {revealedHints.length} / {availableHintCount}
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
                          <div className="mt-2">{renderHintValue(hint)}</div>
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
                      {[...guessState.history].reverse().map((guess, index) => (
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
