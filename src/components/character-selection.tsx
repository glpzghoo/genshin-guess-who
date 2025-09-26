'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, Filter, Star, Sword, Loader2 } from 'lucide-react';
import { elements, weapons } from '@/lib/helper';
import * as c from '@/lib/characters';
import Image from 'next/image';
import CharacterCard from './character-card';
import { realtimeService } from '@/lib/realtime-service';
import { useGameStore } from '@/lib/game-store';

export function CharacterSelection({
  onCharacterSelect,
  onReady,
}: {
  onCharacterSelect: (character: Character) => void;
  onReady: () => void;
}) {
  const { gameState } = useGameStore();

  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedElement, setSelectedElement] = useState<string>('all');
  const [selectedWeapon, setSelectedWeapon] = useState<string>('all');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [submitting, setSubmitting] = useState(false);

  const characters = useMemo(() => Object.values(c), []);

  const navigatedRef = useRef(false); // ⬅️ prevents double onReady()

  const bothLocked = useMemo(() => {
    const players = gameState.players ?? [];
    return players.length >= 2 && players.every((p) => !!p.secretCharacter);
  }, [gameState.players]);

  const filteredCharacters = useMemo(() => {
    return characters.filter((character) => {
      const matchesSearch = character.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesElement =
        selectedElement === 'all' || character.element === selectedElement;

      const matchesWeapon =
        selectedWeapon === 'all' || character.weaponType === selectedWeapon;

      const matchesRarity =
        selectedRarity === 'all' ||
        character.rank.toString() === selectedRarity;

      return matchesSearch && matchesElement && matchesWeapon && matchesRarity;
    });
  }, [
    characters,
    searchQuery,
    selectedElement,
    selectedWeapon,
    selectedRarity,
  ]);

  const sortedCharacters = useMemo(
    () => [...filteredCharacters].sort((a, b) => b.release - a.release),
    [filteredCharacters]
  );

  // When server transitions to 'playing', move forward
  useEffect(() => {
    if (navigatedRef.current) return;

    if (gameState.phase === 'playing' || bothLocked) {
      navigatedRef.current = true;
      setSubmitting(false);
      onReady(); // e.g., route to /game
    }
  }, [gameState.phase, bothLocked, onReady]);

  const handleCharacterSelect = (character: Character) => {
    if (submitting) return; // lock while waiting
    setSelectedCharacter(character);
    onCharacterSelect(character);
  };

  const handleReadyClick = () => {
    if (!selectedCharacter || submitting) return;
    localStorage.setItem(
      'selectedCharacter',
      JSON.stringify(selectedCharacter)
    );
    realtimeService.selectCharacter(selectedCharacter.name); // tell server
    setSubmitting(true); // show "Waiting for opponent…"
  };

  const WeaponIcon = selectedCharacter
    ? weapons[selectedCharacter.weaponType].icon
    : Sword;

  return (
    <div className="container mx-auto px-4 py-8 max-w-12xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-balance mb-2">
          Choose Your Secret Character
        </h1>
        <p className="text-muted-foreground">
          {submitting
            ? 'Waiting for opponent to lock in…'
            : 'Select the character your opponent will try to guess'}
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Filters */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Character name..."
                    value={searchQuery}
                    disabled={submitting}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Element</label>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant={selectedElement === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedElement('all')}
                    className="justify-start"
                    disabled={submitting}
                  >
                    All
                  </Button>
                  {Object.entries(elements).map(([element, config]) => {
                    return (
                      <Button
                        key={element}
                        variant={
                          selectedElement === element ? 'default' : 'outline'
                        }
                        size="sm"
                        onClick={() => setSelectedElement(element)}
                        className="justify-start"
                        disabled={submitting}
                      >
                        <Image
                          width={20}
                          height={20}
                          src={`/assets/ui/${config.icon}`}
                          alt={`element-${element}`}
                        />
                        {element}
                      </Button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Weapon</label>
                <div className="space-y-1">
                  <Button
                    variant={selectedWeapon === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedWeapon('all')}
                    className="w-full justify-start"
                    disabled={submitting}
                  >
                    All Weapons
                  </Button>
                  {Object.entries(weapons).map(([weapon, config]) => {
                    const Icon = config.icon;
                    return (
                      <Button
                        key={weapon}
                        variant={
                          selectedWeapon === weapon ? 'default' : 'outline'
                        }
                        size="sm"
                        onClick={() => setSelectedWeapon(weapon)}
                        className="w-full justify-start"
                        disabled={submitting}
                      >
                        <Icon className="h-3 w-3 mr-2" />
                        {config.name}
                      </Button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Rarity</label>
                <div className="flex gap-2">
                  <Button
                    variant={selectedRarity === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedRarity('all')}
                    disabled={submitting}
                  >
                    All
                  </Button>
                  <Button
                    variant={selectedRarity === '4' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedRarity('4')}
                    className="flex items-center gap-1"
                    disabled={submitting}
                  >
                    4<Star className="h-3 w-3" />
                  </Button>
                  <Button
                    variant={selectedRarity === '5' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedRarity('5')}
                    className="flex items-center gap-1"
                    disabled={submitting}
                  >
                    5<Star className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grid */}
        <div className="lg:col-span-2">
          <ScrollArea className="h-[600px]">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-12">
              {sortedCharacters.map((character) => {
                const isSelected = selectedCharacter?.id === character.id;

                return (
                  <Card
                    key={character.id}
                    className={`cursor-pointer transition-all ${
                      isSelected
                        ? 'ring-2 ring-primary glow'
                        : 'hover:scale-105 hover:shadow-lg'
                    } ${submitting ? 'opacity-60 pointer-events-none' : ''}`}
                    onClick={() => handleCharacterSelect(character)}
                  >
                    <CharacterCard character={character} />
                  </Card>
                );
              })}
            </div>
          </ScrollArea>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Selected Character</CardTitle>
              <CardDescription>
                {selectedCharacter
                  ? 'Your secret character'
                  : 'Choose a character to continue'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {selectedCharacter ? (
                <div className="space-y-4">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      fill
                      src={`/assets/ui/${selectedCharacter.icon}.png`}
                      alt={selectedCharacter.name}
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="text-center">
                      <h3 className="text-xl font-bold">
                        {selectedCharacter.name}
                      </h3>
                      <div className="flex items-center justify-center gap-1 mt-1">
                        {Array.from({ length: selectedCharacter.rank }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-accent text-accent"
                            />
                          )
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="capitalize">
                          {selectedCharacter.element}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <WeaponIcon className="h-4 w-4" />
                        <span className="capitalize">
                          {selectedCharacter.weaponType}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-muted-foreground">Region: </span>
                        <span className="capitalize">
                          {selectedCharacter.region}
                        </span>
                      </div>
                    </div>

                    <Button
                      onClick={handleReadyClick}
                      className="w-full shimmer"
                      size="lg"
                      disabled={!selectedCharacter || submitting}
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Waiting for Opponent…
                        </>
                      ) : (
                        'Ready to Play'
                      )}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">
                    Select a character from the grid to see details
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
