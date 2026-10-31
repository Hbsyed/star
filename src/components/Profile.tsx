import { Star, Shield, Award, Stethoscope } from 'lucide-react';

export default function Profile() {
  return (
    <section id="doctor" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-700 font-bold tracking-widest uppercase text-sm mb-3">Lead Dental Specialist</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Meet Dr. Noor Sir
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Renowned across Anantapur for compassionate patient care, transparent medical guidance, and painless dental surgery.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden relative shadow-lg border border-slate-200 flex flex-col justify-end p-8">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
               <div className="relative z-20 text-white">
                  <h3 className="text-3xl font-display font-bold mb-1">Dr. Noor Sir</h3>
                  <p className="text-teal-300 font-medium mb-3">Chief Consultant Dental Surgeon & Implantologist</p>
                  <p className="text-sm text-slate-200">B.D.S. • 14+ Years of Clinical Excellence</p>
               </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
              <div className="flex gap-1 text-amber-500 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs font-medium text-slate-600 italic">
                "Doctor Noor sir is very friendly and explains the problem and treatment clearly."
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
              <p className="text-xl md:text-2xl font-display font-medium text-slate-800 leading-relaxed mb-6">
                "Dental treatment should never be painful or mysterious. We explain every step clearly and deliver natural, lasting smiles with international quality standards right here in Anantapur."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-teal-500 rounded-full" />
                <span className="font-bold text-slate-900">— Dr. Noor Sir</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Key Expertise</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Precision Zirconia Crowns, Painless RCT, and Single-Piece Dental Implants.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Expert Consultants</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Every department at Star Super Speciality Dental Hospital is managed by an expert, dedicated consultant specialist to ensure the highest standard of precision care for every specialized procedure.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Class-B Sterilization</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">100% Hospital Sterilization protocols ensuring maximum patient safety.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Digital Diagnostics</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Digital X-Rays with 90% less radiation for precise and safe diagnosis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
