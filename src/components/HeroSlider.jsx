import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function HeroSlider({ onBook }) {
  const slides = [
    {
      image: '/assets/Work/1 (1).JPEG',
      title: 'Where Feelings Turn into Expression',
      subtitle: "Silchar's Premier Tattoo Studio",
    },
    {
      image: '/assets/Work/1 (3).JPEG',
      title: 'Expert Tattoo Artists',
      subtitle: 'Professional Body Art',
    },
    {
      image: '/assets/Work/1 (5).JPEG',
      title: 'Safe & Hygienic',
      subtitle: '100% Sterilized Equipment',
    },
  ];

  return (
    <section className="relative h-[45vh] md:h-[65vh] overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        loop
        className="absolute inset-0 h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[2500ms]"
                style={{ backgroundImage: `url('${slide.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/78 to-black/55" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(234,112,13,0.18),transparent_32%),radial-gradient(circle_at_80%_8%,rgba(5,0,127,0.18),transparent_28%)]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative z-10 h-full">
        <div className="h-full max-w-6xl mx-auto grid md:grid-cols-[1.2fr_0.95fr] items-center gap-6 px-6 md:px-10 lg:px-12">
          <div className="space-y-4 md:space-y-5 animate-[revealUp_1s_ease_forwards] opacity-0 translate-y-6">
            <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-white/70 font-semibold">SILCHAR'S PREMIER TATTOO STUDIO</p>
            <h1 className="font-heading leading-none text-4xl md:text-6xl lg:text-7xl uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)]" style={{letterSpacing: '2px'}}>
              <span className="block text-white md:text-[#f8f7ef]">Where Feelings Turn into</span>
              <span className="block text-[#39d67f]">Expression</span>
            </h1>
            <p className="font-body text-white/80 text-base md:text-lg max-w-2xl" style={{lineHeight: '1.65'}}>
              Mastering portraits and religious tattoos with unmatched hygiene standards.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
              <button
                onClick={onBook}
                className="btn-orange btn-glow-orange text-sm md:text-base px-6 md:px-7 py-3 md:py-3.5"
              >
                BOOK NOW
              </button>
              <a
                href="https://wa.me/917099725127"
                className="btn-darkblue text-sm md:text-base px-6 md:px-7 py-3 md:py-3.5 border border-white/10"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="justify-self-end w-full md:w-[92%] max-w-lg">
            <div className="glass-dark border border-white/5 bg-black/55 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.55)] p-5 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg md:text-xl font-semibold" style={{ color: '#f6c443' }}>
                  Featured Artists
                </h3>
                <span className="text-white/50 text-xs">Curated styles</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm md:text-base">
                {['Portraits', 'Religious', 'Piercing', 'PMU'].map((label) => (
                  <button
                    key={label}
                    className="px-4 py-3 rounded-xl bg-white/5 text-white/80 border border-white/8 hover:border-orange/60 hover:text-white transition-all duration-200"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.swiper-pagination-bullet) {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s;
        }
        :global(.swiper-pagination-bullet-active) {
          background: #ea700d;
          width: 26px;
          border-radius: 999px;
        }
        @keyframes revealUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
