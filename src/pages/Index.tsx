import { StarEffect } from '@/components/StarEffect';
import { BackgroundScribbles } from '@/components/BackgroundScribbles';
import { BackgroundMusic } from '@/components/BackgroundMusic';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="relative">
      <BackgroundScribbles />
      <StarEffect />
      <BackgroundMusic />
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;
