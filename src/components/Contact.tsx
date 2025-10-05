import { useEffect, useRef, useState } from 'react';
import { Mail, MessageCircle, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
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
    <section ref={sectionRef} className="py-24 px-4 md:px-8 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            Let's Create Together
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you! 
            Let's bring your creative vision to life.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-background rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">Get in touch via email</p>
            </div>

            <div className="p-6 bg-background rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Message</h3>
              <p className="text-muted-foreground text-sm">Send a direct message</p>
            </div>

            <div className="p-6 bg-background rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Social</h3>
              <p className="text-muted-foreground text-sm">Follow my work</p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start a Conversation
          </Button>
        </div>
      </div>

      <div className="mt-16 text-center text-muted-foreground">
        <p className="text-sm">© 2024 Tran Ngoc Minh Han. All rights reserved.</p>
      </div>
    </section>
  );
};
