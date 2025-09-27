'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TurnTimer } from '@/components/turn-timer';
import { ConnectionStatus } from '@/components/connection-status';
import { LiveNotifications } from '@/components/live-notifications';
import { useGameStore } from '@/lib/game-store';
import * as c from '@/lib/characters';
import Image from 'next/image';
import { realtimeService } from '@/lib/realtime-service';
import { FinalResultDialog } from './final-result-dialog';
import { MobileQASheet } from './mobile-qa-sheet';
import { DesktopQACollapsible } from './desktop-qa-collapsible';
import SelectCharacter from './SelectCharacter';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CharactersTable from './CharactersTable';
import { ElimOrder, sortByEliminated } from '@/lib/sort-characters';
import LeaveConfirm from './LeaveConfirm';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';

const data = Object.values(c);
type InGameCharacters = Character & { isEliminated: boolean };

export function GameBoard() {
  const router = useRouter();
  const { gameState } = useGameStore(); // server drives this via state:update
  const resetGame = useGameStore((s: any) => s.resetGame);
  const [characters, setCharacters] = useState<InGameCharacters[]>([]);
  const [isConnected, setIsConnected] = useState(
    typeof window !== 'undefined'
      ? realtimeService.getConnectionStatus()
      : false
  );
  const [selectedCharacter, setSelectedCharacter] =
    useState<InGameCharacters | null>(null);
  const [mySecretCharacter, setMySecretCharacter] = useState<Character | null>(
    null
  );
  const [elimOrder, setElimOrder] = useState<ElimOrder>('asc');
  const viewCharacters = useMemo(
    () => sortByEliminated(characters, elimOrder, 'release'),
    [characters, elimOrder]
  );
  // --- helpers ---
  const parseJSON = <T,>(s: string | null, fallback: T): T => {
    try {
      return s ? (JSON.parse(s) as T) : fallback;
    } catch {
      return fallback;
    }
  };
  const matchId = (gameState as any).id || gameState.gameId || 'no-match';
  const LS_KEY = `characters-ingame:${matchId}`;
  const SECRET_KEY = `selectedCharacter:${matchId}`;
  const persist = (next: InGameCharacters[]) => {
    const sorted = [...next].sort((a, b) => b.release - a.release);
    setCharacters(sorted);
    localStorage.setItem(LS_KEY, JSON.stringify(sorted));
  };

  // Seed local list & my secret character
  useEffect(() => {
    const saved = parseJSON<InGameCharacters[]>(
      localStorage.getItem(LS_KEY),
      []
    );
    if (saved.length > 0) {
      setCharacters(saved);
    } else {
      persist(data.map((d) => ({ ...d, isEliminated: false })));
    }
    const storedSecret = localStorage.getItem('selectedCharacter');
    if (storedSecret) setMySecretCharacter(JSON.parse(storedSecret));
  }, []);

  useEffect(() => {
    const saved = parseJSON<InGameCharacters[]>(
      localStorage.getItem(LS_KEY),
      []
    );
    if (saved.length > 0) setCharacters(saved);
    else persist(data.map((d) => ({ ...d, isEliminated: false })));

    const storedSecret = localStorage.getItem(SECRET_KEY);
    if (storedSecret) setMySecretCharacter(JSON.parse(storedSecret));
    // re-seed again whenever matchId changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [LS_KEY, SECRET_KEY]);

  useEffect(() => {
    const off = realtimeService.onAdvantage(({ count }) => {
      setCharacters((curr) => {
        if (!curr.length) return curr;

        const secret = (mySecretCharacter?.name ?? '').toLowerCase();
        const active = curr.filter(
          (c) => !c.isEliminated && c.name.toLowerCase() !== secret
        );

        if (!active.length) return curr;

        // choose how many to prune (advantage)
        const pct = Math.floor(active.length * 0.15); // 15%
        const n = Math.min(
          Math.max(count ?? pct, 3), // at least 3
          Math.min(10, active.length) // cap at 10 (or fewer if not enough)
        );

        const pool = [...active];
        const toEliminate = new Set<string | number>();
        for (let i = 0; i < n; i++) {
          const idx = Math.floor(Math.random() * pool.length);
          const chosen = pool.splice(idx, 1)[0];
          toEliminate.add(chosen.id as any);
        }

        const next = curr.map((c) =>
          toEliminate.has(c.id as any) ? { ...c, isEliminated: true } : c
        );
        const sorted = [...next].sort((a, b) => b.release - a.release);
        localStorage.setItem(LS_KEY, JSON.stringify(sorted));
        return sorted;
      });

      // Optional: local system log
      realtimeService.addSystemLog?.(
        'Timeout advantage: auto-eliminated candidates.'
      );
    });

    return off;
  }, [mySecretCharacter]);

  useEffect(() => {
    // keep in sync with socket connection state
    const unsubscribe = realtimeService.onConnectionChange((connected) => {
      setIsConnected(connected);
    });
    // also set initial once (in case connect fired before mount)
    setIsConnected(realtimeService.getConnectionStatus());
    return unsubscribe;
  }, [realtimeService.getConnectionStatus()]);

  // If the selected character becomes eliminated (e.g., via right-click) while the dialog is open, close it.
  useEffect(() => {
    if (selectedCharacter?.isEliminated) {
      setSelectedCharacter(null);
    }
  }, [selectedCharacter?.isEliminated]);

  // Optional: close the dialog when the phase changes (e.g., finalize/finished)
  useEffect(() => {
    if (gameState.phase !== 'playing' && gameState.phase !== 'finalize') {
      setSelectedCharacter(null);
    }
  }, [gameState.phase]);

  // Toggle eliminate/restore → emit to server (optimistic UI)
  const toggleElimination = useCallback(
    (id: string | number) => {
      const current = characters.find((c) => c.id === id);
      if (!current) return;
      const nowEliminated = !current.isEliminated;

      const next = characters
        .map((ch) =>
          ch.id === id ? { ...ch, isEliminated: nowEliminated } : ch
        )
        .sort((a, b) => b.release - a.release);

      setCharacters(next);
      localStorage.setItem(LS_KEY, JSON.stringify(next));

      if (selectedCharacter?.id === id && nowEliminated) {
        setSelectedCharacter(null);
      }
    },
    [characters, selectedCharacter?.id /* lsKey in scope (see below) */]
  );

  const handleDoubleClick = (character: InGameCharacters) => {
    if (character.isEliminated) return;
    setSelectedCharacter(character);
  };

  const handleMakeGuess = () => {
    if (!selectedCharacter) return;

    realtimeService.finalGuess(selectedCharacter.name, (ok) => {
      if (!ok) {
        // Log quick context so we know why server refused
        const s = useGameStore.getState().gameState;
        console.warn('[guess rejected]', {
          phase: s.phase,
          currentTurn: s.currentTurn,
          myId: realtimeService.getSelfId?.(),
          name: selectedCharacter.name,
        });
      }
    });
  };
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
    router.push('/');
  };

  const activeCharacters = characters.filter((c) => !c.isEliminated);
  const eliminatedCharacters = characters.filter((c) => c.isEliminated);

  const myId = realtimeService.getSelfId() ?? 'current-user';
  const canGuess =
    gameState.phase === 'finalize' || gameState.currentTurn === myId;

  return (
    <div className="px-4 py-6 ">
      <FinalResultDialog />
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href={'/'}>
            <h1 className="text-2xl font-bold text-white">Genshin Guess Who</h1>
          </Link>
          <Badge
            variant={
              gameState.currentTurn === 'current-user' ? 'default' : 'secondary'
            }
          >
            {gameState.currentTurn === myId ? 'Your Turn' : "Opponent's Turn"}
          </Badge>
          <Badge variant="outline" className="text-slate-300">
            {gameState.phase}
          </Badge>
        </div>
        <LeaveConfirm onGoHome={onGoHome} />

        <div className="flex items-center gap-4">
          <ConnectionStatus isConnected={isConnected} />
          <div className="flex items-center gap-4 text-slate-300 text-sm">
            <span>
              Round: {Math.floor(gameState.gameHistory.length / 2) + 1}
            </span>
            <span>
              Questions:{' '}
              {
                gameState.gameHistory.filter((a) => a.type === 'question')
                  .length
              }
            </span>
          </div>
        </div>
      </div>
      <LiveNotifications />
      <TurnTimer />
      {gameState.phase === 'finalize' && (
        <div className="mb-4 rounded-lg  bg-yellow-500/10 text-yellow-300 px-3 py-2">
          Opponent has locked a final guess. Pick your final guess to conclude
          the match.
        </div>
      )}

      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card className="backdrop-blur-sm  bg-secondary">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-white">
                <span>Character Board</span>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <div className="flex justify-between gap-2 text-sm text-slate-300">
                    <span>Active Characters:</span>
                    <span className="font-semibold text-white">
                      {activeCharacters.length}
                    </span>
                  </div>
                  <div className="flex justify-between gap-2 text-sm text-slate-300">
                    <span>Eliminated:</span>
                    <span className="font-semibold text-red-400">
                      {eliminatedCharacters.length}
                    </span>
                  </div>
                  <div className="flex justify-between gap-2 text-sm text-slate-300">
                    <span>Questions Asked:</span>
                    <span className="font-semibold text-blue-400">
                      {
                        gameState.gameHistory.filter(
                          (m) => m.type === 'question'
                        ).length
                      }
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setElimOrder((o) => (o === 'asc' ? 'desc' : 'asc'))
                    }
                  >
                    {elimOrder === 'asc'
                      ? 'Eliminated first'
                      : 'Eliminated last'}
                  </Button>
                </div>
              </CardTitle>
              <CardDescription className="text-slate-400">
                Click once to eliminate/restore • Right-click to guess
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div
                className="grid gap-3"
                style={{
                  gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
                }}
              >
                <CharactersTable
                  characters={viewCharacters}
                  selectedCharacter={selectedCharacter}
                  toggleElimination={toggleElimination}
                  handleDoubleClick={handleDoubleClick}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          {mySecretCharacter && (
            <Card className="backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-sm text-white">
                  Your Secret Character
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="aspect-square mb-2 relative overflow-hidden rounded-lg">
                    <img
                      src={`/assets/ui/${mySecretCharacter.icon}.png`}
                      alt={mySecretCharacter.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-white">
                    {mySecretCharacter.name}
                  </h3>
                </div>
              </CardContent>
            </Card>
          )}

          {/* NEW right sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-4 lg:sticky lg:top-4 max-h-[calc(100vh-2rem)] overflow-y-auto pr-1">
              {/* Q&A first = most prominent */}
              <DesktopQACollapsible />
            </div>
          </div>
          {selectedCharacter && !selectedCharacter.isEliminated && (
            <Dialog
              open={!!selectedCharacter}
              onOpenChange={(isOpen) => {
                if (!isOpen) setSelectedCharacter(null);
              }}
            >
              <DialogContent>
                <DialogTitle>{selectedCharacter.name}</DialogTitle>
                {/* Only render the content if the selection is valid (not eliminated) */}
                {selectedCharacter && !selectedCharacter.isEliminated ? (
                  <SelectCharacter
                    key={selectedCharacter.id} // ensures fresh content when selecting a different char
                    selectedCharacter={selectedCharacter}
                    canGuess={canGuess}
                    handleMakeGuess={() => {
                      handleMakeGuess();
                      // close the dialog after guessing
                      setSelectedCharacter(null);
                    }}
                  />
                ) : null}
              </DialogContent>
            </Dialog>
          )}
        </div>

        {/* OLD (remove this) */}
        {/* 
<div className="lg:col-span-1 fixed bottom-56 right-1/2 min-h-56 left-1/2 w-1/2 -translate-y-1/2 -translate-x-1/2">
  <QuestionPanel />
</div>
*/}
        <MobileQASheet />
      </div>
    </div>
  );
}
