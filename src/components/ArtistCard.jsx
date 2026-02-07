const InstagramIcon = () => (
  <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.278.28 2.579.063 7.051.012 8.331 0 8.756 0 12c0 3.244.011 3.668.063 4.948.274 4.467 2.685 6.854 7.148 7.038 1.279.057 1.704.07 4.789.07 3.084 0 3.509-.013 4.789-.07 4.468-.184 6.856-2.622 7.131-7.038.052-1.28.064-1.704.064-4.948 0-3.245-.011-3.669-.064-4.949-.276-4.467-2.685-6.853-7.132-7.038-1.279-.055-1.704-.069-4.789-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm4.915-10.346c-.794 0-1.437-.643-1.437-1.436s.643-1.437 1.437-1.437 1.436.644 1.436 1.437-.643 1.436-1.436 1.436z" />
  </svg>
);

export default function ArtistCard({ name, title, bio, image, instagram }) {
  return (
    <div className="group flex flex-col items-center gap-4">
      {/* Image with overlay content */}
      <div className="relative w-full aspect-[3/4] max-w-xs rounded-2xl overflow-hidden border border-white/10 group-hover:border-orange/60 transition-all duration-300 shadow-[0_16px_50px_rgba(0,0,0,0.35)]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-[#050551]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen" />

        {/* Overlay text inside image */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full bg-gradient-to-t from-black/85 via-black/65 to-transparent px-5 pb-5 pt-10 text-left space-y-2">
            <div>
              <p className="font-body text-[11px] font-bold text-orange uppercase tracking-wide mb-1">{title}</p>
              <p className="font-heading text-2xl uppercase text-white drop-shadow tracking-wide">{name}</p>
            </div>
            <p className="font-body text-white/85 text-sm drop-shadow-sm" style={{lineHeight: '1.5'}}>{bio}</p>
            <div className="flex justify-start">
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/30 hover:border-orange/70 hover:bg-white/15 transition-all duration-300 group-hover:scale-110"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
