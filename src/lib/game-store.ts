import { create } from 'zustand';

export interface Player {
  id: string;
  name: string;
  avatar: string;
  adventureRank: number;
  secretCharacter?: string;
  isReady: boolean;
  isConnected: boolean;
}

export interface GameState {
  gameId: string;
  players: Player[];
  currentTurn: string; // player id
  phase: 'waiting' | 'character-select' | 'playing' | 'finished';
  eliminatedCharacters: string[];
  gameHistory: GameAction[];
  winner?: string;
  timeRemaining: number;
}

export interface GameAction {
  id: string;
  playerId: string;
  playerName: string;
  type: 'question' | 'guess' | 'elimination' | 'system';
  content: string;
  timestamp: number;
  response?: string;
}

interface GameStore {
  gameState: GameState;
  setGameState: (state: Partial<GameState>) => void;
  addPlayer: (player: Player) => void;
  removePlayer: (playerId: string) => void;
  nextTurn: () => void;
  addAction: (action: Omit<GameAction, 'id' | 'timestamp'>) => void;
  eliminateCharacter: (characterName: string) => void;
  makeGuess: (playerId: string, characterName: string) => void;
  resetGame: () => void;
}

export const useGameStore = create<GameStore>((set) => ({
  gameState: {
    gameId: '',
    players: [],
    currentTurn: '',
    phase: 'waiting',
    eliminatedCharacters: [],
    gameHistory: [],
    timeRemaining: 60,
  },

  setGameState: (newState) =>
    set((state) => ({
      gameState: { ...state.gameState, ...newState },
    })),

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
      const currentIndex = state.gameState.players.findIndex(
        (p) => p.id === state.gameState.currentTurn
      );
      const nextIndex = (currentIndex + 1) % state.gameState.players.length;
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
            id: Math.random().toString(36).substr(2, 9),
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
          winner: isCorrect ? playerId : undefined,
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
      },
    })),
}));
