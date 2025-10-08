'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { QuestionPanel } from '@/components/question-panel';
import { useGameStore } from '@/lib/game-store';
import { realtimeService } from '@/lib/realtime-service';
import { Clock, MessageCircle, MessageSquare } from 'lucide-react';

export function MobileQASheet() {
  const gameState = useGameStore((s) => s.gameState);
  const [open, setOpen] = useState(false);

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

  const waitingForAnswer =
    !!lastQuestion && typeof (lastQuestion as any).response === 'undefined';
  const lastResponse = lastQuestion ? (lastQuestion as any).response : null;

  const statusText = (() => {
    if (gameState.phase === 'finalize') return 'Final guesses in progress';
    if (gameState.phase === 'finished') return 'Match finished';
    if (gameState.phase === 'character-select') return 'Lock a character to start';
    if (waitingForAnswer) {
      return isMyTurn ? "Waiting for your opponent" : 'Answer their question';
    }
    if (gameState.phase === 'playing') {
      return isMyTurn ? 'Your move — ask away' : "Opponent's turn";
    }
    return 'Q&A Console';
  })();

  const triggerHighlight =
    waitingForAnswer && !isMyTurn ? 'shadow-[0_0_0.75rem] shadow-amber-400/40' : '';

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            className={`group relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-sky-600 via-indigo-600 to-fuchsia-600 text-sm font-semibold text-white shadow-xl transition active:scale-[0.98] ${triggerHighlight}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/30 opacity-0 transition group-hover:opacity-100" />
            <MessageSquare className="h-4 w-4" />
            <span>Q&amp;A Console</span>
            {waitingForAnswer && (
              <span className="flex items-center gap-1 rounded-full border border-amber-300/30 bg-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-100">
                <Clock className="h-3 w-3 animate-spin" />
                Awaiting
              </span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="flex h-[80vh] max-h-[640px] flex-col overflow-hidden border-t border-slate-700/80 bg-slate-950/95 p-0 backdrop-blur-xl"
        >
          <SheetHeader className="space-y-3 border-b border-white/10 px-5 py-5 text-left">
            <SheetTitle className="text-base font-semibold text-white">
              Questions &amp; Answers
            </SheetTitle>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="border-slate-700 bg-slate-800/40 text-white">
                {questionCount} {questionCount === 1 ? 'Question' : 'Questions'}
              </Badge>
              <Badge variant="outline" className="border-slate-700 bg-slate-800/40 text-white">
                Phase: {gameState.phase}
              </Badge>
              {waitingForAnswer && (
                <Badge className="border border-amber-200/30 bg-amber-500/20 text-amber-100">
                  Waiting for answer
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <MessageCircle className="h-4 w-4 text-sky-300" />
              <span>{statusText}</span>
            </div>
          </SheetHeader>

          <div className="space-y-4 px-5 py-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-300">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Latest exchange</span>
              </div>
              {lastQuestion ? (
                <div className="mt-2 space-y-2">
                  <p className="text-sm text-white/90">{lastQuestion.content}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    {waitingForAnswer ? (
                      <>
                        <Clock className="h-3.5 w-3.5 animate-spin text-amber-200" />
                        <span>Waiting for an answer…</span>
                      </>
                    ) : (
                      <>
                        <span className="text-xs uppercase text-slate-400">
                          Answer:
                        </span>
                        <span
                          className={`font-semibold ${
                            lastResponse === 'yes' ? 'text-emerald-300' : 'text-rose-300'
                          }`}
                        >
                          {String(lastResponse ?? 'n/a')}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <p className="mt-2 text-sm text-slate-300">
                  No questions asked yet. Break the silence with a smart opener.
                </p>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 pb-6">
            <QuestionPanel />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
