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
  getDisplayName,
  getRandomTheme,
  shuffleCharacters,
} from '@/lib/daily-challenge';
import type { Character } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { VoiceLineHint } from '@/components/VoiceLineHint';
import { useVoiceLinePlayer } from '@/lib/hooks/use-voice-line-player';
import { renderElementWithIcon, renderWeaponWithIcon } from '@/lib/helpers';
import {
  DEFAULT_STATS,
  type EndlessGuess,
  type EndlessStats,
  guessVariant,
  hintVariant,
  MAX_ATTEMPTS,
  parseEndlessStats,
  STATS_KEY,
} from '../lib/helpers';
import { CharacterCombobox } from './character-combobox';
import {
  EndlessOutcomeNotice,
  GuessErrorNotice,
} from '@/components/ResultMessage';

type RoundStatus = 'playing' | 'solved' | 'revealed';

export function EndlessGame() {
  const allCharacters = useMemo(() => getAllCharacters(), []);
  const [deck, setDeck] = useState<Character[]>(() => allCharacters);
  const [deckIndex, setDeckIndex] = useState(0);
  const currentCharacter = deck[deckIndex];

  const [selection, setSelection] = useState<Character | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [roundStatus, setRoundStatus] = useState<RoundStatus>('playing');
  const [guesses, setGuesses] = useState<EndlessGuess[]>([]);
  const [roundNumber, setRoundNumber] = useState(1);
  const [stats, setStats] = useState<EndlessStats>(DEFAULT_STATS);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const themeSeed = currentCharacter
    ? `character-${currentCharacter.id}`
    : `round-${roundNumber}`;
  const [theme, setTheme] = useState<ElementTheme>(() =>
    getRandomTheme(themeSeed)
  );

  useEffect(() => {
    setDeck(shuffleCharacters(allCharacters));
    setDeckIndex(0);
  }, [allCharacters]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(STATS_KEY);
    setStats(parseEndlessStats(stored));
  }, []);

  const persistStats = useCallback((next: EndlessStats) => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(STATS_KEY, JSON.stringify(next));
    } catch (error) {
      console.warn('Failed to persist endless stats', error);
    }
  }, []);

  const updateStats = useCallback(
    (updater: (prev: EndlessStats) => EndlessStats) => {
      setStats((prev) => {
        const next = updater(prev);
        persistStats(next);
        return next;
      });
    },
    [persistStats]
  );

  const advanceDeck = useCallback(() => {
    if (deckIndex + 1 >= deck.length) {
      const reshuffled = shuffleCharacters(allCharacters);
      setDeck(reshuffled);
      setDeckIndex(0);
    } else {
      setDeckIndex((prev) => prev + 1);
    }
  }, [deckIndex, deck.length, allCharacters]);

  useEffect(() => {
    setGuesses([]);
    setSelection(null);
    setRoundStatus('playing');
    setFeedbackMessage(null);
  }, [deckIndex]);

  useEffect(() => {
    setTheme(getRandomTheme(themeSeed));
  }, [themeSeed]);

  const hints = useMemo(
    () => (currentCharacter ? buildDailyHints(currentCharacter) : []),
    [currentCharacter]
  );

  const availableHintCount = useMemo(
    () => filterDependentHints(hints).length,
    [hints]
  );

  const failedAttempts = guesses.filter((guess) => !guess.correct).length;
  const revealedHints = useMemo(() => {
    if (failedAttempts === 0) {
      return [];
    }
    return filterDependentHints(hints.slice(0, failedAttempts));
  }, [failedAttempts, hints]);
  const stillGuessing =
    roundStatus === 'playing' && failedAttempts < MAX_ATTEMPTS;
  const attemptsUsed = guesses.length;
  const isOutOfAttempts = roundStatus === 'revealed';
  const solved = roundStatus === 'solved';
  const statusLabel = solved
    ? 'Solved'
    : stillGuessing
      ? 'Make your guess'
      : 'Round complete';
  const submitGuess = useCallback(
    (guess: Character) => {
      if (!currentCharacter || !stillGuessing) return;
      if (guesses.some((entry) => entry.character.id === guess.id)) {
        setFeedbackMessage(`You already guessed ${getDisplayName(guess)}`);
        setPickerOpen(false);
        return;
      }
      setFeedbackMessage(null);

      const timestamp = Date.now();
      const correct = guess.id === currentCharacter.id;

      setGuesses((prev) => [...prev, { character: guess, correct, timestamp }]);
      setPickerOpen(false);

      updateStats((prev) => {
        const next: EndlessStats = {
          ...prev,
          totalGuesses: prev.totalGuesses + 1,
        };
        if (correct) {
          const nextStreak = prev.currentStreak + 1;
          next.totalSolved = prev.totalSolved + 1;
          next.currentStreak = nextStreak;
          next.bestStreak = Math.max(prev.bestStreak, nextStreak);
        }
        return next;
      });

      if (correct) {
        setRoundStatus('solved');
        setSelection(guess);
      } else {
        setSelection(null);

        const nextFailed = failedAttempts + 1;
        if (nextFailed >= MAX_ATTEMPTS) {
          setRoundStatus('revealed');
          updateStats((prev) => ({
            ...prev,
            currentStreak: 0,
          }));
        }
      }
    },
    [currentCharacter, guesses, stillGuessing, updateStats, failedAttempts]
  );

  const handleNextRound = useCallback(() => {
    advanceDeck();
    setRoundNumber((prev) => prev + 1);
  }, [advanceDeck]);

  const handleResetProgress = useCallback(() => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem(STATS_KEY);
      } catch (error) {
        console.warn('Failed to reset endless stats', error);
      }
    }
    setStats(() => ({ ...DEFAULT_STATS }));
  }, []);

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
            isPlaying={isVoiceLinePlaying}
            hasError={voiceLineError}
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

  if (!currentCharacter) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Loading roster...
      </div>
    );
  }

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
              Endless round {roundNumber}
            </Badge>
          </div>

          <section className="grid gap-6 rounded-3xl border border-white/12 bg-black/35 px-6 py-8 shadow-2xl backdrop-blur-xl md:grid-cols-[1.15fr,0.85fr] md:items-start xl:grid-cols-[1.25fr,0.95fr]">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
                  <Trophy className="h-4 w-4 text-amber-300" />
                  Endless arena
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    asChild
                    variant="outline"
                    className="h-9 rounded-full border-white/25 bg-white/10 px-4 text-xs font-medium uppercase tracking-wide text-white/80 hover:bg-white/20 hover:text-white"
                  >
                    <Link href="/daily">Play daily mode - GW</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-9 rounded-full border-white/25 bg-white/10 px-4 text-xs font-medium uppercase tracking-wide text-white/80 hover:bg-white/20 hover:text-white"
                  >
                    <Link href="/genshindle">Play Genshindle</Link>
                  </Button>
                </div>
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
                  New character every round
                </Badge>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-white/60">
                <span>Streaks</span>
                <Badge className="gap-2 border border-white/20 bg-white/10 text-white hover:bg-white/20">
                  <span className="font-semibold">
                    {stats.currentStreak} current
                  </span>
                  <span>• Best {stats.bestStreak}</span>
                </Badge>
                <Button onClick={handleResetProgress} variant="ghost">
                  Reset Stats
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-white/15 bg-black/30 p-6 backdrop-blur space-y-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-wide text-white/60">
                  <span>{statusLabel}</span>
                  <span>
                    {attemptsUsed} / {MAX_ATTEMPTS} attempts
                  </span>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <CharacterCombobox
                    characters={allCharacters}
                    selection={selection}
                    onSelect={setSelection}
                    onSubmitGuess={submitGuess}
                    open={pickerOpen}
                    onOpenChange={setPickerOpen}
                    disabled={!stillGuessing}
                  />
                </div>

                <GuessErrorNotice message={feedbackMessage} />

                <EndlessOutcomeNotice
                  solved={solved}
                  attemptsUsed={attemptsUsed}
                  isOutOfAttempts={isOutOfAttempts}
                  solution={currentCharacter}
                  onNextRound={handleNextRound}
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
                  {guesses.length === 0 ? (
                    <motion.div
                      className="rounded-xl border border-dashed border-white/15 bg-white/8 p-4 text-sm text-white/70"
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 1 }}
                    >
                      No guesses yet. Time to make your first move!
                    </motion.div>
                  ) : (
                    <div className="space-y-3">
                      {[...guesses].reverse().map((guess, index) => (
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
