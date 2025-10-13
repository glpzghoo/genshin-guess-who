import { useCallback, useEffect, useRef, useState } from 'react';

type PlayVoiceLine = (audioSrc?: string) => void;

type UseVoiceLinePlayerReturn = {
  play: PlayVoiceLine;
  stop: () => void;
  isPlaying: boolean;
  hasError: boolean;
};

export const useVoiceLinePlayer = (): UseVoiceLinePlayerReturn => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const stop = useCallback(() => {
    const current = audioRef.current;
    if (!current) return;
    current.pause();
    current.onended = null;
    current.onerror = null;
    audioRef.current = null;
    setIsPlaying(false);
  }, []);

  useEffect(() => stop, [stop]);

  const play = useCallback<PlayVoiceLine>(
    (audioSrc) => {
      stop();
      if (!audioSrc) {
        setHasError(true);
        return;
      }

      setHasError(false);
      const audio = new Audio(audioSrc);
      audioRef.current = audio;

      audio.onended = () => {
        setIsPlaying(false);
      };
      audio.onerror = () => {
        setHasError(true);
        stop();
      };

      setIsPlaying(true);
      const playPromise = audio.play();
      if (playPromise?.catch) {
        playPromise.catch((error) => {
          console.warn('Failed to play voice line audio', error);
          setHasError(true);
          stop();
        });
      }
    },
    [stop]
  );

  return {
    play,
    stop,
    isPlaying,
    hasError,
  };
};

