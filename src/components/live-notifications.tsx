'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
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
} from 'lucide-react';
import { realtimeService, type RealtimeEvent } from '@/lib/realtime-service';

interface Notification {
  id: string;
  event: RealtimeEvent;
  isRead: boolean;
}

const MAX_NOTIFICATIONS = 5;
const AUTO_HIDE_MS = 5000;

export function LiveNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  // Use Node/DOM-compatible timer type (SSR-safe)
  const timersRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  // Clear all timers on unmount
  useEffect(() => {
    return () => {
      Object.values(timersRef.current).forEach(clearTimeout);
      timersRef.current = {};
    };
  }, []);

  // Subscribe to realtime events from the server
  useEffect(() => {
    const unsubscribe = realtimeService.subscribe((event) => {
      const n: Notification = {
        id: Math.random().toString(36).slice(2, 9),
        event,
        isRead: false,
      };

      setNotifications((prev) => [n, ...prev].slice(0, MAX_NOTIFICATIONS));
      scheduleAutoHide(n.id, AUTO_HIDE_MS);
    });

    return unsubscribe;
  }, []);

  const scheduleAutoHide = (id: string, ms: number) => {
    // cancel previous timer if any
    if (timersRef.current[id]) {
      clearTimeout(timersRef.current[id]);
      delete timersRef.current[id];
    }
    timersRef.current[id] = setTimeout(() => {
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
      );
      // remove after fade
      const removeTimer = setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
        clearTimeout(removeTimer);
        delete timersRef.current[id];
      }, 600);
    }, ms);
  };

  const markRead = (id: string) => {
    if (timersRef.current[id]) {
      clearTimeout(timersRef.current[id]);
      delete timersRef.current[id];
    }
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
    const removeTimer = setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
      clearTimeout(removeTimer);
      delete timersRef.current[id];
    }, 300);
  };

  const unreadCount = useMemo(
    () => notifications.filter((n) => !n.isRead).length,
    [notifications]
  );

  const getNotificationIcon = (type: RealtimeEvent['type']) => {
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
      default:
        return <Bell className="w-4 h-4 text-slate-400" />;
    }
  };

  const getNotificationMessage = (event: RealtimeEvent) => {
    switch (event.type) {
      case 'player_joined':
        return `${event.playerName} joined the game`;
      case 'player_left':
        return `${event.playerName} left the game`;
      case 'question_asked':
        return `${event.playerName} asked a question`;
      case 'question_answered':
        return `${event.playerName} answered: ${event.data?.answer?.toUpperCase()}`;
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
    return <div className="fixed top-4 right-4 z-50">{ToggleButton}</div>;
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      <div className="flex justify-end">{ToggleButton}</div>

      {isVisible && (
        <div
          aria-live="polite"
          aria-atomic="true"
          role="status"
          className="space-y-2"
        >
          {notifications.slice(0, MAX_NOTIFICATIONS).map((n) => (
            <Card
              key={n.id}
              onMouseEnter={() => {
                if (timersRef.current[n.id]) {
                  clearTimeout(timersRef.current[n.id]);
                  delete timersRef.current[n.id];
                }
              }}
              onMouseLeave={() => {
                if (!n.isRead) scheduleAutoHide(n.id, 2500);
              }}
              className={`p-3 bg-slate-800/90 backdrop-blur-sm border-slate-700 transition-all duration-300 ${
                n.isRead
                  ? 'opacity-50 translate-x-2'
                  : 'opacity-100 translate-x-0'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  {getNotificationIcon(n.event.type)}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">
                    {getNotificationMessage(n.event)}
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
          ))}
        </div>
      )}
    </div>
  );
}
