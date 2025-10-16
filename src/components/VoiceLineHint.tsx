import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Flag, Loader2, MoreVertical } from 'lucide-react';
import { toast } from 'sonner';

type VoiceLineHintProps = {
  text: string;
  audioSrc?: string;
  onPlay: (audioSrc?: string) => void;
  onStop: () => void;
  isPlaying: boolean;
  hasError: boolean;
  character?: string;
  isLoading: boolean;
};

export function VoiceLineHint({
  text,
  audioSrc,
  onPlay,
  onStop,
  isPlaying,
  hasError,
  character,
  isLoading,
}: VoiceLineHintProps) {
  const [hasAttempted, setHasAttempted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const canPlay = Boolean(audioSrc);
  const isActionDisabled = !canPlay || isLoading;
  const showUnavailable = (hasAttempted && hasError) || !canPlay;

  const handleFeedback = async (issue: string) => {
    if (!character) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          issue,
          character,
          voiceLineText: text,
          audioSrc,
          userAgent: navigator.userAgent,
          timestamp: Date.now(),
        }),
      });

      if (response.ok) {
        toast.success(
          'Thank you for your feedback! We will investigate this issue.'
        );
      } else {
        toast.error('Failed to send feedback. Please try again later.');
      }
    } catch (error) {
      console.error('Failed to send feedback:', error);
      alert('Failed to send feedback. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePlay = () => {
    setHasAttempted(true);
    onPlay(audioSrc);
  };

  const handleStop = () => {
    onStop();
  };

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
          onClick={isPlaying ? handleStop : handlePlay}
          disabled={isActionDisabled}
          aria-busy={isLoading}
        >
          {isLoading ? (
            <Loader2 className=" animate-spin" />
          ) : isPlaying ? (
            'Pause'
          ) : (
            'Play voice line'
          )}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="w-fit border-white/30 bg-white/10 text-white hover:bg-white/20 p-2"
              disabled={isSubmitting}
            >
              Let me know
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Send me a mail</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => handleFeedback("Voiceline doesn't match")}
              disabled={isSubmitting}
            >
              <Flag className="mr-2 h-4 w-4" />
              Voiceline doesn't match
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleFeedback('Voiceline not playing')}
              disabled={isSubmitting}
            >
              <Flag className="mr-2 h-4 w-4" />
              Voiceline not playing
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {showUnavailable ? (
          <span className="text-xs font-medium text-red-300">
            Voiceline not available
          </span>
        ) : null}
      </div>
    </div>
  );
}
