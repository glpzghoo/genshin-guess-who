import { renderElementWithIcon, renderWeaponWithIcon } from '@/lib/helpers';
import { GenshindleCell } from './helpers';

export function AttemptsBar({ used, total }: { used: number; total: number }) {
  const pct = Math.min(100, Math.round((used / total) * 100));
  return (
    <div
      className="mt-2 h-2 w-full overflow-hidden rounded-full border border-white/10 bg-white/5"
      aria-hidden
    >
      <div
        className="h-full w-0 bg-gradient-to-r from-emerald-400/80 to-emerald-300/60"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export const renderCellContent = (cell: GenshindleCell) => {
  if (cell.id === 'element') return renderElementWithIcon(cell.value);
  if (cell.id === 'weapon') return renderWeaponWithIcon(cell.value);
  return <span>{cell.value}</span>;
};
