'use client';

import React, { memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Character } from '@/lib/types';
import type { GuessState } from '@/app/daily/lib/helpers';
import { getDisplayName } from '@/lib/daily-challenge';
import { renderElementWithIcon, renderWeaponWithIcon } from '@/lib/helpers';
import { Button } from '@/components/ui/button';

type OutcomeCardProps = {
  guessState: GuessState;
  isOutOfAttempts: boolean;
  solution: Character;
  className?: string;
};

type EndlessOutcomeProps = {
  solved: boolean;
  attemptsUsed: number;
  isOutOfAttempts: boolean;
  solution: Character;
  onNextRound: () => void;
  className?: string;
};

type GuessErrorNoticeProps = {
  message: string | null;
  className?: string;
};

export const GuessErrorNotice: React.FC<GuessErrorNoticeProps> = memo(
  ({ message, className }) => {
    const baseClasses =
      'rounded-xl border border-rose-400/40 bg-rose-500/15 px-4 py-3 text-sm text-rose-100 shadow-lg backdrop-blur';
    const classes = [baseClasses, className].filter(Boolean).join(' ');

    return (
      <AnimatePresence>
        {message ? (
          <motion.div
            key="guess-error-notice"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className={classes}
            role="alert"
            aria-live="polite"
          >
            {message}
          </motion.div>
        ) : null}
      </AnimatePresence>
    );
  }
);

GuessErrorNotice.displayName = 'GuessErrorNotice';

const SecretCharacterReveal: React.FC<{ solution: Character }> = memo(
  ({ solution }) => (
    <div className="mt-4 flex items-center gap-4 rounded-xl bg-black/20 p-3">
      <div className="h-14 w-14 overflow-hidden rounded-lg border border-white/15 bg-black/30">
        <img
          src={`/assets/ui/${solution.icon}.png`}
          alt={solution.name}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="min-w-0">
        <div className="text-sm font-semibold text-white">
          Secret Character: {getDisplayName(solution)}
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-white/80">
          {renderElementWithIcon(solution.element, 'h-3.5 w-3.5')}
          {renderWeaponWithIcon(solution.weaponType, 'h-3.5 w-3.5')}
        </div>
      </div>
    </div>
  )
);

SecretCharacterReveal.displayName = 'SecretCharacterReveal';

const OutcomeCard: React.FC<OutcomeCardProps> = memo(
  ({ guessState, isOutOfAttempts, solution, className }) => {
    const attemptsUsed = guessState.history.length;
    const gameOver = guessState.solved || isOutOfAttempts;
    if (!gameOver) return null;

    const won = !!guessState.solved;

    const wrapper =
      'rounded-2xl border p-4 sm:p-5 ' +
      (won
        ? 'border-emerald-400/40 bg-emerald-500/15 text-emerald-100'
        : 'border-rose-400/30 bg-rose-500/15 text-rose-100');

    return (
      <section
        className={[wrapper, className].filter(Boolean).join(' ')}
        role="status"
        aria-live="polite"
        data-testid="outcome-card"
      >
        {/* Header line: win/lose message */}
        <div className="text-sm font-medium">
          {won ? (
            <>
              Solved in {attemptsUsed} attempt{attemptsUsed === 1 ? '' : 's'}.
            </>
          ) : (
            <>You lose.</>
          )}
        </div>

        {/* Secret reveal lives INSIDE the same card */}
        <SecretCharacterReveal solution={solution} />
      </section>
    );
  }
);

OutcomeCard.displayName = 'OutcomeCard';

export const EndlessOutcomeNotice: React.FC<EndlessOutcomeProps> = memo(
  ({
    solved,
    attemptsUsed,
    isOutOfAttempts,
    solution,
    onNextRound,
    className,
  }) => {
    const gameOver = solved || isOutOfAttempts;
    if (!gameOver) return null;

    const won = solved;
    const wrapper =
      'flex flex-col gap-4 rounded-2xl border p-4 sm:p-5 ' +
      (won
        ? 'border-emerald-400/40 bg-emerald-500/15 text-emerald-100'
        : 'border-rose-400/30 bg-rose-500/15 text-rose-100');

    return (
      <section
        className={[wrapper, className].filter(Boolean).join(' ')}
        role="status"
        aria-live="polite"
        data-testid="endless-outcome-card"
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-sm font-medium">
            {won ? (
              <>
                Solved in {attemptsUsed} attempt
                {attemptsUsed === 1 ? '' : 's'}. Keep the streak going.
              </>
            ) : (
              <>You lost.</>
            )}
          </div>
          <Button
            variant="secondary"
            className="border border-white/20 bg-white/15 text-white hover:bg-white/25"
            onClick={onNextRound}
          >
            Next round
          </Button>
        </div>
        <SecretCharacterReveal solution={solution} />
      </section>
    );
  }
);

EndlessOutcomeNotice.displayName = 'EndlessOutcomeNotice';

export default OutcomeCard;
