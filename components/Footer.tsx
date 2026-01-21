import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const location = useLocation();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // If we are on the home page and the link is for a section on the home page
    if (location.pathname === '/' && id !== 'products') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-black/30 backdrop-blur-lg border-t border-white/10 text-gray-300 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="text-brand-yellow" size={24} fill="currentColor" />
              <span className="text-xl font-bold text-white tracking-wide">HINDUSTAN ELECTRICALS</span>
            </div>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed max-w-xs">
              Your trusted partner for high-quality electrical supplies. From home renovations to industrial projects, we light up your world with reliability and safety.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-brand-blue transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Products', id: 'products' },
                { name: 'Our Services', id: 'services' },
                { name: 'About Us', id: 'about' },
                { name: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.id === 'products' ? '/products' : '/'} 
                    state={link.id !== 'products' ? { scrollTo: link.id } : undefined}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className="text-gray-400 hover:text-brand-yellow transition-colors hover:translate-x-1 duration-200 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mr-2 opacity-0 hover:opacity-100"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="mr-3 text-brand-yellow flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
                <span className="group-hover:text-white transition-colors">Pensioner Street, Dindigul – 624001</span>
              </li>
              <li className="flex items-center group">
                <Phone className="mr-3 text-brand-yellow flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span className="group-hover:text-white transition-colors">+91 96983 69893</span>
              </li>
              <li className="flex items-center group">
                <Mail className="mr-3 text-brand-yellow flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span className="group-hover:text-white transition-colors">sales@hindustanelectricals.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Hindustan Electricals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;