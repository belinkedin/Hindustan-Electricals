import React from 'react';
import { ShieldCheck, Truck, Users, Lightbulb } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Hindustan Electricals?</h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg font-light">We combine decades of experience with top-tier customer service to bring you the best electrical solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Genuine Products", desc: "100% authentic items from top brands like Havells, Anchor, and Philips." },
              { icon: Users, title: "Expert Support", desc: "Our knowledgeable staff helps you choose the right products for your needs." },
              { icon: Truck, title: "Bulk Orders", desc: "Special pricing and timely delivery for contractors and large projects." },
              { icon: Lightbulb, title: "Modern Solutions", desc: "Latest smart home devices and energy-efficient lighting available." },
            ].map((feature, idx) => (
              <div key={idx} className="group bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-blue/50 text-brand-yellow mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner border border-white/5">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-yellow transition-colors">{feature.title}</h3>
                <p className="text-blue-200/70 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Features;