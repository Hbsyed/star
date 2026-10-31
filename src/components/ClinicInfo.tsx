import { useState } from 'react';
import { reviews, faqs } from '../data';
import { Star, MapPin, Navigation, Clock, ChevronDown, ChevronUp } from 'lucide-react';

export default function ClinicInfo() {
  const [openFaq, setOpenFaq] = useState<string | null>(faqs[0].id);

  return (
    <section id="reviews" className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Reviews Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">
              Patient Feedback & Reviews
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-amber-500 text-2xl">★</span> 4.9 / 5.0 Based on 51 Google Reviews
              </div>
              <a href="#" className="text-sm bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full font-bold hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" /> Write a Review
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col relative">
                <div className="absolute top-6 right-6">
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
                    <span className="text-blue-500 font-bold font-display text-base">G</span>
                  </div>
                </div>
                <div className="flex gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-6 flex-grow leading-relaxed">"{review.text}"</p>
                <div className="border-t border-slate-100 pt-4 mt-auto">
                  <p className="font-bold text-slate-900">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.service} • {review.time}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="#" className="inline-flex items-center gap-2 text-teal-700 font-bold hover:text-teal-800 transition-colors">
              See all Google Reviews &rarr;
            </a>
          </div>
        </div>

        {/* Location & Info Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          {/* Location */}
          <div>
            <p className="text-teal-700 font-bold tracking-widest uppercase text-sm mb-3">Prime Location</p>
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 tracking-tight">
              Clinic Location & Hours
            </h2>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm mb-6">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Star Super Speciality Dental Hospital</h4>
                  <p className="text-slate-600 leading-relaxed">Main entrance, beside railway station, Kamalanagar, Anantapur, Andhra Pradesh 515001</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <Clock className="w-6 h-6 text-teal-600 shrink-0" />
                <div>
                  <p className="font-bold text-slate-900">Mon - Sun: 8:30 AM – 9:30 PM</p>
                  <p className="text-slate-500 text-sm">Open All 7 Days a Week</p>
                </div>
              </div>
              <a href="#" className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                <Navigation className="w-5 h-5" /> Open in Google Maps
              </a>
            </div>

            <div className="bg-slate-100 rounded-2xl p-6">
              <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Peak Hours (Evening 6-9 PM)</h4>
              <p className="text-slate-600 text-sm mb-4">💡 Pro Tip: To avoid waiting during evening peak hours, book a morning slot (9 AM – 11:30 AM) online!</p>
              <div className="space-y-2">
                {/* Visual representation of busy hours */}
                <div className="flex items-center gap-3"><span className="w-16 text-xs text-slate-500">10:00 AM</span><div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden"><div className="bg-teal-400 w-1/3 h-full"></div></div></div>
                <div className="flex items-center gap-3"><span className="w-16 text-xs text-slate-500">2:00 PM</span><div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden"><div className="bg-teal-300 w-1/4 h-full"></div></div></div>
                <div className="flex items-center gap-3"><span className="w-16 text-xs text-slate-500 font-bold">7:30 PM</span><div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden"><div className="bg-amber-500 w-11/12 h-full"></div></div></div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <p className="text-teal-700 font-bold tracking-widest uppercase text-sm mb-3">Patient Guide</p>
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all">
                  <button 
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-slate-900 hover:bg-slate-50"
                  >
                    {faq.question}
                    {openFaq === faq.id ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
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
