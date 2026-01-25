import { useState } from 'react';

const services = [
  'Tattoo',
  'Piercing',
  'Dreadlock',
  'Microblading PMU',
  'Lips Blushing PMU',
  'Lashes Extension',
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date || !formData.time || !formData.city) {
      alert('Please fill in all fields');
      return;
    }

    // Format message for WhatsApp
    const message = `Hi JD Tattoos, I want to book an appointment.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}\nCity: ${formData.city}`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917099725127?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      city: '',
    });
  };

  return (
    <section className="section-pad bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-3">
            {/* Anchor icon */}
            <svg className="w-6 h-6 text-orange" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a2 2 0 012 2 2 2 0 11-4 0 2 2 0 012-2zm1 6.09V9h3a1 1 0 011 1 4 4 0 004 4h1a1 1 0 010 2h-1a6 6 0 01-6-6h-2a6 6 0 01-6 6H5a1 1 0 010-2h1a4 4 0 004-4 1 1 0 011-1h3V8.09a3 3 0 10-2 0z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-wide">MAKE AN APPOINTMENT</h2>
          <p className="text-white/70 text-lg">Book your perfect tattoo or beauty service with our expert artists</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="block">
            <div className="relative h-96 rounded-2xl overflow-hidden border border-white/20 hover:border-orange/60 transition-all duration-300 group">
              <img
                src="/assets/Work/1 (1).JPEG"
                alt="Tattoo artist at work"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Name (Full Name)</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange/60 focus:bg-white/10 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange/60 focus:bg-white/10 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Phone Number (WhatsApp)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange/60 focus:bg-white/10 transition-all duration-300"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Service Dropdown */}
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Choose Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange/60 focus:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  <option value="" className="bg-black text-white">Select a service</option>
                  {services.map((svc) => (
                    <option key={svc} value={svc} className="bg-black text-white">
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange/60 focus:bg-white/10 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange/60 focus:bg-white/10 transition-all duration-300"
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange/60 focus:bg-white/10 transition-all duration-300"
                  placeholder="Your city"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange text-black font-bold py-4 px-6 rounded-lg mt-8 text-lg hover:bg-orange/90 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(234,112,13,0.3)] hover:scale-105 active:scale-95"
              >
                BOOK NOW
              </button>

              <p className="text-white/50 text-xs text-center pt-4">
                Well contact you via WhatsApp to confirm your appointment
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
