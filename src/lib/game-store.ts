// game-store.ts
import { create } from 'zustand';

export type Answer = 'yes' | 'no';

export type Player = {
  id: string;
  name: string;
  avatar?: string;
  adventureRank?: number;
  secretCharacter?: string | null;
  isReady: boolean;
  isConnected: boolean;
  hasPicked?: boolean;
};

export type GameAction = {
  id: string;
  playerId: string;
  playerName: string;
  type: 'question' | 'guess' | 'elimination' | 'system';
  content: string;
  timestamp: number;
  response?: Answer;
  correct?: boolean;
  timeout?: boolean;
};

export type GameState = {
  gameId: string;
  players: Player[];
  currentTurn: string;
  phase: 'waiting' | 'character-select' | 'playing' | 'finalize' | 'finished';
  eliminatedCharacters: string[];
  gameHistory: GameAction[];
  winner?: string | null;
  timeRemaining: number;
  finalizeActive?: boolean;
  finalResult?: {
    roomId: string;
    a: { playerId: string; name: string; correct: boolean; secret: string };
    b: { playerId: string; name: string; correct: boolean; secret: string };
    tie: boolean;
    winner?: string | null;
  };

  // NEW: room meta for UI
  roomName?: string | null;
  inviteCode?: string | null;
  visibility?: 'public' | 'private' | null;
  hostId?: string | null;
  isCustom?: boolean;
};

type ServerPlayer = {
  id: string;
  name: string;
  isConnected?: boolean;
  secretCharacter?: string | null;
  hasPicked?: boolean;
};

type ServerState = {
  id: string;
  phase: GameState['phase'];
  currentTurn: string;
  gameHistory: GameAction[];
  timeRemaining: number;
  winner?: string | null;
  finalizeActive?: boolean;
  players: ServerPlayer[];

  // meta (emitted by server in state:update)
  roomName?: string | null;
  inviteCode?: string | null;
  visibility?: 'public' | 'private' | null;
  hostId?: string | null;
  isCustom?: boolean;
};

type GameStore = {
  gameState: GameState;
  socketConnected: boolean; // NEW
  setSocketConnected: (v: boolean) => void; // NEW
  hydrateFromServer: (s: ServerState) => void; // NEW

  setGameState: (state: Partial<GameState>) => void;
  addPlayer: (player: Player) => void;
  removePlayer: (playerId: string) => void;
  nextTurn: () => void;
  addAction: (action: Omit<GameAction, 'id' | 'timestamp'>) => void;
  eliminateCharacter: (characterName: string) => void;
  makeGuess: (playerId: string, characterName: string) => void;
  resetGame: () => void;
};

export const useGameStore = create<GameStore>((set) => ({
  gameState: {
    gameId: '',
    players: [],
    currentTurn: '',
    phase: 'waiting',
    eliminatedCharacters: [],
    gameHistory: [],
    timeRemaining: 60,
    finalizeActive: false,
    finalResult: undefined,

    roomName: null,
    inviteCode: null,
    visibility: null,
    hostId: null,
    isCustom: false,
  },

  socketConnected: false,
  setSocketConnected: (v) => set({ socketConnected: v }),

  hydrateFromServer: (s) =>
    set((state) => ({
      gameState: {
        ...state.gameState,
        gameId: s.id,
        phase: s.phase,
        currentTurn: s.currentTurn,
        gameHistory: s.gameHistory ?? [],
        timeRemaining: s.timeRemaining ?? state.gameState.timeRemaining,
        winner: s.winner ?? null,
        finalizeActive: !!s.finalizeActive,
        players: (s.players ?? []).map((p) => ({
          id: p.id,
          name: p.name,
          avatar: undefined,
          adventureRank: 0,
          secretCharacter: p.secretCharacter ?? null,
          isReady: !!p.hasPicked,
          hasPicked: !!p.hasPicked || !!p.secretCharacter,
          isConnected: !!p.isConnected,
        })),

        // meta
        roomName: s.roomName ?? state.gameState.roomName ?? null,
        inviteCode: s.inviteCode ?? state.gameState.inviteCode ?? null,
        visibility: (s.visibility ?? state.gameState.visibility ?? null) as any,
        hostId: s.hostId ?? state.gameState.hostId ?? null,
        isCustom: !!s.isCustom,
      },
    })),

  setGameState: (newState) =>
    set((state) => ({ gameState: { ...state.gameState, ...newState } })),

  addPlayer: (player) =>
    set((state) => ({
      gameState: {
        ...state.gameState,
        players: [...state.gameState.players, player],
      },
    })),

  removePlayer: (playerId) =>
    set((state) => ({
      gameState: {
        ...state.gameState,
        players: state.gameState.players.filter((p) => p.id !== playerId),
      },
    })),

  nextTurn: () =>
    set((state) => {
      const idx = state.gameState.players.findIndex(
        (p) => p.id === state.gameState.currentTurn
      );
      const nextIndex = (idx + 1) % (state.gameState.players.length || 1);
      return {
        gameState: {
          ...state.gameState,
          currentTurn: state.gameState.players[nextIndex]?.id || '',
          timeRemaining: 60,
        },
      };
    }),

  addAction: (action) =>
    set((state) => ({
      gameState: {
        ...state.gameState,
        gameHistory: [
          ...state.gameState.gameHistory,
          {
            ...action,
            id: Math.random().toString(36).slice(2, 11),
            timestamp: Date.now(),
          },
        ],
      },
    })),

  eliminateCharacter: (characterName) =>
    set((state) => ({
      gameState: {
        ...state.gameState,
        eliminatedCharacters: [
          ...state.gameState.eliminatedCharacters,
          characterName,
        ],
      },
    })),

  makeGuess: (playerId, characterName) =>
    set((state) => {
      const opponent = state.gameState.players.find((p) => p.id !== playerId);
      const isCorrect = opponent?.secretCharacter === characterName;
      return {
        gameState: {
          ...state.gameState,
          phase: isCorrect ? 'finished' : state.gameState.phase,
          winner: isCorrect ? playerId : state.gameState.winner,
        },
      };
    }),

  resetGame: () =>
    set(() => ({
      gameState: {
        gameId: '',
        players: [],
        currentTurn: '',
        phase: 'waiting',
        eliminatedCharacters: [],
        gameHistory: [],
        timeRemaining: 60,
        finalizeActive: false,
        finalResult: undefined,
        roomName: null,
        inviteCode: null,
        visibility: null,
        hostId: null,
        isCustom: false,
      },
    })),
}));
