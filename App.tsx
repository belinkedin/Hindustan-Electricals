import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Features from './pages/Features';
import CallToAction from './pages/CallToAction';

const LandingPage: React.FC = () => {
  return (
    <>
      <div id="home">
        <Home />
      </div>
      <div id="products" className="border-t border-white/5">
        <Products isPreview={true} />
      </div>
      <div id="services" className="border-t border-white/5">
        <Services />
      </div>
      <div id="about" className="border-t border-white/5">
        <About />
      </div>
      {/* Why Choose Hindustan Electricals? */}
      <div className="border-t border-white/5">
        <Features />
      </div>
      {/* Ready to start your project? */}
      <div className="border-t border-white/5">
        <CallToAction />
      </div>
      <div id="contact" className="border-t border-white/5">
        <Contact />
      </div>
    </>
  );
};

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling when navigating from another page (like Products -> Home#Contact)
    if (location.state && location.state.scrollTo) {
      const elementId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure DOM is ready
      
      // Clear state to prevent scrolling on refresh
      window.history.replaceState({}, document.title);
    } else if (location.pathname === '/' && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.pathname === '/products') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-dark text-gray-100 selection:bg-brand-yellow selection:text-brand-blue">
      {/* Global Background Gradient */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-brand-dark to-black pointer-events-none"></div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<Products isPreview={false} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;