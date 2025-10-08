'use client';

import { useMemo, useState } from 'react';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import {
  ChevronDown,
  Clock,
  MessageCircle,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { useGameStore } from '@/lib/game-store';
import { QuestionPanel } from '@/components/question-panel';
import { realtimeService } from '@/lib/realtime-service';

export function DesktopQACollapsible() {
  const gameState = useGameStore((s) => s.gameState);
  const [open, setOpen] = useState(true);

  const lastQuestion = useMemo(
    () =>
      [...gameState.gameHistory].reverse().find((a) => a.type === 'question'),
    [gameState.gameHistory]
  );

  const questionCount = useMemo(
    () => gameState.gameHistory.filter((a) => a.type === 'question').length,
    [gameState.gameHistory]
  );

  const myId = realtimeService.getSelfId?.();
  const isMyTurn = Boolean(myId && gameState.currentTurn === myId);
  const currentPlayer =
    gameState.players.find((p) => p.id === gameState.currentTurn) ?? null;
  const currentPlayerName =
    currentPlayer?.name ?? currentPlayer?.name ?? 'Opponent';

  const waitingForAnswer =
    !!lastQuestion && typeof (lastQuestion as any).response === 'undefined';
  const lastResponse = !!lastQuestion ? (lastQuestion as any).response : null;

  const headerStatus = (() => {
    if (gameState.phase === 'finalize') {
      return {
        tone: 'text-yellow-200',
        icon: Sparkles,
        label: 'Final guesses running',
      };
    }
    if (gameState.phase === 'finished') {
      return {
        tone: 'text-slate-200',
        icon: Sparkles,
        label: 'Match finished',
      };
    }
    if (gameState.phase === 'character-select') {
      return {
        tone: 'text-slate-300',
        icon: Clock,
        label: 'Lock a character to begin',
      };
    }
    if (waitingForAnswer) {
      return {
        tone: 'text-amber-200',
        icon: Clock,
        label: isMyTurn
          ? "Waiting for opponent's answer"
          : 'Answer the incoming question',
      };
    }
    if (gameState.phase === 'playing') {
      return {
        tone: 'text-sky-200',
        icon: MessageSquare,
        label: isMyTurn ? 'Your move — ask away' : "Opponent's turn",
      };
    }
    return {
      tone: 'text-slate-200',
      icon: MessageSquare,
      label: 'Q&A updates',
    };
  })();

  const HeaderIcon = headerStatus.icon;

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="hidden lg:block">
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 160, damping: 22 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-fuchsia-500/20" />
        <motion.div
          layout
          className="relative flex flex-col gap-4 p-6"
          transition={{ type: 'spring', stiffness: 180, damping: 22 }}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Q&amp;A Console
              </p>
              <h3 className="text-lg font-semibold text-white">
                Coordinate with your teammate
              </h3>
              <div className="mt-2 flex items-center gap-2 text-sm">
                <HeaderIcon className="h-4 w-4 shrink-0 text-sky-200" />
                <span className={`${headerStatus.tone} font-medium`}>
                  {headerStatus.label}
                </span>
              </div>
            </div>
            <CollapsibleTrigger asChild>
              <motion.button
                type="button"
                whileTap={{ scale: 0.96 }}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-50 transition hover:bg-white/10"
                aria-label={open ? 'Collapse Q&A' : 'Expand Q&A'}
              >
                <motion.span
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </motion.button>
            </CollapsibleTrigger>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-200/80">
            <Badge
              variant="outline"
              className="border-slate-600/60 bg-white/5 text-white"
            >
              {questionCount} {questionCount === 1 ? 'question' : 'questions'}
            </Badge>
            <Badge
              variant="outline"
              className="border-slate-600/60 bg-white/5 text-white"
            >
              {gameState.phase}
            </Badge>
            {currentPlayer && (
              <Badge
                variant="outline"
                className="border-slate-600/60 bg-white/5 text-white"
              >
                Turn: {isMyTurn ? 'You' : currentPlayerName}
              </Badge>
            )}
            {waitingForAnswer && (
              <Badge className="border border-amber-200/30 bg-amber-500/20 text-amber-100">
                Awaiting answer
              </Badge>
            )}
          </div>

          <motion.div
            layout
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-300">
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Latest exchange</span>
            </div>
            {lastQuestion ? (
              <motion.div
                key={lastQuestion.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-2 space-y-2"
              >
                <p className="text-sm text-white/90">{lastQuestion.content}</p>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  {waitingForAnswer ? (
                    <>
                      <Clock className="h-3.5 w-3.5 animate-spin text-amber-200" />
                      <span>Waiting for an answer…</span>
                    </>
                  ) : (
                    <>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-[2px] text-[10px] uppercase tracking-wide text-white/80">
                        Answer
                      </span>
                      <span
                        className={`font-semibold ${
                          lastResponse === 'yes'
                            ? 'text-emerald-200'
                            : 'text-rose-200'
                        }`}
                      >
                        {String(lastResponse ?? 'n/a').toUpperCase()}
                      </span>
                    </>
                  )}
                </div>
              </motion.div>
            ) : (
              <p className="mt-2 text-sm text-slate-300">
                No questions asked yet. Kick things off with a clever opener.
              </p>
            )}
          </motion.div>
        </motion.div>

        <CollapsibleContent className="overflow-hidden border-t border-white/10 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <div className="p-5">
            <QuestionPanel />
          </div>
        </CollapsibleContent>
      </motion.div>
    </Collapsible>
  );
}
