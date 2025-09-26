'use client';

import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Wifi, WifiOff, Users } from 'lucide-react';
import { realtimeService } from '@/lib/realtime-service';
import { useGameStore } from '@/lib/game-store';

export function ConnectionStatus() {
  const playersOnline = useGameStore((s) =>
    Math.max(1, s.gameState.players?.length ?? 0)
  );
  const [isConnected, setIsConnected] = useState(
    typeof window !== 'undefined'
      ? realtimeService.getConnectionStatus()
      : false
  );

  useEffect(() => {
    // keep in sync with socket connection state
    const unsubscribe = realtimeService.onConnectionChange((connected) => {
      setIsConnected(connected);
    });
    // also set initial once (in case connect fired before mount)
    setIsConnected(realtimeService.getConnectionStatus());
    return unsubscribe;
  }, []);

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
        className="flex items-center gap-1 text-slate-300 border-slate-600"
      >
        <Users className="w-3 h-3" />
        {playersOnline} online
      </Badge>
    </div>
  );
}
