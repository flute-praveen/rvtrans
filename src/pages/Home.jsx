import React from 'react';
import { ArrowRight, CheckCircle, ShieldCheck, MapPin, Truck, Headphones, Phone, Mail, Star } from 'lucide-react';
import { btn, Eyebrow, Highlight } from '../components/ui.jsx';

export default function Home() {
  const stats = [
    { number: "10K+", label: "Vehicles Transported", description: "Successfully delivered across India" },
    { number: "99.8%", label: "Safety Record", description: "Damage-free deliveries since inception" },
    { number: "98%", label: "On-Time Delivery", description: "Meeting promised timelines consistently" },
    { number: "4.8/5", label: "Customer Rating", description: "Based on verified customer reviews" }
  ];

  const features = [
    "Pan-India Transportation Network",
    "Real-time GPS Tracking",
    "24/7 Customer Support",
    "Comprehensive Insurance Coverage",
    "Trained Professional Drivers",
    "Modern Fleet of 24+ Vehicles"
  ];

  const heroHighlights = [
    { icon: <MapPin className="h-4 w-4" />, label: "GPS Tracked" },
    { icon: <ShieldCheck className="h-4 w-4" />, label: "Fully Insured" },
    { icon: <Headphones className="h-4 w-4" />, label: "24/7 Support" }
  ];

  return (
    <div id="home">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-violet-50/70 via-white to-white pb-16 pt-32 lg:pb-24 lg:pt-40">
        <div className="bg-grid absolute inset-0"></div>
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl"></div>
        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Copy */}
            <div>
              <div className="animate-fade-up">
                <Eyebrow>Since 2015 • Trusted by 10,000+ Customers</Eyebrow>
              </div>

              <h1
                className="animate-fade-up mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-6xl lg:text-7xl"
                style={{ animationDelay: '0.1s' }}
              >
                Transport Made{' '}
                <span className="relative inline-block">
                  <Highlight>Simple</Highlight>
                  <svg className="absolute -bottom-2 left-0 w-full text-violet-400" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M2 9C50 3 150 3 198 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p
                className="animate-fade-up mt-8 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl"
                style={{ animationDelay: '0.2s' }}
              >
                Your Trusted Partner in Relocation and Vehicle Transportation Services.
                <span className="font-semibold text-slate-900"> Safe, Reliable, Professional.</span>
              </p>

              <div className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: '0.3s' }}>
                <a href="#services" className={`group ${btn.primary}`}>
                  Explore Services
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#contact" className={btn.outline}>
                  Get Free Quote
                </a>
              </div>

              <div className="animate-fade-up mt-10 flex flex-wrap gap-3" style={{ animationDelay: '0.4s' }}>
                {heroHighlights.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-soft ring-1 ring-slate-200/80"
                  >
                    <span className="text-violet-800">{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="animate-fade-up relative" style={{ animationDelay: '0.2s' }}>
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-lift ring-1 ring-slate-200/60">
                <img
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1000&h=1100&fit=crop"
                  alt="Transport truck on a highway"
                  className="h-[460px] w-full object-cover md:h-[560px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating tracking card */}
              <div className="animate-float absolute -bottom-8 left-4 right-4 rounded-3xl bg-white/90 p-5 shadow-lift ring-1 ring-slate-200/80 backdrop-blur-xl sm:left-auto sm:right-[-1rem] sm:w-80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-800 text-white">
                      <Truck className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Real-time GPS Tracking</div>
                      <div className="text-xs text-slate-500">Door-to-door delivery</div>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></span>
                    Live
                  </span>
                </div>
                <div className="mt-5">
                  <div className="relative h-1.5 rounded-full bg-slate-100">
                    <div className="animate-fill absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-violet-800 to-purple-600"></div>
                    <div className="animate-drive absolute -top-[5px] h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-white bg-violet-800 shadow"></div>
                  </div>
                  <div className="mt-3 flex justify-between text-xs font-semibold text-slate-600">
                    <span>Gurgaon</span>
                    <span>Navi Mumbai</span>
                  </div>
                </div>
              </div>

              {/* Floating rating card */}
              <div className="animate-float absolute -left-4 top-8 hidden rounded-2xl bg-white/90 p-4 shadow-lift ring-1 ring-slate-200/80 backdrop-blur-xl sm:block" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="mt-1 text-2xl font-extrabold text-slate-900">4.8/5</div>
                <div className="text-xs text-slate-500">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="reveal mt-24 grid grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-slate-200/80 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-6 md:p-8 ${index % 2 === 1 ? 'border-l border-slate-100' : ''} ${index >= 2 ? 'border-t border-slate-100 lg:border-t-0' : ''} ${index === 2 ? 'lg:border-l' : ''}`}
              >
                <div className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">{stat.number}</div>
                <div className="mt-2 text-sm font-bold text-violet-900">{stat.label}</div>
                <div className="mt-1 text-sm text-slate-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="reveal relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-lift">
                <img
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&h=700&fit=crop"
                  alt="Vehicles ready for professional transportation"
                  className="h-[480px] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold">Professional Vehicle Transportation</h3>
                  <p className="mt-1 text-sm text-white/85">Safe, reliable, and tracked delivery across India</p>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -right-4 -top-6 rounded-3xl bg-gradient-to-br from-violet-800 to-purple-600 p-6 text-white shadow-xl shadow-violet-800/30 md:-right-6">
                <div className="text-4xl font-extrabold">10K+</div>
                <div className="text-sm font-medium text-violet-50">Vehicles Delivered</div>
              </div>
            </div>

            <div className="reveal order-1 lg:order-2">
              <Eyebrow>Why Choose Us</Eyebrow>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                India's Most <Highlight>Trusted</Highlight> Logistics Partner
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Since 2015, we've been revolutionizing the vehicle transportation and relocation industry with our commitment to excellence, safety, and customer satisfaction.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3.5 ring-1 ring-slate-200/70 transition-colors hover:bg-violet-50 hover:ring-violet-200"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-violet-800" />
                    <span className="text-sm font-semibold text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#about" className={btn.dark}>
                  Learn More
                </a>
                <a href="#contact" className={btn.outline}>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-violet-800 via-violet-800 to-purple-600 px-6 py-16 text-center md:px-16 md:py-20">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-white/10"></div>

            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                Ready to Experience Hassle-Free Relocation?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-violet-50 md:text-xl">
                Get your free quote today and discover why thousands of customers trust RV Trans Logistics for their vehicle transportation needs.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <a href="tel:+917988519924" className={btn.light}>
                  <Phone className="h-5 w-5" />
                  Call: +91-7988519924
                </a>
                <a href="mailto:rvtranslogistics@gmail.com" className={btn.ghostLight}>
                  <Mail className="h-5 w-5" />
                  Email Us
                </a>
              </div>

              <p className="mt-8 text-sm font-medium text-violet-50">
                Free consultation • No obligation quotes • 24/7 support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
