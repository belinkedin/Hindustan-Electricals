import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-24 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-yellow uppercase tracking-widest mb-2">Our Story</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-yellow to-transparent mx-auto rounded-full"></div>
        </div>

        {/* Main Content - Glass Card */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Serving the Community Since 1995</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Industan Electricals started as a small family-run business with a simple mission: to provide high-quality electrical components at fair prices. Over the last two decades, we have grown into one of the city's most trusted electrical suppliers.
              </p>
              <p className="text-blue-100 text-lg leading-relaxed mb-12">
                We understand that electrical safety is paramount. That's why every product on our shelves—from the smallest fuse to industrial-grade cables—meets rigorous quality standards. We pride ourselves on building long-term relationships with homeowners, electricians, and contractors.
              </p>
            </div>
              
            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mt-12">
              {['Authorized Dealers', 'Quality Assurance', 'Competitive Pricing', 'After-Sales Support'].map((item) => (
                <div key={item} className="flex items-center p-4 bg-black/20 rounded-xl border border-white/5 hover:border-brand-yellow/30 transition-colors">
                  <CheckCircle className="text-brand-yellow flex-shrink-0 mr-4" size={20} />
                  <span className="font-medium text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision/Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg p-10 rounded-2xl border border-white/10 hover:border-brand-blue/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-1 bg-brand-blue mr-3 rounded-full"></span>
              Our Vision
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the leading provider of innovative and sustainable electrical solutions, empowering homes and businesses with safe, efficient energy.
            </p>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg p-10 rounded-2xl border border-white/10 hover:border-brand-yellow/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-1 bg-brand-yellow mr-3 rounded-full"></span>
              Our Mission
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To deliver excellence through superior products, expert advice, and customer-centric service, ensuring safety and satisfaction in every transaction.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;