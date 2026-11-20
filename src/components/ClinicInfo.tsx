import { useState } from 'react';
import { reviews, faqs } from '../data';
import { Star, MapPin, Navigation, Clock, ChevronDown, ChevronUp } from 'lucide-react';

export default function ClinicInfo() {
  const [openFaq, setOpenFaq] = useState<string | null>(faqs[0].id);

  return (
    <section id="reviews" className="bg-[#080808] pt-24 pb-12 border-t border-gold-500/15">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Reviews Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="text-gold-400 font-semibold tracking-widest uppercase text-xs mb-3">Verified Patient Stories</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#FAF7F0] mb-4 tracking-tight">
              Patient Feedback &amp; Reviews
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg text-neutral-300 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-gold-400 text-2xl">★</span>
                <span className="tabular-nums">4.9 / 5.0 Based on 51 Google Reviews</span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Star+Super+Speciality+Dental+Hospital+Kamalanagar+Anantapur"
                target="_blank"
                rel="noreferrer"
                className="text-sm bg-[#141414] border border-gold-500/35 text-gold-300 px-4 py-2 rounded-full font-bold hover:bg-gold-500 hover:text-black transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <Star className="w-4 h-4 fill-current" /> Write a Review
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-[#121212] p-6 rounded-2xl border border-neutral-800 hover:border-gold-500/35 transition-colors flex flex-col relative"
              >
                <div className="absolute top-6 right-6">
                  <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-gold-500/30 flex items-center justify-center">
                    <span className="text-gold-400 font-bold font-display text-base">G</span>
                  </div>
                </div>
                <div className="flex gap-1 text-gold-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-neutral-300 italic mb-6 flex-grow leading-relaxed">"{review.text}"</p>
                <div className="border-t border-neutral-800 pt-4 mt-auto">
                  <p className="font-bold text-[#FAF7F0]">{review.name}</p>
                  <p className="text-sm text-neutral-500">{review.service} · {review.time}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Star+Super+Speciality+Dental+Hospital+Kamalanagar+Anantapur"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gold-400 font-bold hover:text-gold-300 transition-colors"
            >
              See all Google Reviews &rarr;
            </a>
          </div>
        </div>

        {/* Location & Info Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          {/* Location */}
          <div>
            <p className="text-gold-400 font-semibold tracking-widest uppercase text-xs mb-3">Prime Location</p>
            <h2 className="text-3xl font-display font-bold text-[#FAF7F0] mb-6 tracking-tight">
              Clinic Location &amp; Hours
            </h2>
            
            <div className="bg-[#121212] p-8 rounded-3xl border border-gold-500/20 mb-6">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-gold-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#FAF7F0] text-lg mb-2">Star Super Speciality Dental Hospital</h4>
                  <p className="text-neutral-400 leading-relaxed">Main entrance, beside railway station, Kamalanagar, Anantapur, Andhra Pradesh 515001</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <Clock className="w-6 h-6 text-gold-400 shrink-0" />
                <div>
                  <p className="font-bold text-[#FAF7F0]">Mon - Sun: 8:30 AM – 9:30 PM</p>
                  <p className="text-neutral-500 text-sm">Open All 7 Days a Week</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Star+Super+Speciality+Dental+Hospital+Kamalanagar+Anantapur"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 bg-gold-500 hover:bg-gold-400 text-black rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5" /> Open in Google Maps
              </a>
            </div>

            <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6">
              <h4 className="font-bold text-gold-300 mb-3 text-xs uppercase tracking-widest">Peak Hours (Evening 6–9 PM)</h4>
              <p className="text-neutral-400 text-sm mb-4">Pro Tip: To avoid waiting during evening peak hours, book a morning slot (9 AM – 11:30 AM) online.</p>
              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <span className="w-16 text-xs text-neutral-400 tabular-nums">10:00 AM</span>
                  <div className="flex-1 bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gold-500/50 w-1/3 h-full rounded-full" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-16 text-xs text-neutral-400 tabular-nums">2:00 PM</span>
                  <div className="flex-1 bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gold-500/40 w-1/4 h-full rounded-full" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-16 text-xs text-gold-400 font-bold tabular-nums">7:30 PM</span>
                  <div className="flex-1 bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gold-400 w-11/12 h-full rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <p className="text-gold-400 font-semibold tracking-widest uppercase text-xs mb-3">Patient Guide</p>
            <h2 className="text-3xl font-display font-bold text-[#FAF7F0] mb-8 tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`bg-[#121212] border rounded-2xl overflow-hidden transition-colors ${
                    openFaq === faq.id ? 'border-gold-500/40' : 'border-neutral-800'
                  }`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-[#FAF7F0] hover:bg-[#171717] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {openFaq === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-gold-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-neutral-500 shrink-0" />
                    )}
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-6 pb-6 text-neutral-400 leading-relaxed border-t border-neutral-800 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
