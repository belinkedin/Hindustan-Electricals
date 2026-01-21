import React from 'react';

const CallToAction: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-yellow/5"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to start your project?</h2>
          <p className="mb-10 text-blue-200 text-lg">Visit our store or get a quote for your bulk requirements today.</p>
          <button 
             onClick={scrollToContact}
             className="inline-block bg-brand-yellow text-brand-dark font-bold py-4 px-12 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get a Quote
          </button>
        </div>
      </section>
  );
};

export default CallToAction;