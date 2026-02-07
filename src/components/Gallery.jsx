import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const workImages = [
      '/assets/Work/1 (1).JPEG',
      '/assets/Work/1 (2).JPEG',
      '/assets/Work/1 (3).JPEG',
      '/assets/Work/1 (4).JPEG',
      '/assets/Work/1 (5).JPEG',
      '/assets/Work/1 (6).JPEG',
    ];

    // Create tight circular cluster for preview
    const centerX = 50;
    const centerY = 50;
    const baseRadius = 22;

    const positioned = workImages.map((src, idx) => {
      const totalImages = workImages.length;
      const angle = (idx / totalImages) * 360 + Math.random() * 20;
      const randomRadius = baseRadius + Math.random() * 6;
      const rad = (angle * Math.PI) / 180;

      const x = centerX + randomRadius * Math.cos(rad);
      const y = centerY + randomRadius * Math.sin(rad);

      return {
        id: idx,
        src,
        rotation: Math.random() * 30 - 15,
        x,
        y,
        zIndex: 30 - idx,
      };
    });

    setImages(positioned);
  }, []);

  return (
    <section className="section-pad" style={{backgroundColor: '#000a1a'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Our Gallery</h2>
          <p className="text-white/70 text-base md:text-lg">Explore our finest tattoo artworks</p>
        </div>

        <PhotoProvider>
          {/* Desktop: Circular Clustered Preview */}
          <div className="hidden lg:flex justify-center mb-12">
            <div className="relative w-full max-w-2xl" style={{ height: '650px' }}>
              {images.map((img) => (
                <div
                  key={img.id}
                  className="absolute cursor-pointer group transition-all duration-300 hover:scale-110"
                  style={{
                    left: `${img.x}%`,
                    top: `${img.y}%`,
                    transform: `translate(-50%, -50%) rotate(${img.rotation}deg)`,
                    zIndex: img.zIndex,
                    animation: `popIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${img.id * 50}ms backwards`,
                  }}
                >
                  <PhotoView src={img.src}>
                    <div className="bg-white p-2 shadow-[0_15px_50px_rgba(0,0,0,0.8)] group-hover:shadow-[0_20px_70px_rgba(234,112,13,0.5)] transition-shadow border-4 border-white/90">
                      <img
                        src={img.src}
                        alt={`Tattoo work ${img.id}`}
                        className="w-48 h-56 object-cover block"
                      />
                    </div>
                  </PhotoView>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Grid Stack */}
          <div className="md:hidden grid grid-cols-2 gap-3 sm:gap-4 mb-8">
            {images.map((img) => (
              <PhotoView key={img.id} src={img.src}>
                <div className="bg-white p-2 shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-white/70">
                  <img
                    src={img.src}
                    alt={`Tattoo work ${img.id}`}
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                </div>
              </PhotoView>
            ))}
          </div>

          {/* Preview Grid Section - Removed */}

        </PhotoProvider>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/gallery')}
            className="btn-orange btn-glow-orange text-lg px-12 py-4"
          >
            Show More
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(0deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(var(--rotate));
          }
        }
      `}</style>
    </section>
  );
}
