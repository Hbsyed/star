import { MapPin, Phone, Clock } from 'lucide-react';
import { highlights } from '../data';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white text-slate-900 rounded-lg flex items-center justify-center font-display font-bold text-2xl shadow-sm">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-tight text-white tracking-tight">STAR SUPER SPECIALITY</span>
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest">Dental Hospital</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-8 text-lg">
              Delivering transparent, world-class, and 100% painless dental care with international sterilization standards.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/919246777674"
                target="_blank"
                rel="noreferrer"
                className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-3.5 rounded-full font-semibold transition-colors shadow-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-white font-display font-bold text-lg mb-6">Contact & Location</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 shrink-0 text-teal-500 mt-0.5" />
                <span className="leading-relaxed">Main entrance, beside the railway station exit, Kamalanagar, Anantapur, Andhra Pradesh - 515001</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 shrink-0 text-teal-500" />
                <span className="leading-relaxed">+91 92467 77674</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Clock className="w-5 h-5 shrink-0 text-teal-500" />
                <span className="leading-relaxed">8:30 AM to 9:30 PM (Daily)</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-white font-display font-bold text-lg mb-6">Why Choose Us</h4>
            <ul className="space-y-5">
              {highlights.map((item) => (
                <li key={item.id} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-slate-200 font-bold text-sm mb-1">{item.title}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Star Super Speciality Dental Hospital. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
