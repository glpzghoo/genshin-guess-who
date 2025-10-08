'use client';

import { useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useGameStore } from '@/lib/game-store';
import { realtimeService } from '@/lib/realtime-service';
import {
  Send,
  Clock,
  MessageSquare,
  CheckCircle2,
  XCircle,
  Sparkles,
} from 'lucide-react';

export function QuestionPanel({
  hideHeader = false,
}: {
  hideHeader?: boolean;
}) {
  const gameState = useGameStore((s) => s.gameState);

  const [question, setQuestion] = useState('');
  const [pendingAsk, setPendingAsk] = useState(false);
  const [pendingAnswer, setPendingAnswer] = useState<null | 'yes' | 'no'>(null);

  const listRef = useRef<HTMLDivElement | null>(null);

  const myId = realtimeService.getSelfId();
  const me = useMemo(
    () => gameState.players.find((p) => p.id === myId) ?? null,
    [gameState.players, myId]
  );
  const currentPlayer = useMemo(
    () => gameState.players.find((p) => p.id === gameState.currentTurn),
    [gameState.players, gameState.currentTurn]
  );
  const isMyTurn = !!me && gameState.currentTurn === me.id;

  const questions = useMemo(() => {
    return gameState.gameHistory
      .filter((a) => a.type === 'question')
      .slice(-12)
      .reverse();
  }, [gameState.gameHistory]);

  const lastQuestion = questions[0];
  const waitingForAnswer =
    !!lastQuestion && typeof (lastQuestion as any).response === 'undefined';

  const phase = gameState.phase;

  const handleAskQuestion = () => {
    const text = question.trim();
    if (!text || !currentPlayer || !isMyTurn || pendingAsk) return;

    setPendingAsk(true);
    setQuestion('');
    realtimeService.askQuestion(text, () => {
      setPendingAsk(false);
      if (listRef.current) {
        listRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  };

  const handleAnswer = (answer: 'yes' | 'no') => {
    if (!lastQuestion || (lastQuestion as any).response || pendingAnswer)
      return;
    setPendingAnswer(answer);
    realtimeService.answerQuestion((lastQuestion as any).id, answer, () => {
      setPendingAnswer(null);
    });
  };

  const renderStatus = () => {
    if (phase === 'character-select') {
      return {
        tone: 'text-slate-300',
        icon: Clock,
        text: 'Lock your character to start asking',
      };
    }
    if (phase === 'finalize') {
      return {
        tone: 'text-yellow-200',
        icon: Sparkles,
        text: 'Final guesses in progress—Q&A paused',
      };
    }
    if (phase === 'finished') {
      return {
        tone: 'text-slate-300',
        icon: Sparkles,
        text: 'Match finished',
      };
    }
    if (phase === 'playing') {
      if (waitingForAnswer && isMyTurn) {
        return {
          tone: 'text-slate-200',
          icon: Clock,
          text: "Waiting for opponent's answer…",
        };
      }
      if (waitingForAnswer && !isMyTurn) {
        return {
          tone: 'text-amber-200',
          icon: Clock,
          text: 'Answer the incoming question',
        };
      }
      if (!isMyTurn) {
        return {
          tone: 'text-slate-300',
          icon: Clock,
          text: 'Opponent thinking…',
        };
      }
      return {
        tone: 'text-sky-200',
        icon: MessageSquare,
        text: 'Your move—ask something clever',
      };
    }
    return { tone: 'text-slate-300', icon: MessageSquare, text: 'Q&A console' };
  };

  const status = renderStatus();
  const StatusIcon = status.icon;

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-inner shadow-black/30 backdrop-blur">
      {!hideHeader && (
        <div className="mb-5 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <StatusIcon className="h-4 w-4 text-sky-200" />
            <h3 className={`text-sm font-semibold ${status.tone}`}>
              {status.text}
            </h3>
          </div>
          {waitingForAnswer && (
            <div className="flex items-center gap-2 text-xs text-amber-200">
              <Clock className="h-3.5 w-3.5 animate-spin" />
              <span>Answer quickly to avoid giving up an advantage.</span>
            </div>
          )}
        </div>
      )}

      <div
        ref={listRef}
        className="flex max-h-72 flex-col gap-3 overflow-y-auto pr-1"
      >
        <AnimatePresence initial={false}>
          {questions.map((action, index) => {
            const mine = action.playerId === myId;
            const answered =
              typeof (action as any).response !== 'undefined' &&
              (action as any).response !== null;
            const response = (action as any).response;
            const isLatest = index === 0;

            return (
              <motion.div
                key={action.id}
                layout
                initial={{ opacity: 0, y: mine ? 16 : -16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: mine ? -20 : 20, scale: 0.9 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className={`flex flex-col gap-2 ${
                  mine ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`flex items-center gap-2 text-xs uppercase tracking-wide ${
                    mine ? 'text-sky-200' : 'text-purple-200'
                  }`}
                >
                  <span>{mine ? 'You' : 'Opponent'}</span>
                  {isLatest && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/80">
                      Latest
                    </span>
                  )}
                </div>
                <div
                  className={`relative w-full max-w-[90%] rounded-2xl border px-4 py-3 text-sm shadow-md transition ${
                    mine
                      ? 'border-sky-500/30 bg-sky-500/20 text-white'
                      : 'border-purple-500/30 bg-purple-500/15 text-white'
                  }`}
                >
                  <span>{action.content}</span>
                  {!answered && isLatest && !mine && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="absolute -top-3 left-4 rounded-full border border-amber-400/40 bg-amber-500/30 px-2 py-[1px] text-[10px] font-semibold uppercase tracking-wide text-amber-100"
                    >
                      Awaiting answer
                    </motion.div>
                  )}
                </div>
                <div className="w-full max-w-[90%]">
                  {answered ? (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-wide ${
                        response === 'yes'
                          ? 'border-emerald-400/40 bg-emerald-500/20 text-emerald-100'
                          : 'border-rose-400/40 bg-rose-500/20 text-rose-100'
                      }`}
                    >
                      {response === 'yes' ? (
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      ) : (
                        <XCircle className="h-3.5 w-3.5" />
                      )}
                      <span>{String(response).toUpperCase()}</span>
                    </motion.div>
                  ) : mine ? (
                    <span className="text-xs text-slate-400">
                      Waiting for answer…
                    </span>
                  ) : (
                    isLatest && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-xs text-amber-200"
                      >
                        <Clock className="h-3.5 w-3.5 animate-spin" />
                        <span>They&apos;re waiting on you.</span>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
        {questions.length === 0 && (
          <div className="rounded-2xl border border-dashed border-white/10 bg-white/5 p-6 text-center text-sm text-slate-300">
            No questions yet—open the conversation with a sharp yes/no prompt.
          </div>
        )}
      </div>

      <div className="mt-6 space-y-3">
        {phase === 'playing' && waitingForAnswer && !isMyTurn && lastQuestion && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-amber-400/40 bg-amber-500/10 p-4 text-sm text-amber-100"
          >
            <p className="text-xs uppercase tracking-wide text-amber-200">
              Answer now
            </p>
            <p className="mt-1 text-white">{lastQuestion.content}</p>
            <div className="mt-4 flex gap-2">
              <Button
                onClick={() => handleAnswer('yes')}
                disabled={pendingAnswer !== null}
                className="flex-1 rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
              >
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Yes
              </Button>
              <Button
                onClick={() => handleAnswer('no')}
                disabled={pendingAnswer !== null}
                className="flex-1 rounded-full bg-rose-500 text-white hover:bg-rose-600"
              >
                <XCircle className="mr-2 h-4 w-4" />
                No
              </Button>
            </div>
            <p className="mt-2 text-[11px] text-amber-200">
              Respond before the timer ends to avoid granting an advantage.
            </p>
          </motion.div>
        )}

        {phase === 'playing' && isMyTurn && !waitingForAnswer && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-sky-500/30 bg-slate-900/60 p-4"
          >
            <label
              htmlFor="question-input"
              className="text-xs uppercase tracking-wide text-slate-300"
            >
              Ask a yes/no question
            </label>
            <div className="mt-2 flex gap-2">
              <Input
                id="question-input"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Does your hero wield a polearm?"
                className="flex-1 rounded-full border-slate-600 bg-slate-800 text-white placeholder:text-slate-500"
                onKeyDown={(e) => e.key === 'Enter' && handleAskQuestion()}
                disabled={pendingAsk}
              />
              <Button
                onClick={handleAskQuestion}
                disabled={!question.trim() || pendingAsk}
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 text-white hover:bg-sky-600"
              >
                <Send className="h-4 w-4" />
                Send
              </Button>
            </div>
            <p className="mt-2 text-[11px] text-slate-400">
              Smart questions narrow the board faster—make it count.
            </p>
          </motion.div>
        )}

        {phase === 'playing' && waitingForAnswer && isMyTurn && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
          >
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 animate-spin text-slate-200" />
              <span>Waiting for opponent&apos;s answer…</span>
            </div>
          </motion.div>
        )}

        {phase === 'playing' && !isMyTurn && !waitingForAnswer && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
          >
            Waiting for opponent to ask…
          </motion.div>
        )}

        {phase === 'character-select' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
          >
            Lock in your character to start Q&amp;A.
          </motion.div>
        )}
        {phase === 'finalize' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-200"
          >
            Final guesses are being made—questions are disabled.
          </motion.div>
        )}
        {phase === 'finished' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
          >
            Match finished—review the history with your team.
          </motion.div>
        )}
      </div>
    </div>
  );
}
