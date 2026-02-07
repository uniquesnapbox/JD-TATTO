import ArtistCard from '../components/ArtistCard';
import GoogleReviews from '../components/GoogleReviews';

export default function About({ onBook }) {
  const artists = [
    {
      name: 'Pallab Dhar',
      title: 'Founder & Lead Artist',
      bio: 'With 10+ years of experience, Pallab specializes in hyper-realistic portraits and intricate designs. His passion for precision and artistic excellence defines JD Tattoos.',
      image: '/assets/Team/1 (1).jpg',
      instagram: 'https://instagram.com/',
    },
    {
      name: 'Debraj Debnath',
      title: 'Realism Specialist',
      bio: 'Debraj\'s expertise in photorealistic tattoos brings out every detail and emotion. Specializing in black & grey realism, he transforms references into wearable art.',
      image: '/assets/Team/1 (2).jpg',
      instagram: 'https://instagram.com/',
    },
    {
      name: 'Subinoy Sinha',
      title: 'Piercing & PMU Expert',
      bio: 'Subinoy brings precision and safety to every piercing and permanent makeup application. With certification in PMU techniques, he delivers stunning, lasting results.',
      image: '/assets/Team/1 (3).jpg',
      instagram: 'https://instagram.com/',
    },
    {
      name: 'Rishav Kumar',
      title: '3D Tattoo Specialist',
      bio: 'Rishav masters the art of 3D designs, creating depth and perspective that brings tattoos to life. His innovative techniques set new standards in the industry.',
      image: '/assets/Team/1 (4).jpg',
      instagram: 'https://instagram.com/',
    },
    {
      name: 'Priya Sharma',
      title: 'PMU & Microblading Artist',
      bio: 'Priya specializes in permanent makeup and microblading, creating natural-looking, long-lasting results. Her attention to facial symmetry ensures perfect brows every time.',
      image: '/assets/Team/1 (5).jpg',
      instagram: 'https://instagram.com/',
    },
    {
      name: 'Aditya Singh',
      title: 'Traditional & Cultural Tattoo Artist',
      bio: 'Aditya\'s expertise in traditional and cultural tattoos brings heritage and meaning to skin. His meticulous work honors every design\'s story and significance.',
      image: '/assets/Team/1 (6).jpg',
      instagram: 'https://instagram.com/',
    },
  ];

  return (
    <div className="space-y-16" style={{backgroundColor: '#000a1a'}}>
      <div className="section-pad max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h1 className="font-heading text-5xl md:text-6xl uppercase tracking-wide text-white">About JD Tattoos Studio</h1>
          <p className="font-body text-white/70 text-lg md:text-xl" style={{lineHeight: '1.5'}}>Silchar's premier destination for high-quality, artistic tattoos.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="card-surface p-8 border border-white/10 hover:border-orange/50 transition-all duration-300">
            <h3 className="font-heading text-orange text-2xl uppercase tracking-wide mb-3">Our Craft</h3>
            <p className="font-body text-white/80" style={{lineHeight: '1.6'}}>We specialize in portraits and religious tattoos, delivering precise, meaningful art with premium hygiene standards. Our experienced artists bring your vision to life with exceptional attention to detail.</p>
          </div>
          <div className="card-surface p-8 border border-white/10 hover:border-orange/50 transition-all duration-300">
            <h3 className="font-heading text-orange text-2xl uppercase tracking-wide mb-3">Our Standards</h3>
            <p className="font-body text-white/80" style={{lineHeight: '1.6'}}>Single-use needles, sterilized equipment, and imported inks to keep you safe while we create. Your health and safety are our top priorities in every session.</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={onBook} className="btn-orange text-lg px-10 py-4">BOOK NOW</button>
          <a href="https://wa.me/917099725127" className="btn-darkblue text-lg px-10 py-4">WHATSAPP US</a>
        </div>
      </div>

      <GoogleReviews />

      {/* Meet Our Artist Section */}
      <section className="section-pad" style={{backgroundColor: '#000a1a'}}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-3">
            <p className="font-body text-orange font-bold text-sm tracking-[0.2em] uppercase">The Creative Minds Behind The Ink</p>
            <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-wide text-white mb-4">Meet Our Master Artists</h2>
            <p className="font-body text-white/70 text-lg max-w-2xl mx-auto" style={{lineHeight: '1.6'}}>
              At JD Tattoos, our artists don't just ink; they tell your stories through skin art. From hyper-realism to traditional masterpieces, meet the experts who bring your vision to life.
            </p>
          </div>

          {/* Artist Grid: 2 col mobile, 3 col tablet, 4 col desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {artists.map((artist) => (
              <ArtistCard key={artist.name} {...artist} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
