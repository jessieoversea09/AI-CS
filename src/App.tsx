import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FeaturesPage from './pages/FeaturesPage';
import CasesPage from './pages/CasesPage';
import PricingPage from './pages/PricingPage';
import HelpPage from './pages/HelpPage';
import CooperationPage from './pages/CooperationPage';

function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <Partners />
      <About />
      <CTA />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f7faff] text-slate-900 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/cooperation" element={<CooperationPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
