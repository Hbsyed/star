import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Services from './components/Services';
import BookingEstimator from './components/BookingEstimator';
import ClinicInfo from './components/ClinicInfo';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] selection:bg-gold-500/30 selection:text-gold-200 text-[#FAF7F0] font-sans relative pb-16 md:pb-0">
      <Header />
      <main>
        <Hero />
        <Profile />
        <Services />
        <BookingEstimator />
        <ClinicInfo />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}

