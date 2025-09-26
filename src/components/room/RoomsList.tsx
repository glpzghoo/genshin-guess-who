'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { realtimeService } from '@/lib/realtime-service';

type RoomItem = { roomId: string; name: string; slots: string; code?: string };

const RoomsList = () => {
  const router = useRouter();
  const [rooms, setRooms] = useState<RoomItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [joining, setJoining] = useState<string | null>(null);

  // join-by-code inputs (covers private rooms)
  const [joinCode, setJoinCode] = useState('');
  const [joinPassword, setJoinPassword] = useState('');

  const refresh = () => {
    if (!realtimeService.getConnectionStatus()) {
      // optional: you can silently ignore or retry later
    }
    setLoading(true);
    realtimeService.customList((list) => {
      setRooms(Array.isArray(list) ? list : []);
      setLoading(false);
    });
  };

  const joinRoom = (roomId: string) => {
    if (joining) return;
    setJoining(roomId);
    realtimeService.customJoin({ roomId }, (res) => {
      setJoining(null);
      if (res?.ok) {
        router.push('/character-select'); // adjust route if needed
      } else {
        alert(`Join failed: ${res?.reason ?? 'unknown'}`);
      }
    });
  };

  const joinByCode = () => {
    if (!joinCode.trim()) return;
    realtimeService.customJoin(
      {
        code: joinCode.trim().toUpperCase(),
        password: joinPassword || undefined,
      },
      (res) => {
        if (res?.ok) {
          router.push('/character-select');
        } else {
          alert(`Join failed: ${res?.reason ?? 'unknown'}`);
        }
      }
    );
  };

  useEffect(() => {
    refresh();
    // Optional: auto-refresh every 10s
    const id = setInterval(refresh, 10000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold">Active Rooms</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={refresh} disabled={loading}>
            {loading ? 'Refreshing…' : 'Refresh'}
          </Button>
        </div>
      </div>

      {/* Join by code (works for private or public) */}
      <Card>
        <CardHeader>
          <CardTitle>Join by Code</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-3">
          <div className="space-y-1">
            <Label htmlFor="join-code">Room Code</Label>
            <Input
              id="join-code"
              placeholder="e.g. 6H7K2Q"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="join-pass">Password (if required)</Label>
            <Input
              id="join-pass"
              type="password"
              placeholder="optional"
              value={joinPassword}
              onChange={(e) => setJoinPassword(e.target.value)}
            />
          </div>
          <div className="flex items-end">
            <Button className="w-full" onClick={joinByCode}>
              Join
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Public Rooms List */}
      <div className="grid gap-3">
        {rooms.length === 0 ? (
          <div className="text-sm text-muted-foreground">
            No active rooms. Create one or check back later.
          </div>
        ) : (
          rooms.map((r) => (
            <Card key={r.roomId}>
              <CardContent className="py-4 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-medium truncate">{r.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {r.slots} {r.code ? `· Code: ${r.code}` : null}
                  </div>
                </div>
                <Button
                  onClick={() => joinRoom(r.roomId)}
                  disabled={joining === r.roomId}
                  className="shrink-0"
                >
                  {joining === r.roomId ? 'Joining…' : 'Join'}
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default RoomsList;
