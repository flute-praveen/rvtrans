import React from 'react';
import { Truck, Warehouse, Package, ShieldCheck, CheckCircle, Clock, MapPin, Star } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Single Car Carriers (Vehicle Relocation)",
      description: "Specialised car and bike relocation services using enclosed carriers, open trailers, and customised transport solutions tailored to your vehicle type and requirements.",
      features: [
        "Door-to-door car delivery",
        "Bike and scooter transport",
        "Luxury and vintage vehicle handling",
        "Multi-vehicle corporate transfers",
        "Real-time GPS tracking",
        "Pre-transport inspection & documentation"
      ],
      image: "🚗"
    },
    {
      icon: <Warehouse className="w-10 h-10" />,
      title: "Warehouse Solutions",
      description: "Secure and flexible storage options for goods, catering to diverse business needs with advanced inventory management and distribution support.",
      features: [
        "Secure storage facilities",
        "Inventory management systems",
        "Cross-docking services",
        "Customized warehousing solutions",
        "24/7 security monitoring",
        "Climate-controlled storage"
      ],
      image: "📦"
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: "Art and Sculpture Relocation",
      description: "Specialized handling and transportation for delicate art pieces and sculptures, ensuring maximum safety and preservation during transit with expert care.",
      features: [
        "Custom crating and packing",
        "Climate-controlled transport",
        "Art insurance options",
        "Expert handling and installation",
        "White-glove service",
        "Professional art handlers"
      ],
      image: "🎨"
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Logistic Services",
      description: "Comprehensive freight transportation solutions, offering both dedicated full truck loads and flexible part truck loads for efficient and cost-effective delivery across India.",
      features: [
        "Full Truck Load (FTL) services",
        "Part Truck Load (PTL) services",
        "Pan-India transportation network",
        "Track and trace capabilities",
        "Express delivery options",
        "Customized logistics solutions"
      ],
      image: "🚚"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Initial Inquiry",
      description: "Contact us via phone, email, or website. Our team will understand your requirements and provide preliminary guidance.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      number: "02",
      title: "Free Quote",
      description: "We provide a detailed, transparent quotation with no hidden costs. Our pricing includes all services, insurance, and applicable taxes.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Booking Confirmation",
      description: "Once you approve the quote, we schedule your pickup date, assign a dedicated coordinator, and begin logistics planning.",
      icon: <Star className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Safe Transportation",
      description: "Our trained professionals carefully load your vehicle, secure them properly, and transport using optimal routes with GPS tracking.",
      icon: <Truck className="w-6 h-6" />
    },
    {
      number: "05",
      title: "Timely Delivery",
      description: "We deliver to your specified destination, help with unloading, and ensure you're completely satisfied before we consider the job complete.",
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  const safetyFeatures = [
    {
      title: "Pre-Transport Inspection",
      description: "Detailed documentation of vehicle condition with photographs and reports before loading"
    },
    {
      title: "Trained Drivers",
      description: "Experienced professionals with clean driving records and specialised training in vehicle transportation"
    },
    {
      title: "Route Optimization",
      description: "Carefully planned routes avoiding high-risk areas and ensuring timely, safe delivery"
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous GPS tracking and regular check-ins throughout the transportation journey"
    },
    {
      title: "Night Driving Monitoring",
      description: "Special monitoring and supervision during night hours to ensure maximum safety"
    },
    {
      title: "Comprehensive Insurance",
      description: "Full coverage protecting against any unforeseen circumstances during transit"
    }
  ];

  return (
    <div id="services" className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-transparent to-orange-500/10"></div>
        
        {/* Hero Image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1600&h=900&fit=crop" 
            alt="Logistics warehouse background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-orange-400 font-bold tracking-widest text-sm">OUR SERVICES</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6">
            Comprehensive <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Logistics Solutions</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
            From single car carriers to warehouse solutions, we provide end-to-end logistics services tailored to your specific needs with unwavering commitment to quality and safety.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-orange-500/10 w-20 h-20 rounded-2xl flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <span className="text-6xl opacity-50">{service.image}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-bold tracking-widest text-sm">HOW WE WORK</span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6">
              Our Service <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We've streamlined our operations to make your relocation experience as smooth and hassle-free as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
                )}
                
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 h-full">
                  <div className="bg-gradient-to-br from-orange-600 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-xl mb-4">
                    {step.number}
                  </div>
                  
                  <div className="text-orange-400 mb-3">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Commitment Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-400 font-bold tracking-widest text-sm">SAFETY FIRST</span>
              <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
                Our Commitment to <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Safety</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                At RV Trans Logistics LLP, safety is not just a priority—it's the foundation of everything we do. We understand that you're entrusting us with your valuable assets.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-800/50 p-6 rounded-2xl text-center border border-slate-700">
                  <div className="text-4xl font-black text-orange-400 mb-2">99.8%</div>
                  <div className="text-slate-300 text-sm">Safety Record</div>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-2xl text-center border border-slate-700">
                  <div className="text-4xl font-black text-orange-400 mb-2">10K+</div>
                  <div className="text-slate-300 text-sm">Safe Deliveries</div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Get Your Free Quote
              </a>
            </div>

            <div className="relative">
              {/* Main Safety Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=900&fit=crop" 
                  alt="Secure vehicle loading and transportation"
                  className="w-full h-[600px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Safety Features */}
              <div className="absolute bottom-6 left-6 right-6 space-y-4">
                {safetyFeatures.slice(0, 3).map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-white font-bold text-sm mb-1">{feature.title}</h3>
                        <p className="text-slate-200 text-xs leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Additional Safety Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {safetyFeatures.slice(3).map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/10 p-3 rounded-xl flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-orange-950/20 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Get <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Started?</span>
          </h2>
          <p className="text-slate-300 text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and experience hassle-free relocation with India's most trusted logistics partner.
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
              Email: rvtranslogistics@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
