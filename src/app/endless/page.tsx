import { Metadata } from 'next';
import { EndlessGame } from './components/endless-game';

export const metadata: Metadata = {
  title: 'Endless',
};
export default function EndlessPage() {
  return <EndlessGame />;
}
