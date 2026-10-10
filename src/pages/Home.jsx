import React from 'react';
import { ChevronDown, ArrowRight, CheckCircle } from 'lucide-react';

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

  return (
    <div id="home">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.08),transparent_50%)]"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="inline-block animate-fade-in">
              <span className="bg-orange-500/20 border border-orange-500/30 px-6 py-2 rounded-full text-orange-300 text-sm font-semibold tracking-wider backdrop-blur-sm">
                Since 2015 • Trusted by 10,000+ Customers
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent animate-slide-up">
                Transport Made
              </span>
              <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mt-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Simple
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Your Trusted Partner in Relocation and Vehicle Transportation Services. 
              <span className="text-orange-400 font-semibold"> Safe, Reliable, Professional.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a
                href="#services"
                className="group bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group border-2 border-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500/10 transition-all duration-300 flex items-center gap-2"
              >
                Get Free Quote
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="text-4xl font-black bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-slate-300 mt-2">{stat.label}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-orange-400" />
        </div>
      </section>

      {/* Features Overview Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-400 font-bold tracking-widest text-sm">WHY CHOOSE US</span>
              <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
                India's Most <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Trusted</span> Logistics Partner
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Since 2015, we've been revolutionizing the vehicle transportation and relocation industry with our commitment to excellence, safety, and customer satisfaction.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-6 h-6 text-orange-400 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="#about"
                  className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Learn More
                </a>
                <a
                  href="#contact"
                  className="border border-orange-500 hover:bg-orange-500/10 px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="relative">
              {/* Transportation Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop" 
                  alt="Professional car carrier truck transporting vehicles"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                    <h3 className="text-white font-bold text-xl mb-2">Professional Vehicle Transportation</h3>
                    <p className="text-slate-200 text-sm">Safe, reliable, and tracked delivery across India</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl p-6 shadow-2xl">
                <div className="text-white">
                  <div className="text-4xl font-black mb-2">10K+</div>
                  <div className="text-orange-100 text-sm">Vehicles Delivered</div>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-orange-500/20"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl p-12 md:p-16 rounded-3xl border border-slate-700">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Experience <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Hassle-Free</span> Relocation?
            </h2>
            <p className="text-slate-300 text-xl mb-8 max-w-2xl mx-auto">
              Get your free quote today and discover why thousands of customers trust RV Trans Logistics for their vehicle transportation needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917988519924"
                className="bg-gradient-to-r from-orange-600 to-orange-500 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Call: +91-7988519924
              </a>
              <a
                href="mailto:rvtranslogistics@gmail.com"
                className="border-2 border-orange-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-500/10 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
            
            <p className="text-slate-400 text-sm mt-6">
              Free consultation • No obligation quotes • 24/7 support
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
