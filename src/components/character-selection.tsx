'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Search,
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
  Filter,
} from 'lucide-react';
import * as c from '@/lib/character_db/characters';
import CharacterCard from './character-card';
import { realtimeService } from '@/lib/realtime-service';
import { useGameStore } from '@/lib/game-store';
import { useRouter } from 'next/navigation';
import { CharacterFiltersState } from './CharacterFilters';
import { elements, weapons } from '@/lib/helper';

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
  const [filters, setFilters] = useState<CharacterFiltersState>({
    search: '',
    element: 'all',
    weapon: 'all',
    rarity: 'all',
  });
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [myId, setMyId] = useState<string | null>(null);

  useEffect(() => {
    try {
      setMyId(localStorage.getItem('user_id'));
    } catch {}
  }, []);

  const characters = useMemo(() => Object.values(c) as Character[], []);
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

  const navigatedRef = useRef(false);
  useEffect(() => {
    if (navigatedRef.current) return;
    if (gameState?.phase === 'playing' || bothLocked) {
      navigatedRef.current = true;
      setSubmitting(false);
      onReady();
    }
  }, [gameState?.phase, bothLocked, onReady]);

  const filteredCharacters = useMemo(() => {
    return characters.filter((character) => {
      const matchesSearch = character.name
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      const matchesElement =
        filters.element === 'all' || character.element === filters.element;
      const matchesWeapon =
        filters.weapon === 'all' || character.weaponType === filters.weapon;
      const matchesRarity =
        filters.rarity === 'all' ||
        character.rank.toString() === filters.rarity;
      return matchesSearch && matchesElement && matchesWeapon && matchesRarity;
    });
  }, [characters, filters]);

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

  const copyInvite = () => {
    const code = (gameState as any)?.inviteCode;
    if (!code) return;
    navigator.clipboard
      ?.writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      })
      .catch(() => {});
  };

  const leaveRoom = () => {
    realtimeService.leaveRoom?.();
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
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl border border-white/15 bg-white/10 flex items-center justify-center">
              <Users className="h-5 w-5 text-sky-300" />
            </div>
            <div>
              <div className="text-lg font-semibold leading-none text-white">
                {name}
              </div>
              <div className="text-xs uppercase tracking-wide text-white/60">
                {players.length}/2 players ·{' '}
                {isCustom ? 'Custom room' : 'Matchmaking lobby'}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Badge className="flex items-center gap-2 bg-white/10 border border-white/20 text-white">
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
                variant="secondary"
                size="sm"
                onClick={copyInvite}
                className="gap-2 border border-white/20 bg-white/10 text-white hover:bg-white/20"
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
              className="gap-2 text-rose-300 hover:text-rose-200"
            >
              <LogOut className="h-4 w-4" /> Leave
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const PlayersStatus = () => {
    const StatusPill = ({
      text,
      active,
    }: {
      text: string;
      active?: boolean;
    }) => (
      <span
        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] uppercase tracking-wide ${
          active
            ? 'bg-emerald-500/15 text-emerald-200 border border-emerald-400/40'
            : 'bg-amber-500/15 text-amber-200 border border-amber-400/40'
        }`}
      >
        {text}
      </span>
    );

    return (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/12 bg-white/10 px-5 py-4 backdrop-blur flex items-center gap-4">
          <div className="h-11 w-11 rounded-2xl bg-white/15 flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-base font-semibold text-white truncate">
              {me?.name ?? 'You'}
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <StatusPill
                text={me?.hasPicked ? 'Locked in' : 'Picking…'}
                active={me?.hasPicked}
              />
              <StatusPill
                text={me?.isConnected ? 'Online' : 'Offline'}
                active={me?.isConnected}
              />
            </div>
            <div className="mt-2 text-xs uppercase tracking-wide text-white/60">
              Role: You
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/12 bg-white/10 px-5 py-4 backdrop-blur flex items-center gap-4">
          <div className="h-11 w-11 rounded-2xl bg-white/15 flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-base font-semibold text-white truncate">
              {opp?.name ?? 'Waiting for opponent'}
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <StatusPill
                text={opp?.hasPicked ? 'Locked in' : 'Picking…'}
                active={opp?.hasPicked}
              />
              <StatusPill
                text={opp?.isConnected ? 'Online' : 'Offline'}
                active={opp?.isConnected}
              />
            </div>
            <div className="mt-2 text-xs uppercase tracking-wide text-white/60">
              Role: Opponent
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.35),transparent_60%)] opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.28),transparent_65%)] opacity-80" />

      <div className="relative z-10 w-full justify-items-center">
        <div className="space-y-6 w-8/12">
          <RoomTopBar />

          {inRoomAlone && (
            <div className="rounded-2xl border border-white/12 bg-white/10 px-5 py-4 text-sm text-white/80 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-semibold text-white">
                  Waiting for an opponent…
                </div>
                <div className="text-white/70">
                  Share the invite link or keep this tab open—the match starts
                  once both players lock in.
                </div>
              </div>
              {(gameState as any)?.inviteCode && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={copyInvite}
                  className="gap-2 border border-white/20 bg-white/10 text-white hover:bg-white/20"
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copied ? 'Copied!' : 'Copy Invite'}
                </Button>
              )}
            </div>
          )}

          <PlayersStatus />
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-center px-4 py-10 gap-10 w-8/12 mx-auto">
          <section className="w-full lg:w-1/2">
            <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
              {/* Right-hand preview & lock-in */}
              <div className="rounded-2xl border border-white/12 bg-white/10 px-6 py-6 backdrop-blur space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-wide text-white/60">
                    {selectedCharacter
                      ? 'Your secret pick'
                      : 'Choose your secret hero'}
                  </div>
                  {selectedCharacter && (
                    <div className="flex items-center gap-1 text-xs text-white/70">
                      Release{' '}
                      {new Date(
                        selectedCharacter.release * 1000
                      ).getUTCFullYear()}
                    </div>
                  )}
                </div>

                <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/12 bg-black/30">
                  {selectedCharacter ? (
                    <img
                      src={`/assets/ui/${selectedCharacter.icon}.png`}
                      alt={selectedCharacter.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/60">
                      <Search className="h-8 w-8" />
                      <span className="text-sm">
                        Pick a character from the roster
                      </span>
                    </div>
                  )}
                </div>

                {selectedCharacter && (
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white text-center">
                        {selectedCharacter.name}
                      </h3>
                      <div className="mt-2 flex items-center justify-center gap-1 text-amber-200">
                        {Array.from({ length: selectedCharacter.rank }).map(
                          (_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          )
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-wide text-white/70">
                      <div className="rounded-xl border border-white/10 bg-black/25 px-3 py-2">
                        Element
                        <div className="mt-1 text-sm font-semibold text-white">
                          {selectedCharacter.element}
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-black/25 px-3 py-2">
                        Weapon
                        <div className="mt-1 text-sm font-semibold text-white flex items-center gap-2">
                          <WeaponIcon className="h-4 w-4" />
                          {selectedCharacter.weaponType}
                        </div>
                      </div>
                      <div className="col-span-2 rounded-xl border border-white/10 bg-black/25 px-3 py-2">
                        Region
                        <div className="mt-1 text-sm font-semibold text-white">
                          {selectedCharacter.region}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handleReadyClick}
                  disabled={!selectedCharacter || submitting}
                  className="w-full border-0 text-base font-semibold shadow-lg transition hover:scale-[1.02]"
                  style={{
                    backgroundImage:
                      'linear-gradient(120deg, rgba(59,130,246,0.95) 0%, rgba(236,72,153,0.95) 45%, rgba(129,140,248,0.95) 100%)',
                  }}
                >
                  {submitting
                    ? 'Waiting for opponent…'
                    : selectedCharacter
                      ? 'Lock in character'
                      : 'Select a character'}
                </Button>
              </div>
            </div>
          </section>

          {/* Roster */}
          <section className="w-full lg:w-1/2">
            <div className="rounded-3xl border border-white/12 bg-black/30 p-6 backdrop-blur">
              <div className="flex items-center justify-between gap-3 text-sm text-white/70">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Choose your secret character
                  </h3>
                  <p>
                    Newest recruits appear first. Click to preview and lock in.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-white/10 border border-white/20 text-white">
                    {sortedCharacters.length} results
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 border border-white/20 bg-white/10 text-white hover:bg-white/20"
                      >
                        <Filter className="h-4 w-4" />
                        Filters
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-80 space-y-4 border-white/20 bg-slate-950/95 p-4 text-white shadow-xl backdrop-blur-md"
                    >
                      <div className="grid gap-2">
                        <span className="text-xs uppercase tracking-wide text-white/60">
                          Search
                        </span>
                        <Input
                          placeholder="Search by name…"
                          value={filters.search}
                          onChange={(e) =>
                            setFilters((f) => ({
                              ...f,
                              search: e.target.value,
                            }))
                          }
                          disabled={submitting}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-sky-400"
                        />
                      </div>

                      <div className="grid gap-2">
                        <span className="text-xs uppercase tracking-wide text-white/60">
                          Element
                        </span>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, element: 'all' }))
                            }
                            disabled={submitting}
                            className={`justify-start border border-white/15 bg-transparent text-white/80 hover:bg-white/10 ${
                              filters.element === 'all'
                                ? 'bg-white/20 text-white'
                                : ''
                            }`}
                          >
                            All
                          </Button>
                          {Object.entries(elements).map(([element, config]) => (
                            <Button
                              key={element}
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                setFilters((f) => ({ ...f, element }))
                              }
                              disabled={submitting}
                              className={`justify-start border border-white/15 bg-transparent text-white/80 hover:bg-white/10 ${
                                filters.element === element
                                  ? 'bg-white/20 text-white'
                                  : ''
                              }`}
                            >
                              <img
                                width={20}
                                height={20}
                                src={`/assets/ui/${(config as any).icon}`}
                                alt={`element-${element}`}
                                className="mr-2"
                              />
                              {element}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <span className="text-xs uppercase tracking-wide text-white/60">
                          Weapon
                        </span>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, weapon: 'all' }))
                            }
                            disabled={submitting}
                            className={`justify-start border border-white/15 bg-transparent text-white/80 hover:bg-white/10 ${
                              filters.weapon === 'all'
                                ? 'bg-white/20 text-white'
                                : ''
                            }`}
                          >
                            All
                          </Button>
                          {Object.entries(weapons).map(([weaponKey, config]) => {
                            const Icon = (config as any).icon ?? Sword;
                            return (
                              <Button
                                key={weaponKey}
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  setFilters((f) => ({
                                    ...f,
                                    weapon: weaponKey,
                                  }))
                                }
                                disabled={submitting}
                                className={`justify-start border border-white/15 bg-transparent text-white/80 hover:bg-white/10 ${
                                  filters.weapon === weaponKey
                                    ? 'bg-white/20 text-white'
                                    : ''
                                }`}
                              >
                                <Icon className="mr-2 h-3 w-3" />
                                {(config as any).name ?? weaponKey}
                              </Button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <span className="text-xs uppercase tracking-wide text-white/60">
                          Rarity
                        </span>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, rarity: 'all' }))
                            }
                            disabled={submitting}
                            className={`border border-white/15 bg-transparent text-white/80 hover:bg-white/10 ${
                              filters.rarity === 'all'
                                ? 'bg-white/20 text-white'
                                : ''
                            }`}
                          >
                            All
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, rarity: '4' }))
                            }
                            disabled={submitting}
                            className={`flex items-center gap-1 border border-white/15 bg-transparent text-white/80 hover:bg-white/10 ${
                              filters.rarity === '4'
                                ? 'bg-white/20 text-white'
                                : ''
                            }`}
                          >
                            4<Star className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, rarity: '5' }))
                            }
                            disabled={submitting}
                            className={`flex items-center gap-1 border border-white/15 bg-transparent text-white/80 hover:bg-white/10 ${
                              filters.rarity === '5'
                                ? 'bg-white/20 text-white'
                                : ''
                            }`}
                          >
                            5<Star className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <ScrollArea className="mt-6 h-[60vh] pr-4">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                  {sortedCharacters.map((character) => {
                    const isSelected = selectedCharacter?.id === character.id;
                    return (
                      <Card
                        key={character.id}
                        className={`cursor-pointer overflow-hidden border border-white/10 bg-white/10 text-white transition ${
                          isSelected
                            ? 'ring-2 ring-sky-300 shadow-lg shadow-sky-500/40'
                            : 'hover:border-white/30 hover:bg-white/15'
                        } ${submitting ? 'pointer-events-none opacity-60' : ''}`}
                        onClick={() => handleCharacterSelect(character)}
                      >
                        <CharacterCard character={character} />
                      </Card>
                    );
                  })}
                </div>
              </ScrollArea>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
