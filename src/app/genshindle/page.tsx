import { Metadata } from 'next';

import { GenshindleGame } from './components/genshindle-game';

export const metadata: Metadata = {
  title: 'Genshindle',
};

export default function GenshindlePage() {
  return <GenshindleGame />;
}
