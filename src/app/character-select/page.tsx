'use client';

import { useState } from 'react';
import { CharacterSelection } from '@/components/character-selection';
import { useRouter } from 'next/navigation';
import { useGameStore } from '@/lib/game-store';

export default function CharacterSelectPage() {
  const { gameState } = useGameStore(); // server drives this via state:update
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const router = useRouter();

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character);
  };
  const matchId = (gameState as any).id || gameState.gameId || 'no-match';
  const SECRET_KEY = `selectedCharacter:${matchId}`;
  const handleReady = () => {
    if (selectedCharacter) {
      localStorage.setItem(SECRET_KEY, JSON.stringify(selectedCharacter));
      router.push('/game');
    }
  };

  return (
    <main className="min-h-screen bg-background flex items-center">
      <CharacterSelection
        onCharacterSelect={handleCharacterSelect}
        onReady={handleReady}
      />
    </main>
  );
}
