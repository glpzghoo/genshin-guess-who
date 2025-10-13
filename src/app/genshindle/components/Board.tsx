import { useMemo } from 'react';
import {
  badgeStyles,
  evaluateGuess,
  GenshindleState,
} from '../lib/helpers';
import { AnimatePresence, motion } from 'framer-motion';
import { guessVariant } from '@/app/daily/lib/helpers';
import { getDisplayName } from '@/lib/daily-challenge';
import { renderElementWithIcon, renderWeaponWithIcon } from '@/lib/helpers';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { renderCellContent } from '../lib/HelperComponents';
import type { Character } from '@/lib/types';

export function GenshindleBoard({
  guesses,
  solution,
  hardMode = false,
  onDisableHardMode,
}: {
  guesses: GenshindleState['guesses'];
  solution: Character;
  hardMode?: boolean;
  onDisableHardMode?: () => void;
}) {
  const rows = useMemo(() => {
    const mapped = guesses.map((guess, index) => ({
      key: `${guess.character.id}-${guess.timestamp}`,
      character: guess.character,
      cells: evaluateGuess(guess.character, solution),
      attempt: index + 1,
    }));
    return mapped.reverse();
  }, [guesses, solution]);

  if (rows.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-white/20 bg-black/25 p-6 text-center text-sm text-white/70">
        Make the first call.
      </div>
    );
  }

  return (
    <div className="relative pt-6">
      <AnimatePresence initial={false} mode="popLayout">
        {rows.map((row, index) => (
          <motion.div
            key={row.key}
            layout
            variants={guessVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.22 }}
            style={{
              zIndex: rows.length - index,
              opacity: Math.max(0.58, 1 - index * 0.12),
              filter:
                !hardMode && index !== 0 ? 'saturate(0.85)' : undefined,
            }}
            className="relative rounded-3xl border border-white/12 bg-black/45 p-5 shadow-2xl backdrop-blur"
          >
            <div
              className={
                hardMode && index > 0
                  ? 'pointer-events-none select-none blur-md opacity-40'
                  : undefined
              }
              aria-hidden={hardMode && index > 0 ? true : undefined}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-xl border border-white/10 bg-black/30">
                    <img
                      src={`/assets/ui/${row.character.icon}.png`}
                      alt={row.character.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-base font-semibold text-white">
                      {getDisplayName(row.character)}
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-white/70">
                      {renderElementWithIcon(
                        row.character.element,
                        'h-3.5 w-3.5'
                      )}
                      {renderWeaponWithIcon(
                        row.character.weaponType,
                        'h-3.5 w-3.5'
                      )}
                      <span aria-hidden>•</span>
                      <span>{row.character.region}</span>
                      <span aria-hidden>•</span>
                      <span>{row.character.rank}-Star</span>
                    </div>
                  </div>
                </div>
                <Badge className="border border-white/20 bg-white/15 text-xs uppercase tracking-wide text-white/80">
                  Attempt {row.attempt}
                </Badge>
              </div>

              <div className="mt-4 flex flex-wrap justify-between gap-3">
                {row.cells.map((cell, cellIndex) => (
                  <motion.div
                    key={`${row.key}-${cell.id}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.08 * cellIndex + 0.1,
                      duration: 0.2,
                    }}
                    className="flex"
                  >
                    <Badge
                      className={`flex min-w-[120px] flex-col gap-1 rounded-xl border px-3 py-2 text-left text-sm ${badgeStyles[cell.status]}`}
                    >
                      <span className="text-sm font-semibold leading-5">
                        {renderCellContent(cell)}
                      </span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
            {hardMode && index > 0 ? (
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/20 bg-black/70 p-6 text-center">
                <p className="text-sm font-medium uppercase tracking-wide text-white/80">
                  Turn off hard mode to see older guesses
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={onDisableHardMode}
                  disabled={!onDisableHardMode}
                  className="pointer-events-auto rounded-full border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/90 hover:bg-white/20"
                >
                  Turn off hard mode
                </Button>
              </div>
            ) : null}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
