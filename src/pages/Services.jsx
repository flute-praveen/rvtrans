import React from 'react';
import { Truck, Warehouse, Package, ShieldCheck, CheckCircle, Clock, MapPin, Star, Phone, Mail } from 'lucide-react';
import { btn, card, CTAStrip, Eyebrow, Highlight, IconBadge, SectionHeading } from '../components/ui.jsx';

export default function Services() {
  const services = [
    {
      icon: <Truck className="h-7 w-7" />,
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
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&h=500&fit=crop"
    },
    {
      icon: <Warehouse className="h-7 w-7" />,
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
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&h=500&fit=crop"
    },
    {
      icon: <Package className="h-7 w-7" />,
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
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=900&h=500&fit=crop"
    },
    {
      icon: <Truck className="h-7 w-7" />,
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
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&h=500&fit=crop"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Initial Inquiry",
      description: "Contact us via phone, email, or website. Our team will understand your requirements and provide preliminary guidance.",
      icon: <Clock className="h-6 w-6" />
    },
    {
      number: "02",
      title: "Free Quote",
      description: "We provide a detailed, transparent quotation with no hidden costs. Our pricing includes all services, insurance, and applicable taxes.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Booking Confirmation",
      description: "Once you approve the quote, we schedule your pickup date, assign a dedicated coordinator, and begin logistics planning.",
      icon: <Star className="h-6 w-6" />
    },
    {
      number: "04",
      title: "Safe Transportation",
      description: "Our trained professionals carefully load your vehicle, secure them properly, and transport using optimal routes with GPS tracking.",
      icon: <Truck className="h-6 w-6" />
    },
    {
      number: "05",
      title: "Timely Delivery",
      description: "We deliver to your specified destination, help with unloading, and ensure you're completely satisfied before we consider the job complete.",
      icon: <MapPin className="h-6 w-6" />
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
    <div id="services" className="bg-slate-50">
      {/* Intro + Services Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title={<>Comprehensive <Highlight>Logistics Solutions</Highlight></>}
            description="From single car carriers to warehouse solutions, we provide end-to-end logistics services tailored to your specific needs with unwavering commitment to quality and safety."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className={`reveal group overflow-hidden ${card}`}>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  <span className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900 backdrop-blur">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="relative p-8 pt-0">
                  <div className="-mt-8 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-violet-900 shadow-lift ring-1 ring-slate-200/80 transition-colors duration-300 group-hover:bg-violet-800 group-hover:text-white">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{service.description}</p>

                  <div className="mt-6 grid gap-x-4 gap-y-3 border-t border-slate-100 pt-6 sm:grid-cols-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-800" />
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
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title={<>Our Service <Highlight>Process</Highlight></>}
            description="We've streamlined our operations to make your relocation experience as smooth and hassle-free as possible."
          />

          <div className="relative mt-16">
            {/* Connector line */}
            <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-violet-200 via-violet-400 to-violet-200 lg:block"></div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step, index) => (
                <div key={index} className="reveal relative" style={{ transitionDelay: `${index * 80}ms` }}>
                  <div className="relative z-10 mx-auto mb-6 hidden h-14 w-14 items-center justify-center rounded-full bg-white text-lg font-extrabold text-violet-900 shadow-soft ring-4 ring-violet-100 lg:flex">
                    {step.number}
                  </div>
                  <div className="h-full rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200/70 transition-all duration-300 hover:bg-white hover:shadow-lift">
                    <div className="mb-4 flex items-center justify-between">
                      <IconBadge size="sm">{step.icon}</IconBadge>
                      <span className="text-3xl font-extrabold text-slate-200 lg:hidden">{step.number}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-slate-900">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Commitment Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="reveal">
              <Eyebrow>Safety First</Eyebrow>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Our Commitment to <Highlight>Safety</Highlight>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                At RV Trans Logistics LLP, safety is not just a priority—it's the foundation of everything we do. We understand that you're entrusting us with your valuable assets.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-200/80">
                  <div className="text-4xl font-extrabold text-slate-900">99.8%</div>
                  <div className="mt-1 text-sm font-semibold text-violet-900">Safety Record</div>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-200/80">
                  <div className="text-4xl font-extrabold text-slate-900">10K+</div>
                  <div className="mt-1 text-sm font-semibold text-violet-900">Safe Deliveries</div>
                </div>
              </div>

              <a href="#contact" className={`${btn.primary} mt-8`}>
                Get Your Free Quote
              </a>
            </div>

            <div className="reveal relative">
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-lift">
                <img
                  src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=900&fit=crop"
                  alt="Technician inspecting a vehicle before transport"
                  className="h-[600px] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Safety Features */}
              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                {safetyFeatures.slice(0, 3).map((feature, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/90 p-4 shadow-soft ring-1 ring-white/60 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-3">
                      <IconBadge size="sm" className="!h-9 !w-9">
                        <ShieldCheck className="h-4 w-4" />
                      </IconBadge>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">{feature.title}</h3>
                        <p className="mt-0.5 text-xs leading-relaxed text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Safety Features Grid */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {safetyFeatures.slice(3).map((feature, index) => (
              <div key={index} className={`reveal p-6 ${card}`}>
                <div className="flex items-start gap-4">
                  <IconBadge size="sm">
                    <ShieldCheck className="h-5 w-5" />
                  </IconBadge>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-slate-900">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        title={<>Ready to Get <Highlight>Started?</Highlight></>}
        description="Contact us today for a free consultation and experience hassle-free relocation with India's most trusted logistics partner."
      >
        <a href="tel:+917988519924" className={btn.primary}>
          <Phone className="h-5 w-5" />
          Call: +91-7988519924
        </a>
        <a href="mailto:rvtranslogistics@gmail.com" className={btn.outline}>
          <Mail className="h-5 w-5" />
          Email Us
        </a>
      </CTAStrip>
    </div>
  );
}
