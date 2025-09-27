'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useGameStore } from '@/lib/game-store';
import { realtimeService } from '@/lib/realtime-service';

export function TurnTimer() {
  const gameState = useGameStore((s) => s.gameState);

  const [timeLeft, setTimeLeft] = useState<number>(
    gameState.timeRemaining ?? 60
  );
  const timeoutEmittedRef = useRef(false);

  const myId = realtimeService.getSelfId();
  const currentPlayer = useMemo(() => {
    if (!gameState.currentTurn) return undefined;
    return gameState.players.find((p) => p.id === gameState.currentTurn);
  }, [gameState.players, gameState.currentTurn]);
  const isMyTurn = !!myId && !!currentPlayer && currentPlayer.id === myId;

  useEffect(() => {
    if (gameState.phase !== 'playing') return;

    setTimeLeft(gameState.timeRemaining ?? 60);
    timeoutEmittedRef.current = false;

    const id = window.setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => window.clearInterval(id);
  }, [gameState.phase, gameState.currentTurn, gameState.timeRemaining]);

  useEffect(() => {
    if (gameState.phase !== 'playing') return;
    if (timeLeft !== 0) return;
    if (timeoutEmittedRef.current) return;
    timeoutEmittedRef.current = true;
    // server advances the turn; client just shows 0
  }, [timeLeft, gameState.phase]);

  if (
    gameState.phase !== 'playing' ||
    !gameState.currentTurn ||
    !currentPlayer
  ) {
    return null;
  }

  const title = isMyTurn ? 'Your Turn' : "Opponent's Turn";
  const circleInitial = isMyTurn ? 'Y' : 'O';
  const progress = (timeLeft / 60) * 100;

  return (
    <div className=" backdrop-blur-sm rounded-lg p-4 mb-4 bg-secondary">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-muted-foreground flex items-center justify-center">
            <span className="text-sm font-bold text-white">
              {circleInitial}
            </span>
          </div>
          <div>
            <p className="text-white font-medium">{title}</p>
            {currentPlayer.adventureRank ? (
              <p className="text-slate-400 text-sm">
                AR {currentPlayer.adventureRank}
              </p>
            ) : null}
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-white">{timeLeft}s</p>
          <p className="text-slate-400 text-sm">Time remaining</p>
        </div>
      </div>

      <div className="w-full rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${
            timeLeft > 10
              ? 'bg-green-500'
              : timeLeft > 5
                ? 'bg-yellow-500'
                : 'bg-red-500'
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
