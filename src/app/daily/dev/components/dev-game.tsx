'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Check as CheckIcon, Wrench } from 'lucide-react';

import {
  buildDailyHints,
  ElementTheme,
  filterDependentHints,
  getAllCharacters,
  getDisplayName,
  getElementTheme,
  MAX_DAILY_ATTEMPTS,
} from '@/lib/daily-challenge';
import type { Character } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { VoiceLineHint } from '@/components/VoiceLineHint';
import { useVoiceLinePlayer } from '@/lib/hooks/use-voice-line-player';
import { renderElementWithIcon, renderWeaponWithIcon } from '@/lib/helpers';
import OutcomeNotice, { GuessErrorNotice } from '@/components/ResultMessage';
import {
  GuessState,
  guessVariant,
  hintVariant,
  initialGuessState,
} from '@/app/daily/lib/helpers';
import { CharacterCombobox } from '@/app/daily/components/character-combobox';

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

type SolutionPickerProps = {
  characters: Character[];
  selection: Character | null;
  onSelect: (character: Character) => void;
};

function SolutionPicker({
  characters,
  selection,
  onSelect,
}: SolutionPickerProps) {
  const [open, setOpen] = useState(false);

  const displayValue = selection
    ? `Solution: ${getDisplayName(selection)}`
    : 'Pick solution character';

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-9 justify-between rounded-full border-white/25 bg-white/10 px-4 text-xs font-medium uppercase tracking-wide text-white/80 hover:bg-white/20 hover:text-white"
        >
          <span className="truncate">{displayValue}</span>
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
                    onSelect(character);
                    setOpen(false);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/10 bg-white/10">
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

export function DevGame() {
  const characters = useMemo(() => getAllCharacters(), []);
  const [solution, setSolution] = useState<Character | null>(() =>
    characters.length ? characters[0] : null
  );
  const [guessState, setGuessState] = useState<GuessState>(initialGuessState);
  const [selection, setSelection] = useState<Character | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  // Theme reacts to the current solution
  const theme = useMemo<ElementTheme>(
    () =>
      solution ? getElementTheme(solution) : getElementTheme({} as Character),
    [solution]
  );

  // Reset game when solution changes
  useEffect(() => {
    setGuessState(initialGuessState);
    setSelection(null);
    setFeedbackMessage(null);
  }, [solution?.id]);

  const hints = useMemo(
    () => (solution ? buildDailyHints(solution) : []),
    [solution]
  );
  const availableHintCount = useMemo(
    () => filterDependentHints(hints).length,
    [hints]
  );

  const submitGuess = useCallback(
    (guess: Character) => {
      if (!solution) return;
      if (guessState.solved) return;
      if (guessState.history.some((entry) => entry.character.id === guess.id)) {
        setFeedbackMessage(`You already guessed ${getDisplayName(guess)}`);
        setPickerOpen(false);
        return;
      }
      setFeedbackMessage(null);
      const timestamp = Date.now();
      const correct = guess.id === solution.id;

      setGuessState((prev) => {
        if (prev.solved) return prev;
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
        return { history, solved, solvedAt, revealedHints };
      });

      if (!correct) {
        setSelection(null);
      } else {
        setSelection(guess);
      }
      setPickerOpen(false);
    },
    [guessState.solved, guessState.history, hints, solution]
  );

  const failedAttempts = useMemo(
    () => guessState.history.filter((g) => !g.correct).length,
    [guessState.history]
  );

  const revealedHints = useMemo(() => {
    if (guessState.revealedHints.length > 0) return guessState.revealedHints;
    if (failedAttempts === 0) return [];
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
            character={solution ? getDisplayName(solution) : ''}
          />
        );
      }
      return (
        <div className="text-sm font-semibold whitespace-pre-line leading-6 text-white">
          {hint.value}
        </div>
      );
    },
    [isVoiceLinePlaying, playVoiceLine, voiceLineError, solution]
  );

  if (!solution) {
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
              Dev Mode
            </Badge>
          </div>

          <section className="grid gap-6 rounded-3xl border border-white/12 bg-black/35 px-6 py-8 shadow-2xl backdrop-blur-xl md:grid-cols-[1.15fr,0.85fr] md:items-start xl:grid-cols-[1.25fr,0.95fr]">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
                  <Wrench className="h-4 w-4 text-amber-300" />
                  Dev arena
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

              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-white/60">
                <span>Choose solution</span>
                <SolutionPicker
                  characters={characters}
                  selection={solution}
                  onSelect={(ch) => setSolution(ch)}
                />
                <Button
                  variant="ghost"
                  onClick={() => {
                    setGuessState(initialGuessState);
                    setSelection(null);
                    setFeedbackMessage(null);
                  }}
                >
                  Reset Round
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
                    {guessState.history.length} / {MAX_DAILY_ATTEMPTS} attempts
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
                {/* Dev mode has no streaks; reset via toolbar above */}
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
