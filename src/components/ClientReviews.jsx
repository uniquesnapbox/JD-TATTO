import { useMemo } from 'react';

export default function ClientReviews() {
  const reviews = [
    {
      name: 'Rahul Sharma',
      date: '2 weeks ago',
      rating: 5,
      text: 'Amazing experience! The hygiene standards are top-notch and the artist is very professional.',
      photo: '/assets/Team/1 (1).jpg',
    },
    {
      name: 'Priya Das',
      date: '1 month ago',
      rating: 5,
      text: 'Got my first tattoo here and it turned out perfect! Highly recommend JD Tattoos.',
      photo: '/assets/Team/1 (2).jpg',
    },
    {
      name: 'Arjun Singh',
      date: '3 weeks ago',
      rating: 5,
      text: 'Best tattoo studio in Silchar! The attention to detail is incredible.',
      photo: '/assets/Team/1 (3).jpg',
    },
    {
      name: 'Vikram Patel',
      date: '5 days ago',
      rating: 5,
      text: 'Professional artists, clean environment, and fair pricing. Will definitely come back!',
      photo: '/assets/Team/1 (4).jpg',
    },
    {
      name: 'Neha Singh',
      date: '2 days ago',
      rating: 5,
      text: 'Had an amazing experience! The team made me comfortable throughout the process.',
      photo: '/assets/Team/1 (5).jpg',
    },
  ];

  const marqueeData = useMemo(() => [...reviews, ...reviews, ...reviews], [reviews]);

  const Star = ({ filled }) => (
    <svg className={`w-4 h-4 ${filled ? 'text-[#ea700d] fill-current' : 'text-gray-300'}`} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.563.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  );

  const Stars = ({ rating }) => (
    <div className="flex gap-1">
      {[1,2,3,4,5].map((i) => <Star key={i} filled={i <= rating} />)}
    </div>
  );

  return (
    <section className="section-pad bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold tracking-wide text-white">CLIENT REVIEWS</h2>
        </div>

        {/* Branding + Marquee */}
        <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
          {/* Left Branding Block */}
          <div className="order-1 md:order-none bg-white text-black rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-extrabold">JD</div>
              <div className="font-montserrat font-bold text-lg">JD Tattoos</div>
            </div>
            <p className="text-sm text-black/70 mb-4">564 Google reviews</p>
            <a href="https://share.google/DaBaKUiFwf8lu1lIV" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-black text-white font-bold px-5 py-3 rounded-lg hover:opacity-90">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Write a review
            </a>
          </div>

          {/* Marquee */}
          <div className="order-2 md:order-none">
            <div className="marquee overflow-hidden group">
              <div className="marquee-track flex gap-6 items-stretch">
                {marqueeData.map((r, idx) => (
                  <div key={idx} className="min-w-[320px] max-w-[320px] bg-white text-black rounded-2xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)] transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={r.photo} alt={r.name} className="w-10 h-10 rounded-full object-cover border border-black/10" />
                      <div className="flex-1">
                        <div className="font-semibold">{r.name}</div>
                        <div className="text-xs text-black/60">{r.date}</div>
                      </div>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="mb-2"><Stars rating={r.rating} /></div>
                    <p className="text-sm text-black/80 leading-relaxed">
                      "{r.text}"
                      <a href="#" className="text-[#ea700d] font-semibold ml-1">Read more</a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 60s linear infinite;
        }
        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .marquee-track { animation-duration: 45s; }
        }
      `}</style>
    </section>
  );
}
