import { useEffect, useRef, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import club1 from '@/assets/club1.jpeg';
import club2 from '@/assets/club2.jpeg';
import club3 from '@/assets/club3.jpeg';
import club4 from '@/assets/club4.png';
import artwork1 from '@/assets/artwork1.png';
import poster1 from '@/assets/poster1.png';
import poster2 from '@/assets/poster2.jpg';

const clubDesigns = [
  { src: club1, title: 'Qùy Mào Design' },
  { src: club2, title: 'Buffalo Rider Illustration' },
  { src: club3, title: 'Space Dreams' },
  { src: club4, title: 'Outdoor Adventure' },
];

const artworks = [
  { src: artwork1, title: 'Self Portrait' },
];

const posters = [
  { src: poster1, title: 'Fallen' },
  { src: poster2, title: 'Fall in Love' },
];

export const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageClick = (src: string) => {
    setFullScreenImage(src);
  };

  const handleImageDoubleClick = () => {
    setFullScreenImage(null);
  };

  return (
    <>
      <section id="portfolio" ref={sectionRef} className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <Tabs defaultValue="clubs" className={`transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-scale' : 'opacity-0 scale-95'}`}>
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 h-auto p-2 bg-card">
            <TabsTrigger value="clubs" className="text-lg py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Design for Clubs
            </TabsTrigger>
            <TabsTrigger value="artworks" className="text-lg py-3 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              Artworks
            </TabsTrigger>
            <TabsTrigger value="posters" className="text-lg py-3 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
              Posters
            </TabsTrigger>
          </TabsList>

          <TabsContent value="clubs">
            <div className="grid md:grid-cols-2 gap-8">
              {clubDesigns.map((design, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                  onClick={() => handleImageClick(design.src)}
                >
                  <img
                    src={design.src}
                    alt={design.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <h3 className="text-2xl font-bold text-primary-foreground p-6">
                      {design.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="artworks">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artworks.map((artwork, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                  onClick={() => handleImageClick(artwork.src)}
                >
                  <img
                    src={artwork.src}
                    alt={artwork.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <h3 className="text-2xl font-bold text-accent-foreground p-6">
                      {artwork.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="posters">
            <div className="grid md:grid-cols-2 gap-8">
              {posters.map((poster, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                  onClick={() => handleImageClick(poster.src)}
                >
                  <img
                    src={poster.src}
                    alt={poster.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <h3 className="text-2xl font-bold text-secondary-foreground p-6">
                      {poster.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>

    {fullScreenImage && (
      <div
        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
        onDoubleClick={handleImageDoubleClick}
      >
        <img
          src={fullScreenImage}
          alt="Full screen view"
          className="max-w-full max-h-full object-contain cursor-pointer"
          onDoubleClick={handleImageDoubleClick}
        />
      </div>
    )}
    </>
  );
};
