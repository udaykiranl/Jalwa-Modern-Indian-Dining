import React, { useState, useEffect, useRef } from 'react';
import Section from '../components/Section';
import { X, Image as ImageIcon, Loader2 } from 'lucide-react';

const IMAGES = [
  "https://images.unsplash.com/photo-1517244683847-745431d57ede?q=80&w=800",
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800",
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800",
  "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800",
  "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800",
  "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800",
  "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800",
  "https://images.unsplash.com/photo-1505253758473-96b701d8fe52?q=80&w=800",
  "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800",
];

interface LazyImageProps {
  src: string;
  index: number;
  onClick: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, index, onClick }) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' } // Start loading slightly before it enters viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative group overflow-hidden rounded-2xl cursor-pointer aspect-square bg-neutral-900 border border-neutral-800 shadow-lg"
      onClick={onClick}
    >
      {/* Dark Luxury Placeholder */}
      {(!isLoaded || !isInView) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-900 animate-pulse z-0">
           <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mb-3">
              <ImageIcon className="text-neutral-700 opacity-50" size={20} />
           </div>
           <span className="text-neutral-700 text-[10px] tracking-[0.3em] uppercase font-sans">Loading</span>
        </div>
      )}

      {/* Actual Image */}
      {isInView && (
        <img 
          src={src} 
          alt={`Gallery Image ${index + 1}`} 
          className={`w-full h-full object-cover relative z-10 transition-all duration-1000 ease-in-out group-hover:scale-110 ${isLoaded ? 'opacity-100 blur-0 grayscale-0' : 'opacity-0 blur-sm grayscale'}`}
          onLoad={() => setIsLoaded(true)}
        />
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20 backdrop-blur-[2px]">
         <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-white font-serif tracking-widest border border-jalwa-gold/50 bg-black/30 px-6 py-3 hover:bg-jalwa-gold hover:text-black hover:border-jalwa-gold transition-all duration-300 rounded-sm text-sm">
              VIEW IMAGE
            </span>
         </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
       <div className="bg-neutral-900 pt-32 pb-16 text-center px-6 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-jalwa-gold rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Gallery</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg font-light">
            A visual journey through our culinary artistry and ambiance.
          </p>
        </div>
      </div>

      <Section>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {IMAGES.map((src, idx) => (
              <LazyImage 
                key={idx} 
                src={src} 
                index={idx}
                onClick={() => setSelectedImage(src)} 
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-gray-400 hover:text-jalwa-gold transition-colors z-50 p-2 bg-neutral-900/50 rounded-full border border-neutral-800 hover:border-jalwa-gold group"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
          
          <div className="relative max-w-5xl w-full max-h-[90vh] flex justify-center">
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-neutral-800"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;