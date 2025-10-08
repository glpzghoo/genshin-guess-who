'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TurnTimer } from '@/components/turn-timer';
import { ConnectionStatus } from '@/components/connection-status';
import { LiveNotifications } from '@/components/live-notifications';
import { useGameStore } from '@/lib/game-store';
import * as c from '@/lib/character_db/characters';
import { realtimeService } from '@/lib/realtime-service';
import { FinalResultDialog } from './final-result-dialog';
import { MobileQASheet } from './mobile-qa-sheet';
import { DesktopQACollapsible } from './desktop-qa-collapsible';
import SelectCharacter from './SelectCharacter';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ElimOrder, sortByEliminated } from '@/lib/sort-characters';
import LeaveConfirm from './LeaveConfirm';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import CharactersTable from './CharactersTable';

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
  const [isSubmittingGuess, setIsSubmittingGuess] = useState(false);
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

    // only save small fields
    const lightData = sorted.map(({ VL, ...rest }) => rest);
    localStorage.setItem(LS_KEY, JSON.stringify(lightData));
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

  useEffect(() => {
    if (!selectedCharacter) {
      setIsSubmittingGuess(false);
    }
  }, [selectedCharacter]);

  const handleMakeGuess = useCallback(() => {
    if (!selectedCharacter || isSubmittingGuess) return;

    const guessName = selectedCharacter.name;
    setIsSubmittingGuess(true);

    try {
      realtimeService.finalGuess(guessName, (ok) => {
        if (ok === false) {
          // Log quick context so we know why server refused
          const s = useGameStore.getState().gameState;
          console.warn('[guess rejected]', {
            phase: s.phase,
            currentTurn: s.currentTurn,
            myId: realtimeService.getSelfId?.(),
            name: guessName,
          });
          setIsSubmittingGuess(false);
          return;
        }

        setSelectedCharacter(null);
        setIsSubmittingGuess(false);
      });
    } catch (err) {
      console.error('[guess failed]', err);
      setIsSubmittingGuess(false);
    }
  }, [selectedCharacter, isSubmittingGuess]);
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
    <div className="relative flex min-h-screen flex-col overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.35),transparent_60%)] opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.28),transparent_65%)] opacity-80" />

      <div className="relative z-10 px-4 py-4 flex-1 overflow-hidden">
        <div className="flex w-full px-36 flex-col gap-4 h-full overflow-hidden">
          <FinalResultDialog />

          <section className="rounded-3xl border border-white/12 bg-black/35 px-6 py-8 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <Link href="/">
                  <h1 className="text-3xl font-bold leading-tight text-white">
                    Genshin Guess Who
                  </h1>
                </Link>
                <p className="mt-2 max-w-2xl text-sm text-white/70">
                  Deduce the opponent&apos;s character faster than they can
                  unveil yours. Ask smart questions, watch their eliminations,
                  and lock in a final guess when you are sure.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-end gap-3">
                <Badge className="bg-white/10 border border-white/20 text-white capitalize">
                  {gameState.phase}
                </Badge>
                <Badge className="bg-white/10 border border-white/20 text-white">
                  {gameState.currentTurn === myId
                    ? 'Your turn'
                    : "Opponent's turn"}
                </Badge>
                <LeaveConfirm onGoHome={onGoHome} />
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-4 backdrop-blur">
                <div className="text-xs uppercase tracking-wide text-white/60">
                  Round
                </div>
                <div className="mt-1 text-2xl font-semibold text-white">
                  {Math.floor(gameState.gameHistory.length / 2) + 1}
                </div>
                <div className="mt-2 text-xs text-white/70">
                  Questions asked:{' '}
                  {
                    gameState.gameHistory.filter((m) => m.type === 'question')
                      .length
                  }
                </div>
              </div>

              <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-4 backdrop-blur">
                <div className="text-xs uppercase tracking-wide text-white/60">
                  Board status
                </div>
                <div className="mt-2 flex items-center gap-4 text-white">
                  <div>
                    <div className="text-lg font-semibold">
                      {activeCharacters.length}
                    </div>
                    <div className="text-xs text-white/70">Active</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-rose-300">
                      {eliminatedCharacters.length}
                    </div>
                    <div className="text-xs text-white/70">Eliminated</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-4 backdrop-blur flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-wide text-white/60">
                    Connection
                  </div>
                  <ConnectionStatus isConnected={isConnected} />
                </div>
                <div className="rounded-xl border border-white/10 bg-black/25 px-3 py-3 text-center">
                  <TurnTimer />
                </div>
                {gameState.phase === 'finalize' && (
                  <div className="rounded-xl border border-yellow-400/30 bg-yellow-500/20 px-3 py-2 text-xs text-yellow-100">
                    Opponent has locked a final guess. Pick yours to wrap up the
                    match.
                  </div>
                )}
              </div>
            </div>
          </section>

          <LiveNotifications />

          <div className="flex gap-6 overflow-hidden">
            <section className="flex-2 overflow-auto rounded-3xl border border-white/12 bg-black/30 p-6 backdrop-blur">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    Character board
                  </h2>
                  <p className="text-sm text-white/70">
                    Left-click to eliminate or restore · Right-click to open
                    guess panel
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setElimOrder((o) => (o === 'asc' ? 'desc' : 'asc'))
                    }
                    className="border border-white/20 bg-white/10 text-white hover:bg-white/20"
                  >
                    {elimOrder === 'asc'
                      ? 'Show eliminated first'
                      : 'Show eliminated last'}
                  </Button>
                </div>
              </div>

              <div
                className="mt-5 grid gap-3"
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
            </section>

            <section className="flex-1 gap-6 flex-row">
              {mySecretCharacter && (
                <div className="rounded-3xl border border-white/12 bg-white/10 px-6 py-6 backdrop-blur">
                  <div className="text-xs uppercase tracking-wide text-white/60">
                    Your secret character
                  </div>
                  <div className="mt-4 text-center">
                    <div className="relative mx-auto mb-3 aspect-square w-40 overflow-hidden rounded-2xl border border-white/12 bg-black/30">
                      <img
                        src={`/assets/ui/${mySecretCharacter.icon}.png`}
                        alt={mySecretCharacter.name}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {mySecretCharacter.name}
                    </h3>
                    <div className="mt-2 text-xs uppercase tracking-wide text-white/60">
                      {mySecretCharacter.element} •{' '}
                      {mySecretCharacter.weaponType}
                    </div>
                  </div>
                </div>
              )}

              <DesktopQACollapsible />
            </section>
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
                {selectedCharacter && !selectedCharacter.isEliminated ? (
                  <SelectCharacter
                    key={selectedCharacter.id}
                    selectedCharacter={selectedCharacter}
                    canGuess={canGuess}
                    isSubmitting={isSubmittingGuess}
                    handleMakeGuess={handleMakeGuess}
                  />
                ) : null}
              </DialogContent>
            </Dialog>
          )}

          <MobileQASheet />
        </div>
      </div>
    </div>
  );
}
