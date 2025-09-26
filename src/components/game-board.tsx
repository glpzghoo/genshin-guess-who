'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TurnTimer } from '@/components/turn-timer';
import { QuestionPanel } from '@/components/question-panel';
import { ConnectionStatus } from '@/components/connection-status';
import { LiveNotifications } from '@/components/live-notifications';
import { useGameStore } from '@/lib/game-store';
import { Star, Check, Eye, X } from 'lucide-react';
import * as c from '@/lib/characters';
import Image from 'next/image';
import CharacterCard from './character-card';
import { realtimeService } from '@/lib/realtime-service'; // ⬅️ use socket

const data = Object.values(c);

type InGameCharacters = Character & { isEliminated: boolean };
const LS_KEY = 'characters-ingame';

export function GameBoard() {
  const { gameState } = useGameStore(); // server drives this via state:update

  const [characters, setCharacters] = useState<InGameCharacters[]>([]);
  const [selectedCharacter, setSelectedCharacter] =
    useState<InGameCharacters | null>(null);
  const [mySecretCharacter, setMySecretCharacter] = useState<Character | null>(
    null
  );

  // --- helpers ---
  const parseJSON = <T,>(s: string | null, fallback: T): T => {
    try {
      return s ? (JSON.parse(s) as T) : fallback;
    } catch {
      return fallback;
    }
  };
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
    // if your client service exposes .finalGuess:
    realtimeService.finalGuess(selectedCharacter.name);
  };

  const activeCharacters = characters.filter((c) => !c.isEliminated);
  const eliminatedCharacters = characters
    .filter((c) => c.isEliminated)
    .sort((a, b) => b.release - a.release);
  const progress =
    characters.length === 0
      ? 0
      : (eliminatedCharacters.length / characters.length) * 100;

  return (
    <div className="px-4 py-6 bg-slate-900">
      <LiveNotifications />
      <TurnTimer />

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-white">Genshin Guess Who</h1>
          <Badge
            variant={
              gameState.currentTurn === 'current-user' ? 'default' : 'secondary'
            }
          >
            {gameState.currentTurn === 'current-user'
              ? 'Your Turn'
              : "Opponent's Turn"}
          </Badge>
          <Badge variant="outline" className="text-slate-300">
            {gameState.phase}
          </Badge>
        </div>

        <div className="flex items-center gap-4">
          <ConnectionStatus />
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

      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-white">
                <span>Character Board</span>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Eye className="h-4 w-4" />
                  <span>{activeCharacters.length} remaining</span>
                </div>
              </CardTitle>
              <CardDescription className="text-slate-400">
                Click once to eliminate/restore • Double-click to select for
                guess
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div
                className="grid gap-3"
                style={{
                  gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
                }}
              >
                {characters.map((character) => {
                  const isSelected = selectedCharacter?.id === character.id;
                  return (
                    <div key={character.id} className="group">
                      <Card
                        title={
                          character.isEliminated
                            ? 'Click to restore'
                            : 'Click to eliminate'
                        }
                        className={`cursor-pointer transition-all bg-slate-700/50 border-slate-600 ${
                          character.isEliminated
                            ? 'opacity-40 grayscale'
                            : isSelected
                              ? 'ring-2 ring-blue-400 glow scale-[1.02]'
                              : 'hover:scale-105 hover:shadow-lg hover:bg-slate-600/50'
                        }`}
                        onClick={() => toggleElimination(character.id)}
                        onDoubleClick={() => handleDoubleClick(character)}
                      >
                        <CharacterCard character={character} />
                      </Card>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          {mySecretCharacter && (
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-sm text-white">
                  Your Secret Character
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="aspect-square mb-2 relative overflow-hidden rounded-lg">
                    <Image
                      fill
                      src={`/assets/ui/${mySecretCharacter.icon}.png`}
                      alt={mySecretCharacter.name}
                      sizes="220px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-white">
                    {mySecretCharacter.name}
                  </h3>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedCharacter && !selectedCharacter.isEliminated && (
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-sm text-white">
                  Selected: {selectedCharacter.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    fill
                    src={`/assets/ui/${selectedCharacter.icon}.png`}
                    alt={selectedCharacter.name}
                    sizes="220px"
                    className="object-cover"
                  />
                </div>

                <Button
                  onClick={handleMakeGuess}
                  variant="default"
                  size="sm"
                  className="w-full shimmer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  disabled={!selectedCharacter} // ← only require a selection
                >
                  <Check className="h-4 w-4 mr-2" />
                  Final Guess
                </Button>
              </CardContent>
            </Card>
          )}

          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-sm text-white">Game Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm text-slate-300">
                <span>Active Characters:</span>
                <span className="font-semibold text-white">
                  {activeCharacters.length}
                </span>
              </div>
              <div className="flex justify-between text-sm text-slate-300">
                <span>Eliminated:</span>
                <span className="font-semibold text-red-400">
                  {eliminatedCharacters.length}
                </span>
              </div>
              <div className="flex justify-between text-sm text-slate-300">
                <span>Questions Asked:</span>
                <span className="font-semibold text-blue-400">
                  {
                    gameState.gameHistory.filter((m) => m.type === 'question')
                      .length
                  }
                </span>
              </div>
              <Progress value={progress} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 fixed bottom-56 right-1/2 min-h-56 left-1/2 w-1/2 -translate-y-1/2 -translate-x-1/2">
          <QuestionPanel />
        </div>
      </div>
    </div>
  );
}
