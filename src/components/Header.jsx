import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Header({ onBook }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium hover:text-orange transition ${isActive ? 'text-orange' : 'text-white'}`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 shadow-lg" style={{backgroundColor: 'rgba(0, 10, 26, 0.97)'}}>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <img
            src="/assets/logo-BbpkOYpx.png"
            alt="JD Tattoos Studio"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={onBook} className="btn-orange text-sm">BOOK NOW</button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="block w-6 h-[2px] bg-white relative">
            <span className="block w-6 h-[2px] bg-white absolute top-2" />
            <span className="block w-6 h-[2px] bg-white absolute -top-2" />
          </span>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 border-t border-white/10" style={{backgroundColor: '#000a1a'}}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block py-2 text-sm rounded-lg px-3 ${isActive ? 'bg-white/5 text-orange' : 'text-white hover:bg-white/5'}`
              }
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <button onClick={onBook} className="btn-orange w-full" aria-label="Book now">
            BOOK NOW
          </button>
        </div>
      )}
    </header>
  );
}
