import { Home, UserRound, Stethoscope, CalendarCheck, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'doctor', 'services', 'booking', 'reviews'];
      let current = 'home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'doctor', label: 'Doctor', icon: UserRound, href: '#doctor' },
    { id: 'booking', label: 'Book', icon: CalendarCheck, href: '#booking', special: true },
    { id: 'services', label: 'Services', icon: Stethoscope, href: '#services' },
    { id: 'reviews', label: 'Reviews', icon: Star, href: '#reviews' },
  ];

  return (
    <div 
      className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-gold-500/25 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.6)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex justify-around items-center h-16 px-1">
        {navItems.map((item) => (
          <a 
            key={item.id}
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors relative ${
              item.special 
                ? 'text-gold-400' 
                : activeSection === item.id ? 'text-gold-400' : 'text-neutral-500 hover:text-gold-300'
            }`}
          >
            {item.special ? (
              <div className="absolute -top-5 bg-gradient-to-br from-gold-300 via-gold-500 to-gold-600 text-black p-3.5 rounded-full border-4 border-[#0A0A0A] shadow-lg shadow-gold-500/25">
                <item.icon className="w-5 h-5" />
              </div>
            ) : (
              <item.icon className={`w-5 h-5 mb-1 transition-transform ${activeSection === item.id ? 'text-gold-400 scale-110' : ''}`} />
            )}
            <span className={`text-[10px] font-semibold ${item.special ? 'mt-6 text-gold-400' : ''}`}>
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
