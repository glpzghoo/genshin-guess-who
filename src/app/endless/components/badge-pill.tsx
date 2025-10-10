'use client';

import type { ReactNode } from 'react';

import type { ElementTheme } from '@/lib/daily-challenge';

type BadgePillProps = {
  theme: ElementTheme;
  icon: ReactNode;
  highlight?: boolean;
  children: ReactNode;
};

export function BadgePill({
  theme,
  icon,
  highlight,
  children,
}: BadgePillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
        highlight
          ? 'bg-emerald-500/25 text-emerald-100 border-emerald-400/50'
          : ''
      }`}
      style={{
        backgroundColor: highlight ? undefined : theme.badge,
        color: highlight ? undefined : theme.badgeText,
        borderColor: highlight ? undefined : theme.accent,
      }}
    >
      {icon}
      {children}
    </span>
  );
}
