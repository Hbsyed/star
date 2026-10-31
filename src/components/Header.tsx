import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center font-display font-bold text-xl md:text-2xl shadow-sm">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base sm:text-xl leading-tight text-slate-900 tracking-tight">STAR SUPER SPECIALITY</span>
            <span className="text-[9px] sm:text-xs font-semibold text-teal-700 uppercase tracking-widest">Dental Hospital</span>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <a href="#home" className="hover:text-slate-900 transition-colors">Home</a>
          <a href="#doctor" className="hover:text-slate-900 transition-colors">Dr. Noor Sir</a>
          <a href="#services" className="hover:text-slate-900 transition-colors">Treatments</a>
          <a href="#ai-triage" className="hover:text-slate-900 transition-colors flex items-center gap-1"><span className="text-teal-600">✨</span> AI Care</a>
          <a href="#booking" className="hover:text-slate-900 transition-colors">Book & Cost</a>
          <a href="#reviews" className="hover:text-slate-900 transition-colors">Reviews</a>
        </nav>

        <a 
          href="https://wa.me/919246777674"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-slate-900 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
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
