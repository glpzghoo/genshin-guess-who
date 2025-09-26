'use client';

import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Bell,
  MessageSquare,
  UserPlus,
  UserMinus,
  Target,
  Trophy,
  X,
  Trash2,
  Moon,
  MoonStar,
} from 'lucide-react';
import { realtimeService, type RealtimeEvent } from '@/lib/realtime-service';
// import { notify } from '@/lib/notify' // optional: use if you want OS notifications when tab hidden

type Notification = {
  id: string; // local id for rendering
  key: string; // stable key used for deduplication
  event: RealtimeEvent;
  isRead: boolean;
  count: number; // number of collapsed duplicates
};

const MAX_NOTIFICATIONS = 5;

// Per-event behavior
const EVENT_DURATION: Partial<Record<RealtimeEvent['type'], number>> = {
  player_joined: 2500,
  player_left: 2500,
  question_asked: 5000,
  question_answered: 5000,
  character_eliminated: 5000,
  guess_made: Infinity, // sticky
  game_ended: Infinity, // sticky
};
const DEFAULT_DURATION = 5000;

// Collapse identical events that arrive within this window (ms)
const DEDUPE_WINDOW_MS = 1500;

export function LiveNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [dnd, setDnd] = useState<boolean>(() => {
    try {
      return localStorage.getItem('notif_dnd') === '1';
    } catch {
      return false;
    }
  });

  // Timers & last-seen trackers
  const timersRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
  const lastSeenRef = useRef<Record<string, number>>({}); // key -> timestamp

  // Helpers
  const clearTimer = (id: string) => {
    if (timersRef.current[id]) {
      clearTimeout(timersRef.current[id]);
      delete timersRef.current[id];
    }
  };
  const clearAll = () => {
    Object.values(timersRef.current).forEach(clearTimeout);
    timersRef.current = {};
    setNotifications([]);
  };

  useEffect(() => () => clearAll(), []);

  // OS-level notification (optional)
  const maybeNotifyOS = useCallback(async (event: RealtimeEvent) => {
    if (typeof document !== 'undefined' && !document.hidden) return;
    // If you want OS push while tab is hidden, uncomment & use your notify helper:
    // const title = getNotificationTitle(event);
    // const body = getNotificationMessage(event);
    // await notify(title, { body, tag: `evt-${event.type}` });
  }, []);

  const eventKey = (e: RealtimeEvent) => {
    // Prefer server id when available for perfect dedupe
    const serverId = (e as any).id as string | undefined;
    if (serverId) return `srv:${serverId}`;
    // Otherwise build a stable key from type + salient fields
    const base = [
      e.type,
      e.playerName ?? '',
      e.data?.answer ?? '',
      e.data?.characterName ?? '',
      e.data?.questionId ?? '',
    ].join('|');
    return base;
  };

  const isSticky = (t: RealtimeEvent['type']) => EVENT_DURATION[t] === Infinity;

  const scheduleAutoHide = (id: string, ms: number) => {
    clearTimer(id);
    if (!isFinite(ms)) return; // sticky
    timersRef.current[id] = setTimeout(() => {
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
      );
      const removeTimer = setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
        clearTimeout(removeTimer);
        delete timersRef.current[id];
      }, 200); // short fade
    }, ms);
  };

  const markRead = (id: string) => {
    clearTimer(id);
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
    const removeTimer = setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
      clearTimeout(removeTimer);
      delete timersRef.current[id];
    }, 150);
  };

  // Icons + messages
  const getIcon = (type: RealtimeEvent['type']) => {
    switch (type) {
      case 'player_joined':
        return <UserPlus className="w-4 h-4 text-green-400" />;
      case 'player_left':
        return <UserMinus className="w-4 h-4 text-red-400" />;
      case 'question_asked':
        return <MessageSquare className="w-4 h-4 text-blue-400" />;
      case 'question_answered':
        return <MessageSquare className="w-4 h-4 text-purple-400" />;
      case 'character_eliminated':
        return <Target className="w-4 h-4 text-orange-400" />;
      case 'guess_made':
        return <Trophy className="w-4 h-4 text-yellow-400" />;
      case 'game_ended':
        return <Trophy className="w-4 h-4 text-emerald-400" />;
      default:
        return <Bell className="w-4 h-4 text-slate-400" />;
    }
  };

  const getNotificationTitle = (event: RealtimeEvent) => {
    switch (event.type) {
      case 'guess_made':
        return 'Final guess!';
      case 'game_ended':
        return 'Game ended';
      default:
        return 'Game update';
    }
  };

  const getMessage = (event: RealtimeEvent) => {
    switch (event.type) {
      case 'player_joined':
        return `${event.playerName} joined the game`;
      case 'player_left':
        return `${event.playerName} left the game`;
      case 'question_asked':
        return `${event.playerName} asked a question`;
      case 'question_answered':
        return `${event.playerName} answered: ${String(event.data?.answer ?? '').toUpperCase()}`;
      case 'character_eliminated':
        return `${event.playerName} eliminated ${event.data?.characterName}`;
      case 'guess_made':
        return `${event.playerName} made a final guess!`;
      case 'game_ended':
        return `Game ended! ${event.data?.winner} wins!`;
      default:
        return 'Game event occurred';
    }
  };

  // Subscribe to realtime events
  useEffect(() => {
    const unsubscribe = realtimeService.subscribe(async (event) => {
      if (dnd) return;

      // OS-level notify when page is hidden (optional)
      await maybeNotifyOS(event);

      const key = eventKey(event);
      const now = Date.now();
      const last = lastSeenRef.current[key] ?? 0;
      const withinWindow = now - last < DEDUPE_WINDOW_MS;
      lastSeenRef.current[key] = now;

      setIsVisible(true); // auto-open tray on new event

      setNotifications((prev) => {
        // If we saw a similar event very recently, bump the count & refresh timer
        if (withinWindow) {
          const idx = prev.findIndex((n) => n.key === key && !n.isRead);
          if (idx !== -1) {
            const clone = [...prev];
            const updated = { ...clone[idx], count: clone[idx].count + 1 };
            clone[idx] = updated;
            // refresh auto-hide
            const ms = EVENT_DURATION[event.type] ?? DEFAULT_DURATION;
            scheduleAutoHide(updated.id, ms);
            return clone;
          }
        }

        // Insert new notification at the top
        const id =
          typeof crypto !== 'undefined' && crypto.randomUUID
            ? crypto.randomUUID()
            : Math.random().toString(36).slice(2, 11);

        const next: Notification = {
          id,
          key,
          event,
          isRead: false,
          count: 1,
        };

        const nextList = [next, ...prev].slice(0, MAX_NOTIFICATIONS);
        const ms = EVENT_DURATION[event.type] ?? DEFAULT_DURATION;
        scheduleAutoHide(id, ms);
        return nextList;
      });
    });

    return unsubscribe;
  }, [dnd, maybeNotifyOS]);

  const unreadCount = useMemo(
    () => notifications.filter((n) => !n.isRead).length,
    [notifications]
  );

  const ToggleButton = (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => setIsVisible((v) => !v)}
      className="relative rounded-full"
      aria-label={isVisible ? 'Hide notifications' : 'Show notifications'}
    >
      <Bell className="w-4 h-4" />
      {unreadCount > 0 && (
        <span className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 rounded-full bg-blue-500 text-[10px] text-white flex items-center justify-center">
          {unreadCount}
        </span>
      )}
    </Button>
  );

  if (notifications.length === 0) {
    return (
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <Button
          variant={dnd ? 'secondary' : 'outline'}
          size="icon"
          onClick={() => {
            const next = !dnd;
            setDnd(next);
            try {
              localStorage.setItem('notif_dnd', next ? '1' : '0');
            } catch {}
          }}
          aria-label={dnd ? 'Disable Do Not Disturb' : 'Enable Do Not Disturb'}
        >
          {dnd ? (
            <Moon className="w-4 h-4" />
          ) : (
            <MoonStar className="w-4 h-4" />
          )}
        </Button>
        {ToggleButton}
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      <div className="flex items-center justify-end gap-2">
        <Button
          variant={dnd ? 'secondary' : 'outline'}
          size="icon"
          onClick={() => {
            const next = !dnd;
            setDnd(next);
            try {
              localStorage.setItem('notif_dnd', next ? '1' : '0');
            } catch {}
          }}
          aria-label={dnd ? 'Disable Do Not Disturb' : 'Enable Do Not Disturb'}
        >
          {dnd ? (
            <Moon className="w-4 h-4" />
          ) : (
            <MoonStar className="w-4 h-4" />
          )}
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={clearAll}
          aria-label="Clear all notifications"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
        {ToggleButton}
      </div>

      {isVisible && (
        <div
          aria-live="polite"
          aria-atomic="true"
          role="status"
          className="space-y-2"
        >
          {notifications.map((n) => {
            const urgent =
              n.event.type === 'guess_made' || n.event.type === 'game_ended';
            return (
              <Card
                key={n.id}
                aria-live={urgent ? 'assertive' : 'polite'}
                onMouseEnter={() => clearTimer(n.id)}
                onMouseLeave={() =>
                  !n.isRead &&
                  scheduleAutoHide(
                    n.id,
                    (EVENT_DURATION[n.event.type] ?? DEFAULT_DURATION) / 2
                  )
                }
                className={`p-3 bg-slate-800/90 backdrop-blur-sm border-slate-700 transition-all duration-300 ${
                  n.isRead
                    ? 'opacity-50 translate-x-2'
                    : 'opacity-100 translate-x-0'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">{getIcon(n.event.type)}</div>
                  <div className="flex-1">
                    <p className="text-sm text-white font-medium">
                      {getNotificationTitle(n.event)}
                    </p>
                    <p className="text-sm text-slate-200">
                      {getMessage(n.event)}
                      {n.count > 1 && (
                        <span className="ml-2 text-xs text-slate-400">
                          ×{n.count}
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-slate-400">
                      {new Date(n.event.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                  <button
                    onClick={() => markRead(n.id)}
                    className="p-1 rounded hover:bg-slate-700/60 text-slate-300"
                    aria-label="Dismiss notification"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
