import React from 'react';
import { Truck, Warehouse, Package, CheckCircle } from 'lucide-react';
import { card, Highlight, SectionHeading } from '../components/ui.jsx';

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
        "Pre-transport inspection & documentation"
      ],
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&h=400&fit=crop"
    },
    {
      icon: <Warehouse className="h-7 w-7" />,
      title: "Warehouse Solutions",
      description: "Secure and flexible storage options for goods, catering to diverse business needs with advanced inventory management and distribution support.",
      features: [
        "Secure storage facilities",
        "Inventory management systems",
        "Cross-docking services",
        "24/7 security monitoring"
      ],
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&h=400&fit=crop"
    },
    {
      icon: <Package className="h-7 w-7" />,
      title: "Art and Sculpture Relocation",
      description: "Specialized handling and transportation for delicate art pieces and sculptures, ensuring maximum safety and preservation during transit with expert care.",
      features: [
        "Custom crating and packing",
        "Climate-controlled transport",
        "Art insurance options",
        "White-glove service"
      ],
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=900&h=400&fit=crop"
    },
    {
      icon: <Truck className="h-7 w-7" />,
      title: "Logistic Services",
      description: "Comprehensive freight transportation solutions, offering both dedicated full truck loads and flexible part truck loads for efficient and cost-effective delivery across India.",
      features: [
        "Full Truck Load (FTL) services",
        "Part Truck Load (PTL) services",
        "Pan-India transportation network",
        "Track and trace capabilities"
      ],
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&h=400&fit=crop"
    }
  ];

  const processSteps = [
    { number: "01", title: "Initial Inquiry", description: "Call or email us and tell us what you need." },
    { number: "02", title: "Free Quote", description: "A transparent quotation with insurance and taxes included." },
    { number: "03", title: "Booking Confirmation", description: "We fix your pickup date and assign a dedicated coordinator." },
    { number: "04", title: "Safe Transportation", description: "Careful loading and GPS-tracked transport on optimal routes." },
    { number: "05", title: "Timely Delivery", description: "Delivered to your door, with help unloading." }
  ];

  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title={<>Comprehensive <Highlight>Logistics Solutions</Highlight></>}
          description="From single car carriers to warehouse solutions, we provide end-to-end logistics services tailored to your specific needs."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className={`reveal group overflow-hidden ${card}`}>
              <div className="relative h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>

              <div className="relative p-7 pt-0">
                <div className="-mt-8 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-red-600 shadow-lift ring-1 ring-slate-200/80 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{service.description}</p>

                <div className="mt-5 grid gap-x-4 gap-y-2.5 border-t border-slate-100 pt-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="reveal mt-16 rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-slate-200/80 md:p-10">
          <h3 className="text-center text-2xl font-extrabold text-slate-900">
            How It <Highlight>Works</Highlight>
          </h3>
          <div className="relative mt-10">
            <div className="absolute left-0 right-0 top-6 hidden h-0.5 bg-gradient-to-r from-red-100 via-red-300 to-red-100 lg:block"></div>
            <div className="flex flex-wrap justify-center gap-8 lg:flex-nowrap">
              {processSteps.map((step) => (
                <div key={step.number} className="relative w-full text-center sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-auto lg:flex-1">
                  <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-sm font-extrabold text-white ring-8 ring-white">
                    {step.number}
                  </div>
                  <h4 className="mt-4 font-bold text-slate-900">{step.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
