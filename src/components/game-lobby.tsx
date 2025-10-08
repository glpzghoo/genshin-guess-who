'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Star, Crown, Loader2, Sparkles } from 'lucide-react';

import { realtimeService } from '@/lib/realtime-service';
import { useGameStore } from '@/lib/game-store';
import axios from 'axios';
import { LobbyProfileHeader } from './LobbyProfileHeader';
import { Profile } from '@/lib/types';
import CustomLobby from './room/CustomLobby';
import RoomsList from './room/RoomsList';
import Leaderboard from './leaderboard';
import { getDailyKey, getDailyShowcaseCharacters } from '@/lib/daily-challenge';

export function GameLobby() {
  const router = useRouter();
  const gameState = useGameStore((s) => s.gameState);
  const connection = useGameStore((s) => s.connection);

  const [isInQueue, setIsInQueue] = useState(false);
  const [queueTime, setQueueTime] = useState(0);
  const [profile, setProfile] = useState<Profile | null>(null);
  const dailyKey = useMemo(() => getDailyKey(), []);
  const dailyShowcase = useMemo(
    () => getDailyShowcaseCharacters(new Date(), 3),
    []
  );

  // queue timer
  const queueTimerRef = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const response = await axios.get('/api/auth');

      if (response.data.ok) {
        const user = response.data.user;

        const p: Profile = {
          id: user.id,
          nickname: user?.nickname ?? 'Traveler',
          avatar_url: user?.avatar_url ?? null,
          adventure_rank: user?.adventureRank ?? 45,
          wins: user?.wins ?? 0,
          losses: user?.losses ?? 0,
          exp: user.exp ?? 0,
          guest: !!user.guest,
          mmr: user.mmr ?? 0,
        };
        setProfile(p);

        // 3) Connect using JWT (authoritative identity from server)
        realtimeService.connect(
          response.data.token,
          p.id,
          p.nickname || 'Traveler'
        );
      } else {
        // Guest fallback — get (or mint) a nickname, then ask your API to mint a GUEST JWT
        let pid = localStorage.getItem('guest_player_id');
        if (!pid) {
          pid = crypto.randomUUID();
          localStorage.setItem('guest_player_id', pid);
        }
        let nick = localStorage.getItem('guest_nickname');
        if (!nick) {
          nick = `Guest-${pid.slice(-4)}`;
          localStorage.setItem('guest_nickname', nick);
        }

        setProfile({
          id: pid,
          nickname: nick,
          avatar_url: null,
          adventure_rank: 35,
          wins: 0,
          losses: 0,
          exp: 0,
          mmr: 0,
        });

        // IMPORTANT: replace this with your real endpoint that returns a JWT signed with your server's JWT_SECRET
        // The token's payload should include: { sub: pid, nick: nick, guest: true, ver: 1, mmr: 1000 }
        try {
          const resp = await fetch('/api/auth/guest', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: pid, nickname: nick }),
          });
          const { token } = await resp.json();
          if (token) {
            realtimeService.connect(token, pid, nick);
          }
        } catch {
          // If token fetch fails, leave disconnected; UI shows "Connecting…" disabled state
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  // navigate once matched
  useEffect(() => {
    if (gameState.phase === 'playing') {
      setIsInQueue(false);
      stopQueueTimer();
      router.push('/game');
    } else if (gameState.phase === 'character-select') {
      setIsInQueue(false);
      stopQueueTimer();
      router.push('/character-select');
    }
  }, [gameState.phase, router]);

  useEffect(() => () => stopQueueTimer(), []);

  const startQueueTimer = () => {
    if (queueTimerRef.current) window.clearInterval(queueTimerRef.current);
    setQueueTime(0);
    queueTimerRef.current = window.setInterval(
      () => setQueueTime((s) => s + 1),
      1000
    );
  };
  const stopQueueTimer = () => {
    if (queueTimerRef.current) {
      window.clearInterval(queueTimerRef.current);
      queueTimerRef.current = null;
    }
  };

  const handleFindMatch = () => {
    if (!realtimeService.getConnectionStatus()) return;
    realtimeService.findMatch();
    setIsInQueue(true);
    startQueueTimer();
  };
  const handleCancelQueue = () => {
    setIsInQueue(false);
    stopQueueTimer();
    setQueueTime(0);
    // server supports 'match:cancel'
    realtimeService.cancelMatch?.();
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.42),transparent_60%)] opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.32),transparent_65%)] opacity-80" />

      <div className="relative z-10">
        <div className="container mx-auto max-w-6xl px-4 py-10 space-y-12">
          {/* Hero */}
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-6">
              <Card className="rounded-3xl border border-white/12 bg-white/10 text-white backdrop-blur">
                {profile ? (
                  <LobbyProfileHeader profile={profile} />
                ) : (
                  <CardContent className="flex min-h-[160px] items-center justify-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span className="text-sm text-white/80">
                      Loading profile…
                    </span>
                  </CardContent>
                )}
              </Card>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">Solo</h2>
                </div>
              </div>
              <div className="rounded-3xl border border-white/12 bg-black/35 px-6 py-5 backdrop-blur space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-300" />
                  Spotlight playlist
                </div>
                <p className="text-sm text-white/70">
                  Bored of PvP? Switch to solo challenges to sharpen your
                  deduction skills before your next duel.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-white/10 border border-white/20 text-white">
                    Daily reset 00:00 UTC
                  </Badge>
                  <Badge className="bg-white/10 border border-white/20 text-white">
                    Endless streak tracking
                  </Badge>
                </div>
                <div className="grid gap-3 text-xs uppercase tracking-wide text-white/65 sm:grid-cols-3">
                  {/* <div className="rounded-xl border border-white/12 bg-white/8 p-4">
                  <div className="text-[11px]">Players in lobby</div>
                  <div className="mt-1 text-lg font-semibold text-white">
                    {gameState.players.length || 0}
                  </div>
                </div> */}
                  <div className="rounded-xl border border-white/12 bg-white/8 p-4">
                    <div className="text-[11px]">Daily puzzle</div>
                    <div className="mt-1 text-lg font-semibold text-white">
                      #{dailyKey.replace(/-/g, '')}
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/12 bg-white/8 p-4">
                    <div className="text-[11px]">Mode</div>
                    <div className="mt-1 text-lg font-semibold text-white flex items-center gap-1">
                      <Star className="h-4 w-4 text-amber-300" />
                      Solo
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="secondary"
                    className="flex-1 border border-white/25 bg-white/12 text-white hover:bg-white/25"
                  >
                    <Link href="/daily">Play Daily</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border border-white/25 bg-transparent text-white hover:bg-white/10"
                  >
                    <Link href="/endless">Play Endless</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Multiplayer tools */}
          <section className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Multiplayer</h2>
                <p className="text-sm text-white/70">
                  Build custom lobbies or join public rooms while you wait for
                  friends.
                </p>
              </div>
            </div>
            <section className="rounded-3xl border border-white/12 bg-black/35 px-8 py-10 shadow-2xl backdrop-blur-xl space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-white/10 border border-white/25 uppercase tracking-[0.4em] text-xs text-white/80">
                  Arena
                </Badge>
                <Badge className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-100 flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  {connection === 'connected'
                    ? 'Servers online'
                    : connection === 'connecting'
                      ? 'Reconnecting…'
                      : 'Offline'}
                </Badge>
              </div>
              <h1 className="text-4xl font-bold md:text-5xl leading-tight">
                Queue up for Guess Who battles
              </h1>
              <p className="text-white/75 text-base md:text-lg max-w-2xl">
                Match with adventurers worldwide, ask the right questions, and
                be the first to name the mystery hero. Warm up solo or dive
                straight into realtime duels.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                {!isInQueue ? (
                  <>
                    <Button
                      onClick={handleFindMatch}
                      disabled={connection !== 'connected'}
                      className="h-12 sm:w-48 border-0 text-base font-semibold shadow-lg transition hover:scale-[1.02]"
                      style={{
                        backgroundImage:
                          'linear-gradient(120deg, rgba(59,130,246,0.95) 0%, rgba(236,72,153,0.92) 45%, rgba(79,70,229,0.95) 100%)',
                      }}
                    >
                      {connection === 'connecting'
                        ? 'Connecting…'
                        : connection === 'connected'
                          ? 'Find Match'
                          : 'Disconnected'}
                    </Button>
                  </>
                ) : (
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
                      <Loader2 className="h-5 w-5 animate-spin text-white" />
                      <div>
                        <div className="text-sm font-semibold">
                          Searching for opponents…
                        </div>
                        <div className="text-xs text-white/70">
                          {queueTime}s elapsed
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="secondary"
                      className="h-12 sm:w-32 border border-white/25 bg-white/15 text-white hover:bg-white/25"
                      onClick={handleCancelQueue}
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </div>

              <div className="grid gap-3 text-xs uppercase tracking-wide text-white/65 sm:grid-cols-3">
                {/* <div className="rounded-xl border border-white/12 bg-white/8 p-4">
                  <div className="text-[11px]">Players in lobby</div>
                  <div className="mt-1 text-lg font-semibold text-white">
                    {gameState.players.length || 0}
                  </div>
                </div> */}

                <div className="rounded-xl border border-white/12 bg-white/8 p-4">
                  <div className="text-[11px]">Mode</div>
                  <div className="mt-1 text-lg font-semibold text-white flex items-center gap-1">
                    <Star className="h-4 w-4 text-amber-300" />
                    Multiplayer
                  </div>
                </div>
              </div>
            </section>

            <div className="grid gap-6 lg:grid-cols-[1.15fr,0.85fr]">
              <div className="rounded-3xl border border-white/12 bg-black/35 p-6 backdrop-blur">
                <div className="flex items-center gap-2 text-white">
                  <Users className="h-5 w-5 text-sky-300" />
                  <h3 className="text-lg font-semibold">
                    Create a custom room
                  </h3>
                </div>
                <p className="mt-2 text-sm text-white/70">
                  Lock the lobby for your party, set a password, and choose the
                  vibe before anyone joins.
                </p>
                <div className="mt-5">
                  <CustomLobby />
                </div>
              </div>
              <div className="rounded-3xl border border-white/12 bg-black/35 p-6 backdrop-blur">
                <RoomsList />
              </div>
            </div>
          </section>

          {/* Leaderboard */}
          <section className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  <Crown className="h-5 w-5 text-amber-300" />
                  Leaderboard
                </h2>
                <p className="text-sm text-white/70">
                  The top detectives in Teyvat this week.
                </p>
              </div>
              <Button
                asChild
                variant="secondary"
                className="border border-white/25 bg-white/10 text-white hover:bg-white/20"
              >
                <Link href="/leaderboard">View full board</Link>
              </Button>
            </div>
            <div className="rounded-3xl border border-white/12 bg-black/35 p-6 backdrop-blur">
              <Leaderboard />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
