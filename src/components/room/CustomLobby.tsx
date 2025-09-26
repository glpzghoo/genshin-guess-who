import { Users, Lock, Unlock } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { realtimeService } from '@/lib/realtime-service';

const CustomLobby = () => {
  const [name, setName] = useState('');
  const [isPrivate, setPrivate] = useState(false);
  const [password, setPassword] = useState('');
  const [creating, setCreating] = useState(false);
  const router = useRouter();

  const onCreate = () => {
    if (creating) return;
    setCreating(true);
    realtimeService.customCreate(
      {
        name,
        visibility: isPrivate ? 'private' : 'public',
        password: isPrivate ? password : undefined,
      },
      (res) => {
        setCreating(false);
        if (!res?.ok || !res.roomId) {
          // You can replace with your toast system
          alert(`Create failed: ${res?.reason ?? 'unknown'}`);
          return;
        }
        // Optional: show code to share
        if (isPrivate && res.code) {
          navigator.clipboard?.writeText(res.code).catch(() => {});
        }
        // Navigate to your game/lobby route; adjust as you need
        router.push('/character-select');
      }
    );
  };

  return (
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setPrivate((v) => !v)}
            className="gap-2"
          >
            {isPrivate ? (
              <Lock className="h-4 w-4" />
            ) : (
              <Unlock className="h-4 w-4" />
            )}
            {isPrivate ? 'Private' : 'Public'}
          </Button>
          {isPrivate && (
            <div className="flex-1">
              <Label htmlFor="room-pass">Password</Label>
              <Input
                id="room-pass"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Set a password"
              />
            </div>
          )}
        </div>

        <Button onClick={onCreate} disabled={creating} className="w-full">
          {creating ? 'Creating…' : 'Create Room'}
        </Button>
      </CardContent>
    </Card>
  );
};
export default CustomLobby;
