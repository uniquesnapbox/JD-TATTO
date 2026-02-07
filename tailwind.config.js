/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0b0b0f',
        carbon: '#111117',
        gold: '#FFD700',
        teal: '#14B8A6',
        ember: '#FFA500',
        orange: '#ea700d',
        darkblue: '#050551',
      },
      fontFamily: {
        heading: ['Bebas Neue', 'Impact', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        spartan: ['League Spartan', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 10px 30px rgba(20, 184, 166, 0.35)',
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(135deg, rgba(0,0,0,0.75), rgba(20,184,166,0.08))',
        'btn-gold': 'linear-gradient(45deg, #FFD700, #FFA500)',
        'btn-teal': 'linear-gradient(45deg, #14B8A6, #0F766E)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.9s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
