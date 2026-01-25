import { useState } from 'react';

const PhoneIcon = () => <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const MailIcon = () => <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const LocationIcon = () => <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const InstagramIcon = () => <svg className="w-6 h-6 text-orange" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.278.28 2.579.063 7.051.012 8.331 0 8.756 0 12c0 3.244.011 3.668.063 4.948.274 4.467 2.685 6.854 7.148 7.038 1.279.057 1.704.07 4.789.07 3.084 0 3.509-.013 4.789-.07 4.468-.184 6.856-2.622 7.131-7.038.052-1.28.064-1.704.064-4.948 0-3.245-.011-3.669-.064-4.949-.276-4.467-2.685-6.853-7.132-7.038-1.279-.055-1.704-.069-4.789-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm4.915-10.346c-.794 0-1.437-.643-1.437-1.436s.643-1.437 1.437-1.437 1.436.644 1.436 1.437-.643 1.436-1.436 1.436z" /></svg>;
const FacebookIcon = () => <svg className="w-6 h-6 text-orange" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', message: '' });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.whatsapp || !form.message) return;
    const text = `Hello JD Tattoos,\n\nName: ${form.name}\nEmail: ${form.email}\nWhatsApp: ${form.whatsapp}\nMessage: ${form.message}`;
    const url = `https://wa.me/917099725127?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setForm({ name: '', email: '', whatsapp: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="section-pad max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-wide">CONTACT US</h1>
        <p className="text-white/70 text-lg">We are here to help you get your dream tattoo.</p>
      </div>

      {/* Split Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Contact Info */}
        <div className="card-surface p-8 border border-white/10 rounded-2xl hover:border-darkblue/60 transition-all duration-300">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <PhoneIcon />
              <a href="tel:+917099725127" className="text-white/90 hover:text-orange font-semibold">+91 70997 25127</a>
            </div>
            <div className="flex items-center gap-3">
              <MailIcon />
              <a href="mailto:jdtattoos@gmail.com" className="text-white/90 hover:text-orange font-semibold">jdtattoos@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <LocationIcon />
              <p className="text-white/80">Meherpur, Silchar, Assam</p>
            </div>

            <div className="pt-4">
              <h3 className="text-white font-bold mb-3">Follow Us</h3>
              <div className="flex items-center gap-4">
                <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/20 hover:border-orange/70 hover:bg-white/10 transition">
                  <InstagramIcon />
                </a>
                <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/20 hover:border-orange/70 hover:bg-white/10 transition">
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="card-surface p-8 border border-white/10 rounded-2xl hover:border-orange/60 transition-all duration-300">
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="block text-white font-semibold mb-2">Full Name</label>
              <input name="name" value={form.name} onChange={onChange} required type="text" placeholder="Your name" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange/60 focus:bg-white/10 transition" />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input name="email" value={form.email} onChange={onChange} required type="email" placeholder="your@email.com" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange/60 focus:bg-white/10 transition" />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">WhatsApp Number</label>
              <input name="whatsapp" value={form.whatsapp} onChange={onChange} required type="tel" placeholder="+91 XXXXX XXXXX" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange/60 focus:bg-white/10 transition" />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Write your message</label>
              <textarea name="message" value={form.message} onChange={onChange} required rows={5} placeholder="Tell us what you want..." className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange/60 focus:bg-white/10 transition" />
            </div>
            <button type="submit" className="w-full bg-orange text-black font-bold py-4 rounded-lg text-lg hover:bg-orange/90 transition hover:shadow-[0_20px_40px_rgba(234,112,13,0.3)]">SEND MESSAGE</button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="mt-10">
        <h3 className="text-white font-bold mb-4">Find Us</h3>
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <div style={{ filter: 'grayscale(1) invert(1) contrast(1.2)' }}>
            <iframe
              title="JD Tattoos Location"
              src="https://www.google.com/maps?q=Meherpur%2C%20Silchar%2C%20Assam&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
