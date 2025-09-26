'use client';

import { useMemo, useState } from 'react';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible';
import { ChevronDown, Clock } from 'lucide-react';
import { useGameStore } from '@/lib/game-store';
import { QuestionPanel } from '@/components/question-panel';

export function DesktopQACollapsible() {
  const gameState = useGameStore((s) => s.gameState);
  const [open, setOpen] = useState(true);

  const lastQuestion = useMemo(
    () =>
      [...gameState.gameHistory].reverse().find((a) => a.type === 'question'),
    [gameState.gameHistory]
  );

  const waitingForAnswer =
    !!lastQuestion && typeof (lastQuestion as any).response === 'undefined';

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="hidden lg:block">
      <div className="flex items-center justify-between bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-white">
            Ask a question
          </span>
          {waitingForAnswer && (
            <span className="flex items-center gap-1 text-xs text-yellow-400">
              <Clock className="w-3.5 h-3.5 animate-spin" />
              Waiting…
            </span>
          )}
        </div>

        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-slate-700/60 text-slate-200"
            aria-label={open ? 'Collapse Q&A' : 'Expand Q&A'}
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
            />
          </button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        {/* Hide internal header so we don't duplicate titles */}
        <QuestionPanel hideHeader />
      </CollapsibleContent>
    </Collapsible>
  );
}
