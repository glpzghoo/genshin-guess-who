'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Profile } from '@/lib/types';
import { getRankIcon } from '@/lib/helpers';
import { calcARProgressFromSchema } from '@/lib/ar';
import { LogoutButton } from '@/components/auth/logout-button';
import { useGameStore } from '@/lib/game-store';

export function LobbyProfileHeader({ profile }: { profile: Profile | null }) {
  const connection = useGameStore((s) => s.connection);
  const currentPlayer = useMemo(() => {
    if (!profile) {
      return {
        nickname: 'Guest',
        avatar_url: '/assets/ui/UI_AvatarIcon_PlayerGirl.png',
        adventure_rank: 1,
        exp: 0,
        wins: 0,
        losses: 0,
      };
    }
    return {
      nickname: profile.nickname,
      avatar_url:
        profile.avatar_url ?? '/assets/ui/UI_AvatarIcon_PlayerGirl.png',
      adventure_rank: profile.adventure_rank ?? 1,
      exp: profile.exp ?? 0,
      wins: profile.wins ?? 0,
      losses: profile.losses ?? 0,
    };
  }, [profile]);

  const winrate = useMemo(() => {
    const total = (currentPlayer.wins ?? 0) + (currentPlayer.losses ?? 0);
    return total ? Math.round((currentPlayer.wins / total) * 100) : 0;
  }, [currentPlayer.wins, currentPlayer.losses]);

  const ar = calcARProgressFromSchema({
    adventureRank: currentPlayer.adventure_rank,
    exp: currentPlayer.exp,
  });

  return (
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        {/* Left: avatar + stats */}
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-primary">
            <AvatarImage
              src={currentPlayer.avatar_url}
              alt={currentPlayer.nickname}
            />
            <AvatarFallback>
              {currentPlayer.nickname?.[0]?.toUpperCase() ?? 'U'}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">
                {currentPlayer.nickname}
              </h2>
              {getRankIcon(ar.level)}
              {ar.mismatched && !profile?.guest && (
                <span className="text-xs text-yellow-500 ml-1">(syncing)</span>
              )}
            </div>
            {!profile?.guest && (
              <>
                <p className="text-muted-foreground">
                  Adventure Rank {ar.level}
                </p>
                <div className="flex gap-4 mt-1">
                  <span className="text-sm text-chart-2">
                    {currentPlayer.wins}W
                  </span>
                  <span className="text-sm text-destructive">
                    {currentPlayer.losses}L
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {winrate}% WR
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
        {!profile?.guest && `MMR: ${profile?.mmr ?? 0}`}
        {/* Right: status + AR progress + auth controls */}
        <div className="text-right">
          <Badge
            variant={
              connection === 'connected'
                ? 'default'
                : connection === 'connecting'
                  ? 'secondary'
                  : 'outline'
            }
            className="mb-2 flex items-center gap-2"
          >
            <span
              className={[
                'w-2 h-2 rounded-full',
                connection === 'connected'
                  ? 'bg-emerald-500'
                  : connection === 'connecting'
                    ? 'bg-amber-500 animate-pulse' // or your 'bg-chart-2'
                    : 'bg-slate-400',
              ].join(' ')}
            />
            {connection === 'connecting'
              ? 'Connecting…'
              : connection === 'connected'
                ? 'Online'
                : 'Offline'}
          </Badge>
          {!profile?.guest && (
            <>
              <Progress value={ar.percent} className="w-32" />
              <p className="text-xs text-muted-foreground mt-1">{ar.label}</p>
            </>
          )}

          {/* Auth controls */}
          <div className="mt-3 flex items-center justify-end gap-2">
            {!profile?.guest ? (
              <LogoutButton />
            ) : (
              <>
                <Link href="/login">
                  <Button size="sm" variant="outline">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm">Register</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </CardContent>
  );
}
