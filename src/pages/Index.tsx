import { StarEffect } from '@/components/StarEffect';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="relative">
      <StarEffect />
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;
