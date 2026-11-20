import { useState, type FormEvent } from 'react';
import { services } from '../data';
import { Calculator, CalendarCheck, CheckCircle2, Info } from 'lucide-react';

export default function BookingEstimator() {
  const [selectedService, setSelectedService] = useState(services[0].id);
  const [units, setUnits] = useState(1);
  const [includeXray, setIncludeXray] = useState(false);

  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [bookingService, setBookingService] = useState(services[0].id);
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('09:00 AM');
  const [confirmed, setConfirmed] = useState(false);

  const activeService = services.find(s => s.id === selectedService) || services[0];
  const baseCost = activeService.basePrice * units;
  const totalCost = baseCost + (includeXray ? 300 : 0);
  const metroCost = Math.round((activeService.basePrice * 1.8 * units) + (includeXray ? 500 : 0));
  const savings = metroCost - totalCost;

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <section id="booking" className="py-24 bg-[#0D0D0D] border-t border-gold-500/15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Booking Form */}
          <div>
            <div className="mb-10">
              <p className="text-gold-400 font-semibold tracking-widest uppercase text-xs mb-3">Instant Priority Booking</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#FAF7F0] mb-4 tracking-tight text-balance">
                Schedule Your Visit with Dr. Noor Sir
              </h2>
              <p className="text-neutral-400">No waiting queue. Book your convenient slot online to ensure minimal wait times.</p>
            </div>

            <form
              className="space-y-6 bg-[#141414] p-8 rounded-3xl border border-gold-500/20"
              onSubmit={handleBookingSubmit}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#FAF7F0] mb-2">Patient Full Name *</label>
                  <input
                    type="text"
                    value={patientName}
                    onChange={(e) => { setPatientName(e.target.value); setConfirmed(false); }}
                    placeholder="e.g. K. Venkat"
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-neutral-800 text-[#FAF7F0] placeholder:text-neutral-500 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#FAF7F0] mb-2">WhatsApp Number *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value); setConfirmed(false); }}
                    placeholder="e.g. 9246777674"
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-neutral-800 text-[#FAF7F0] placeholder:text-neutral-500 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#FAF7F0] mb-2">Select Dental Treatment *</label>
                <select
                  value={bookingService}
                  onChange={(e) => { setBookingService(e.target.value); setConfirmed(false); }}
                  className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-neutral-800 text-[#FAF7F0] focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors"
                >
                  {services.map(s => <option key={s.id} value={s.id}>{s.title} ({s.warranty})</option>)}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#FAF7F0] mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => { setPreferredDate(e.target.value); setConfirmed(false); }}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-neutral-800 text-[#FAF7F0] focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#FAF7F0] mb-2">Select Time Slot *</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => { setTimeSlot(e.target.value); setConfirmed(false); }}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-neutral-800 text-[#FAF7F0] focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors"
                  >
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

              {confirmed && (
                <div className="p-4 rounded-2xl bg-gold-500/10 border border-gold-500/35 text-sm text-gold-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gold-300 mb-1">Priority Appointment Pass Reserved</p>
                    <p className="text-neutral-300">
                      Thank you, {patientName}. Your slot for {preferredDate} at {timeSlot} is ready. You can also message{' '}
                      <a
                        href={`https://wa.me/919246777674?text=${encodeURIComponent(`Hello Dr. Noor Sir, I booked an appointment for ${patientName} on ${preferredDate} at ${timeSlot}.`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="underline text-gold-400 font-semibold"
                      >
                        WhatsApp (+91 92467 77674)
                      </a>{' '}
                      for instant confirmation.
                    </p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-black rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-gold-500/15 cursor-pointer"
              >
                <CalendarCheck className="w-5 h-5" /> Confirm &amp; Lock Appointment Pass
              </button>
              <p className="text-xs text-center text-neutral-400 font-medium mt-4 flex items-center justify-center gap-1.5">
                <Info className="w-4 h-4 text-gold-400" /> Attending Doctor: Dr. Noor Sir (4.9 ★ Rating)
              </p>
            </form>
          </div>

          {/* Cost Estimator */}
          <div>
            <div className="mb-10">
              <p className="text-gold-400 font-semibold tracking-widest uppercase text-xs mb-3">Transparent Pricing</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#FAF7F0] mb-4 tracking-tight text-balance">
                Treatment Cost Estimator
              </h2>
              <p className="text-neutral-400">Get clear fee estimates. Save up to 45% compared to corporate dental hospitals.</p>
            </div>

            <div className="bg-[#141414] p-8 rounded-3xl border border-gold-500/20 shadow-xl shadow-black/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-gold-500/[0.06] pointer-events-none">
                <Calculator className="w-32 h-32" />
              </div>
              <div className="relative z-10 space-y-6">
                
                <div>
                  <label className="block text-sm font-bold text-[#FAF7F0] mb-2">1. Choose Procedure:</label>
                  <select 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-800 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none bg-[#0A0A0A] font-medium text-[#FAF7F0] transition-colors"
                  >
                    {services.map(s => <option key={s.id} value={s.id}>{s.title} ({s.cost})</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#FAF7F0] mb-2">2. Number of Units/Teeth:</label>
                  <div className="flex items-center gap-4 bg-[#0A0A0A] p-2 rounded-xl border border-neutral-800 w-fit">
                    <button
                      type="button"
                      onClick={() => setUnits(Math.max(1, units - 1))}
                      className="w-10 h-10 bg-[#1A1A1A] rounded-lg border border-neutral-700 font-bold text-gold-400 hover:bg-gold-500 hover:text-black transition-colors cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-bold text-[#FAF7F0] tabular-nums">{units}</span>
                    <button
                      type="button"
                      onClick={() => setUnits(units + 1)}
                      className="w-10 h-10 bg-[#1A1A1A] rounded-lg border border-neutral-700 font-bold text-gold-400 hover:bg-gold-500 hover:text-black transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-3 p-4 border border-neutral-800 rounded-xl cursor-pointer hover:border-gold-500/40 bg-[#0A0A0A] transition-colors">
                    <input 
                      type="checkbox" 
                      checked={includeXray}
                      onChange={(e) => setIncludeXray(e.target.checked)}
                      className="w-5 h-5 accent-[#D4AF37]"
                    />
                    <span className="text-sm font-bold text-[#FAF7F0]">Include Digital RVG Low-Radiation X-Ray (+₹300)</span>
                  </label>
                </div>

                <div className="pt-6 border-t border-neutral-800">
                  <div className="bg-gradient-to-br from-[#1C1608] via-[#110E06] to-[#080808] text-[#FAF7F0] p-6 rounded-2xl border border-gold-500/40">
                    <p className="text-gold-300 text-xs font-bold tracking-widest uppercase mb-1">Estimated Total Fee</p>
                    <p className="text-4xl font-display font-bold text-gold-400 mb-4 tabular-nums">₹{totalCost.toLocaleString('en-IN')}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-neutral-400">
                        <span>Metro Hospital Average:</span>
                        <span className="line-through tabular-nums">₹{metroCost.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between font-bold text-gold-300">
                        <span>Your Savings in Anantapur:</span>
                        <span className="tabular-nums">Save ~₹{savings.toLocaleString('en-IN')} (45%)</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500 mt-4 leading-relaxed italic">
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
