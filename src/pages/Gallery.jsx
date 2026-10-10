import React, { useState } from 'react';
import { Image, Truck, Package, Shield, X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { 
      id: 1, 
      category: "Vehicle Loading", 
      description: "Professional loading of luxury vehicles into enclosed carriers",
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&h=600&fit=crop"
    },
    { 
      id: 2, 
      category: "Transportation", 
      description: "Our modern fleet transporting vehicles across India",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop"
    },
    { 
      id: 3, 
      category: "Safety Measures", 
      description: "Secure tie-down and protection systems in action",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
    },
    { 
      id: 4, 
      category: "Delivery", 
      description: "Successful door-to-door delivery completion",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop"
    },
    { 
      id: 5, 
      category: "Luxury Vehicles", 
      description: "Handling high-end and exotic cars with care",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop"
    },
    { 
      id: 6, 
      category: "Container Loading", 
      description: "Loading vehicles into containers for long-distance transport",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop"
    },
    { 
      id: 7, 
      category: "Fleet Operations", 
      description: "Our well-maintained fleet on the road",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop"
    },
    { 
      id: 8, 
      category: "Team at Work", 
      description: "Our trained professionals ensuring safe handling",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop"
    },
    { 
      id: 9, 
      category: "GPS Tracking", 
      description: "Real-time monitoring systems in our vehicles",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    { 
      id: 10, 
      category: "Multiple Vehicles", 
      description: "Transporting multiple vehicles simultaneously",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop"
    },
    { 
      id: 11, 
      category: "Art Transport", 
      description: "Specialized handling of valuable art pieces",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&h=600&fit=crop"
    },
    { 
      id: 12, 
      category: "Corporate Services", 
      description: "Fleet services for corporate clients",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop"
    },
    { 
      id: 13, 
      category: "Night Operations", 
      description: "24/7 operations with night monitoring",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
    },
    { 
      id: 14, 
      category: "Loading Ramps", 
      description: "Hydraulic ramps for smooth vehicle loading",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop"
    },
    { 
      id: 15, 
      category: "Quality Check", 
      description: "Pre-transport inspection and documentation",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop"
    }
  ];

  const categories = [
    { name: "All", icon: <Image className="w-5 h-5" />, count: 15 },
    { name: "Vehicle Loading", icon: <Truck className="w-5 h-5" />, count: 5 },
    { name: "Transportation", icon: <Package className="w-5 h-5" />, count: 6 },
    { name: "Safety", icon: <Shield className="w-5 h-5" />, count: 4 }
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category.includes(activeCategory));

  const stats = [
    { number: "500+", label: "Successful Transports Documented" },
    { number: "24", label: "Modern Vehicles in Fleet" },
    { number: "10K+", label: "Photos in Our Archive" },
    { number: "100%", label: "Customer Satisfaction" }
  ];

  return (
    <div id="gallery" className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-transparent to-orange-500/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-orange-400 font-bold tracking-widest text-sm">OUR GALLERY</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6">
            See Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Work</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive gallery showcasing our professional vehicle transportation services, modern fleet, and successful deliveries across India.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 text-center"
              >
                <div className="text-4xl font-black bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.name
                    ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-500/50'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-slate-700 hover:border-orange-500/50 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105"
              >
                {/* Real Image */}
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-700 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.category}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <Image className="w-12 h-12 text-orange-400 mx-auto mb-3" />
                        <p className="text-white font-semibold">Click to view</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-orange-500 px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {item.category}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 bg-slate-800 hover:bg-slate-700 p-3 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-slate-700 overflow-hidden">
              {/* Real Image Display */}
              <div className="relative">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.category}
                  className="w-full max-h-[70vh] object-contain bg-black"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{selectedImage.category}</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Services Showcase */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-orange-950/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              What We <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Capture</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Every image tells a story of our commitment to excellence, safety, and customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700">
              <Truck className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white">Professional Loading</h3>
              <p className="text-slate-400 leading-relaxed">
                Watch our trained team carefully load vehicles using hydraulic ramps and secure tie-down systems
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700">
              <Package className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white">Safe Transportation</h3>
              <p className="text-slate-400 leading-relaxed">
                See our modern fleet in action transporting vehicles safely across India with GPS tracking
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700">
              <Shield className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white">Quality Delivery</h3>
              <p className="text-slate-400 leading-relaxed">
                Witness our commitment to delivering vehicles in perfect condition with full documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-600/20 to-orange-500/20 rounded-3xl border border-orange-500/30 p-8 md:p-12 text-center">
            <Image className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-black mb-4">
              Real Photos from <span className="text-orange-400">Our Operations</span>
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-6">
              This gallery represents our actual operations. For privacy and security reasons, some images are represented with placeholders. Contact us to see our complete portfolio.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Request Full Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Experience <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">This Quality?</span>
          </h2>
          <p className="text-slate-300 text-xl mb-8">
            Book your vehicle transportation today and join thousands of satisfied customers
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917988519924"
              className="bg-gradient-to-r from-orange-600 to-orange-500 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Call: +91-7988519924
            </a>
            <a
              href="#contact"
              className="border-2 border-orange-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-500/10 transition-all duration-300"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
