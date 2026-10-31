import { motion } from 'motion/react';
import { ArrowRight, Star, CheckCircle2, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-24 overflow-hidden bg-slate-50 border-b border-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-100/40 via-slate-50 to-slate-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold mb-6 shadow-sm"
          >
            <div className="flex text-amber-500">
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span>#1 Super Speciality Dental Hospital in Anantapur (4.9★)</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-8"
          >
            Painless Dental Care & Precision Zirconia Crowns.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed"
          >
            Led by Dr. Noor Sir. Experience gentle, transparent treatment and natural smile restorations with international sterilization standards right here in Anantapur.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4 mb-10 text-sm font-medium text-slate-700"
          >
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
              <span><strong>100% Metal-Free Zirconia Caps</strong><br/>Long-lasting natural aesthetics</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
              <span><strong>Painless Root Canal (RCT)</strong><br/>Advanced rotary single-sitting care</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
              <span><strong>Friendly Dr. Noor Sir</strong><br/>Explains every step transparently</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-teal-600 shrink-0" />
              <span><strong>Beside Railway Station</strong><br/>Kamalanagar, open daily till 9:30 PM</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a 
              href="#booking"
              className="inline-flex items-center gap-2 bg-teal-700 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-teal-800 transition-colors shadow-sm"
            >
              Book Appointment Online
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/919246777674"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full text-base font-semibold hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm"
            >
              WhatsApp Consult
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
