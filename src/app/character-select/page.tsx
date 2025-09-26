'use client';

import { useState } from 'react';
import { CharacterSelection } from '@/components/character-selection';
import { useRouter } from 'next/navigation';

export default function CharacterSelectPage() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const router = useRouter();

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character);
  };

  const handleReady = () => {
    if (selectedCharacter) {
      localStorage.setItem(
        'selectedCharacter',
        JSON.stringify(selectedCharacter)
      );
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
