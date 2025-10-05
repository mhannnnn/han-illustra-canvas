import { useEffect, useState } from 'react';
import starGif from '@/assets/star.gif';
import clickSound from '@/assets/click-sound.mp3';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
}

export const StarEffect = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const audio = new Audio(clickSound);
    
    const handleClick = (e: MouseEvent) => {
      // Play click sound
      audio.currentTime = 0;
      audio.play().catch(() => {});
      
      // Random size between 1-5 cm (approximately 38-190 pixels)
      const size = Math.random() * 152 + 38;
      
      const newStar: Star = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY + window.scrollY,
        size,
      };

      setStars((prev) => [...prev, newStar]);

      // Remove star after animation
      setTimeout(() => {
        setStars((prev) => prev.filter((star) => star.id !== newStar.id));
      }, 2000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {stars.map((star) => (
        <img
          key={star.id}
          src={starGif}
          alt=""
          className="absolute animate-ping"
          style={{
            left: star.x - star.size / 2,
            top: star.y - star.size / 2,
            width: star.size,
            height: star.size,
            opacity: 0.8,
            animationDuration: '2s',
          }}
        />
      ))}
    </div>
  );
};
