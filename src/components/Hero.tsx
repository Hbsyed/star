import { motion } from 'motion/react';
import { ArrowRight, Star, CheckCircle2, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-24 overflow-hidden bg-[#080808] border-b border-gold-500/15">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/15 via-[#080808] to-[#080808] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold mb-6 tracking-wide"
          >
            <Star className="w-4 h-4 fill-gold-400 text-gold-400 shrink-0" />
            <span>#1 Super Speciality Dental Hospital in Anantapur</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-gold-300 tabular-nums">4.9 / 5.0</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-[#FAF7F0] tracking-tight leading-[1.06] mb-8 text-balance"
          >
            Painless Dental Care &amp; <span className="text-gold-400">Precision Zirconia</span> Crowns.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl leading-relaxed"
          >
            Led by Dr. Noor Sir. Experience gentle, transparent treatment and natural smile restorations with international sterilization standards right here in Anantapur.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="grid sm:grid-cols-2 gap-4 mb-10 text-sm font-medium text-neutral-400"
          >
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <span><strong className="text-[#FAF7F0]">100% Metal-Free Zirconia Caps</strong><br/>Long-lasting natural aesthetics</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <span><strong className="text-[#FAF7F0]">Painless Root Canal (RCT)</strong><br/>Advanced rotary single-sitting care</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <span><strong className="text-[#FAF7F0]">Friendly Dr. Noor Sir</strong><br/>Explains every step transparently</span>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <span><strong className="text-[#FAF7F0]">Beside Railway Station</strong><br/>Kamalanagar, open daily till 9:30 PM</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.32 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a 
              href="#booking"
              className="inline-flex items-center gap-2 bg-gold-500 text-black px-8 py-4 rounded-full text-base font-bold hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/15 whitespace-nowrap"
            >
              Book Appointment Online
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/919246777674"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#141414] text-gold-300 px-8 py-4 rounded-full text-base font-semibold hover:bg-[#1C1C1C] transition-colors border border-gold-500/35 whitespace-nowrap"
            >
              WhatsApp Consult
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
