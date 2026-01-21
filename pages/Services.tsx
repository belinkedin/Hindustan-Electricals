import React from 'react';
import { Truck, MessageCircle, Wrench, ShoppingBag, ArrowRight } from 'lucide-react';
import { Service } from '../types';

const SERVICES: Service[] = [
  {
    id: 1,
    title: "Retail & Wholesale Supplies",
    description: "Whether you need a single bulb or wiring for an entire building, we cater to both retail customers and wholesale bulk buyers with competitive pricing.",
    icon: ShoppingBag
  },
  {
    id: 2,
    title: "Project Consultation",
    description: "Not sure what you need? Our experts provide free consultation to help you estimate requirements for renovations or new constructions.",
    icon: MessageCircle
  },
  {
    id: 3,
    title: "Doorstep Delivery",
    description: "We offer reliable delivery services for bulk orders within the city limits. Get your materials delivered safely and on time.",
    icon: Truck
  },
  {
    id: 4,
    title: "Installation Support",
    description: "While we are primarily a supply shop, we can connect you with trusted, certified electricians for your installation needs.",
    icon: Wrench
  }
];

const Services: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-yellow uppercase tracking-widest mb-2">Our Expertise</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">Beyond selling products, we provide comprehensive support to ensure your electrical projects run smoothly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-brand-yellow/30 transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-900 rounded-2xl flex items-center justify-center text-brand-yellow shadow-lg border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors">{service.title}</h3>
                <p className="text-blue-100/80 leading-relaxed text-lg">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-24 relative rounded-3xl overflow-hidden p-10 md:p-16 border border-brand-yellow/20">
          <div className="absolute inset-0 bg-brand-yellow/10 backdrop-blur-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow/20 to-transparent"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">Need a Bulk Quote?</h2>
              <p className="text-blue-100 text-lg">We offer special discounts for contractors and large orders.</p>
            </div>
            <button 
              onClick={scrollToContact}
              className="bg-brand-yellow text-brand-blue px-10 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] flex items-center"
            >
              Contact Sales
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;