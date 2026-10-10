import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Truck } from 'lucide-react';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Fleet from './pages/Fleet.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';

// Navigation Component
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-600 blur-xl opacity-50"></div>
              <Truck className="w-10 h-10 text-orange-500 relative z-10" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                RV TRANS
              </h1>
              <p className="text-xs text-slate-400 tracking-widest">LOGISTICS LLP</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-orange-400 transition-colors duration-300 font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-t border-slate-800">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-slate-300 hover:text-orange-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-3 rounded-full font-semibold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// Footer Component
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Truck className="w-8 h-8 text-orange-500" />
              <div>
                <h3 className="text-xl font-black text-white">RV TRANS LOGISTICS LLP</h3>
                <p className="text-xs text-slate-400">Transport Made Simple</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Your trusted partner in relocation and vehicle transportation services since 2015. 
              We provide safe, reliable, and professional logistics solutions across India.
            </p>
            <div className="flex gap-4">
              <a href="tel:+917988519924" className="text-slate-400 hover:text-orange-400 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:rvtranslogistics@gmail.com" className="text-slate-400 hover:text-orange-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-400 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-orange-400 transition-colors">Services</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#fleet" className="text-slate-400 hover:text-orange-400 transition-colors">Our Fleet</a></li>
              <li><a href="#gallery" className="text-slate-400 hover:text-orange-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-slate-400">Car Transportation</li>
              <li className="text-slate-400">Bike Relocation</li>
              <li className="text-slate-400">Warehouse Solutions</li>
              <li className="text-slate-400">Art & Sculpture</li>
              <li className="text-slate-400">Logistics Services</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-white font-semibold mb-3">Registered Office - Gurgaon</h5>
              <p className="text-slate-400 text-sm flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-orange-400" />
                Shop No.1, Near Maruti Stock Yard, Opp. Bobby Dhaba, Carterpuri Road, Gurgaon-122017, Haryana
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3">Corporate Office - Navi Mumbai</h5>
              <p className="text-slate-400 text-sm flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-orange-400" />
                Office no. 67, Kesar Garden, Plot no.53, Sector-20, Kharghar, Navi Mumbai-410210
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} RV Trans Logistics LLP. All rights reserved. | Established 2015
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <span className="text-slate-400">GST: 06ABKFR2142R1ZP</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400">Registration: U63000HR2015PTC216848</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 text-white">
      <Navbar />
      <Home />
      <Services />
      <About />
      <Fleet />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
