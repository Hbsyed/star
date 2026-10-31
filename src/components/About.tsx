import { highlights } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tight">
              Led by Excellence & Compassion
            </h2>
            <div className="text-lg text-slate-600 space-y-6 mb-10">
              <p className="leading-relaxed">
                <strong className="text-slate-900">Dr. Noor Sir (B.D.S.)</strong> serves as our Chief Consultant Dental Surgeon & Implantologist, bringing over 14 years of clinical excellence to Anantapur. He is renowned for his compassionate, patient-first approach and highly transparent diagnostic explanations.
              </p>
              <p className="leading-relaxed">
                Our core philosophy is dedicated to delivering transparent, world-class dental care. We ensure 100% painless treatments utilizing international sterilization standards (Class-B autoclaves) and low-radiation digital X-rays. Every department is headed by a dedicated expert consultant specialist.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
              {highlights.slice(0, 2).map((item) => (
                <div key={item.id}>
                  <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 mb-5 border border-teal-100">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-slate-900 rounded-3xl overflow-hidden relative shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-slate-900 opacity-95" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                 <div className="space-y-6 text-white max-w-sm">
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto border border-white/20 shadow-inner">
                      <span className="text-5xl">🌟</span>
                    </div>
                    <h3 className="text-3xl font-display font-bold leading-tight">14+ Years of Clinical Excellence</h3>
                    <p className="text-teal-100/90 text-lg">Setting the standard for premium dental care in Andhra Pradesh with dedicated specialists.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
