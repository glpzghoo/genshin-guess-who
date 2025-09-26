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
