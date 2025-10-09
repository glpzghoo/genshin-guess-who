export type Character = {
  id: string | number;
  rank: number;
  name: string;
  element: 'Pyro' | 'Anemo' | 'Cryo' | 'Dendro' | 'Electro' | 'Geo' | 'Hydro';
  weaponType: 'Sword' | 'Claymore' | 'Polearm' | 'Bow' | 'Catalyst';
  region: string;
  specialProp: string;
  bodyType: string;
  icon: string;
  birthday: number[];
  release: number;
  route: string;
  EN_VA: string;
  JP_VA: string;
  VL: VoiceLine;
};

export type Profile = {
  id: string;
  nickname: string;
  avatar_url: string | null;
  adventure_rank: number | null;
  wins: number | null;
  losses: number | null;
  exp: number;
  mmr: number;
  guest?: boolean;
};

// Voiceline types
type VoiceLine = {
  quotes: Record<string, Quote>;
  story: Record<string, story>;
};

type story = {
  title: string;
  title2: string | null;
  text: string;
  text2: string | null;
  tips: string;
};
type Quote = {
  title: string;
  audio: string;
  text: string;
  tips: string;
  tasks: Task[] | null;
};

type Task = {
  type: string;
  questList: Quest[];
};

type Quest = {
  id: number;
  questTitle?: string | null;
  chapterId?: number;
  chapterTitle?: string;
};
