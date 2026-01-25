import { useState, useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const workImages = [
      '/assets/Work/1 (1).JPEG',
      '/assets/Work/1 (1).PNG',
      '/assets/Work/1 (2).JPEG',
      '/assets/Work/1 (3).JPEG',
      '/assets/Work/1 (4).JPEG',
      '/assets/Work/1 (5).JPEG',
      '/assets/Work/1 (6).JPEG',
      '/assets/Work/1 (7).JPEG',
      '/assets/Work/1 (8).JPEG',
      '/assets/Work/1 (9).JPEG',
      '/assets/Work/1 (10).JPEG',
      '/assets/Work/1 (11).JPEG',
      '/assets/Work/1 (12).JPEG',
      '/assets/Work/1 (13).JPEG',
      '/assets/Work/1 (14).JPEG',
      '/assets/Work/1 (15).JPEG',
      '/assets/Work/1 (16).JPEG',
      '/assets/Work/1 (17).JPEG',
      '/assets/Work/1 (18).JPEG',
      '/assets/Work/1 (19).JPEG',
    ];

    setImages(workImages);
  }, []);

  return (
    <div className="bg-black min-h-screen pt-24 pb-16">
      <div className="section-pad">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-3">Our Gallery</h1>
            <p className="text-white/70 text-lg md:text-xl">
              Explore our complete collection of premium tattoo artworks
            </p>
          </div>

          <PhotoProvider>
            {/* Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {images.map((src, idx) => (
                <PhotoView key={idx} src={src}>
                  <div
                    className="group overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 border border-white/10 hover:border-orange/70 hover:shadow-[0_0_20px_rgba(234,112,13,0.3)] rounded-lg aspect-square"
                    style={{
                      animation: `fadeIn 0.6s ease-out ${idx * 30}ms backwards`,
                    }}
                  >
                    <img
                      src={src}
                      alt={`Tattoo artwork ${idx + 1}`}
                      className="w-full h-full object-cover block group-hover:brightness-110 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
