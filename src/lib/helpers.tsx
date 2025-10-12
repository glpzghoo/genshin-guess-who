import { Crown, Star, Sword, Zap } from 'lucide-react';
import { elements, weapons } from './helper';

export function getRankIcon(ar: number) {
  if (ar >= 55) return <Crown className="h-4 w-4 text-accent" />;
  if (ar >= 45) return <Star className="h-4 w-4 text-primary" />;
  if (ar >= 35) return <Zap className="h-4 w-4 text-chart-2" />;
  return <Sword className="h-4 w-4 text-muted-foreground" />;
}

export const renderElementWithIcon = (
  element: string,
  iconClass = 'h-4 w-4',
  wrapperClass = ''
) => {
  const meta = elements[element as keyof typeof elements];
  const classes = ['inline-flex items-center gap-2', wrapperClass]
    .filter(Boolean)
    .join(' ');

  if (!meta) {
    return <span className={classes}>{element}</span>;
  }

  return (
    <span className={classes}>
      <img
        src={`/assets/ui/${meta.icon}`}
        alt={`${element} icon`}
        className={iconClass}
        aria-hidden
      />
      <span>{element}</span>
    </span>
  );
};

export const renderWeaponWithIcon = (
  weapon: string,
  iconClass = 'h-4 w-4',
  wrapperClass = ''
) => {
  const weaponMeta = weapons[weapon as keyof typeof weapons];
  const classes = ['inline-flex items-center gap-2', wrapperClass]
    .filter(Boolean)
    .join(' ');

  if (!weaponMeta?.icon) {
    return <span className={classes}>{weapon}</span>;
  }

  const WeaponIcon = weaponMeta.icon;

  return (
    <span className={classes}>
      <WeaponIcon className={iconClass} aria-hidden />
      <span>{weapon}</span>
    </span>
  );
};
