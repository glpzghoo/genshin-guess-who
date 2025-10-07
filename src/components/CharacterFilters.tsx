'use client';

import { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { elements, weapons } from '@/lib/helper';
import { Filter, Star, Wand2 } from 'lucide-react';

export type CharacterFiltersState = {
  search: string;
  element: string;
  weapon: string;
  rarity: string;
};

type CharacterFiltersProps = {
  value: CharacterFiltersState;
  disabled?: boolean;
  onChange: (value: CharacterFiltersState) => void;
};

const defaultState: CharacterFiltersState = {
  search: '',
  element: 'all',
  weapon: 'all',
  rarity: 'all',
};

export function CharacterFilters({
  value,
  onChange,
  disabled,
}: CharacterFiltersProps) {
  const [open, setOpen] = useState(false);

  const apply = (next: Partial<CharacterFiltersState>) => {
    onChange({ ...value, ...next });
  };

  const reset = () => {
    onChange(defaultState);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          disabled={disabled}
          className="h-11 gap-2 rounded-2xl border border-white/15 bg-white/10 text-white hover:bg-white/20"
        >
          <Filter className="h-4 w-4 text-sky-300" />
          Filters
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] rounded-3xl border border-white/15 bg-slate-950/95 text-white shadow-xl backdrop-blur">
        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/80">
              <Filter className="h-4 w-4 text-sky-300" />
              <span className="font-medium">Filter roster</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={reset}
              className="h-7 px-2 text-xs text-white/60 hover:text-white"
            >
              Reset
            </Button>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wide text-white/60">
              Search
            </label>
            <Input
              placeholder="Character name…"
              value={value.search}
              onChange={(e) => apply({ search: e.target.value })}
              disabled={disabled}
              className="border-white/20 bg-black/40 text-white placeholder:text-white/60 focus-visible:ring-white/30"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wide text-white/60">
              Element
            </label>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => apply({ element: 'all' })}
                disabled={disabled}
                className={`h-8 border border-white/20 bg-transparent text-white/75 hover:bg-white/10 ${
                  value.element === 'all' ? 'bg-white/20 text-white' : ''
                }`}
              >
                All
              </Button>
              {Object.entries(elements).map(([element, config]) => (
                <Button
                  key={element}
                  variant="ghost"
                  size="sm"
                  onClick={() => apply({ element })}
                  disabled={disabled}
                  className={`h-8 border border-white/20 bg-transparent text-white/75 hover:bg-white/10 ${
                    value.element === element ? 'bg-white/20 text-white' : ''
                  }`}
                >
                  <img
                    width={16}
                    height={16}
                    src={`/assets/ui/${config.icon}`}
                    alt={element}
                    className="mr-2"
                  />
                  {element}
                </Button>
              ))}
            </div>
          </div>

 100        <div className="space-y-2">
 101          <label className="text-xs uppercase tracking-wide text-white/60">
 102            Weapon
 103          </label>
 104          <div className="flex flex-wrap gap-2">
 105            <Button
 106              variant="ghost"
 107              size="sm"
 108              onClick={() => apply({ weapon: 'all' })}
 109              disabled={disabled}
 110              className={`h-8 border border-white/20 bg-transparent text-white/75 hover:bg-white/10 ${
 111                value.weapon === 'all' ? 'bg-white/20 text-white' : ''
 112              }`}
 113            >
 114              All
 115            </Button>
 116            {Object.entries(weapons).map(([weapon, config]) => {
 117              const Icon = config.icon ?? Wand2;
 118              return (
 119                <Button
 120                  key={weapon}
 121                  variant="ghost"
 122                  size="sm"
 123                  onClick={() => apply({ weapon })}
 124                  disabled={disabled}
 125                  className={`h-8 border border-white/20 bg-transparent text-white/75 hover:bg-white/10 ${
 126                    value.weapon === weapon ? 'bg-white/20 text-white' : ''
 127                  }`}
 128                >
 129                  <Icon className="mr-2 h-3 w-3" />
 130                  {config.name}
 131                </Button>
 132              );
 133            })}
 134          </div>
 135        </div>
 136
 137        <div className="space-y-2">
 138          <label className="text-xs uppercase tracking-wide text-white/60">
 139            Rarity
 140          </label>
 141          <div className="flex items-center gap-2">
 142            <Button
 143              variant="ghost"
 144              size="sm"
 145              onClick={() => apply({ rarity: 'all' })}
 146              disabled={disabled}
 147              className={`h-8 border border-white/20 bg-transparent text-white/75 hover:bg-white/10 ${
 148                value.rarity === 'all' ? 'bg-white/20 text-white' : ''
 149              }`}
 150            >
 151              All
 152            </Button>
 153            <Button
 154              variant="ghost"
 155              size="sm"
 156              onClick={() => apply({ rarity: '4' })}
 157              disabled={disabled}
 158              className={`h-8 border border-white/20 bg-transparent text-white/75 hover:bg-white/10 ${
 159                value.rarity === '4' ? 'bg-white/20 text-white' : ''
 160              }`}
 161            >
 162              4<Star className="ml-1 h-3 w-3" />
 163            </Button>
 164            <Button
 165              variant="ghost"
 166              size="sm"
 167              onClick={() => apply({ rarity: '5' })}
 168              disabled={disabled}
 169              className={`h-8 border border-white/20 bg-transparent text-white/75 hover:bg-white/10 ${
 170                value.rarity === '5' ? 'bg-white/20 text-white' : ''
 171              }`}
 172            >
 173              5<Star className="ml-1 h-3 w-3" />
 174            </Button>
 175          </div>
 176        </div>
 177      </div>
    </PopoverContent>
  </Popover>
  );
}

