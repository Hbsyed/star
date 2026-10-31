import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Services from './components/Services';
import AIChecker from './components/AIChecker';
import BookingEstimator from './components/BookingEstimator';
import ClinicInfo from './components/ClinicInfo';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-teal-100 selection:text-teal-900 text-slate-900 font-sans relative pb-16 md:pb-0">
      <Header />
      <main>
        <Hero />
        <Profile />
        <Services />
        <AIChecker />
        <BookingEstimator />
        <ClinicInfo />
      </main>
      <Footer />
      <Chatbot />
      <BottomNav />
    </div>
  );
}

