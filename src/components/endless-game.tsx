'use client';

import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ChevronsUpDown,
  Check as CheckIcon,
  Infinity as InfinityIcon,
  Sparkles,
  Target,
  Flame,
  Crown,
} from 'lucide-react';

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
import { elements, weapons } from '@/lib/helper';
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
import { Badge } from '@/components/ui/badge';

const STATS_KEY = 'endless-mode-stats';
const MAX_ATTEMPTS = 7;

type EndlessGuess = {
  character: Character;
  correct: boolean;
  timestamp: number;
};

type EndlessStats = {
  totalSolved: number;
  totalGuesses: number;
  currentStreak: number;
  bestStreak: number;
};

type RoundStatus = 'playing' | 'solved' | 'revealed';

type ComboboxProps = {
  characters: Character[];
  selection: Character | null;
  onSelect: (character: Character | null) => void;
  onSubmitGuess: (character: Character) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  disabled?: boolean;
};

const DEFAULT_STATS: EndlessStats = {
  totalSolved: 0,
  totalGuesses: 0,
  currentStreak: 0,
  bestStreak: 0,
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
  const [recentReveals, setRecentReveals] = useState<number>(0);
  const [theme, setTheme] = useState<ElementTheme>(() => getRandomTheme());

  useEffect(() => {
    setDeck(shuffleCharacters(allCharacters));
    setDeckIndex(0);
  }, [allCharacters]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = window.localStorage.getItem(STATS_KEY);
      if (!stored) return;
      const parsed = JSON.parse(stored) as EndlessStats;
      setStats({
        totalSolved: Number(parsed?.totalSolved) || 0,
        totalGuesses: Number(parsed?.totalGuesses) || 0,
        currentStreak: Number(parsed?.currentStreak) || 0,
        bestStreak: Number(parsed?.bestStreak) || 0,
      });
    } catch {
      // ignore malformed stats
    }
  }, []);

  const persistStats = useCallback((next: EndlessStats) => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(STATS_KEY, JSON.stringify(next));
    } catch {
      // ignore
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
  }, [deckIndex]);

  useEffect(() => {
    setTheme(getRandomTheme());
  }, [deckIndex]);

  const hints = useMemo(
    () => (currentCharacter ? buildDailyHints(currentCharacter) : []),
    [currentCharacter]
  );

  const availableHintCount = useMemo(
    () => filterDependentHints(hints).length,
    [hints]
  );

  const failedAttempts = guesses.filter((guess) => !guess.correct).length;
  const unlockedHints = useMemo(
    () => hints.slice(0, failedAttempts),
    [hints, failedAttempts]
  );
  const revealedHints = useMemo(
    () => filterDependentHints(unlockedHints),
    [unlockedHints]
  );
  const stillGuessing =
    roundStatus === 'playing' && failedAttempts < MAX_ATTEMPTS;
  const submitGuess = useCallback(
    (guess: Character) => {
      if (!currentCharacter || !stillGuessing) return;

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
        setRecentReveals(0);
        setSelection(guess);
      } else {
        setSelection(null);

        // NEW: if this miss hits the cap, auto-lose and reset streak
        const nextFailed = failedAttempts + 1; // failedAttempts is from current render
        if (nextFailed >= MAX_ATTEMPTS) {
          setRoundStatus('revealed');
          setRecentReveals((c) => c + 1);
          updateStats((prev) => ({
            ...prev,
            currentStreak: 0,
          }));
        }
      }
    },
    [currentCharacter, stillGuessing, updateStats, failedAttempts]
  );

  const handleGiveUp = useCallback(() => {
    if (!currentCharacter || !stillGuessing) return;
    setRoundStatus('revealed');
    setRecentReveals((count) => count + 1);
    updateStats((prev) => ({
      ...prev,
      currentStreak: 0,
    }));
  }, [currentCharacter, stillGuessing, updateStats]);

  const handleNextRound = useCallback(() => {
    advanceDeck();
    setRoundNumber((prev) => prev + 1);
  }, [advanceDeck]);

  if (!currentCharacter) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Loading roster...
      </div>
    );
  }

  const accuracy =
    stats.totalGuesses > 0
      ? Math.round((stats.totalSolved / stats.totalGuesses) * 100)
      : 0;

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
          </div>

          <section className="grid gap-6 rounded-3xl border border-white/12 bg-black/35 px-6 py-8 shadow-2xl backdrop-blur-xl md:grid-cols-[1.15fr,0.85fr] md:items-start xl:grid-cols-[1.25fr,0.95fr]">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
                  <InfinityIcon className="h-4 w-4 text-violet-300" />
                  Endless arena
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="h-9 rounded-full border-white/25 bg-white/10 px-4 text-xs font-medium uppercase tracking-wide text-white/80 hover:bg-white/20 hover:text-white"
                >
                  <Link href="/daily">Play daily mode</Link>
                </Button>
              </div>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Streak through Teyvat&apos;s roster
              </h1>
              <p className="text-white/75 text-sm md:text-base max-w-xl">
                Each incorrect guess reveals more intel. Give up and your streak
                resets. How many characters can you identify back-to-back?
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <BadgePill
                  theme={theme}
                  icon={<Target className="h-3.5 w-3.5" />}
                >
                  New character every round
                </BadgePill>
                <BadgePill
                  theme={theme}
                  icon={<Flame className="h-3.5 w-3.5" />}
                >
                  Streak resets on reveal
                </BadgePill>
                <BadgePill
                  theme={theme}
                  icon={<Crown className="h-3.5 w-3.5" />}
                >
                  Best streak: {stats.bestStreak}
                </BadgePill>
                <BadgePill
                  theme={theme}
                  icon={<Crown className="h-3.5 w-3.5" />}
                >
                  Current streak: {stats.currentStreak}
                </BadgePill>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-white/60">
                <span>Stats snapshot</span>
                <Badge
                  variant="outline"
                  className="gap-2 border-white/25 bg-white/10 text-white hover:bg-white/20"
                >
                  <span className="font-semibold">
                    {stats.totalSolved} solved
                  </span>
                  <span>• {stats.totalGuesses} guesses</span>
                  <span>• {accuracy}% accuracy</span>
                  <span>• Round {roundNumber}</span>
                </Badge>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-white/15 bg-black/30 p-6 backdrop-blur space-y-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-wide text-white/60">
                  <span>Round {roundNumber}</span>
                  <span>
                    {guesses.length} guesses • {failedAttempts}/{MAX_ATTEMPTS}{' '}
                    misses
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
                  <Button
                    variant="outline"
                    className="h-12 sm:w-32 border border-white/20 text-white/80 hover:text-white"
                    onClick={handleGiveUp}
                    disabled={!stillGuessing}
                  >
                    Reveal
                  </Button>
                </div>

                {roundStatus === 'solved' && (
                  <div className="rounded-xl border border-emerald-400/40 bg-emerald-500/15 px-4 py-3 text-sm text-emerald-100 flex items-center justify-between gap-3">
                    <div>
                      <div className="font-semibold">
                        Correct! {getDisplayName(currentCharacter)}
                      </div>
                      <div className="text-xs text-emerald-100/80">
                        Current streak: {stats.currentStreak}
                      </div>
                    </div>
                    <Button
                      variant="secondary"
                      className="border border-white/20 bg-white/15 text-white hover:bg-white/25"
                      onClick={handleNextRound}
                    >
                      Next
                    </Button>
                  </div>
                )}

                {roundStatus === 'revealed' && (
                  <div className="rounded-xl border border-rose-400/40 bg-rose-500/15 px-4 py-3 text-sm text-rose-100 flex items-center justify-between gap-3">
                    <div>
                      <div className="font-semibold">
                        Answer: {getDisplayName(currentCharacter)}
                      </div>
                      <div className="text-xs text-rose-100/80">
                        Streak reset. Ready to bounce back?
                      </div>
                    </div>
                    <Button
                      variant="secondary"
                      className="border border-white/20 bg-white/15 text-white hover:bg-white/25"
                      onClick={handleNextRound}
                    >
                      Next
                    </Button>
                  </div>
                )}
              </div>

              <div className="rounded-3xl border border-white/12 bg-black/35 p-6 backdrop-blur space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Hint unlocks</h2>
                  <BadgePill
                    theme={theme}
                    icon={<Sparkles className="h-3.5 w-3.5" />}
                  >
                    {revealedHints.length} / {availableHintCount}
                  </BadgePill>
                </div>
                <AnimatePresence initial={false} mode="popLayout">
                  {revealedHints.length === 0 ? (
                    <motion.div
                      className="rounded-xl border border-white/12 bg-white/8 p-4 text-sm text-white/70"
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 1 }}
                    >
                      No hints yet. Every incorrect guess unlocks another clue.
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
                    Wrong guesses keep your streak alive
                  </p>
                </div>
                <AnimatePresence initial={false} mode="popLayout">
                  {guesses.length === 0 ? (
                    <motion.div
                      className="rounded-xl border border-dashed border-white/15 bg-white/8 p-4 text-sm text-white/70"
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 1 }}
                    >
                      You haven&apos;t tried any names this round. Take a swing!
                    </motion.div>
                  ) : (
                    <div className="space-y-3">
                      {guesses.map((guess, index) => (
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
                          <BadgePill
                            theme={theme}
                            icon={<CheckIcon className="h-3.5 w-3.5" />}
                            highlight={guess.correct}
                          >
                            {guess.correct ? 'Correct' : 'Keep digging'}
                          </BadgePill>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </AnimatePresence>

                {roundStatus !== 'playing' && (
                  <div className="rounded-xl border border-white/12 bg-white/8 p-4 text-sm text-white/80">
                    <div className="font-semibold text-white">
                      Solution: {getDisplayName(currentCharacter)}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-white/60">
                      {renderElementWithIcon(
                        currentCharacter.element,
                        'h-3.5 w-3.5'
                      )}
                      {renderWeaponWithIcon(
                        currentCharacter.weaponType,
                        'h-3.5 w-3.5'
                      )}
                      <span>{currentCharacter.region}</span>
                    </div>
                  </div>
                )}

                {recentReveals >= 3 && (
                  <div className="rounded-xl border border-amber-400/40 bg-amber-500/15 px-4 py-3 text-xs text-amber-100">
                    Tip: Try filtering by element or weapon with the search box
                    before revealing—you might surprise yourself!
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
}: ComboboxProps) {
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
          className="h-12 w-full justify-between rounded-2xl border border-white/20 bg-white/10 text-left text-sm text-white/90 shadow-lg transition hover:bg-white/20 sm:w-80"
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

function BadgePill({
  theme,
  icon,
  highlight,
  children,
}: {
  theme: ElementTheme;
  icon: ReactNode;
  highlight?: boolean;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
        highlight
          ? 'bg-emerald-500/25 text-emerald-100 border-emerald-400/50'
          : ''
      }`}
      style={{
        backgroundColor: highlight ? undefined : theme.badge,
        color: highlight ? undefined : theme.badgeText,
        borderColor: highlight ? undefined : theme.accent,
      }}
    >
      {icon}
      {children}
    </span>
  );
}
