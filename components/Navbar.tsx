import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (id: string) => {
    setIsOpen(false);
    
    // Special case for Products page
    if (id === 'products') {
      navigate('/products');
      return;
    }

    // Navigation for Landing Page sections
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Products', id: 'products' },
    { name: 'Our Services', id: 'services' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => handleNavigation('home')} className="flex items-center space-x-2 group">
            <div className="bg-brand-yellow p-2 rounded-xl text-brand-blue shadow-[0_0_15px_rgba(251,191,36,0.5)] transition-transform group-hover:scale-110">
              <Zap size={24} fill="currentColor" />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-xl tracking-tight leading-none text-white group-hover:text-brand-yellow transition-colors">HINDUSTAN</span>
              <span className="text-[10px] text-blue-200 tracking-[0.2em] font-medium uppercase">Electricals</span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.id)}
                className="text-sm font-medium text-gray-300 hover:text-brand-yellow transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-xl border-t border-white/10 absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.id)}
                className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:bg-white/5 hover:text-brand-yellow transition-all"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;