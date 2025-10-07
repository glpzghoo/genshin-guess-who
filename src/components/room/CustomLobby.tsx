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
    <Card className="rounded-3xl border border-white/15 bg-white/10 text-white backdrop-blur shadow-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <Users className="h-5 w-5 text-sky-300" />
          Create Room
        </CardTitle>
        <CardDescription className="text-sm text-white/70">
          Set up a custom game with your friends
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2 text-sm">
          <Label htmlFor="room-name" className="text-white/70">
            Room Name
          </Label>
          <Input
            id="room-name"
            placeholder="Enter room name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-white/20 bg-black/40 text-white placeholder:text-white/60 focus-visible:ring-white/40"
          />
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setPrivate((v) => !v)}
            className="gap-2 border border-white/20 bg-white/10 text-white hover:bg-white/20"
          >
            {isPrivate ? (
              <Lock className="h-4 w-4" />
            ) : (
              <Unlock className="h-4 w-4" />
            )}
            {isPrivate ? 'Private' : 'Public'}
          </Button>
          {isPrivate && (
            <div className="flex-1 space-y-2 text-sm">
              <Label htmlFor="room-pass" className="text-white/70">
                Password
              </Label>
              <Input
                id="room-pass"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Set a password"
                className="border-white/20 bg-black/40 text-white placeholder:text-white/60 focus-visible:ring-white/40"
              />
            </div>
          )}
        </div>

        <Button
          onClick={onCreate}
          disabled={creating}
          className="w-full border-0 text-base font-semibold shadow-lg transition hover:scale-[1.02]"
          style={{
            backgroundImage:
              'linear-gradient(120deg, rgba(56,189,248,0.95) 0%, rgba(236,72,153,0.95) 45%, rgba(79,70,229,0.95) 100%)',
          }}
        >
          {creating ? 'Creating…' : 'Create Room'}
        </Button>
      </CardContent>
    </Card>
  );
};
export default CustomLobby;
