export type ElimOrder = 'asc' | 'desc';

export function sortByEliminated<
  T extends { isEliminated: boolean; release?: number; name?: string },
>(list: T[], order: ElimOrder, secondary: 'release' | 'name' = 'release'): T[] {
  const byElim = (a: T, b: T) => {
    if (a.isEliminated === b.isEliminated) return 0;
    return order === 'asc'
      ? Number(a.isEliminated) - Number(b.isEliminated)
      : Number(b.isEliminated) - Number(a.isEliminated);
  };

  const bySecondary = (a: T, b: T) => {
    if (secondary === 'release') return (b.release ?? 0) - (a.release ?? 0);
    return (a.name ?? '').localeCompare(b.name ?? '');
  };

  return [...list].sort((a, b) => byElim(a, b) || bySecondary(a, b));
}
