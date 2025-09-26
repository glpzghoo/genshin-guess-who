'use client';

import { io, Socket } from 'socket.io-client';
import { useGameStore } from './game-store';

export type QAAnswer = 'yes' | 'no';

export interface RealtimeEvent {
  type:
    | 'player_joined'
    | 'player_left'
    | 'question_asked'
    | 'question_answered'
    | 'character_eliminated'
    | 'guess_made'
    | 'game_ended';
  playerId: string;
  playerName: string;
  data?: any;
  timestamp: number;
}

class RealtimeService {
  public socket: Socket | null = null;

  private listeners: Array<(e: RealtimeEvent) => void> = [];
  private selfId: string | null = null;
  private selfName: string | null = null;

  /** Call once after login/user known */
  connect(
    token: string,
    playerId?: string,
    name?: string,
    url = process.env.NEXT_PUBLIC_WS_URL!
  ) {
    if (typeof window === 'undefined') return; // SSR guard
    if (this.socket?.connected) return;

    this.selfId = playerId ?? null;
    this.selfName = name ?? null;

    this.socket = io(url, {
      transports: ['websocket'],
      auth: { accessToken: token }, // <<< matches server.ts auth middleware
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 500,
      reconnectionDelayMax: 3000,
    });

    this.socket.on('connect', () => {
      // If server never echoes identity directly, we can infer from state:update players.
      if (!this.selfId) this.selfId = this.socket?.id ?? null;
    });

    this.socket.on('disconnect', () => {
      // up to you to surface UI state
    });

    /** Authoritative game state from server (already per-socket) */
    this.socket.on('state:update', (serverState: any) => {
      // If we still don't know who we are, try to infer from state players by name match (last resort)
      if (
        !this.selfId &&
        this.selfName &&
        Array.isArray(serverState?.players)
      ) {
        const me = serverState.players.find(
          (p: any) => p?.name === this.selfName
        );
        if (me?.id) this.selfId = me.id;
      }
      useGameStore.setState((s) => ({
        gameState: { ...s.gameState, ...serverState },
      }));
    });

    /** Optional: user-facing events for toast/notification UIs */
    this.socket.on('event', (evt: RealtimeEvent) => {
      this.listeners.forEach((cb) => cb(evt));
    });

    /** Optional: server warnings (e.g., deprecated events) */
    this.socket.on('warn', (payload: { msg: string }) => {
      // surface as a toast/snackbar in your UI if you want
      console.warn('[server warn]', payload?.msg);
    });

    /** Optional: matchmaking progress */
    this.socket.on('match:searching', () => {
      // show spinner if desired
    });
  }

  /** Who am I? Useful for isMyTurn checks */
  getSelfId(): string | null {
    return this.selfId ?? this.socket?.id ?? null;
  }
  getSelfName(): string | null {
    return this.selfName;
  }

  /** Connection status */
  getConnectionStatus(): boolean {
    return !!this.socket?.connected;
  }
  onConnectionChange(cb: (connected: boolean) => void): () => void {
    if (!this.socket) return () => {};
    const onC = () => cb(true);
    const onD = () => cb(false);
    this.socket.on('connect', onC);
    this.socket.on('disconnect', onD);
    return () => {
      this.socket?.off('connect', onC);
      this.socket?.off('disconnect', onD);
    };
  }

  /* ---------- API used by your UI ---------- */

  findMatch() {
    this.socket?.emit('match:find');
  }
  cancelMatch() {
    this.socket?.emit('match:cancel');
  }

  selectCharacter(name: string) {
    this.socket?.emit('character:select', name);
  }

  askQuestion(content: string, ack?: (ok?: boolean) => void) {
    this.socket?.emit('question:ask', content, ack);
  }

  answerQuestion(
    questionId: string,
    answer: QAAnswer,
    ack?: (ok?: boolean) => void
  ) {
    this.socket?.emit('question:answer', { questionId, answer }, ack);
  }

  makeGuess(name: string, ack?: (ok?: boolean) => void) {
    this.socket?.emit('guess:make', name, ack);
  }

  /** DEPRECATED on server; kept here as no-op passthrough to avoid client errors */
  finalGuess(name: string, ack?: (ok?: boolean) => void) {
    // Server will warn and handle as guess:make internally; you can remove this once old callers are gone.
    this.socket?.emit('guess:final', name, ack);
  }

  /** Server is authoritative for timeouts; client should NOT call this anymore */
  // Keeping method to avoid compile errors; it always resolves false.
  turnTimeout(ack?: (ok?: boolean) => void) {
    this.socket?.emit('turn:timeout', (ok?: boolean) => {
      ack?.(ok); // server returns false by design
    });
  }

  /* ---------- Notifications subscription ---------- */

  subscribe(cb: (e: RealtimeEvent) => void): () => void {
    this.listeners.push(cb);
    return () => {
      this.listeners = this.listeners.filter((fn) => fn !== cb);
    };
  }

  addSystemLog(text: string) {
    this.socket?.emit('log:system', text);
  }
}

export const realtimeService = new RealtimeService();
