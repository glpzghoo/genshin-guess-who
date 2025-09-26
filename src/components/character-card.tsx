import { memo } from 'react';
import Image from 'next/image';
import { Sword } from 'lucide-react';
import { CardContent } from './ui/card';
import { elements, weapons } from '@/lib/helper';

type Props = {
  character: Character;
  /** Hint browser how big this card image renders */
  imgSizes?: string; // e.g. "(max-width: 768px) 33vw, 120px"
  /** kept for API compatibility; no longer used */
  showStars?: boolean;
};

const CharacterCard = memo(function CharacterCard({
  character,
  imgSizes = '(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 120px',
}: Props) {
  const { name, element, weaponType, icon, rank } = character;

  // rarity styles: 5★ gold, 4★ purple (Genshin vibe)
  const isFiveStar = Number(rank) === 5;
  const rarityWrap = isFiveStar ? 'bg-orange-600' : 'bg-purple-600';

  // Safe lookups with fallbacks
  const elementMeta = elements[element] ?? {
    icon: 'element-unknown.png',
  };
  const WeaponIcon =
    weapons[weaponType]?.icon ?? ((props: any) => <Sword {...props} />);

  return (
    <CardContent className={`p-3 rounded-lg`}>
      {/* Portrait */}
      <div className="aspect-square mb-3 relative overflow-hidden rounded-lg">
        <Image
          fill
          src={`/assets/ui/${icon}.png`}
          alt={`${name} portrait`}
          sizes={imgSizes}
          priority={false}
        />

        {/* Element chip (moved on-image) */}
        <div
          className="absolute top-2 right-2 p-1 rounded bg-black/40 backdrop-blur-sm"
          title={`Element: ${element}`}
        >
          <Image
            width={18}
            height={18}
            src={`/assets/ui/${elementMeta.icon}`}
            alt={`${element} element icon`}
          />
        </div>

        {/* Weapon pill */}
        <div className="absolute bottom-2 left-2 flex gap-1">
          <div
            className="p-1 rounded bg-black/40 backdrop-blur-sm"
            title={`Weapon: ${weaponType}`}
          >
            <WeaponIcon className="h-3.5 w-3.5 text-white" aria-hidden />
          </div>
        </div>
      </div>

      {/* Name */}
      <h3
        className={`font-semibold text-sm text-center truncate rounded-2xl px-4  ${rarityWrap}`}
        title={name}
      >
        {name}
      </h3>
    </CardContent>
  );
});

export default CharacterCard;
