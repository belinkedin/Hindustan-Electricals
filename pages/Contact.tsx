import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-yellow uppercase tracking-widest mb-2">Get in Touch</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">Have a question or need a quote? We're here to help.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info & Location Block */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-brand-blue/30 p-3 rounded-xl mr-5 border border-white/10 group-hover:bg-brand-yellow group-hover:text-brand-blue transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1">Visit Us</h3>
                    <p className="text-blue-200/80 leading-relaxed">Pensioner Street,<br/>Dindigul – 624001</p>
                  </div>
                </div>
                <div className="flex items-center group">
                   <div className="bg-brand-blue/30 p-3 rounded-xl mr-5 border border-white/10 group-hover:bg-brand-yellow group-hover:text-brand-blue transition-colors duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1">Call Us</h3>
                    <p className="text-blue-200/80">+91 96983 69893</p>
                  </div>
                </div>
                <div className="flex items-center group">
                   <div className="bg-brand-blue/30 p-3 rounded-xl mr-5 border border-white/10 group-hover:bg-brand-yellow group-hover:text-brand-blue transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1">Email Us</h3>
                    <p className="text-blue-200/80">sales@hindustanelectricals.com</p>
                  </div>
                </div>
                <div className="flex items-center group">
                   <div className="bg-brand-blue/30 p-3 rounded-xl mr-5 border border-white/10 group-hover:bg-brand-yellow group-hover:text-brand-blue transition-colors duration-300">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1">Business Hours</h3>
                    <p className="text-blue-200/80">Mon - Sat: 10:00 AM - 9:00 PM</p>
                    <p className="text-brand-yellow/70 text-sm mt-1">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Location Card with Embedded Map */}
            <div className="bg-gradient-to-br from-brand-blue/20 to-purple-900/20 border border-white/10 h-96 rounded-3xl flex flex-col p-6 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Header */}
                <div className="relative z-10 flex items-center justify-center mb-6 shrink-0">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-3 backdrop-blur-md">
                      <MapPin className="text-brand-yellow" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Central Location</h3>
                </div>
                
                {/* Map Embed */}
                <div className="relative z-10 w-full grow rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                    <iframe 
                      src="https://maps.google.com/maps?q=Pensioner+Street,+Dindigul+-+624001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={false} 
                      loading="lazy" 
                      title="Hindustan Electricals Location"
                      className="filter grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
            
            <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2 ml-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all text-white placeholder-white/20 hover:bg-black/30"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2 ml-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all text-white placeholder-white/20 hover:bg-black/30"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-blue-200 mb-2 ml-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all text-white placeholder-white/20 hover:bg-black/30"
                  placeholder="+91 96983 69893"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2 ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all text-white placeholder-white/20 hover:bg-black/30"
                  placeholder="I'm interested in..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-yellow text-brand-dark font-bold py-4 px-8 rounded-xl hover:bg-white hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>

            <div className="mt-8 text-center border-t border-white/10 pt-8">
                <p className="text-blue-200/60 text-sm mb-4">Or chat with us directly</p>
                <a 
                    href="https://wa.me/919698369893" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-[#25D366]/90 hover:bg-[#25D366] text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 border border-transparent hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                >
                    Chat on WhatsApp
                </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;