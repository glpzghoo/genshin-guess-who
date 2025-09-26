'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sword, Users, Trophy, Star, Crown, Zap } from 'lucide-react';

import { realtimeService } from '@/lib/realtime-service';
import { useGameStore } from '@/lib/game-store';
import axios from 'axios';
import { LobbyProfileHeader } from './LobbyProfileHeader';
import { Profile } from '@/lib/types';

export function GameLobby() {
  const router = useRouter();
  const gameState = useGameStore((s) => s.gameState);

  const [activeTab, setActiveTab] = useState('play');
  const [roomName, setRoomName] = useState('');
  const [isInQueue, setIsInQueue] = useState(false);
  const [queueTime, setQueueTime] = useState(0);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [connected, setConnected] = useState(false);

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
        };
        console.log(p);
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

      // reflect connection status in UI
      const off = realtimeService.onConnectionChange?.((c) => setConnected(c));
      setConnected(realtimeService.getConnectionStatus());
      return () => off?.();
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  // navigate once matched
  useEffect(() => {
    if (
      gameState.phase === 'character-select' ||
      gameState.phase === 'playing'
    ) {
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
  const handleCreateRoom = () => router.push('/character-select');

  // derive display model from profile (works for guest & logged-in)
  const currentPlayer = useMemo(() => {
    const ar = profile?.adventure_rank ?? 1;
    return {
      id: profile?.id ?? 'guest',
      username: profile?.nickname ?? 'Guest',
      adventureRank: ar,
      avatar: profile?.avatar_url ?? '/placeholder.png',
      isOnline: connected,
      wins: profile?.wins ?? 0,
      losses: profile?.losses ?? 0,
    };
  }, [profile, connected]);

  const getRankIcon = (ar: number) => {
    if (ar >= 55) return <Crown className="h-4 w-4 text-accent" />;
    if (ar >= 45) return <Star className="h-4 w-4 text-primary" />;
    if (ar >= 35) return <Zap className="h-4 w-4 text-chart-2" />;
    return <Sword className="h-4 w-4 text-muted-foreground" />;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-balance mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Genshin Guess Who
        </h1>
        <p className="text-muted-foreground text-lg">
          Test your knowledge of Teyvat&lsquo;s finest adventurers
        </p>
      </div>

      {/* Player Profile Card */}
      {profile && (
        <Card className="mb-6 glow">
          <LobbyProfileHeader profile={profile} connected={connected} />
        </Card>
      )}

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="play" className="flex items-center gap-2">
            <Sword className="h-4 w-4" />
            Play
          </TabsTrigger>
          <TabsTrigger value="rooms" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Rooms
          </TabsTrigger>
          <TabsTrigger value="leaderboard" className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            Leaderboard
          </TabsTrigger>
        </TabsList>

        <TabsContent value="play" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Quick Match */}
            <Card className="float">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" />
                  Quick Match
                </CardTitle>
                <CardDescription>
                  Jump into a game with players of similar skill level
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!isInQueue ? (
                  <Button
                    onClick={handleFindMatch}
                    className="w-full shimmer"
                    size="lg"
                    disabled={!connected}
                  >
                    {connected ? 'Find Match' : 'Connecting…'}
                  </Button>
                ) : (
                  <div className="text-center space-y-2">
                    <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto" />
                    <p className="text-sm text-muted-foreground">
                      Searching for opponents… {queueTime}s
                    </p>
                    <Button
                      variant="outline"
                      onClick={handleCancelQueue}
                      size="sm"
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Create Room */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Create Room
                </CardTitle>
                <CardDescription>
                  Set up a custom game with your friends
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="room-name">Room Name</Label>
                  <Input
                    id="room-name"
                    placeholder="Enter room name..."
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                  />
                </div>
                <Button
                  className="w-full bg-transparent"
                  variant="outline"
                  onClick={handleCreateRoom}
                >
                  Create Room
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Game Modes */}
          <Card>
            <CardHeader>
              <CardTitle>Game Modes</CardTitle>
              <CardDescription>
                Choose your preferred way to play
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Sword className="h-4 w-4" />
                    Classic
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Traditional guess-who gameplay with all characters
                  </p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Blitz
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fast-paced matches with time limits
                  </p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Trophy className="h-4 w-4" />
                    Ranked
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Competitive matches that affect your Adventure Rank
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rooms" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Active Rooms</h2>
            <Button
              variant="outline"
              onClick={() => {
                /* TODO: socket 'rooms:list' */
              }}
            >
              Refresh
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-accent" />
                Top Adventurers
              </CardTitle>
              <CardDescription>
                The most skilled players in Teyvat
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    rank: 1,
                    username: 'ArchonSlayer',
                    ar: 60,
                    wins: 342,
                    losses: 23,
                  },
                  {
                    rank: 2,
                    username: 'VisionHunter',
                    ar: 59,
                    wins: 298,
                    losses: 45,
                  },
                  {
                    rank: 3,
                    username: 'ElementalMaster',
                    ar: 58,
                    wins: 267,
                    losses: 38,
                  },
                  {
                    rank: 4,
                    username: currentPlayer.username,
                    ar: currentPlayer.adventureRank,
                    wins: currentPlayer.wins,
                    losses: currentPlayer.losses,
                  },
                ].map((player) => (
                  <div
                    key={player.rank}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                        {player.rank}
                      </div>
                      <div>
                        <p className="font-semibold">{player.username}</p>
                        <p className="text-sm text-muted-foreground">
                          AR {player.ar}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {(() => {
                          const total =
                            (player.wins ?? 0) + (player.losses ?? 0);
                          return total
                            ? Math.round(((player.wins ?? 0) / total) * 100)
                            : 0;
                        })()}
                        % WR
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {player.wins}W / {player.losses}L
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
