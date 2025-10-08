import { memo, useCallback } from 'react';
import CharacterCard from './character-card';
import { Card } from './ui/card';

type Props = {
  characters: InGameCharacters[];
  selectedCharacter: InGameCharacters | null;
  toggleElimination: (id: string | number) => void;
  handleDoubleClick: (character: InGameCharacters) => void;
};

const CharactersTable = memo(function CharactersTable({
  characters,
  selectedCharacter,
  toggleElimination,
  handleDoubleClick,
}: Props) {
  const onToggle = useCallback(
    (id: string | number) => () => toggleElimination(id),
    [toggleElimination]
  );
  const onOpenGuess = useCallback(
    (ch: InGameCharacters) => (e: React.MouseEvent) => {
      e.preventDefault();
      handleDoubleClick(ch);
    },
    [handleDoubleClick]
  );

  return (
    <>
      {characters.map((character) => {
        const isSelected = selectedCharacter?.id === character.id;
        const eliminated = character.isEliminated;

        return (
          <Card
            key={character.id}
            role="button"
            aria-pressed={eliminated}
            title={eliminated ? 'Click to restore' : 'Click to eliminate'}
            className={[
              // trim chrome so the cell is shorter
              'group cursor-pointer p-0 bg-transparent border-0 shadow-none',
              // keep layout stable: no scale; use subtle lift & shadow
              eliminated
                ? 'opacity-40 grayscale'
                : isSelected
                  ? 'ring-2 ring-blue-400 translate-y-[-1px]'
                  : 'hover:-translate-y-[1px] hover:shadow-lg',
              'transition-transform duration-150 will-change-transform',
              'rounded-2xl', // small rounding on the outer wrapper only
            ].join(' ')}
            onClick={onToggle(character.id)}
            onContextMenu={onOpenGuess(character)}
          >
            {/* Hint the card to render smaller images to fit more on screen */}
            <CharacterCard character={character} />
          </Card>
        );
      })}
    </>
  );
});

export default CharactersTable;
