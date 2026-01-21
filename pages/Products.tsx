import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product, ProductCategory } from '../types';
import { Package, ArrowRight, Filter, ArrowLeft, Search } from 'lucide-react';

const PRODUCTS: Product[] = [
  { 
    id: 1, 
    name: "Modular Switch Panel", 
    category: ProductCategory.SWITCHES, 
    description: "Elegant white modular switches, fire-resistant.", 
    imageUrl: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWNhbCUyMHBhbmVsfGVufDB8fDB8fHww?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 2, 
    name: "Smart Wifi Socket", 
    category: ProductCategory.SWITCHES, 
    description: "Control your appliances remotely with ease.", 
    imageUrl: "https://plus.unsplash.com/premium_photo-1729186145917-f53012cecc9f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 3, 
    name: "Heavy Duty Copper Wire", 
    category: ProductCategory.WIRES, 
    description: "90m coil, ISI marked, multi-strand copper.", 
    imageUrl: "https://plus.unsplash.com/premium_photo-1667354098440-3f4458aa6d34?q=80&w=1210&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 4, 
    name: "Armored Cable 3-Core", 
    category: ProductCategory.WIRES, 
    description: "Industrial grade underground armored cable.", 
    imageUrl: "https://plus.unsplash.com/premium_photo-1682145723071-33e2207f4eb1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 5, 
    name: "LED Ceiling Downlight", 
    category: ProductCategory.LIGHTING, 
    description: "15W warm white, energy saving LED.", 
    imageUrl: "https://images.unsplash.com/photo-1563099045-dd7d9aebaa49?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 6, 
    name: "Decorative Chandelier", 
    category: ProductCategory.LIGHTING, 
    description: "Modern aesthetic fixture for living rooms.", 
    imageUrl: "https://images.unsplash.com/photo-1669060353074-10afdc617ede?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 7, 
    name: "High Speed Ceiling Fan", 
    category: ProductCategory.FANS, 
    description: "1200mm sweep, anti-dust coating.", 
    imageUrl: "https://images.unsplash.com/photo-1609519479841-5fd3b2884e17?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 8, 
    name: "Exhaust Fan 6-inch", 
    category: ProductCategory.FANS, 
    description: "Silent operation, ideal for kitchens.", 
    imageUrl: "https://images.unsplash.com/photo-1752218804093-589253806a48?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 9, 
    name: "Digital Multimeter", 
    category: ProductCategory.ACCESSORIES, 
    description: "Professional tool for voltage measurement.", 
    imageUrl: "https://images.unsplash.com/photo-1619345371662-fccc15cc4814?q=80&w=1084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 10, 
    name: "MCB Distribution Box", 
    category: ProductCategory.ACCESSORIES, 
    description: "Double door, 8-way distribution board.", 
    imageUrl: "https://plus.unsplash.com/premium_photo-1661911021547-b0188f22d548?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80" 
  },
];

interface ProductsProps {
  isPreview?: boolean;
}

const Products: React.FC<ProductsProps> = ({ isPreview = false }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();

  const getDisplayedProducts = () => {
    if (isPreview) {
      return PRODUCTS.slice(0, 4);
    }
    return PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const displayedProducts = getDisplayedProducts();
  const categories = ['All', ...Object.values(ProductCategory)];

  const scrollToContact = () => {
    if (!isPreview) {
      navigate('/', { state: { scrollTo: 'contact' } });
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleExploreAll = () => {
    navigate('/products');
  };

  const handleBackToHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-24 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Button for Full Page */}
        {!isPreview && (
          <div className="mb-8">
            <button 
              onClick={handleBackToHome}
              className="flex items-center text-brand-yellow hover:text-white transition-colors font-medium"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </button>
          </div>
        )}
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-sm font-bold text-brand-yellow uppercase tracking-widest mb-2">Catalog</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Products</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Browse our extensive catalog of high-quality electrical supplies. We stock everything from basic home essentials to industrial-grade equipment.
          </p>
        </div>

        {/* Search Bar */}
        {!isPreview && (
          <div className="max-w-xl mx-auto mb-10 relative animate-fade-in">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-transparent transition-all shadow-lg backdrop-blur-sm"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}

        {/* Filters - Hide in Preview Mode */}
        {!isPreview && (
          <div className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible justify-start md:justify-center items-center gap-3 mb-12 pb-4 md:pb-0 px-4 md:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-center space-x-2 text-white/50 mr-4 flex-shrink-0">
              <Filter size={16} />
              <span className="text-sm uppercase tracking-wider font-medium whitespace-nowrap">Filter By:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border flex-shrink-0 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-brand-yellow text-brand-blue border-brand-yellow shadow-[0_0_15px_rgba(251,191,36,0.4)]'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8">
          {displayedProducts.map((product) => (
            <div key={product.id} className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-brand-yellow/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col">
              
              <div className="relative h-40 sm:h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-2 right-2 md:top-4 md:right-4 z-20 bg-brand-blue/80 backdrop-blur-md text-brand-yellow text-[8px] md:text-[10px] font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-white/10 uppercase tracking-wider">
                  {product.category}
                </span>
              </div>
              
              <div className="p-4 md:p-6 flex flex-col flex-grow relative z-20">
                <h3 className="text-sm md:text-lg font-bold text-white mb-2 group-hover:text-brand-yellow transition-colors line-clamp-2">{product.name}</h3>
                <p className="text-gray-400 text-xs md:text-sm mb-4 flex-grow leading-relaxed line-clamp-3">{product.description}</p>
                
                <button 
                  onClick={scrollToContact}
                  className="w-full mt-auto py-2 md:py-3 bg-white/10 text-white font-semibold rounded-lg md:rounded-xl hover:bg-brand-yellow hover:text-brand-blue transition-all duration-300 flex items-center justify-center border border-white/10 group-hover:border-brand-yellow/50 text-xs md:text-base"
                >
                  Inquire Now
                  <ArrowRight size={14} className="ml-1 md:ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!isPreview && displayedProducts.length === 0 && (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
            <Package size={48} className="mx-auto text-gray-500 mb-4" />
            <p className="text-gray-400">No products found matching your search.</p>
          </div>
        )}

        {/* Explore All Button - Only in Preview Mode */}
        {isPreview && (
          <div className="mt-16 text-center">
            <button
              onClick={handleExploreAll}
              className="bg-brand-yellow text-brand-dark font-bold py-4 px-10 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.3)] inline-flex items-center justify-center"
            >
              Explore All Products
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Products;