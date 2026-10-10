import React, { useEffect, useState } from 'react';
import { Truck, Package, Shield, X, Maximize2 } from 'lucide-react';
import { card, Highlight, IconBadge, SectionHeading } from '../components/ui.jsx';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Three photos per theme: the first is shown large, the other two small
  const banners = [
    {
      title: "Vehicle Loading",
      icon: <Truck className="h-6 w-6" />,
      description: "Our trained team carefully loads vehicles using hydraulic ramps and secure tie-down systems",
      photos: [
        {
          category: "Luxury Vehicles",
          description: "Handling high-end and exotic cars with care",
          image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop"
        },
        {
          category: "Loading Ramps",
          description: "Hydraulic ramps for smooth vehicle loading",
          image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop"
        },
        {
          category: "Container Loading",
          description: "Loading vehicles into containers for long-distance transport",
          image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop"
        }
      ]
    },
    {
      title: "Transportation",
      icon: <Package className="h-6 w-6" />,
      description: "Our modern fleet in action, transporting vehicles safely across India with GPS tracking",
      photos: [
        {
          category: "On the Highway",
          description: "Our modern fleet transporting vehicles across India",
          image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop"
        },
        {
          category: "Fleet Operations",
          description: "Our well-maintained fleet on the road",
          image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop"
        },
        {
          category: "Door-to-Door",
          description: "Successful door-to-door delivery completion",
          image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop"
        }
      ]
    },
    {
      title: "Safety",
      icon: <Shield className="h-6 w-6" />,
      description: "Inspections, live monitoring and full documentation so every vehicle arrives in perfect condition",
      photos: [
        {
          category: "Quality Check",
          description: "Pre-transport inspection and documentation",
          image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop"
        },
        {
          category: "GPS Tracking",
          description: "Real-time monitoring systems in our vehicles",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
        },
        {
          category: "Night Operations",
          description: "24/7 operations with night monitoring",
          image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
        }
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Transports Documented" },
    { number: "24", label: "Modern Vehicles in Fleet" },
    { number: "10K+", label: "Photos in Our Archive" },
    { number: "100%", label: "Customer Satisfaction" }
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

  const PhotoButton = ({ photo, group, className }) => (
    <button
      onClick={() => setSelectedImage({ ...photo, group })}
      className={`group/photo relative overflow-hidden rounded-2xl bg-slate-100 ${className}`}
      aria-label={`View ${photo.category}`}
    >
      <img
        src={photo.image}
        alt={photo.category}
        className="h-full w-full object-cover transition-transform duration-700 group-hover/photo:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/photo:opacity-100"></div>
      <span className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-left text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover/photo:opacity-100">
        {photo.category}
        <Maximize2 className="h-4 w-4 flex-shrink-0" />
      </span>
    </button>
  );

  return (
    <div id="gallery">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Gallery"
            title={<>See Our <Highlight>Work</Highlight></>}
            description="A look at how we load, move and protect every vehicle we transport across India."
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

          {/* Theme banners */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {banners.map((banner, index) => (
              <div
                key={banner.title}
                className={`reveal overflow-hidden md:flex md:items-center lg:block ${card}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start gap-4 p-6 md:w-2/5 md:flex-shrink-0 lg:w-auto">
                  <IconBadge>{banner.icon}</IconBadge>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{banner.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{banner.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 px-2 pb-2 md:flex-1 md:grid-cols-3 md:py-2 lg:grid-cols-2 lg:pt-0">
                  <PhotoButton photo={banner.photos[0]} group={banner.title} className="col-span-2 aspect-[16/10] md:col-span-1 md:aspect-square lg:col-span-2 lg:aspect-[16/10]" />
                  <PhotoButton photo={banner.photos[1]} group={banner.title} className="aspect-square" />
                  <PhotoButton photo={banner.photos[2]} group={banner.title} className="aspect-square" />
                </div>
              </div>
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
                <span className="w-fit rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">
                  {selectedImage.group}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">{selectedImage.category}</h3>
                <p className="text-lg leading-relaxed text-slate-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
