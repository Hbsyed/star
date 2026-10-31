import { useState } from 'react';
import { services } from '../data';
import { Calculator, CalendarCheck, Info } from 'lucide-react';

export default function BookingEstimator() {
  const [selectedService, setSelectedService] = useState(services[0].id);
  const [units, setUnits] = useState(1);
  const [includeXray, setIncludeXray] = useState(false);

  const activeService = services.find(s => s.id === selectedService) || services[0];
  const baseCost = activeService.basePrice * units;
  const totalCost = baseCost + (includeXray ? 300 : 0);
  const metroCost = Math.round((activeService.basePrice * 1.8 * units) + (includeXray ? 500 : 0));
  const savings = metroCost - totalCost;

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Booking Form */}
          <div>
            <div className="mb-10">
              <p className="text-teal-700 font-bold tracking-widest uppercase text-sm mb-3">Instant Priority Booking</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">
                Schedule Your Visit with Dr. Noor Sir
              </h2>
              <p className="text-slate-600">No waiting queue. Book your convenient slot online to ensure minimal wait times.</p>
            </div>

            <form className="space-y-6 bg-slate-50 p-8 rounded-3xl border border-slate-200" onSubmit={e => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Patient Full Name *</label>
                  <input type="text" placeholder="e.g. K. Venkat" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">WhatsApp Number *</label>
                  <input type="tel" placeholder="e.g. 9246777674" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Select Dental Treatment *</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none bg-white">
                  {services.map(s => <option key={s.id} value={s.id}>{s.title} ({s.warranty})</option>)}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Preferred Date *</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Select Time Slot *</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none bg-white">
                    <option>09:00 AM</option>
                    <option>10:30 AM</option>
                    <option>11:30 AM</option>
                    <option>04:30 PM</option>
                    <option>06:00 PM</option>
                    <option>07:30 PM</option>
                    <option>08:30 PM (Evening)</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                <CalendarCheck className="w-5 h-5" /> Confirm & Lock Appointment Pass
              </button>
              <p className="text-xs text-center text-slate-500 font-medium mt-4 flex items-center justify-center gap-1">
                <Info className="w-4 h-4" /> Attending Doctor: Dr. Noor Sir (4.9 ★ Rating)
              </p>
            </form>
          </div>

          {/* Cost Estimator */}
          <div>
            <div className="mb-10">
              <p className="text-teal-700 font-bold tracking-widest uppercase text-sm mb-3">Transparent Pricing</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">
                Treatment Cost Estimator
              </h2>
              <p className="text-slate-600">Get clear fee estimates. Save up to 45% compared to corporate dental hospitals.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-slate-50">
                <Calculator className="w-32 h-32" />
              </div>
              <div className="relative z-10 space-y-6">
                
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">1. Choose Procedure:</label>
                  <select 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none bg-white font-medium text-slate-700"
                  >
                    {services.map(s => <option key={s.id} value={s.id}>{s.title} ({s.cost})</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">2. Number of Units/Teeth:</label>
                  <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl border border-slate-200 w-fit">
                    <button onClick={() => setUnits(Math.max(1, units - 1))} className="w-10 h-10 bg-white rounded-lg border border-slate-200 font-bold hover:bg-slate-100">-</button>
                    <span className="w-12 text-center font-bold text-slate-900">{units}</span>
                    <button onClick={() => setUnits(units + 1)} className="w-10 h-10 bg-white rounded-lg border border-slate-200 font-bold hover:bg-slate-100">+</button>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                    <input 
                      type="checkbox" 
                      checked={includeXray}
                      onChange={(e) => setIncludeXray(e.target.checked)}
                      className="w-5 h-5 accent-teal-600"
                    />
                    <span className="text-sm font-bold text-slate-900">Include Digital RVG Low-Radiation X-Ray (+₹300)</span>
                  </label>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <div className="bg-teal-900 text-white p-6 rounded-2xl">
                    <p className="text-teal-200 text-sm font-semibold mb-1">ESTIMATED TOTAL FEE</p>
                    <p className="text-4xl font-display font-bold mb-4">₹{totalCost.toLocaleString('en-IN')}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-teal-100">
                        <span>Metro Hospital Average:</span>
                        <span className="line-through">₹{metroCost.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between font-bold text-amber-400">
                        <span>Your Savings in Anantapur:</span>
                        <span>Save ~₹{savings.toLocaleString('en-IN')} (45%)</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-4 leading-relaxed italic">
                    * Final clinical fee depends on exact diagnosis and tooth anatomy during chairside consultation with Dr. Noor Sir. 0% Interest EMI available.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
