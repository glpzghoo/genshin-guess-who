import CharacterCard from './character-card';
import { Card } from './ui/card';

const CharactersTable = ({
  characters,
  selectedCharacter,
  toggleElimination,
  handleDoubleClick,
}: {
  characters: InGameCharacters[];
  selectedCharacter: InGameCharacters | null;
  toggleElimination: (id: string | number) => void;
  handleDoubleClick: (character: InGameCharacters) => void;
}) => {
  return characters.map((character) => {
    const isSelected = selectedCharacter?.id === character.id;
    return (
      <div key={character.id} className="group">
        <Card
          title={
            character.isEliminated ? 'Click to restore' : 'Click to eliminate'
          }
          className={`cursor-pointer transition-all bg-secondary border-foreground ${
            character.isEliminated
              ? 'opacity-40 grayscale'
              : isSelected
                ? 'ring-2 ring-blue-400 glow scale-[1.02]'
                : 'hover:scale-105 hover:shadow-lg'
          }`}
          onClick={() => toggleElimination(character.id)}
          onContextMenu={(e) => {
            e.preventDefault();
            handleDoubleClick(character);
          }}
        >
          <CharacterCard character={character} />
        </Card>
      </div>
    );
  });
};

export default CharactersTable;
