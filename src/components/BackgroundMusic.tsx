import { useEffect, useRef, useState } from 'react';
import backgroundMusic from '@/assets/background-music.mp3';
import { Volume2, VolumeX } from 'lucide-react';

export const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(backgroundMusic);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    const handleFirstInteraction = () => {
      setUserInteracted(true);
      if (!isPlaying) {
        audioRef.current?.play().catch(() => {});
        setIsPlaying(true);
      }
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });

    return () => {
      audioRef.current?.pause();
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  if (!userInteracted) return null;

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary/90 text-primary-foreground hover:bg-primary transition-all shadow-lg"
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
    >
      {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
    </button>
  );
};
