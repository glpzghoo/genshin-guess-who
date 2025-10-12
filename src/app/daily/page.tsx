import { Metadata } from 'next';
import { DailyGame } from './components/daily-game';
export const metadata: Metadata = {
  title: 'Daily',
};
export default function DailyPage() {
  return <DailyGame />;
}
