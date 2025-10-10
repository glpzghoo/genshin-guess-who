'use client';

import { Check as CheckIcon, ChevronsUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { getDisplayName } from '@/lib/daily-challenge';
import type { Character } from '@/lib/types';

type CharacterComboboxProps = {
  characters: Character[];
  selection: Character | null;
  onSelect: (character: Character | null) => void;
  onSubmitGuess: (character: Character) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  disabled?: boolean;
};

export function CharacterCombobox({
  characters,
  selection,
  onSelect,
  onSubmitGuess,
  open,
  onOpenChange,
  disabled,
}: CharacterComboboxProps) {
  const displayValue = selection
    ? getDisplayName(selection)
    : 'Search by name, element or region';

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-12 w-full justify-between rounded-2xl border border-white/20 bg-white/10 text-left text-sm text-white/90 shadow-lg transition hover:bg-white/20"
          disabled={disabled}
        >
          <span className="truncate">{displayValue}</span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-60" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 rounded-2xl border border-white/10 bg-slate-950/95 p-0 text-white shadow-xl">
        <Command>
          <CommandInput
            placeholder="Type to search..."
            className="border-b border-white/10 bg-transparent text-sm placeholder:text-white/50"
          />
          <CommandList>
            <CommandEmpty>No characters found.</CommandEmpty>
            <CommandGroup>
              {characters.map((character) => (
                <CommandItem
                  key={character.id}
                  value={String(character.id)}
                  keywords={[
                    character.name,
                    character.element,
                    character.weaponType,
                    character.region,
                  ]}
                  onSelect={() => {
                    if (disabled) return;
                    onSelect(character);
                    onOpenChange(false);
                    onSubmitGuess(character);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-white/10">
                      <img
                        src={`/assets/ui/${character.icon}.png`}
                        alt={character.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">
                        {getDisplayName(character)}
                      </span>
                      <span className="text-xs text-white/60">
                        {character.element} • {character.weaponType}
                      </span>
                    </div>
                    {selection?.id === character.id ? (
                      <CheckIcon className="ml-auto h-4 w-4 text-emerald-400" />
                    ) : null}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
