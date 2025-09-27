'use client';

import { Badge } from '@/components/ui/badge';
import { Wifi, WifiOff, Users } from 'lucide-react';
import { useGameStore } from '@/lib/game-store';

export function ConnectionStatus({ isConnected }: { isConnected: boolean }) {
  const playersOnline = useGameStore((s) =>
    Math.max(1, s.gameState.players?.length ?? 0)
  );

  return (
    <div className="flex items-center gap-3">
      <Badge
        variant={isConnected ? 'default' : 'destructive'}
        className="flex items-center gap-1"
      >
        {isConnected ? (
          <>
            <Wifi className="w-3 h-3" />
            Connected
          </>
        ) : (
          <>
            <WifiOff className="w-3 h-3" />
            Disconnected
          </>
        )}
      </Badge>

      <Badge
        variant="outline"
        className="flex items-center gap-1 text-slate-300 "
      >
        <Users className="w-3 h-3" />
        {playersOnline} online
      </Badge>
    </div>
  );
}
