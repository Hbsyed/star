import { Crown, Stethoscope, Sparkles, Smile, Baby, Activity, Star, MapPin, Clock, ShieldCheck, Award } from 'lucide-react';

export const highlights = [
  {
    id: 'rating',
    title: '4.9 / 5.0 Rating',
    description: 'Across 51+ verified Google reviews by our satisfied patients.',
    icon: Award,
  },
  {
    id: 'affordable',
    title: 'Affordable Excellence',
    description: 'Transparent pricing with zero hidden charges. Great savings compared to corporate metro hospitals.',
    icon: ShieldCheck,
  },
  {
    id: 'convenience',
    title: 'Convenient & Accessible',
    description: 'Located just 50m from Anantapur railway station, with flexible evening hours up to 9:30 PM.',
    icon: MapPin,
  },
  {
    id: 'hours',
    title: 'Open 7 Days a Week',
    description: 'Available daily from 8:30 AM to 9:30 PM for all your dental needs and emergencies.',
    icon: Clock,
  }
];

export const services = [
  {
    id: 'zirconia',
    title: 'Zirconia Crowns & Ceramic Caps',
    cost: '₹7,000 - ₹15,000 / each',
    basePrice: 7000,
    duration: '2 Visits (3-5 Days)',
    comfort: 'Painless (Anesthesia)',
    warranty: 'Up to 15 Years Warranty',
    description: 'Ultra-durable, metal-free aesthetic crowns customized for natural translucency and lifetime strength.',
    benefits: ['100% Metal-free - zero dark line', 'Superior strength', 'Stain-resistant high translucency'],
    icon: Crown,
  },
  {
    id: 'rct',
    title: 'Painless Root Canal Treatment (RCT)',
    cost: '₹3,500 - ₹4,000',
    basePrice: 3500,
    duration: '1 to 2 Visits (45 mins each)',
    comfort: 'Painless (Anesthesia)',
    warranty: 'Lifetime Preservation',
    description: 'Single-sitting or 2-visit advanced rotary RCT to eliminate toothache and save natural teeth.',
    benefits: ['Instant relief from throbbing pain', 'Saves natural tooth root', 'Computerized rotary accuracy'],
    icon: Stethoscope,
  },
  {
    id: 'implants',
    title: 'Permanent Dental Implants',
    cost: '₹18,000 (Crown separate)',
    basePrice: 18000,
    duration: '3-6 Months',
    comfort: 'Painless (Anesthesia)',
    warranty: 'Lifetime Warranty',
    description: 'Lifelike titanium tooth root replacements that look, feel, and function like real teeth.',
    benefits: ['Functions 100% like natural teeth', 'Prevents jawbone erosion', 'No damage to adjacent teeth'],
    icon: Activity,
  },
  {
    id: 'whitening',
    title: 'Laser Teeth Whitening & Polishing',
    cost: '₹300 / tooth',
    basePrice: 300,
    duration: '45 Minutes',
    comfort: 'None',
    warranty: 'Long-lasting (12-24 months)',
    description: 'Fast, safe in-clinic polishing and whitening sessions to eliminate stubborn stains.',
    benefits: ['Lightens stains up to 8 shades', 'Safe, enamel-safe LED/Laser', 'Removes tobacco/coffee stains'],
    icon: Sparkles,
  },
  {
    id: 'aligners',
    title: 'Invisible Aligners & Braces',
    cost: '₹22,000 - ₹1,40,000',
    basePrice: 22000,
    duration: '6 - 18 Months',
    comfort: 'Minimal',
    warranty: 'Retainer Included',
    description: 'Straighten crooked or gapped teeth with clear, invisible aligners or ceramic braces.',
    benefits: ['100% clear & virtually invisible', 'Removable while eating', 'No food restrictions'],
    icon: Smile,
  },
  {
    id: 'pediatric',
    title: 'Pediatric & Emergency Care',
    cost: 'From ₹500',
    basePrice: 500,
    duration: 'Immediate Priority',
    comfort: 'Painless (Anesthesia)',
    warranty: 'Immediate Care',
    description: 'Immediate emergency toothache relief and gentle pediatric dental care for kids.',
    benefits: ['Same-day walk-in priority', 'Child-friendly environment', 'Preventive fluoride application'],
    icon: Baby,
  },
];

export const reviews = [
  {
    id: 1,
    name: 'Ramanjaneyulu Reddy',
    time: '3 years ago',
    text: 'Zirconia caps after fixing very nice teeths.. Doctor Noor sir treatment is very good and painless. Very hygienic clinic beside railway station.',
    service: 'Zirconia Crowns'
  },
  {
    id: 2,
    name: 'Shaik Khaja Hussain',
    time: '6 months ago',
    text: 'Doctor Noor sir is very friendly and explains the problem and treatment clearly. I took root canal treatment and felt zero pain throughout. Highly recommended in Anantapur!',
    service: 'Root Canal Treatment'
  },
  {
    id: 3,
    name: 'Anitha Krishna',
    time: '1 year ago',
    text: 'Best dental hospital in Kamalanagar Anantapur. The clinic is super clean and modern. Very affordable charges compared to corporate hospitals in Bangalore or Hyderabad.',
    service: 'General Consultation'
  },
  {
    id: 4,
    name: 'Pawan Kumar S.',
    time: '4 months ago',
    text: 'Got dental implant done by Dr. Noor Sir. Exceptional skill! He explained the entire procedure step by step before starting. Now I can chew comfortably.',
    service: 'Dental Implant'
  },
  {
    id: 5,
    name: 'Deepika Verma',
    time: '2 months ago',
    text: 'Teeth whitening result was unbelievable! Very polite staff, clean sanitization, and convenient timing till 9:30 PM.',
    service: 'Teeth Whitening'
  },
  {
    id: 6,
    name: 'Mahesh Babu K.',
    time: '8 months ago',
    text: 'Super hospital! Brought my elderly father for full denture cap fixing. Dr Noor treated him with so much respect and patience.',
    service: 'Dentures & Caps'
  }
];

export const faqs = [
  {
    id: 'faq-1',
    question: 'Why choose Zirconia caps over old metal crowns?',
    answer: 'Zirconia caps are 100% metal-free, extremely strong, and custom-milled to mirror natural tooth shade and translucency. Unlike metal-fused crowns, Zirconia will never leave black lines at your gum line and comes with up to 15 years warranty at Star Dental Hospital.'
  },
  {
    id: 'faq-2',
    question: 'Is Root Canal Treatment (RCT) painful?',
    answer: 'Not at all. We use a 100% painless protocol with advanced computerized rotary instruments and effective local anesthesia to ensure you feel absolutely no pain during the procedure.'
  },
  {
    id: 'faq-3',
    question: 'What are the clinic timings and can I walk in for emergency toothache?',
    answer: 'We are open 7 days a week from 8:30 AM to 9:30 PM. Yes, we provide same-day priority walk-in care for emergencies.'
  },
  {
    id: 'faq-4',
    question: 'Where is Star Super Speciality Dental Hospital located in Anantapur?',
    answer: 'We are conveniently located right at the main entrance, beside the railway station exit in Kamalanagar, Anantapur, Andhra Pradesh.'
  },
  {
    id: 'faq-5',
    question: 'Are treatments expensive? Do you offer EMI?',
    answer: 'We offer highly affordable, transparent pricing with zero hidden charges, saving you up to 45% compared to corporate metro hospitals. EMI options are available for major treatments.'
  }
];
