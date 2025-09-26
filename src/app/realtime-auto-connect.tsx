'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { realtimeService } from '@/lib/realtime-service';
import type { Profile } from '@/lib/types';
import { notify } from '@/lib/notify';

export default function RealtimeAutoConnect() {
  const router = useRouter();
  const redirectedRef = useRef(false); // avoid double redirects

  useEffect(() => {
    let offConn: (() => void) | null = null;
    let cancelled = false;

    (async () => {
      // 1) Try authenticated session first
      try {
        const resp = await axios.get('/api/auth');
        if (cancelled) return;

        if (resp.data?.ok && resp.data?.token && resp.data?.user) {
          const user = resp.data.user;

          const p: Profile = {
            id: user.id,
            nickname: user?.nickname ?? 'Traveler',
            avatar_url: user?.avatar_url ?? null,
            adventure_rank: user?.adventureRank ?? 45,
            wins: user?.wins ?? 0,
            losses: user?.losses ?? 0,
            exp: user?.exp ?? 0,
            guest: !!user?.guest,
            mmr: user.mmr ?? 0,
          };

          // Persist for quick reconnects if you want
          try {
            localStorage.setItem('ws_access_token', resp.data.token);
            localStorage.setItem('user_id', p.id);
            localStorage.setItem('nickname', p.nickname || 'Traveler');
          } catch {
            // deez
          }

          // Connect
          realtimeService.connect(
            resp.data.token,
            p.id,
            p.nickname || 'Traveler'
          );
        } else {
          // 2) Guest fallback – mint a guest token via your API
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

          const r = await fetch('/api/auth/guest', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: pid, nickname: nick }),
          });
          const { token } = await r.json();
          if (token) {
            try {
              localStorage.setItem('ws_access_token', token);
              localStorage.setItem('user_id', pid);
              localStorage.setItem('nickname', nick);
            } catch {
              // deez
            }
            realtimeService.connect(token, pid, nick);
          }
        }
      } catch {
        // If /api/auth fails, we still try guest below (or leave disconnected)
      }

      // 3) After the socket is CONNECTED, ask the server if we’re already in a room
      offConn = realtimeService.onConnectionChange((connected) => {
        if (!connected || redirectedRef.current) return;

        realtimeService.roomStatus((res) => {
          if (
            res?.inRoom &&
            res.phase &&
            ['character-select', 'playing', 'finalize'].includes(res.phase)
          ) {
            redirectedRef.current = true;
            router.push('/game'); // adjust to your route
          }
        });
      });

      // Also run a one-off probe in case we are already connected
      if (realtimeService.getConnectionStatus() && !redirectedRef.current) {
        realtimeService.roomStatus((res) => {
          if (
            res?.inRoom &&
            res.phase &&
            ['character-select', 'playing', 'finalize'].includes(res.phase)
          ) {
            redirectedRef.current = true;
            router.push('/game');
          }
        });
      }
    })();

    return () => {
      cancelled = true;
      if (offConn) offConn();
    };
  }, [router]);

  // Disable context menu (right click)
  useEffect(() => {
    const onCtx = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', onCtx);
    return () => document.removeEventListener('contextmenu', onCtx);
  }, []);

  // 🔔 NEW: show a notification when the server pairs you
  useEffect(() => {
    const off = realtimeService.onMatchFound(({ roomId, opponent }) => {
      notify('Match found!', {
        body: `Opponent: ${opponent}`,
        tag: 'match-found', // prevents stacking
        requireInteraction: true, // stays until clicked
        icon: '/icons/icon-192.png',
        data: { roomId }, // sw.js click handler can open the room
      });
    });
    return () => {
      off();
    };
  }, []);

  useEffect(() => {
    if ('serviceWorker' in navigator)
      navigator.serviceWorker.register('/sw.js');
  }, []);

  // Trap common shortcuts (F12, Ctrl+Shift+I/J, Cmd+Opt+I on Mac)
  // useEffect(() => {
  //   const onKey = (e: KeyboardEvent) => {
  //     const k = e.key?.toLowerCase();
  //     if (
  //       k === 'f12' ||
  //       ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i', 'j', 'c'].includes(k))
  //     ) {
  //       e.preventDefault();
  //       e.stopPropagation();
  //     }
  //   };
  //   window.addEventListener('keydown', onKey, true);
  //   return () => window.removeEventListener('keydown', onKey, true);
  // }, []);

  return null;
}
