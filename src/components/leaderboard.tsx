'use client';

import { useEffect, useState } from 'react';
import { realtimeService } from '@/lib/realtime-service';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Row = {
  id: string;
  nickname: string;
  mmr: number;
  wins: number;
  losses: number;
  rank: number;
};

export default function Leaderboard() {
  const [items, setItems] = useState<Row[]>([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [meRank, setMeRank] = useState<number | null>(null);
  const pageSize = 25;

  const load = (reset = false) => {
    if (loading) return;
    setLoading(true);
    realtimeService.leaderboardList(
      { limit: pageSize, offset: reset ? 0 : offset },
      (res) => {
        setLoading(false);
        if (!res?.ok || !res.items) return;
        setItems(reset ? res.items : [...items, ...res.items]);
        setOffset(res.nextOffset ?? (reset ? 0 : offset) + res.items.length);
        if (typeof res.total === 'number') setTotal(res.total);
        if (res.you?.rank) setMeRank(res.you.rank);
      }
    );
  };

  useEffect(() => {
    load(true); /* first page */
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground mb-3">
          {typeof total === 'number'
            ? `Top players · ${total.toLocaleString()} total${meRank ? ` · Your rank #${meRank}` : ''}`
            : 'Top players'}
        </div>

        <div className="grid grid-cols-12 gap-2 text-xs font-medium px-2 py-1 border-b">
          <div className="col-span-1">#</div>
          <div className="col-span-5">Player</div>
          <div className="col-span-2 text-right">MMR</div>
          <div className="col-span-2 text-right">Wins</div>
          <div className="col-span-2 text-right">Losses</div>
        </div>

        {items.map((r) => (
          <div
            key={r.id}
            className={`grid grid-cols-12 gap-2 px-2 py-2 border-b last:border-0 ${
              meRank === r.rank ? 'bg-primary/5' : ''
            }`}
          >
            <div className="col-span-1">#{r.rank}</div>
            <div className="col-span-5 truncate">{r.nickname}</div>
            <div className="col-span-2 text-right">{r.mmr}</div>
            <div className="col-span-2 text-right">{r.wins}</div>
            <div className="col-span-2 text-right">{r.losses}</div>
          </div>
        ))}

        <div className="flex justify-between items-center mt-3">
          <Button
            variant="outline"
            onClick={() => load(true)}
            disabled={loading}
          >
            Refresh
          </Button>
          <Button
            onClick={() => load(false)}
            disabled={loading || (total !== null && offset >= total)}
          >
            {loading ? 'Loading…' : 'Load more'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
