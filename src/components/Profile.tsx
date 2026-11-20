import { Star, Shield, Award, Stethoscope } from 'lucide-react';

export default function Profile() {
  return (
    <section id="doctor" className="py-24 bg-[#0D0D0D] border-b border-gold-500/15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold-400 font-semibold tracking-widest uppercase text-xs mb-3">Lead Dental Specialist</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#FAF7F0] mb-6 tracking-tight text-balance">
            Meet Dr. Noor Sir
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Renowned across Anantapur for compassionate patient care, transparent medical guidance, and painless dental surgery.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-[#141414] rounded-3xl overflow-hidden relative shadow-2xl shadow-black/60 border border-gold-500/35 flex flex-col justify-end p-6 sm:p-8">
               <img
                 src="/assets/aistudio/WhatsApp_Image_2026-11-20_at_5.29.06_PM_43470065.jpeg"
                 alt="Dr. Noor Sir, Chief Consultant Dental Surgeon and Implantologist at Star Super Speciality Dental Hospital"
                 referrerPolicy="no-referrer"
                 className="absolute inset-0 w-full h-full object-cover object-top scale-[1.03]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent z-10" />
               <div className="relative z-20 text-white">
                  <h3 className="text-3xl font-display font-bold mb-1 text-[#FAF7F0]">Dr. Noor Sir</h3>
                  <p className="text-gold-400 font-medium mb-3">Chief Consultant Dental Surgeon &amp; Implantologist</p>
                  <p className="text-sm text-neutral-300">B.D.S. · 14+ Years of Clinical Excellence</p>
               </div>
            </div>
            
            <div className="absolute -bottom-6 right-3 sm:-right-6 bg-[#141414] p-4 rounded-2xl shadow-xl shadow-black/70 border border-gold-500/30 max-w-[210px] z-30">
              <div className="flex gap-1 text-gold-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs font-medium text-neutral-300 italic leading-relaxed">
                "Doctor Noor sir is very friendly and explains the problem and treatment clearly."
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="bg-[#141414] p-8 rounded-3xl border border-gold-500/20 mb-8">
              <p className="text-xl md:text-2xl font-display font-medium text-[#FAF7F0] leading-relaxed mb-6">
                "Dental treatment should never be painful or mysterious. We explain every step clearly and deliver natural, lasting smiles with international quality standards right here in Anantapur."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-0.5 bg-gold-500 rounded-full" />
                <span className="font-bold text-gold-400">— Dr. Noor Sir</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/25 text-gold-400 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#FAF7F0] mb-1">Key Expertise</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">Precision Zirconia Crowns, Painless RCT, and Single-Piece Dental Implants.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/25 text-gold-400 flex items-center justify-center shrink-0">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#FAF7F0] mb-1">Expert Consultants</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">Every department at Star Super Speciality Dental Hospital is managed by an expert, dedicated consultant specialist to ensure the highest standard of precision care for every specialized procedure.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/25 text-gold-400 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#FAF7F0] mb-1">Class-B Sterilization</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">100% Hospital Sterilization protocols ensuring maximum patient safety.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/25 text-gold-400 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#FAF7F0] mb-1">Digital Diagnostics</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">Digital X-Rays with 90% less radiation for precise and safe diagnosis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
