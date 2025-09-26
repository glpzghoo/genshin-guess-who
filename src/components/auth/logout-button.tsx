'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function LogoutButton({ className }: { className?: string }) {
  const [pending, start] = useTransition();
  const router = useRouter();

  return (
    <Button
      variant="destructive"
      size="sm"
      className={className}
      disabled={pending}
      onClick={() =>
        start(async () => {
          await fetch('/api/auth/logout', { method: 'POST' });

          // Optional: clear any local client state
          try {
            const { useGameStore } = await import('@/lib/game-store');
            useGameStore.getState().resetGame?.();
          } catch {
          } finally {
            localStorage.clear();
          }

          router.push('/login');
          router.refresh();
        })
      }
    >
      {pending ? 'Logging out…' : 'Log out'}
    </Button>
  );
}
