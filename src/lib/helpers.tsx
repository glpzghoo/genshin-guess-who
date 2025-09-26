import { Crown, Star, Sword, Zap } from 'lucide-react';

export function getRankIcon(ar: number) {
  if (ar >= 55) return <Crown className="h-4 w-4 text-accent" />;
  if (ar >= 45) return <Star className="h-4 w-4 text-primary" />;
  if (ar >= 35) return <Zap className="h-4 w-4 text-chart-2" />;
  return <Sword className="h-4 w-4 text-muted-foreground" />;
}
