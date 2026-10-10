import React, { useEffect, useState } from 'react';
import { Image, Truck, Package, Shield, X, Maximize2, Phone, ArrowRight } from 'lucide-react';
import { btn, card, CTAStrip, Highlight, IconBadge, SectionHeading } from '../components/ui.jsx';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: "Vehicle Loading",
      group: "Vehicle Loading",
      description: "Professional loading of luxury vehicles into enclosed carriers",
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      category: "Transportation",
      group: "Transportation",
      description: "Our modern fleet transporting vehicles across India",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      category: "Safety Measures",
      group: "Safety",
      description: "Secure tie-down and protection systems in action",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      category: "Delivery",
      group: "Transportation",
      description: "Successful door-to-door delivery completion",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      category: "Luxury Vehicles",
      group: "Vehicle Loading",
      description: "Handling high-end and exotic cars with care",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      category: "Container Loading",
      group: "Vehicle Loading",
      description: "Loading vehicles into containers for long-distance transport",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop"
    },
    {
      id: 7,
      category: "Fleet Operations",
      group: "Transportation",
      description: "Our well-maintained fleet on the road",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop"
    },
    {
      id: 8,
      category: "Team at Work",
      group: "Vehicle Loading",
      description: "Our trained professionals ensuring safe handling",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop"
    },
    {
      id: 9,
      category: "GPS Tracking",
      group: "Safety",
      description: "Real-time monitoring systems in our vehicles",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      id: 10,
      category: "Multiple Vehicles",
      group: "Transportation",
      description: "Transporting multiple vehicles simultaneously",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop"
    },
    {
      id: 11,
      category: "Art Transport",
      group: "Transportation",
      description: "Specialized handling of valuable art pieces",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&h=600&fit=crop"
    },
    {
      id: 12,
      category: "Corporate Services",
      group: "Transportation",
      description: "Fleet services for corporate clients",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop"
    },
    {
      id: 13,
      category: "Night Operations",
      group: "Safety",
      description: "24/7 operations with night monitoring",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
    },
    {
      id: 14,
      category: "Loading Ramps",
      group: "Vehicle Loading",
      description: "Hydraulic ramps for smooth vehicle loading",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop"
    },
    {
      id: 15,
      category: "Quality Check",
      group: "Safety",
      description: "Pre-transport inspection and documentation",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop"
    }
  ];

  const categories = [
    { name: "All", icon: <Image className="h-4 w-4" /> },
    { name: "Vehicle Loading", icon: <Truck className="h-4 w-4" /> },
    { name: "Transportation", icon: <Package className="h-4 w-4" /> },
    { name: "Safety", icon: <Shield className="h-4 w-4" /> }
  ].map((category) => ({
    ...category,
    count: category.name === "All"
      ? galleryItems.length
      : galleryItems.filter((item) => item.group === category.name).length
  }));

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.group === activeCategory);

  const stats = [
    { number: "500+", label: "Successful Transports Documented" },
    { number: "24", label: "Modern Vehicles in Fleet" },
    { number: "10K+", label: "Photos in Our Archive" },
    { number: "100%", label: "Customer Satisfaction" }
  ];

  const showcase = [
    {
      icon: <Truck className="h-7 w-7" />,
      title: "Professional Loading",
      description: "Watch our trained team carefully load vehicles using hydraulic ramps and secure tie-down systems"
    },
    {
      icon: <Package className="h-7 w-7" />,
      title: "Safe Transportation",
      description: "See our modern fleet in action transporting vehicles safely across India with GPS tracking"
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Quality Delivery",
      description: "Witness our commitment to delivering vehicles in perfect condition with full documentation"
    }
  ];

  // Close the lightbox with Escape and stop the page scrolling behind it
  useEffect(() => {
    if (!selectedImage) return;
    const handleKey = (e) => e.key === 'Escape' && setSelectedImage(null);
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <div id="gallery" className="bg-slate-50">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Gallery"
            title={<>See Our <Highlight>Work</Highlight></>}
            description="Explore our comprehensive gallery showcasing our professional vehicle transportation services, modern fleet, and successful deliveries across India."
          />

          {/* Stats */}
          <div className="reveal mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="rounded-3xl bg-white p-6 text-center shadow-soft ring-1 ring-slate-200/80">
                <div className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">{stat.number}</div>
                <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <div className="mt-14 flex justify-center">
            <div className="inline-flex max-w-full gap-1 overflow-x-auto rounded-full bg-white p-1.5 shadow-soft ring-1 ring-slate-200/80">
              {categories.map((category) => {
                const isActive = activeCategory === category.name;
                return (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`flex flex-shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 md:px-5 ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                    <span className={`rounded-full px-2 py-0.5 text-xs ${isActive ? 'bg-white/20' : 'bg-slate-100'}`}>
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`group overflow-hidden text-left ${card}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900 backdrop-blur">
                    {item.group}
                  </span>
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-slate-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-violet-900">
                    {item.category}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.category}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg backdrop-blur transition-colors hover:bg-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
              <img
                src={selectedImage.image}
                alt={selectedImage.category}
                className="max-h-[65vh] w-full bg-slate-100 object-contain"
              />
              <div className="flex flex-col gap-2 p-6 md:p-8">
                <span className="w-fit rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-900">
                  {selectedImage.group}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">{selectedImage.category}</h3>
                <p className="text-lg leading-relaxed text-slate-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Services Showcase */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={<>What We <Highlight>Capture</Highlight></>}
            description="Every image tells a story of our commitment to excellence, safety, and customer satisfaction"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {showcase.map((item) => (
              <div key={item.title} className={`reveal p-8 ${card}`}>
                <IconBadge className="mb-6">{item.icon}</IconBadge>
                <h3 className="mb-3 text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="reveal mt-12 flex flex-col items-start gap-6 rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200/70 md:flex-row md:items-center md:p-10">
            <IconBadge size="lg">
              <Image className="h-8 w-8" />
            </IconBadge>
            <div className="flex-1">
              <h3 className="text-xl font-extrabold text-slate-900 md:text-2xl">
                Real Photos from <Highlight>Our Operations</Highlight>
              </h3>
              <p className="mt-2 text-slate-600">
                This gallery represents our actual operations. For privacy and security reasons, some images are represented with placeholders. Contact us to see our complete portfolio.
              </p>
            </div>
            <a href="#contact" className={btn.dark}>
              Request Full Portfolio
            </a>
          </div>
        </div>
      </section>

      <CTAStrip
        title={<>Ready to Experience <Highlight>This Quality?</Highlight></>}
        description="Book your vehicle transportation today and join thousands of satisfied customers"
      >
        <a href="tel:+917988519924" className={btn.primary}>
          <Phone className="h-5 w-5" />
          Call: +91-7988519924
        </a>
        <a href="#contact" className={btn.outline}>
          Get Free Quote
          <ArrowRight className="h-5 w-5" />
        </a>
      </CTAStrip>
    </div>
  );
}
