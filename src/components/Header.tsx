import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#080808]/95 backdrop-blur-md border-b border-gold-500/20 shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 text-black rounded-lg flex items-center justify-center font-display font-extrabold text-xl md:text-2xl shadow-sm shadow-gold-500/20">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base sm:text-xl leading-tight text-[#FAF7F0] tracking-tight whitespace-nowrap">
              STAR SUPER SPECIALITY
            </span>
            <span className="text-[9px] sm:text-xs font-semibold text-gold-400 uppercase tracking-widest whitespace-nowrap">
              Dental Hospital
            </span>
          </div>
        </a>
        
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-neutral-300">
          <a href="#home" className="hover:text-gold-400 transition-colors whitespace-nowrap shrink-0">Home</a>
          <a href="#doctor" className="hover:text-gold-400 transition-colors whitespace-nowrap shrink-0">Dr. Noor Sir</a>
          <a href="#services" className="hover:text-gold-400 transition-colors whitespace-nowrap shrink-0">Treatments</a>
          <a href="#booking" className="hover:text-gold-400 transition-colors whitespace-nowrap shrink-0">Book & Cost</a>
          <a href="#reviews" className="hover:text-gold-400 transition-colors whitespace-nowrap shrink-0">Reviews</a>
        </nav>

        <a 
          href="https://wa.me/919246777674"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-gold-500 text-black px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold hover:bg-gold-400 transition-colors shadow-sm shadow-gold-500/20 whitespace-nowrap shrink-0"
        >
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Emergency: </span>
          <span className="sm:hidden">Call</span>
          <span className="hidden sm:inline">+91 92467 77674</span>
        </a>
      </div>
    </header>
  );
}
