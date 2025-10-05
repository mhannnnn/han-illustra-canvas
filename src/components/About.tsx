import { useEffect, useRef, useState } from 'react';
import profileImg from '@/assets/profile.png';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 md:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'slide-in-left' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl rotate-3" />
              <div className="absolute -inset-4 bg-secondary/20 rounded-3xl -rotate-3" />
              <img
                src={profileImg}
                alt="Tran Ngoc Minh Han"
                className="relative rounded-2xl shadow-2xl w-full"
              />
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
    </section>
  );
};
