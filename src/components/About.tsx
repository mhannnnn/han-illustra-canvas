import { useEffect, useRef, useState } from 'react';
import profileImg from '@/assets/Red and Yellow Bold Modern Creative Content Creator Portfolio Presentation (1).png';
import starGif from '@/assets/star.gif';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  layer: number;
}
export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleProfileClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const layers = 4;
    const starsPerLayer = 6;

    for (let layer = 0; layer < layers; layer++) {
      const radius = 100 + (layer * 60);

      for (let i = 0; i < starsPerLayer; i++) {
        const angle = (i / starsPerLayer) * Math.PI * 2 + (layer * 0.3);
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        const size = Math.random() * 40 + 50 - (layer * 8);

        const newStar: Star = {
          id: Date.now() + layer * 100 + i,
          x,
          y: y + window.scrollY,
          size,
          layer,
        };

        setTimeout(() => {
          setStars((prev) => [...prev, newStar]);

          setTimeout(() => {
            setStars((prev) => prev.filter((star) => star.id !== newStar.id));
          }, 2500);
        }, layer * 100 + i * 30);
      }
    }
  };
  return <section ref={sectionRef} className="py-24 px-4 md:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'slide-in-left' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative">
              <div
                onClick={handleProfileClick}
                className="cursor-pointer animate-wiggle hover:scale-105 transition-transform duration-300 relative z-10"
              >
                <img
                  src={profileImg}
                  alt="Tran Ngoc Minh Han"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'slide-in-right' : 'opacity-0 translate-x-20'}`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              About Me
            </h2>
            <div className="w-24 h-1 bg-accent mb-8 rounded-full" />
            
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                Hello! I'm Minh Han, a passionate graphic designer and illustrator with a love for creating 
                vibrant, meaningful visual stories.
              </p>
              <p>
                My work blends traditional illustration techniques with modern design principles, 
                bringing warmth and personality to every project.
              </p>
              <p>
                From club designs to personal artworks and eye-catching posters, I pour creativity and 
                attention to detail into everything I create.
              </p>
            </div>

            <div className="mt-8 flex gap-4 flex-wrap">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Illustration
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Graphic Design
              </span>
              <span className="px-4 py-2 bg-secondary/10 text-secondary-foreground rounded-full text-sm font-medium">
                Digital Art
              </span>
            </div>
          </div>
        </div>
      </div>

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
              opacity: 0.7 - (star.layer * 0.1),
              animationDuration: '2.5s',
            }}
          />
        ))}
      </div>
    </section>;
};