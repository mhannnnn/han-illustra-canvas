import { useEffect, useState } from 'react';
import characterWalk from '@/assets/character-walk.gif';
import characterAnimate from '@/assets/character-animate.gif';
import profilePic from '@/assets/Red and Yellow Bold Modern Creative Content Creator Portfolio Presentation (1).png';
import starGif from '@/assets/star.gif';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
}

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAnimateGif, setShowAnimateGif] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCharacterClick = () => {
    setShowAnimateGif(true);
    setTimeout(() => setShowAnimateGif(false), 3000);
  };

  const handleProfileClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Create 8 stars in a circular pattern behind the profile
    const numberOfStars = 8;
    const radius = 120;

    for (let i = 0; i < numberOfStars; i++) {
      const angle = (i / numberOfStars) * Math.PI * 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      const size = Math.random() * 60 + 40;

      const newStar: Star = {
        id: Date.now() + i,
        x,
        y: y + window.scrollY,
        size,
      };

      setTimeout(() => {
        setStars((prev) => [...prev, newStar]);

        setTimeout(() => {
          setStars((prev) => prev.filter((star) => star.id !== newStar.id));
        }, 2000);
      }, i * 50);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-muted">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
          <div className="flex justify-center mb-8">
            <div
              onClick={handleProfileClick}
              className="cursor-pointer animate-wiggle hover:scale-105 transition-transform duration-300"
            >
              <img
                src={profilePic}
                alt="Profile"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-primary"
              />
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-bold mb-6 text-primary">
            Tran Ngoc
            <br />
            Minh Han
          </h1>
          <p className="text-2xl md:text-4xl text-muted-foreground font-light tracking-wider">
            graphic designer / illustrator
          </p>

          <div className="mt-12 flex justify-center gap-4">
            <div className="w-20 h-1 bg-accent rounded-full" />
            <div className="w-20 h-1 bg-secondary rounded-full" />
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>

      <div className="absolute bottom-20 left-0 cursor-pointer" onClick={handleCharacterClick}>
        <img 
          src={characterWalk} 
          alt="Walking character" 
          className="w-[7cm] h-auto animate-walk mix-blend-multiply"
        />
      </div>

      {showAnimateGif && (
        <div className="absolute bottom-20 right-40 animate-fade-in">
          <img
            src={characterAnimate}
            alt="Animated character"
            className="w-[7cm] h-auto"
          />
        </div>
      )}

      <div className="pointer-events-none fixed inset-0 z-0">
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
    </section>
  );
};
