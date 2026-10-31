import { Home, Stethoscope, Sparkles, CalendarCheck, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'doctor', 'services', 'ai-triage', 'booking', 'reviews'];
      let current = 'home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section's top is in the upper half of the viewport
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
    { id: 'services', label: 'Services', icon: Stethoscope, href: '#services' },
    { id: 'ai-triage', label: 'AI Triage', icon: Sparkles, href: '#ai-triage', special: true },
    { id: 'booking', label: 'Book', icon: CalendarCheck, href: '#booking' },
    { id: 'reviews', label: 'Reviews', icon: Star, href: '#reviews' },
  ];

  return (
    <div 
      className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-40 shadow-[0_-4px_15px_rgba(0,0,0,0.05)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex justify-around items-center h-16 px-1">
        {navItems.map((item) => (
          <a 
            key={item.id}
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors relative ${
              item.special 
                ? 'text-teal-600' 
                : activeSection === item.id ? 'text-slate-900' : 'text-slate-400 hover:text-slate-900'
            }`}
          >
            {item.special ? (
              <div className="absolute -top-5 bg-teal-600 text-white p-3.5 rounded-full border-4 border-white shadow-md shadow-teal-500/20">
                <item.icon className="w-5 h-5" />
              </div>
            ) : (
              <item.icon className={`w-5 h-5 mb-1 transition-all ${activeSection === item.id ? 'fill-slate-900 text-slate-900 scale-110' : ''}`} />
            )}
            <span className={`text-[10px] font-semibold ${item.special ? 'mt-6' : ''}`}>
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
