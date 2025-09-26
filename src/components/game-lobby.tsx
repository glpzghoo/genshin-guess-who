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
import { Sword, Users, Trophy, Star, Crown, Zap, Loader2 } from 'lucide-react';

import { realtimeService } from '@/lib/realtime-service';
import { useGameStore } from '@/lib/game-store';
import axios from 'axios';
import { LobbyProfileHeader } from './LobbyProfileHeader';
import { Profile } from '@/lib/types';
import Header from './Header';
import CustomLobby from './room/CustomLobby';
import RoomsList from './room/RoomsList';
import Leaderboard from './leaderboard';

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

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <Header />

      {/* Player Profile Card */}
      {profile ? (
        <Card className="mb-6 glow">
          <LobbyProfileHeader profile={profile} connected={connected} />
        </Card>
      ) : (
        <div className=" flex justify-center items-center gap-2 min-h-24">
          <Loader2 className=" animate-spin" />
          Please wait...
        </div>
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
            <CustomLobby />
          </div>
        </TabsContent>

        <TabsContent value="rooms" className="space-y-4">
          <RoomsList />
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-4">
          <Leaderboard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
