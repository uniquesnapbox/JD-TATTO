import HeroSlider from '../components/HeroSlider';
import Gallery from '../components/Gallery';
import ClientReviews from '../components/ClientReviews';
import BookingForm from '../components/BookingForm';

export default function Home({ onBook }) {
  const services = [
    {
      title: 'Tattoo, Piercing, Dreadlock & Permanent Makeup',
      desc: 'Comprehensive body art services including traditional tattoos, piercings, dreadlocks, and permanent makeup applications.',
      icon: '🧿',
    },
    {
      title: 'Realism Tattoos',
      desc: 'Hyper-realistic tattoos that bring your visions to life with incredible detail and depth.',
      icon: '🎨',
    },
    {
      title: '3D Tattoos',
      desc: 'Stunning 3D designs with incredible depth and perspective.',
      icon: '🖼️',
    },
    {
      title: 'Microblading permanent Eyebrows solution (PMU)',
      desc: 'Semi-permanent eyebrows with natural appearance and long-lasting results.',
      icon: '👁️',
    },
    {
      title: 'Lips Blushing (PMU)',
      desc: 'Enhance your lips with permanent makeup for a fuller, defined look.',
      icon: '💋',
    },
    {
      title: 'Eye Lashes Extension',
      desc: 'Beautiful, long-lasting eyelash extensions for enhanced eye definition and volume.',
      icon: '✨',
    },
  ];

  const trust = [
    { title: '100% Hygiene', icon: '🛡️', desc: 'Sterilized equipment and clean environment guaranteed.' },
    { title: 'Single-use Needles', icon: '💉', desc: 'Fresh, disposable needles for every client.' },
    { title: 'Imported Inks', icon: '🎭', desc: 'High-quality, safe inks from trusted manufacturers.' },
  ];

  return (
    <div className="space-y-16" style={{backgroundColor: '#000a1a'}}>
      <HeroSlider onBook={onBook} />

      <section className="section-pad" style={{background: 'linear-gradient(to bottom, #000a1a, #0a0a14, #000a1a)'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-wide text-white">Our Services</h2>
            <p className="font-body text-white/70 mt-3 text-lg" style={{lineHeight: '1.5'}}>Pick your style, we will perfect it.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className="card-surface glass-dark p-6 border border-white/10 hover:border-orange/60 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(234,112,13,0.2)] animate-fadeUp"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className="text-xl">{service.icon}</div>
                <h3 className="font-body text-base font-semibold text-orange mt-3">{service.title}</h3>
                <p className="font-body text-white/70 text-xs mt-2" style={{lineHeight: '1.5'}}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{backgroundColor: '#000a1a'}}>
        <div className="max-w-7xl mx-auto text-center space-y-10">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-wide text-white">Why Choose JD Tattoos?</h2>
            <p className="font-body text-white/70 mt-3 text-lg" style={{lineHeight: '1.5'}}>Premium experience, safe practices, and master artists.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {trust.map((item, idx) => (
              <div
                key={item.title}
                className="card-surface glass-dark p-8 hover:-translate-y-2 transition-all duration-500 border border-white/10 hover:border-darkblue/50 hover:shadow-[0_24px_70px_rgba(5,0,127,0.18)]"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-heading text-2xl uppercase tracking-wide text-orange">{item.title}</h3>
                <p className="font-body text-white/70 text-sm mt-2" style={{lineHeight: '1.5'}}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 pt-4">
            <button onClick={onBook} className="btn-orange btn-glow-orange text-lg px-10 py-4">BOOK A SESSION</button>
            <a href="tel:07099725127" className="btn-darkblue text-lg px-10 py-4 border border-white/10">CALL NOW</a>
          </div>
        </div>
      </section>

      <Gallery />

      <BookingForm />

      <ClientReviews />
    </div>
  );
}
