'use client';

import { useEffect, useRef, useState } from 'react';
import { useGameStore } from '@/lib/game-store';
import { realtimeService } from '@/lib/realtime-service';

export function TurnTimer() {
  const gameState = useGameStore((s) => s.gameState);

  // local smooth countdown (UI only)
  const [timeLeft, setTimeLeft] = useState<number>(
    gameState.timeRemaining ?? 60
  );

  // prevent multiple emits when hitting 0
  const timeoutEmittedRef = useRef(false);

  // When phase/currentTurn/timeRemaining changes, reset local timer + allow another emit
  useEffect(() => {
    if (gameState.phase !== 'playing') return;

    setTimeLeft(gameState.timeRemaining ?? 60);
    timeoutEmittedRef.current = false;

    const id = window.setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => window.clearInterval(id);
  }, [gameState.phase, gameState.currentTurn, gameState.timeRemaining]);

  // When 0 is reached, tell the server to advance the turn
  useEffect(() => {
    if (gameState.phase !== 'playing') return;
    if (timeLeft !== 0) return;
    if (timeoutEmittedRef.current) return;

    timeoutEmittedRef.current = true;
  }, [timeLeft, gameState.phase]);

  if (gameState.phase !== 'playing') return null;

  const currentPlayer = gameState.players.find(
    (p) => p.id === gameState.currentTurn
  );
  const progress = (timeLeft / 60) * 100;

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-sm font-bold text-white">
              {(currentPlayer?.name ?? '?').charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <p className="text-white font-medium">
              {currentPlayer?.name ?? 'Player'}’s Turn
            </p>
            {/** If you don’t have adventureRank on the server, hide this or provide it */}
            {/** currentPlayer?.adventureRank && (
              <p className="text-slate-400 text-sm">AR {currentPlayer.adventureRank}</p>
            ) */}
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-white">{timeLeft}s</p>
          <p className="text-slate-400 text-sm">Time remaining</p>
        </div>
      </div>

      <div className="w-full bg-slate-700 rounded-full h-2">
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
