'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useGameStore } from '@/lib/game-store';
import { realtimeService } from '@/lib/realtime-service';
import { Send, MessageSquare, Clock } from 'lucide-react';

export function QuestionPanel() {
  const gameState = useGameStore((s) => s.gameState);

  const [question, setQuestion] = useState('');
  const [pendingAsk, setPendingAsk] = useState(false);
  const [pendingAnswer, setPendingAnswer] = useState<null | 'yes' | 'no'>(null);

  // who am I?
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

  const lastQuestion = useMemo(
    () =>
      [...gameState.gameHistory].reverse().find((a) => a.type === 'question'),
    [gameState.gameHistory]
  );
  const waitingForAnswer =
    !!lastQuestion && typeof (lastQuestion as any).response === 'undefined';

  const handleAskQuestion = () => {
    const text = question.trim();
    if (!text || !currentPlayer || !isMyTurn || pendingAsk) return;

    setPendingAsk(true);
    setQuestion('');
    realtimeService.askQuestion(text, () => setPendingAsk(false));
  };

  const handleAnswer = (answer: 'yes' | 'no') => {
    if (!lastQuestion || (lastQuestion as any).response || pendingAnswer)
      return;
    setPendingAnswer(answer);
    realtimeService.answerQuestion((lastQuestion as any).id, answer, () => {
      setPendingAnswer(null);
    });
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="w-5 h-5 text-blue-400" />
        <h3 className="text-white font-semibold">Questions &amp; Answers</h3>
        {waitingForAnswer && (
          <div className="flex items-center gap-1 text-yellow-400">
            <Clock className="w-4 h-4 animate-spin" />
            <span className="text-xs">Waiting...</span>
          </div>
        )}
      </div>

      <div className="space-y-3 mb-4 max-h-40 overflow-y-auto">
        {gameState.gameHistory
          .filter((a) => a.type === 'question')
          .slice(-3)
          .map((action) => (
            <div key={action.id} className="bg-slate-700/50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-blue-400 font-medium">
                  {action.playerName}:
                </span>
              </div>
              <p className="text-white text-sm mb-2">{action.content}</p>
              {typeof (action as any).response !== 'undefined' ? (
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 text-sm">Answer:</span>
                  <span
                    className={`text-sm font-medium ${
                      (action as any).response === 'yes'
                        ? 'text-green-400'
                        : 'text-red-400'
                    }`}
                  >
                    {String((action as any).response).toUpperCase()}
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                  <span className="text-yellow-400 text-sm">
                    Waiting for answer...
                  </span>
                </div>
              )}
            </div>
          ))}
      </div>

      {/* Opponent answers */}
      {waitingForAnswer && !isMyTurn && lastQuestion && (
        <div className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <p className="text-yellow-400 text-sm mb-3">
            Answer {lastQuestion.playerName}'s question:
          </p>
          <p className="text-white mb-3">"{lastQuestion.content}"</p>
          <div className="flex gap-2">
            <Button
              onClick={() => handleAnswer('yes')}
              disabled={pendingAnswer !== null}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Yes
            </Button>
            <Button
              onClick={() => handleAnswer('no')}
              disabled={pendingAnswer !== null}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              No
            </Button>
          </div>
        </div>
      )}

      {/* I ask */}
      {isMyTurn && !waitingForAnswer && (
        <div className="space-y-3">
          <div className="flex gap-2">
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a yes/no question…"
              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
              onKeyDown={(e) => e.key === 'Enter' && handleAskQuestion()}
              disabled={pendingAsk}
            />
            <Button
              onClick={handleAskQuestion}
              disabled={!question.trim() || pendingAsk}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-slate-400 text-xs">
            Ask yes/no questions to narrow down your opponent&apos;s character
          </p>
        </div>
      )}

      {/* My waiting indicator */}
      {waitingForAnswer && isMyTurn && (
        <div className="text-center py-4">
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <Clock className="w-4 h-4 animate-spin" />
            <p>Waiting for opponent&apos;s answer...</p>
          </div>
        </div>
      )}
    </div>
  );
}
