import { services } from '../data';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#080808] border-t border-gold-500/15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold-400 font-semibold tracking-widest uppercase text-xs mb-3">Clinical Services &amp; Specialities</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#FAF7F0] mb-6 tracking-tight text-balance">
            Specialized Dental Treatments
          </h2>
          <p className="text-lg text-neutral-400">
            From precision Zirconia caps to painless root canals and full mouth implants, we deliver international quality dental care in Anantapur.
          </p>
        </div>

        {/* Signature Feature */}
        <div className="bg-gradient-to-br from-[#191408] via-[#121212] to-[#0B0B0B] rounded-3xl p-8 lg:p-12 mb-16 text-[#FAF7F0] overflow-hidden relative border border-gold-500/35 shadow-2xl shadow-black/60">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <p className="inline-flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-widest mb-5">
                <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                Clinic Signature Feature
              </p>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-[#FAF7F0] text-balance">
                High Precision Zirconia Caps &amp; Crowns
              </h3>
              <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                100% metal-free ceramic crowns custom milled with CAD/CAM technology. Unrivaled strength, zero dark lines, and up to 15 years warranty.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8 text-neutral-200">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" /> 100% Metal-Free
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" /> CAD/CAM Precision
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" /> Natural shade matching
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" /> 15-Year Warranty
                </div>
              </div>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 bg-gold-500 text-black px-6 py-3.5 rounded-full font-bold hover:bg-gold-400 transition-colors whitespace-nowrap"
              >
                Book Zirconia Crown Evaluation <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-black/60 rounded-2xl p-6 border border-gold-500/20">
              <p className="italic text-neutral-200 mb-4 text-lg leading-relaxed">
                "Zirconia caps after fixing very nice teeths... Doctor Noor sir treatment is very good and painless."
              </p>
              <p className="text-gold-400 font-bold">— Ramanjaneyulu Reddy (Google Review)</p>
            </div>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-[#121212] p-8 rounded-3xl border border-neutral-800 hover:border-gold-500/40 transition-colors flex flex-col"
            >
              <div className="flex justify-between items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/25 text-gold-400 flex items-center justify-center shrink-0">
                  <service.icon className="w-7 h-7" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mb-1">Starting from</p>
                  <p className="text-lg font-bold text-gold-400 tabular-nums">{service.cost}</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-[#FAF7F0] mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex justify-between gap-4 text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Duration:</span>
                  <span className="font-medium text-neutral-200 text-right">{service.duration}</span>
                </div>
                <div className="flex justify-between gap-4 text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Comfort:</span>
                  <span className="font-medium text-neutral-200 text-right">{service.comfort}</span>
                </div>
                <div className="flex justify-between gap-4 text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Warranty:</span>
                  <span className="font-medium text-neutral-200 text-right">{service.warranty}</span>
                </div>
              </div>

              <a
                href="#booking"
                className="w-full py-3 bg-[#1A1A1A] hover:bg-gold-500 text-gold-300 hover:text-black border border-gold-500/30 hover:border-gold-500 rounded-xl font-bold transition-colors text-center"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
