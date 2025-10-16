import { useCallback, useEffect, useRef, useState } from 'react';

type PlayVoiceLine = (audioSrc?: string) => void;

type UseVoiceLinePlayerReturn = {
  play: PlayVoiceLine;
  stop: () => void;
  isPlaying: boolean;
  hasError: boolean;
  isLoading: boolean;
};

export const useVoiceLinePlayer = (): UseVoiceLinePlayerReturn => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentSrcRef = useRef<string | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cleanupCurrentAudio = useCallback((release = false) => {
    const current = audioRef.current;
    if (!current) return;
    current.pause();
    current.onended = null;
    current.onerror = null;
    current.onplaying = null;
    current.onwaiting = null;
    if (release) {
      audioRef.current = null;
      currentSrcRef.current = undefined;
    }
    setIsPlaying(false);
    setIsLoading(false);
  }, []);

  const stop = useCallback(() => {
    const current = audioRef.current;
    if (!current) return;
    current.pause();
    setIsPlaying(false);
    setIsLoading(false);
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
        setIsLoading(false);

        const resumePromise = existingAudio.play();
        if (resumePromise?.then) {
          resumePromise
            .then(() => {
              setIsPlaying(true);
              setIsLoading(false);
            })
            .catch((error) => {
              console.warn('Failed to resume voice line audio', error);
              setHasError(true);
              setIsPlaying(false);
              setIsLoading(false);
            });
        } else {
          setIsPlaying(true);
        }
        return;
      }

      cleanupCurrentAudio(true);

      setHasError(false);
      setIsLoading(true);
      const audio = new Audio(audioSrc);
      audio.preload = 'auto';
      audioRef.current = audio;
      currentSrcRef.current = audioSrc;

      audio.onplaying = () => {
        setIsPlaying(true);
        setIsLoading(false);
      };
      audio.onended = () => {
        setIsPlaying(false);
        setIsLoading(false);
        audio.currentTime = 0;
      };
      audio.onerror = () => {
        setHasError(true);
        setIsPlaying(false);
        setIsLoading(false);
        cleanupCurrentAudio(true);
      };
      audio.onwaiting = () => {
        setIsLoading(true);
      };

      const playPromise = audio.play();
      if (playPromise?.then) {
        playPromise
          .then(() => {
            setHasError(false);
          })
          .catch((error) => {
            console.warn('Failed to play voice line audio', error);
            setHasError(true);
            setIsPlaying(false);
            setIsLoading(false);
            cleanupCurrentAudio(true);
          });
      } else {
        setIsPlaying(true);
        setIsLoading(false);
      }
    },
    [cleanupCurrentAudio]
  );

  return {
    play,
    stop,
    isPlaying,
    hasError,
    isLoading,
  };
};
