import { useEffect, useState } from 'react';
import characterWalk from '@/assets/character-walk.gif';
import characterAnimate from '@/assets/character-animate.gif';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAnimateGif, setShowAnimateGif] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCharacterClick = () => {
    setShowAnimateGif(true);
    setTimeout(() => setShowAnimateGif(false), 3000);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-muted">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
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
    </section>
  );
};
