import GoogleReviews from '../components/GoogleReviews';

export default function About({ onBook }) {
  return (
    <div className="space-y-16">
      <div className="section-pad max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About JD Tattoos Studio</h1>
          <p className="text-white/70 text-lg md:text-xl">Silchar's premier destination for high-quality, artistic tattoos.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="card-surface p-8 border border-white/10 hover:border-orange/50 transition-all duration-300">
            <h3 className="text-orange font-bold text-xl mb-3">Our Craft</h3>
            <p className="text-white/80 leading-relaxed">We specialize in portraits and religious tattoos, delivering precise, meaningful art with premium hygiene standards. Our experienced artists bring your vision to life with exceptional attention to detail.</p>
          </div>
          <div className="card-surface p-8 border border-white/10 hover:border-orange/50 transition-all duration-300">
            <h3 className="text-orange font-bold text-xl mb-3">Our Standards</h3>
            <p className="text-white/80 leading-relaxed">Single-use needles, sterilized equipment, and imported inks to keep you safe while we create. Your health and safety are our top priorities in every session.</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={onBook} className="btn-orange text-lg px-10 py-4">BOOK NOW</button>
          <a href="https://wa.me/917099725127" className="btn-darkblue text-lg px-10 py-4">WHATSAPP US</a>
        </div>
      </div>

      <GoogleReviews />
    </div>
  );
}
