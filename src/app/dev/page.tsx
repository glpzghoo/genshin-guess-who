import { Metadata } from 'next';
import { DevGame } from './components/dev-game';

export const metadata: Metadata = {
  title: 'Dev',
};

export default function DevPage() {
  return <DevGame />;
}

