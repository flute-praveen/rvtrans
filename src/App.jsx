import React, { useEffect, useState } from 'react';
import { Menu, X, Phone, Mail, Truck, ArrowRight, ArrowUp } from 'lucide-react';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Fleet from './pages/Fleet.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import { btn } from './components/ui.jsx';

// Opens a chat in the WhatsApp app on phones, or WhatsApp Web/Desktop on computers
const WHATSAPP_URL =
  'https://wa.me/917988519924?text=' +
  encodeURIComponent("Hi RV Trans Logistics, I'd like a quote for vehicle transportation.");

function WhatsAppIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.37 9.37 0 0 1-1.44-5c0-5.19 4.23-9.41 9.42-9.41 2.51 0 4.88.98 6.65 2.76a9.35 9.35 0 0 1 2.75 6.66c0 5.19-4.23 9.41-9.41 9.41zm8.02-17.43A11.27 11.27 0 0 0 12.05.75C5.8.75.72 5.83.72 12.08c0 2 .52 3.95 1.52 5.66L.62 23.25l5.64-1.48a11.3 11.3 0 0 0 5.78 1.47h.01c6.25 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.31-8.01z" />
    </svg>
  );
}

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
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-rose-500 shadow-lg shadow-red-600/30">
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
                    isActive ? 'bg-red-50 text-red-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
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
              className="hidden items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-red-700 xl:flex"
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
                      isActive ? 'bg-red-50 text-red-700' : 'text-slate-700 hover:bg-slate-50'
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
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-5 max-w-md leading-relaxed text-slate-600">
              Your trusted partner in relocation and vehicle transportation services since 2015.
              We provide safe, reliable, and professional logistics solutions across India.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+917988519924"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition-colors hover:text-red-700 hover:ring-red-200"
              >
                <Phone className="h-4 w-4 text-red-600" />
                +91-7988519924
              </a>
              <a
                href="mailto:rvtranslogistics@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition-colors hover:text-red-700 hover:ring-red-200"
              >
                <Mail className="h-4 w-4 text-red-600" />
                rvtranslogistics@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-600 transition-colors hover:text-red-700">
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
        className={`flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 shadow-lift ring-1 ring-slate-200 transition-all duration-300 hover:text-red-700 ${
          showTop ? 'opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform duration-300 hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
      <a
        href="tel:+917988519924"
        aria-label="Call RV Trans Logistics"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-xl shadow-red-600/40 transition-transform duration-300 hover:scale-105 lg:hidden"
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
