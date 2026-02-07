import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6 md:px-10" style={{backgroundColor: '#000a1a'}}>
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 text-sm text-white/80">
        <div className="space-y-4">
          <img
            src="/assets/white%20jd.png"
            alt="JD Tattoos Studio"
            className="h-14 w-auto object-contain"
          />
          <p className="leading-relaxed">Silchar's premier tattoo studio, specializing in portraits and religious tattoos with unmatched artistry and hygiene.</p>
        </div>

        <div>
          <h3 className="text-orange font-bold text-base mb-4">Quick Links</h3>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-orange transition-colors">Home</Link>
            <Link to="/about" className="hover:text-orange transition-colors">About Us</Link>
            <Link to="/services" className="hover:text-orange transition-colors">Services</Link>
            <Link to="/gallery" className="hover:text-orange transition-colors">Gallery</Link>
            <Link to="/contact" className="hover:text-orange transition-colors">Contact Us</Link>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-orange font-bold text-base mb-4">Contact & Address</h3>
          <p className="leading-relaxed">Shree Durga, Lokenath Sarani, near Doshoboja hotel, Meherpur, Silchar, Assam 788015</p>
          <p>Phone: 070997 25127</p>
          <p>WhatsApp: +91 70997 25127</p>
          <div className="flex gap-3 pt-3">
            <a href="tel:07099725127" className="btn-darkblue text-sm">CALL NOW</a>
            <a href="https://wa.me/917099725127" className="btn-orange text-sm">WHATSAPP</a>
          </div>
        </div>
      </div>
      <p className="text-center text-white/50 text-xs mt-10">© 2024 JD Tattoos Studio. All rights reserved.</p>
    </footer>
  );
}
