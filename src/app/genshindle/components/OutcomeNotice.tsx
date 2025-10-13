import { getDisplayName } from '@/lib/daily-challenge';
import { renderElementWithIcon, renderWeaponWithIcon } from '@/lib/helpers';
import { GenshindleState, MAX_ATTEMPTS, wrapper } from '../lib/helpers';

export function OutcomeNotice({
  state,
  solution,
}: {
  state: GenshindleState;
  solution: Character;
}) {
  const attemptsUsed = state.guesses.length;
  const isOutOfAttempts = !state.solved && attemptsUsed >= MAX_ATTEMPTS;
  if (!state.solved && !isOutOfAttempts) return null;

  const won = state.solved;

  return (
    <section
      className={wrapper({ won })}
      role="status"
      aria-live="polite"
      data-testid="genshindle-outcome-card"
    >
      <div className="text-sm font-medium">
        {won
          ? `Solved in ${attemptsUsed} attempt${attemptsUsed === 1 ? '' : 's'}!`
          : 'No more guesses left.'}
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
