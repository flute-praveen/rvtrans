import React, { useEffect, useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Truck, ArrowRight, ArrowUp } from 'lucide-react';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Fleet from './pages/Fleet.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import { btn } from './components/ui.jsx';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Fleet', href: '#fleet' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
];

function Logo({ compact = false }) {
  return (
    <a href="#home" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-800 to-purple-600 shadow-lg shadow-violet-800/30">
        <Truck className="h-6 w-6 text-white" />
      </div>
      <div className="leading-tight">
        <div className="text-lg font-extrabold tracking-tight text-slate-900">RV TRANS</div>
        <div className={`text-[10px] font-semibold tracking-[0.25em] text-slate-500 ${compact ? 'hidden sm:block' : ''}`}>
          LOGISTICS LLP
        </div>
      </div>
    </a>
  );
}

// Navigation Component
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight the nav link for the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border bg-white/80 backdrop-blur-xl transition-all duration-500 ${
          isScrolled ? 'border-slate-200/80 shadow-lift' : 'border-white/60 shadow-soft'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-5">
          <Logo compact />

          {/* Desktop Menu */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                    isActive ? 'bg-violet-50 text-violet-900' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+917988519924"
              className="hidden items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-violet-900 xl:flex"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100">
                <Phone className="h-4 w-4" />
              </span>
              +91-7988519924
            </a>
            <a href="#contact" className={`${btn.dark} !px-5 !py-2.5 text-sm`}>
              Get Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-900 lg:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200/80 px-4 pb-5 pt-3 lg:hidden">
            <div className="grid gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`rounded-xl px-4 py-3 font-semibold transition-colors ${
                      isActive ? 'bg-violet-50 text-violet-900' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
            <a
              href="#contact"
              className={`${btn.primary} mt-4 w-full`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// Footer Component
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-5 max-w-md leading-relaxed text-slate-600">
              Your trusted partner in relocation and vehicle transportation services since 2015.
              We provide safe, reliable, and professional logistics solutions across India.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+917988519924"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition-colors hover:text-violet-900 hover:ring-violet-200"
              >
                <Phone className="h-4 w-4 text-violet-800" />
                +91-7988519924
              </a>
              <a
                href="mailto:rvtranslogistics@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition-colors hover:text-violet-900 hover:ring-violet-200"
              >
                <Mail className="h-4 w-4 text-violet-800" />
                rvtranslogistics@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-600 transition-colors hover:text-violet-900">
                    {link.name === 'About' ? 'About Us' : link.name === 'Fleet' ? 'Our Fleet' : link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">Our Services</h4>
            <ul className="space-y-3 text-slate-600">
              <li>Car Transportation</li>
              <li>Bike Relocation</li>
              <li>Warehouse Solutions</li>
              <li>Art & Sculpture</li>
              <li>Logistics Services</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
            <h5 className="mb-2 font-bold text-slate-900">Registered Office - Gurgaon</h5>
            <p className="flex items-start gap-2 text-sm text-slate-600">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-800" />
              Shop No.1, Near Maruti Stock Yard, Opp. Bobby Dhaba, Carterpuri Road, Gurgaon-122017, Haryana
            </p>
          </div>
          <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
            <h5 className="mb-2 font-bold text-slate-900">Corporate Office - Navi Mumbai</h5>
            <p className="flex items-start gap-2 text-sm text-slate-600">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-800" />
              Office no. 67, Kesar Garden, Plot no.53, Sector-20, Kharghar, Navi Mumbai-410210
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {currentYear} RV Trans Logistics LLP. All rights reserved. | Established 2015
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-white px-3 py-1 text-slate-600 ring-1 ring-slate-200">GST: 06ABKFR2142R1ZP</span>
            <span className="rounded-full bg-white px-3 py-1 text-slate-600 ring-1 ring-slate-200">Registration: U63000HR2015PTC216848</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <button
        onClick={() => window.scrollTo({ top: 0 })}
        aria-label="Back to top"
        className={`flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 shadow-lift ring-1 ring-slate-200 transition-all duration-300 hover:text-violet-900 ${
          showTop ? 'opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
      <a
        href="tel:+917988519924"
        aria-label="Call RV Trans Logistics"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-800 text-white shadow-xl shadow-violet-800/40 transition-transform duration-300 hover:scale-105 lg:hidden"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

export default function App() {
  // Fade sections in as they scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Home />
        <Services />
        <About />
        <Fleet />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
