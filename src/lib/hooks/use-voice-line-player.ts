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
  const currentSrcRef = useRef<string | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const cleanupCurrentAudio = useCallback((release = false) => {
    const current = audioRef.current;
    if (!current) return;
    current.pause();
    current.onended = null;
    current.onerror = null;
    if (release) {
      audioRef.current = null;
      currentSrcRef.current = undefined;
    }
  }, []);

  const stop = useCallback(() => {
    const current = audioRef.current;
    if (!current) return;
    current.pause();
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    return () => {
      cleanupCurrentAudio(true);
    };
  }, [cleanupCurrentAudio]);

  const play = useCallback<PlayVoiceLine>(
    (audioSrc) => {
      if (!audioSrc) {
        setHasError(true);
        return;
      }

      const isSameSource = currentSrcRef.current === audioSrc;
      const existingAudio = audioRef.current;

      if (isSameSource && existingAudio) {
        setHasError(false);
        setIsPlaying(true);

        const resumePromise = existingAudio.play();
        if (resumePromise?.catch) {
          resumePromise.catch((error) => {
            console.warn('Failed to resume voice line audio', error);
            setHasError(true);
            setIsPlaying(false);
          });
        }
        return;
      }

      cleanupCurrentAudio(true);

      setHasError(false);
      const audio = new Audio(audioSrc);
      audio.preload = 'auto';
      audioRef.current = audio;
      currentSrcRef.current = audioSrc;

      audio.onended = () => {
        setIsPlaying(false);
        audio.currentTime = 0;
      };
      audio.onerror = () => {
        setHasError(true);
        setIsPlaying(false);
        cleanupCurrentAudio(true);
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
    [stop, cleanupCurrentAudio]
  );

  return {
    play,
    stop,
    isPlaying,
    hasError,
  };
};
