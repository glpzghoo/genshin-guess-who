'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useGameStore } from '@/lib/game-store';
import { realtimeService } from '@/lib/realtime-service';
import CharacterCard from './character-card';
import * as allChars from '@/lib/character_db/characters';
import { Check } from 'lucide-react';

type CharacterType = Character;

export function FinalResultDialog() {
  const router = useRouter();
  const { gameState } = useGameStore();
  const resetGame = useGameStore((s: any) => s.resetGame);

  const [open, setOpen] = useState(false);
  const [shownFor, setShownFor] = useState<string | null>(null);

  const myId = realtimeService.getSelfId() ?? '';
  const matchId = (gameState as any).id || gameState.gameId || '';

  useEffect(() => {
    if (gameState.phase === 'finished' && matchId && shownFor !== matchId) {
      setOpen(true);
      setShownFor(matchId);
    }
  }, [gameState.phase, matchId, shownFor]);

  const lastGuesses = useMemo(
    () => gameState.gameHistory.filter((a) => a.type === 'guess').slice(-2),
    [gameState.gameHistory]
  );

  const fr = gameState.finalResult;

  const all = useMemo(() => Object.values(allChars) as CharacterType[], []);
  const findChar = (name?: string | null): CharacterType | null => {
    if (!name) return null;
    const q = name.trim().toLowerCase();
    return all.find((c) => c.name.toLowerCase() === q) ?? null;
  };

  const rows = useMemo(() => {
    if (fr) {
      return [
        {
          label: fr.a.playerId === myId ? 'You' : 'Opponent',
          correct: !!fr.a.correct,
          character: findChar(fr.a.secret),
          secretName: fr.a.secret,
        },
        {
          label: fr.b.playerId === myId ? 'You' : 'Opponent',
          correct: !!fr.b.correct,
          character: findChar(fr.b.secret),
          secretName: fr.b.secret,
        },
      ];
    }
    const a = lastGuesses[0];
    const b = lastGuesses[1];
    const out: Array<{
      label: string;
      correct: boolean | undefined;
      character: CharacterType | null;
      secretName: string | undefined;
    }> = [];
    if (a) {
      out.push({
        label: a.playerId === myId ? 'You' : 'Opponent',
        correct: (a as any).correct,
        character: findChar(a.content),
        secretName: a.content,
      });
    }
    if (b) {
      out.push({
        label: b.playerId === myId ? 'You' : 'Opponent',
        correct: (b as any).correct,
        character: findChar(b.content),
        secretName: b.content,
      });
    }
    return out;
  }, [fr, lastGuesses, myId, all]);

  const tie =
    fr?.tie ??
    (lastGuesses.length === 2 &&
      !!(lastGuesses[0] as any)?.correct &&
      !!(lastGuesses[1] as any)?.correct);

  const didIWin =
    typeof fr?.winner !== 'undefined'
      ? fr?.winner && fr.winner === myId
      : gameState.winner && gameState.winner === myId;

  const heading = tie ? 'Draw' : didIWin ? 'You win!' : 'You lose.';

  const onGoHome = () => {
    (realtimeService as any).leaveRoom?.();
    (realtimeService as any).cancelMatch?.();
    try {
      localStorage.removeItem('characters-ingame');
      localStorage.removeItem('selectedCharacter');
      if (matchId) {
        localStorage.removeItem(`characters-ingame:${matchId}`);
        localStorage.removeItem(`selectedCharacter:${matchId}`);
      }
    } catch {}
    if (typeof resetGame === 'function') {
      resetGame();
    } else {
      useGameStore.setState({
        gameState: {
          gameId: '',
          players: [],
          currentTurn: '',
          phase: 'waiting',
          eliminatedCharacters: [],
          gameHistory: [],
          timeRemaining: 60,
          winner: undefined,
          finalizeActive: false,
          finalResult: undefined,
        },
      } as any);
    }
    setOpen(false);
    router.push('/');
  };

  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle
            className={`text-xl ${didIWin ? 'text-green-500' : 'text-red-500'}`}
          >
            {heading}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          {rows.map((r, idx) => (
            <div
              key={`${r.label}-${idx}`}
              className="rounded-lg border border-slate-700 bg-slate-800/50 p-3"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-white">{r.label}</p>
                {typeof r.correct === 'boolean' && (
                  <Badge
                    className={
                      r.correct
                        ? 'bg-green-600 hover:bg-green-600'
                        : 'bg-red-600 hover:bg-red-600'
                    }
                  >
                    {r.correct ? 'Correct' : 'Incorrect'}
                  </Badge>
                )}
              </div>

              {r.character ? (
                <div className=" relative">
                  <CharacterCard character={r.character} />
                  <Check className=" bg-green-600 absolute bottom-12 right-4 rounded-2xl" />
                </div>
              ) : (
                <div className="rounded-md bg-slate-900/50 p-4 text-sm text-slate-300">
                  {r.secretName ? (
                    <>
                      <span className="text-slate-400">Character: </span>
                      <span className="font-medium">{r.secretName}</span>
                      <p className="mt-1 text-xs text-slate-500">
                        (No card found for this name)
                      </p>
                    </>
                  ) : (
                    <span className="text-slate-400">
                      Character not available.
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* quick summary uses You/Opponent */}
        {lastGuesses.length > 0 && (
          <div className="mt-4 rounded-lg bg-slate-800/40 p-3">
            {lastGuesses.map((g) => {
              const label = g.playerId === myId ? 'You' : 'Opponent';
              return (
                <div
                  key={g.id}
                  className="flex items-center justify-between py-1 text-sm"
                >
                  <span className="text-slate-300">
                    {label} guessed{' '}
                    <span className="font-semibold text-white">
                      {g.content}
                    </span>
                  </span>
                  {typeof (g as any).correct !== 'undefined' && (
                    <span
                      className={`ml-2 font-semibold ${
                        (g as any).correct ? 'text-green-400' : 'text-red-400'
                      }`}
                    >
                      {(g as any).correct ? 'Correct' : 'Incorrect'}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <DialogFooter>
          <Button className="w-full" onClick={onGoHome}>
            Go Home
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
