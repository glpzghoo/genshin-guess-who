import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const SelectCharacter = ({
  selectedCharacter,
  handleMakeGuess,
  canGuess,
}: {
  selectedCharacter: Character;
  handleMakeGuess: () => void;
  canGuess: boolean;
}) => {
  return (
    <Card className="backdrop-blur-sm">
      <CardContent className="space-y-3">
        <div className="aspect-square relative overflow-hidden rounded-lg">
          <img
            src={`/assets/ui/${selectedCharacter.icon}.png`}
            alt={selectedCharacter.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <Button
          onClick={handleMakeGuess}
          variant="default"
          size="sm"
          className="w-full shimmer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          disabled={!canGuess || !selectedCharacter}
        >
          <Check className="h-4 w-4 mr-2" />
          Final Guess
        </Button>
      </CardContent>
    </Card>
  );
};
export default SelectCharacter;
