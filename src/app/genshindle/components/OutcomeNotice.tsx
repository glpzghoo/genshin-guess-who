import { getDisplayName } from '@/lib/daily-challenge';
import { renderElementWithIcon, renderWeaponWithIcon } from '@/lib/helpers';
import type { Character } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { GenshindleState, MAX_ATTEMPTS, wrapper } from '../lib/helpers';

type OutcomeNoticeProps = {
  state: GenshindleState;
  solution: Character;
  endlessMode?: boolean;
  onNextRound?: () => void;
};

export function OutcomeNotice({
  state,
  solution,
  endlessMode = false,
  onNextRound,
}: OutcomeNoticeProps) {
  const attemptsUsed = state.guesses.length;
  const isOutOfAttempts = !state.solved && attemptsUsed >= MAX_ATTEMPTS;
  if (!state.solved && !isOutOfAttempts) return null;

  const won = state.solved;
  const showNextRound = endlessMode && typeof onNextRound === 'function';

  return (
    <section
      className={wrapper({ won })}
      role="status"
      aria-live="polite"
      data-testid="genshindle-outcome-card"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm font-medium">
          {won
            ? `Solved in ${attemptsUsed} attempt${attemptsUsed === 1 ? '' : 's'}!`
            : 'No more guesses left.'}
        </div>
        {showNextRound ? (
          <Button
            type="button"
            variant="secondary"
            className="border border-white/20 bg-white/15 text-white hover:bg-white/25"
            onClick={onNextRound}
          >
            Next round
          </Button>
        ) : null}
      </div>
      <div className="mt-4 flex items-center gap-4 rounded-xl bg-black/25 p-3">
        <div className="h-14 w-14 overflow-hidden rounded-lg border border-white/10 bg-black/30">
          <img
            src={`/assets/ui/${solution.icon}.png`}
            alt={solution.name}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-white">
            Secret Character: {getDisplayName(solution)}
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-white/80">
            {renderElementWithIcon(solution.element, 'h-3.5 w-3.5')}
            {renderWeaponWithIcon(solution.weaponType, 'h-3.5 w-3.5')}
          </div>
        </div>
      </div>
    </section>
  );
}
