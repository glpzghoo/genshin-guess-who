/* eslint-disable @typescript-eslint/no-unused-expressions */
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

  // version guard: every connect() increments this;
  // handlers from older sockets are ignored
  private _ver = 0;

  connect(
    token: string,
    playerId?: string,
    name?: string,
    url = process.env.NEXT_PUBLIC_WS_URL!
  ) {
    if (typeof window === 'undefined') return; // SSR guard
    if (this.socket?.connected) return this.socket;

    // Tear down any previous instance
    if (this.socket) {
      try {
        this.socket.removeAllListeners();
      } catch {
        // deez
      }
      try {
        this.socket.disconnect();
      } catch {
        // deez
      }
      this.socket = null;
    }

    const ver = ++this._ver; // capture version for this socket
    const setConn = useGameStore.getState().setConnection;
    setConn('connecting');

    this.selfId = playerId ?? null;
    this.selfName = name ?? null;

    const s = io(url, {
      transports: ['websocket'], // avoids poll→ws churn
      auth: { accessToken: token },
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 500,
      reconnectionDelayMax: 3000,
      timeout: 10000,
      withCredentials: true,
    });

    const safe =
      (fn: (...a: any[]) => void) =>
      (...a: any[]) => {
        if (ver === this._ver) fn(...a);
      };

    s.on(
      'connect',
      safe(() => {
        setConn('connected');
        if (!this.selfId) this.selfId = s.id ?? null;
      })
    );

    s.on(
      'disconnect',
      safe((reason) => {
        // If Socket.IO will try to reconnect, show "connecting"; else "disconnected"
        // (io v4: s.active === false while reconnecting)
        setConn(s.active ? 'connected' : 'connecting');
        console.debug('[socket] disconnect:', reason);
      })
    );

    s.io.on(
      'reconnect_attempt',
      safe(() => setConn('connecting'))
    );
    s.io.on(
      'reconnect',
      safe(() => setConn('connected'))
    );
    s.on(
      'connect_error',
      safe(() => setConn('connecting'))
    );
    s.io.on(
      'reconnect_error',
      safe(() => setConn('connecting'))
    );
    s.io.on(
      'reconnect_failed',
      safe(() => setConn('disconnected'))
    );

    // Authoritative game state from server
    s.on(
      'state:update',
      safe((serverState: any) => {
        // use your typed mapper instead of raw spread
        useGameStore.getState().hydrateFromServer(serverState);
      })
    );

    // Optional: user-facing events
    s.on(
      'event',
      safe((evt: RealtimeEvent) => {
        this.listeners.forEach((cb) => cb(evt));
      })
    );

    s.on(
      'warn',
      safe((payload: { msg: string }) => {
        console.warn('[server warn]', payload?.msg);
      })
    );

    s.on(
      'match:searching',
      safe(() => {
        // hook if you want
      })
    );

    s.on(
      'final:prompt',
      safe(() => {
        useGameStore.setState((s2) => ({
          gameState: { ...s2.gameState, phase: 'finalize' },
        }));
      })
    );

    s.on(
      'final:result',
      safe((payload: any) => {
        useGameStore.setState((s2) => ({
          gameState: {
            ...s2.gameState,
            phase: 'finished',
            winner: payload?.winner ?? null,
            finalResult: payload,
          },
        }));
      })
    );

    this.socket = s;
    return s;
  }

  /* ---------- helpers ---------- */

  getSelfId(): string | null {
    return this.selfId ?? this.socket?.id ?? null;
  }
  getSelfName(): string | null {
    return this.selfName;
  }
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

  customCreate(
    payload: {
      name?: string;
      visibility?: 'public' | 'private';
      password?: string;
    },
    cb: (res: {
      ok: boolean;
      roomId?: string;
      code?: string;
      reason?: string;
    }) => void
  ) {
    this.socket?.emit('custom:create', payload, cb);
  }

  customJoin(
    payload: { roomId?: string; code?: string; password?: string },
    cb: (res: { ok: boolean; roomId?: string; reason?: string }) => void
  ) {
    this.socket?.emit('custom:join', payload, cb);
  }

  customStart(cb?: (ok: boolean) => void) {
    this.socket?.emit('custom:start', cb);
  }
  customList(
    cb: (
      rooms: Array<{
        roomId: string;
        name: string;
        slots: string;
        code?: string;
      }>
    ) => void
  ) {
    this.socket?.emit('custom:list', cb);
  }

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
  finalGuess(name: string, ack?: (ok?: boolean) => void) {
    this.socket?.emit('guess:final', name, ack);
  }
  turnTimeout(ack?: (ok?: boolean) => void) {
    (this.socket as any)?.timeout?.(1500)?.emit?.('turn:timeout', ack) ??
      this.socket?.emit('turn:timeout', ack);
  }

  subscribe(cb: (e: RealtimeEvent) => void): () => void {
    this.listeners.push(cb);
    return () => {
      this.listeners = this.listeners.filter((fn) => fn !== cb);
    };
  }

  addSystemLog(text: string) {
    this.socket?.emit('log:system', text);
  }
  leaveRoom() {
    this.socket?.emit('room:leave');
  }

  onAdvantage(cb: (p: { roomId: string; count?: number }) => void): () => void {
    const handler = (p: any) => cb(p ?? {});
    this.socket?.on('advantage:timeout', handler);
    return () => this.socket?.off('advantage:timeout', handler);
  }

  roomStatus(
    ack: (res: { inRoom: boolean; roomId?: string; phase?: string }) => void
  ) {
    if (!this.socket) return ack({ inRoom: false });
    (this.socket as any).timeout?.(1500).emit?.('room:status', ack) ||
      this.socket.emit('room:status', ack);
  }

  onMatchFound(cb: (p: { roomId: string; opponent: string }) => void) {
    const handler = (payload: any) => cb(payload);
    this.socket?.on('match:found', handler);
    return () => this.socket?.off('match:found', handler);
  }

  leaderboardList(
    params: { limit?: number; offset?: number },
    cb: (res: {
      ok: boolean;
      items?: Array<{
        id: string;
        nickname: string;
        mmr: number;
        wins: number;
        losses: number;
        rank: number;
      }>;
      total?: number;
      nextOffset?: number;
      you?: { id: string; rank: number } | null;
      reason?: string;
    }) => void
  ) {
    this.socket?.emit('leaderboard:list', params, cb);
  }
}

export const realtimeService = new RealtimeService();
