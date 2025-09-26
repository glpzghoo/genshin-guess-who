import { Star } from 'lucide-react';
import { Badge } from './ui/badge';
import { CardContent } from './ui/card';
import Image from 'next/image';
import { elements, weapons } from '@/lib/helper';
type Props = {
  character: Character;
};
const CharacterCard = ({ character }: Props) => {
  const { name, element, weaponType, icon } = character;
  const ElementMeta = elements[element];
  const WeaponIcon = weapons[weaponType].icon;
  return (
    <CardContent className="p-3">
      <div className="flex justify-between">
        <Badge variant="secondary" className="text-xs">
          {character.rank}
          <Star className="h-3 w-3 ml-1" />
        </Badge>
        <div className={`p-1 rounded ${ElementMeta.bg}`}>
          <Image
            width={20}
            height={20}
            src={`/assets/ui/${ElementMeta.icon}`}
            alt={`element-${element}`}
          />
        </div>
      </div>
      <div className="aspect-square mb-3 relative overflow-hidden rounded-lg">
        <Image fill src={`/assets/ui/${icon}.png`} alt={name} />

        <div className="absolute bottom-2 left-2 flex gap-1">
          <div className="p-1 rounded bg-secondary">
            <WeaponIcon className="h-3 w-3" />
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-sm text-center">{name}</h3>
    </CardContent>
  );
};

export default CharacterCard;
