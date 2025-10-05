import { useEffect, useState } from 'react';
import scribbleGif from '@/assets/scribble.gif';

interface Scribble {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
}

export const BackgroundScribbles = () => {
  const [scribbles, setScribbles] = useState<Scribble[]>([]);

  useEffect(() => {
    // Generate random scribbles
    const generateScribbles = () => {
      const newScribbles: Scribble[] = [];
      const count = 8; // Number of background scribbles

      for (let i = 0; i < count; i++) {
        newScribbles.push({
          id: i,
          x: Math.random() * 100, // Random position (percentage)
          y: Math.random() * 100,
          size: Math.random() * 150 + 100, // Random size between 100-250px
          rotation: Math.random() * 360, // Random rotation
        });
      }

      setScribbles(newScribbles);
    };

    generateScribbles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {scribbles.map((scribble) => (
        <img
          key={scribble.id}
          src={scribbleGif}
          alt=""
          className="absolute"
          style={{
            left: `${scribble.x}%`,
            top: `${scribble.y}%`,
            width: scribble.size,
            height: scribble.size,
            opacity: 0.35,
            transform: `rotate(${scribble.rotation}deg) translate(-50%, -50%)`,
            mixBlendMode: 'multiply',
          }}
        />
      ))}
    </div>
  );
};
