import { Button } from '@/components/ui/button';

type VoiceLineHintProps = {
  text: string;
  audioSrc?: string;
  onPlay: (audioSrc?: string) => void;
  isPlaying: boolean;
  hasError: boolean;
};

export function VoiceLineHint({
  text,
  audioSrc,
  onPlay,
  isPlaying,
  hasError,
}: VoiceLineHintProps) {
  const isDisabled = !audioSrc;
  const showUnavailable = hasError || isDisabled;

  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold whitespace-pre-line leading-6 text-white">
        {text}
      </p>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
        <Button
          type="button"
          size="sm"
          variant="outline"
          className="w-fit border-white/30 bg-white/10 text-white hover:bg-white/20"
          onClick={() => onPlay(audioSrc)}
          disabled={isDisabled}
        >
          {isPlaying ? 'Playing…' : 'Play voice line'}
        </Button>
        {showUnavailable ? (
          <span className="text-xs font-medium text-red-300">
            Voiceline not available
          </span>
        ) : null}
      </div>
    </div>
  );
}

