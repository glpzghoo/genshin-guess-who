import { Badge } from '@/components/ui/badge';
import { GenshindleStats } from '../lib/helpers';

type StatsTrackerProps = {
  stats: GenshindleStats;
  hardMode: boolean;
  endlessMode: boolean;
};

export const StatsTracker = ({
  stats,
  hardMode,
  endlessMode,
}: StatsTrackerProps) => {
  const difficulty = hardMode ? 'hard' : 'normal';
  const difficultyLabel = hardMode ? 'Hard' : 'Normal';
  const sections = [
    {
      key: 'daily',
      title: 'Daily mode',
      record: stats.daily[difficulty],
      visible: true,
    },
    {
      key: 'endless',
      title: 'Endless mode',
      record: stats.endless[difficulty],
      visible: endlessMode,
    },
  ].filter((section) => section.visible);

  return (
    <div className="space-y-4 rounded-3xl border border-white/12 bg-black/35 p-6 backdrop-blur">
      <div className="space-y-4 text-xs uppercase tracking-wide text-white/70 flex gap-2">
        {sections.map((section) => (
          <div className="space-y-2" key={section.key}>
            <span className="text-white/50">{section.title}</span>
            <div className="flex flex-wrap gap-2">
              <Badge className="gap-2 border border-white/15 bg-white/12 text-white/90">
                <span className="text-white/70">{difficultyLabel}</span>
                <span className="font-semibold">
                  {section.record.current} current
                </span>
                <span>• Best {section.record.best}</span>
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
