import { services } from '../data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-teal-700 font-bold tracking-widest uppercase text-sm mb-3">Clinical Services & Specialities</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Specialized Dental Treatments
          </h2>
          <p className="text-lg text-slate-600">
            From precision Zirconia caps to painless root canals and full mouth implants, we deliver international quality dental care in Anantapur.
          </p>
        </div>

        {/* Signature Feature */}
        <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 mb-16 text-white overflow-hidden relative shadow-xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-amber-500/30">
                <span className="text-sm">★</span> Clinic Signature Feature
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">High Precision Zirconia Caps & Crowns</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                100% metal-free ceramic crowns custom milled with CAD/CAM technology. Unrivaled strength, zero dark lines, and up to 15 years warranty.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-teal-400" /> 100% Metal-Free
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-teal-400" /> CAD/CAM Precision
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-teal-400" /> Natural shade matching
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-teal-400" /> 15-Year Warranty
                </div>
              </div>
              <a href="#booking" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
                Book Zirconia Crown Evaluation <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <p className="italic text-slate-300 mb-4 text-lg">"Zirconia caps after fixing very nice teeths... Doctor Noor sir treatment is very good and painless."</p>
              <p className="text-teal-400 font-bold">— Ramanjaneyulu Reddy (Google Review)</p>
            </div>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center">
                  <service.icon className="w-7 h-7" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Starting from</p>
                  <p className="text-lg font-bold text-teal-700">{service.cost}</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Duration:</span>
                  <span className="font-medium text-slate-900 text-right">{service.duration}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Comfort:</span>
                  <span className="font-medium text-slate-900 text-right">{service.comfort}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Warranty:</span>
                  <span className="font-medium text-slate-900 text-right">{service.warranty}</span>
                </div>
              </div>

              <a href="#booking" className="w-full py-3 bg-slate-50 hover:bg-teal-50 text-slate-900 hover:text-teal-700 border border-slate-200 hover:border-teal-200 rounded-xl font-bold transition-colors text-center">
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
