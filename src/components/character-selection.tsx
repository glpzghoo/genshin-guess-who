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
import {
  Search,
  Filter,
  Star,
  Sword,
  Copy,
  Check,
  LinkIcon,
  LogOut,
  User,
  Users,
  Wifi,
  WifiOff,
  Loader2,
} from 'lucide-react';
import { elements, weapons } from '@/lib/helper';
import * as c from '@/lib/character_db/characters';
import Image from 'next/image';
import CharacterCard from './character-card';
import { realtimeService } from '@/lib/realtime-service';
import { useGameStore } from '@/lib/game-store';
import { useRouter } from 'next/navigation';

export function CharacterSelection({
  onCharacterSelect,
  onReady,
}: {
  onCharacterSelect: (character: Character) => void;
  onReady: () => void;
}) {
  const router = useRouter();
  const { gameState } = useGameStore();
  const connection = useGameStore((s) => s.connection);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedElement, setSelectedElement] = useState<string>('all');
  const [selectedWeapon, setSelectedWeapon] = useState<string>('all');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [submitting, setSubmitting] = useState(false);

  const [copied, setCopied] = useState(false);
  const [myId, setMyId] = useState<string | null>(null);

  // pick up your id the same way you store it on connect
  useEffect(() => {
    try {
      setMyId(localStorage.getItem('user_id'));
    } catch {}
  }, []);

  const characters = useMemo(() => Object.values(c), []);
  const players = gameState?.players || [];
  const me = useMemo(
    () => players.find((p: any) => p.id === myId),
    [players, myId]
  );
  const opp = useMemo(
    () => players.find((p: any) => p && p.id !== myId),
    [players, myId]
  );

  const bothLocked = useMemo(
    () => players.length >= 2 && players.every((p: any) => !!p.secretCharacter),
    [players]
  );
  const inRoomAlone = useMemo(() => players.length < 2, [players]);

  // Navigation to /game once both have locked (or phase flips to playing)
  const navigatedRef = useRef(false);
  useEffect(() => {
    if (navigatedRef.current) return;
    if (gameState.phase === 'playing' || bothLocked) {
      navigatedRef.current = true;
      setSubmitting(false);
      onReady();
    }
  }, [gameState.phase, bothLocked, onReady]);

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

  const handleCharacterSelect = (character: Character) => {
    if (submitting) return;
    setSelectedCharacter(character);
    onCharacterSelect(character);
  };

  const handleReadyClick = () => {
    if (!selectedCharacter || submitting) return;
    try {
      localStorage.setItem(
        'selectedCharacter',
        JSON.stringify(selectedCharacter)
      );
    } catch {}
    realtimeService.selectCharacter(selectedCharacter.name);
    setSubmitting(true);
  };

  const copyInvite = async () => {
    const code = (gameState as any)?.inviteCode;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  };

  const leaveRoom = () => {
    realtimeService.leaveRoom?.(); // add method below if you don't have it
    // As a fallback, emit directly:
    realtimeService.socket?.emit('room:leave');
    router.push('/');
  };

  const WeaponIcon = selectedCharacter
    ? weapons[selectedCharacter.weaponType].icon
    : Sword;

  const RoomTopBar = () => {
    const name = (gameState as any)?.roomName || 'Room';
    const code = (gameState as any)?.inviteCode || null;
    const isCustom = (gameState as any)?.isCustom;
    return (
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:justify-between mb-6">
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5" />
          <div>
            <div className="text-lg font-semibold leading-none">{name}</div>
            <div className="text-xs text-muted-foreground">
              {players.length}/2 players ·{' '}
              {isCustom ? 'Custom' : 'Ranked/Casual'}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge
            variant={connection === 'connected' ? 'default' : 'secondary'}
            className="flex items-center gap-1"
          >
            {connection === 'connected' ? (
              <Wifi className="h-3 w-3" />
            ) : connection === 'connecting' ? (
              <Loader2 className="h-3 w-3 animate-spin" />
            ) : (
              <WifiOff className="h-3 w-3" />
            )}
            {connection === 'connected'
              ? 'Connected'
              : connection === 'connecting'
                ? 'Reconnecting…'
                : 'Disconnected'}
          </Badge>

          {code && (
            <Button
              variant="outline"
              size="sm"
              onClick={copyInvite}
              className="gap-2"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <LinkIcon className="h-4 w-4" />
              )}
              {copied ? 'Copied' : `Invite: ${code}`}
            </Button>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={leaveRoom}
            className="gap-2 text-destructive"
          >
            <LogOut className="h-4 w-4" /> Leave
          </Button>
        </div>
      </div>
    );
  };

  const PlayersStatus = () => {
    const Stat = ({
      label,
      value,
      ok,
    }: {
      label: string;
      value: string;
      ok?: boolean;
    }) => (
      <div className="text-sm">
        <span className="text-muted-foreground">{label}: </span>
        <span
          className={`font-medium ${ok === false ? 'text-muted-foreground' : ''}`}
        >
          {value}
        </span>
      </div>
    );

    const pill = (text: string, ok?: boolean) => (
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${
          ok
            ? 'bg-emerald-600/10 text-emerald-600'
            : 'bg-amber-600/10 text-amber-600'
        }`}
      >
        {text}
      </span>
    );

    return (
      <div className="grid md:grid-cols-2 gap-3 mb-6">
        <Card>
          <CardContent className="py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <div className="font-medium truncate">{me?.name ?? 'You'}</div>
              <div className="flex items-center gap-2">
                {pill(me?.hasPicked ? 'Locked' : 'Picking…', me?.hasPicked)}
                {pill(me?.isConnected ? 'Online' : 'Offline', me?.isConnected)}
              </div>
              <div className="mt-1">
                <Stat label="Role" value="You" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <div className="font-medium truncate">
                {opp?.name ?? 'Waiting for opponent'}
              </div>
              <div className="flex items-center gap-2">
                {pill(opp?.hasPicked ? 'Locked' : 'Picking…', opp?.hasPicked)}
                {pill(
                  opp?.isConnected ? 'Online' : 'Offline',
                  opp?.isConnected
                )}
              </div>
              <div className="mt-1">
                <Stat label="Role" value="Opponent" ok />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-12xl">
      <RoomTopBar />

      {/* Context banner */}
      {inRoomAlone && (
        <div className="mb-6 rounded-lg  p-4 text-sm flex items-center justify-between">
          <div>
            <div className="font-medium">Waiting for an opponent…</div>
            <div className="text-muted-foreground">
              Share the invite to bring a friend, or keep this tab open to wait.
            </div>
          </div>
          {(gameState as any)?.inviteCode && (
            <Button
              variant="outline"
              size="sm"
              onClick={copyInvite}
              className="gap-2"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {copied ? 'Copied' : 'Copy Invite'}
            </Button>
          )}
        </div>
      )}

      <PlayersStatus />

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
                        <img
                          width={20}
                          height={20}
                          src={`/assets/ui/${config.icon}`}
                          alt={`element-${element}`}
                          className="mr-2"
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
                    <img
                      src={`/assets/ui/${selectedCharacter.icon}.png`}
                      alt={selectedCharacter.name}
                      className="absolute inset-0 h-full w-full object-cover"
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
                      {submitting ? 'Waiting for Opponent…' : 'Ready to Play'}
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
