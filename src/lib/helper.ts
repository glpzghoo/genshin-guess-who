import { Shield, Sparkles, Sword } from 'lucide-react';

const elements = {
  Anemo: {
    icon: 'UI_Buff_Element_Anemo.png',
    color: 'text-teal-400',
    bg: 'bg-teal-400/20',
  },
  Geo: {
    icon: 'UI_Buff_Element_Geo.png',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/20',
  },
  Electro: {
    icon: 'UI_Buff_Element_Electro.png',
    color: 'text-purple-400',
    bg: 'bg-purple-400/20',
  },
  Dendro: {
    icon: 'UI_Buff_Element_Dendro.png',
    color: 'text-green-400',
    bg: 'bg-green-400/20',
  },
  Hydro: {
    icon: 'UI_Buff_Element_Hydro.png',
    color: 'text-blue-400',
    bg: 'bg-blue-400/20',
  },
  Pyro: {
    icon: 'UI_Buff_Element_Pyro.png',
    color: 'text-red-400',
    bg: 'bg-red-400/20',
  },
  Cryo: {
    icon: 'UI_Buff_Element_Cryo.png',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/20',
  },
};

const weapons = {
  Sword: { icon: Sword, name: 'Sword' },
  Claymore: { icon: Shield, name: 'Claymore' },
  Polearm: { icon: Sword, name: 'Polearm' },
  Bow: { icon: Sword, name: 'Bow' },
  Catalyst: { icon: Sparkles, name: 'Catalyst' },
};

export { weapons, elements };
