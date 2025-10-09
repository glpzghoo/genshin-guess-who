import { memo } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  character: Character;
};

const ELEMENT = {
  Anemo: { color: 'from-[#5d4cae] to-[#3f356f]' }, // purple-ish
  Geo: { color: 'from-[#c07a2b] to-[#9c5c17]' }, // orange-ish
  Pyro: { color: 'from-[#c07a2b] to-[#9c5c17]' },
  Electro: { color: 'from-[#5d4cae] to-[#3f356f]' },
  Hydro: { color: 'from-[#5d4cae] to-[#3f356f]' },
  Cryo: { color: 'from-[#5d4cae] to-[#3f356f]' },
  Dendro: { color: 'from-[#c07a2b] to-[#9c5c17]' },
  default: { color: 'from-[#5d4cae] to-[#3f356f]' },
} as const;

const CharacterCard = memo(function CharacterCard({ character }: Props) {
  const { name, element, icon, rank } = character;
  const palette = ELEMENT[element as keyof typeof ELEMENT] ?? ELEMENT.default;
  const stars = Math.max(0, Math.min(5, Number(rank) || 0));

  return (
    <div
      className={cn(
        'relative select-none rounded-2xl border border-white/10 bg-[#2b2740] shadow-sm',
        'transition-transform duration-150 ease-out hover:-translate-y-[1px]'
      )}
    >
      {/* Image / header */}
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl rounded-b-none',
          'bg-gradient-to-b',
          palette.color
        )}
      >
        <div className="relative aspect-square">
          <img
            src={`/assets/ui/${icon}.png`}
            alt={`${name} portrait`}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />

          {/* top-left: element badge */}
          <div className="absolute left-1.5 top-1.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/45 ring-1 ring-white/15 backdrop-blur">
              <img
                src={`/assets/ui/UI_Buff_Element_${String(element)}.png`}
                alt={`${element} icon`}
                className="h-4 w-4"
                loading="lazy"
              />
            </div>
          </div>

          {/* stars row – floats near bottom on top of the image */}
          <div className="pointer-events-none absolute inset-x-0 -bottom-1 flex justify-center">
            <div className="flex items-center gap-0.5 rounded-full bg-black/35 px-2 py-1 ring-1 ring-white/15 backdrop-blur">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  viewBox="0 0 24 24"
                  className={cn(
                    'h-3.5 w-3.5',
                    i < stars ? 'fill-yellow-300' : 'fill-white/25'
                  )}
                  aria-hidden
                >
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* name plate */}
      <div className="rounded-2xl rounded-t-none bg-[#e9dfc8] px-3 py-2 text-center text-[13px] font-semibold text-[#2e2a3f]">
        <span className="line-clamp-1">{name}</span>
      </div>
    </div>
  );
});

export default CharacterCard;
