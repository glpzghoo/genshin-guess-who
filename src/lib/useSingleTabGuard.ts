'use client';
import { useEffect, useRef, useState } from 'react';

type Mode = 'close' | 'redirect' | 'block';
type Options = { mode?: Mode; redirectTo?: string };

export function useSingleTabGuard({
  mode = 'close',
  redirectTo = '/already-open',
}: Options = {}) {
  const [isDuplicate, setIsDuplicate] = useState(false);
  const actedRef = useRef(false);

  useEffect(() => {
    const id = crypto.randomUUID();

    const handleDuplicate = () => {
      if (actedRef.current) return;
      actedRef.current = true;
      setIsDuplicate(true);

      if (mode === 'close') {
        // Attempt to close; many browsers block this if not script-opened.
        window.open('', '_self'); // helps Safari
        window.close();
        // Fallback if close is blocked:
        setTimeout(() => {
          if (!document.hidden) location.replace(redirectTo);
        }, 100);
      } else if (mode === 'redirect') {
        location.replace(redirectTo);
      } else {
        // mode === "block": do nothing; let the UI render a blocking screen
      }
    };

    // --- Prefer BroadcastChannel ---
    if (typeof window !== 'undefined' && (window as any).BroadcastChannel) {
      const BC = (window as any).BroadcastChannel as {
        new (name: string): BroadcastChannel;
      };
      const bc: BroadcastChannel = new BC('single-tab-guard');

      const onMessage = (e: MessageEvent) => {
        const msg = e.data as
          | { type?: 'hello' | 'iamhere'; from?: string }
          | undefined;
        if (!msg || msg.from === id) return;
        if (msg.type === 'hello') bc.postMessage({ type: 'iamhere', from: id });
        if (msg.type === 'iamhere') handleDuplicate();
      };

      bc.onmessage = onMessage;
      bc.postMessage({ type: 'hello', from: id });

      return () => {
        bc.onmessage = null;
        bc.close();
      };
    }

    // --- Fallback: localStorage ping/pong ---
    const HELLO = 'single-tab-hello';
    const I_AM_HERE = 'single-tab-iamhere';

    const onStorage = (e: StorageEvent) => {
      if (e.key === HELLO && e.newValue && e.newValue !== id) {
        localStorage.setItem(I_AM_HERE, id);
        setTimeout(() => localStorage.removeItem(I_AM_HERE), 0);
      }
      if (e.key === I_AM_HERE && e.newValue && e.newValue !== id) {
        handleDuplicate();
      }
    };

    window.addEventListener('storage', onStorage);
    localStorage.setItem(HELLO, id);
    setTimeout(() => localStorage.removeItem(HELLO), 0);

    return () => {
      window.removeEventListener('storage', onStorage);
      localStorage.removeItem(HELLO);
      localStorage.removeItem(I_AM_HERE);
    };
  }, [mode, redirectTo]);

  return { isDuplicate };
}
