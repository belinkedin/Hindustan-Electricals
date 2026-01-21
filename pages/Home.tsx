import React from 'react';
import { ArrowRight, Phone, Zap, ShieldCheck, ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
        
        {/* === Background Image & Overlays === */}
        <div className="absolute inset-0 z-0">
          
          <img 
            src="https://i.pinimg.com/736x/d3/5c/00/d35c00c112bb227af9aae02a57c0f4be.jpg?q=80&w=2670&auto=format&fit=crop" 
            alt="Industrial Power Battery System" 
            className="w-full h-full object-cover object-[75%_center]"
          />
          
          {/* Left-side Gradient for Text Readability - Blue theme, fading to transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/60 to-transparent"></div>
          
          {/* Bottom Fade to merge with next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent"></div>
        </div>

        {/* === Main Content === */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-3xl">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 backdrop-blur-md mb-8 opacity-0 animate-fade-in">
              <Zap size={16} className="text-brand-yellow" fill="currentColor" />
              <span className="text-brand-yellow font-bold text-xs tracking-[0.2em] uppercase">Premium Electrical Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Powering Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-amber-200">World</span> With Reliability.
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl font-light opacity-0 animate-fade-in drop-shadow-md" style={{ animationDelay: '0.4s' }}>
              From residential renovations to industrial complexes, we provide top-tier electrical components, expert consultation, and reliable service since 1995.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <button 
                onClick={() => scrollToSection('products')}
                className="group relative px-8 py-4 bg-brand-yellow text-brand-dark font-bold rounded-xl overflow-hidden shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Catalog <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all hover:border-white/40 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Contact Sales
              </button>
            </div>

            {/* Stats / Trust Indicators */}
            <div className="mt-16 pt-8 border-t border-white/20 grid grid-cols-2 sm:grid-cols-3 gap-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div>
                <p className="text-3xl font-bold text-white mb-1 drop-shadow-sm">25+</p>
                <p className="text-xs text-gray-300 uppercase tracking-wider font-medium drop-shadow-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1 drop-shadow-sm">5k+</p>
                <p className="text-xs text-gray-300 uppercase tracking-wider font-medium drop-shadow-sm">Products in Stock</p>
              </div>
              <div className="hidden sm:block">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-3xl font-bold text-white drop-shadow-sm">ISI</span>
                  <ShieldCheck className="text-brand-yellow" size={24} />
                </div>
                <p className="text-xs text-gray-300 uppercase tracking-wider font-medium drop-shadow-sm">Certified Safety</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:block z-20">
          <button onClick={() => scrollToSection('products')} className="flex flex-col items-center gap-2 hover:text-brand-yellow transition-colors">
            <span className="text-[10px] uppercase tracking-widest drop-shadow-md">Scroll Down</span>
            <ChevronDown size={24} className="drop-shadow-md"/>
          </button>
        </div>

      </section>
    </div>
  );
};

export default Home;