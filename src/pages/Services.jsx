import BookingForm from '../components/BookingForm';
const services = [
  {
    title: 'Tattoo, Piercing, Dreadlock & Permanent Makeup',
    desc: 'Complete body art services with expert artists.',
    icon: '🧿',
  },
  {
    title: 'Realism Tattoos',
    desc: 'Hyper-realistic designs that capture every detail.',
    icon: '🎨',
  },
  {
    title: '3D Tattoos',
    desc: 'Stunning 3D designs with incredible depth.',
    icon: '🖼️',
  },
  {
    title: 'Microblading permanent Eyebrows solution (PMU)',
    desc: 'Semi-permanent eyebrows with natural appearance.',
    icon: '👁️',
  },
  {
    title: 'Lips Blushing (PMU)',
    desc: 'Enhance your lips with permanent makeup.',
    icon: '💋',
  },
  {
    title: 'Eye Lashes Extension',
    desc: 'Long-lasting extensions for enhanced volume.',
    icon: '✨',
  },
];

export default function Services({ onBook }) {
  return (
    <>
    <div className="section-pad max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Our Services</h1>
        <p className="text-white/70 mt-4 text-lg">Pick your style, we will perfect it.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="card-surface p-6 border border-white/10 hover:border-orange/60 transition-all duration-300 hover:shadow-lg hover:shadow-orange/20 animate-fadeUp"
            style={{ animationDelay: `${idx * 90}ms` }}
          >
            <div className="text-3xl mb-3">{service.icon}</div>
            <h3 className="text-lg font-bold text-orange mt-3">{service.title}</h3>
            <p className="text-white/70 text-sm mt-2 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-12">
        <button onClick={onBook} className="btn-orange text-lg px-10 py-4">BOOK NOW</button>
        <a href="https://wa.me/917099725127" className="btn-darkblue text-lg px-10 py-4">WHATSAPP US</a>
      </div>
    </div>
    <BookingForm />
    </>
  );
}
