import React from 'react';
import { Truck, MapPin, Shield, Clock, CheckCircle, TrendingUp, Phone, ArrowRight } from 'lucide-react';
import { btn, card, CTAStrip, Eyebrow, Highlight, IconBadge, SectionHeading } from '../components/ui.jsx';

export default function Fleet() {
  const fleetVehicles = [
    { number: "HR55AZ1722", chassis: "MAT792181S8F12661", brand: "TATA", year: "2025", type: "Single Car Carrier" },
    { number: "HR55AZ1302", chassis: "MAT792181S8H14906", brand: "TATA", year: "2025", type: "Single Car Carrier" },
    { number: "HR55AZ8676", chassis: "MAT792181S8H15329", brand: "TATA", year: "2025", type: "Single Car Carrier" },
    { number: "HR55AV7097", chassis: "MAT792109R8N20221", brand: "TATA", year: "2025", type: "Single Car Carrier" },
    { number: "HR55AU5168", chassis: "MAT792109R8H14141", brand: "TATA", year: "2024", type: "Single Car Carrier" },
    { number: "HR55AU2114", chassis: "MAT792109R8H13307", brand: "TATA", year: "2024", type: "Single Car Carrier" },
    { number: "HR55AV8901", chassis: "MAT792109R8K18245", brand: "TATA", year: "2025", type: "Single Car Carrier" },
    { number: "HR55AV3977", chassis: "MAT792109R8K18242", brand: "TATA", year: "2025", type: "Single Car Carrier" },
    { number: "HR55AP5828", chassis: "MAT792033N8P25182", brand: "TATA", year: "2023", type: "Single Car Carrier" },
    { number: "NL01AH6093", chassis: "MAT792109P8P22704", brand: "TATA", year: "2024", type: "Single Car Carrier" },
    { number: "NL01AH6094", chassis: "MAT792109P8P22703", brand: "TATA", year: "2024", type: "Single Car Carrier" },
    { number: "MH14KQ7807", chassis: "MAT785010P7E10166", brand: "TATA", year: "2023", type: "Single Car Carrier" },
    { number: "MH14KQ7497", chassis: "MAT785010P7E10165", brand: "TATA", year: "2023", type: "Single Car Carrier" },
    { number: "MH14LL9573", chassis: "MAT792108R8B03388", brand: "TATA", year: "2024", type: "Single Car Carrier" },
    { number: "MH48BM6489", chassis: "MAT751261K8G16909", brand: "TATA", year: "2021", type: "Single Car Carrier" },
    { number: "MH01EM1789", chassis: "MAT792051P8N20494", brand: "TATA", year: "2025", type: "Single Car Carrier" },
    { number: "MH01EE3789", chassis: "MC2EBKRC0NLB22888", brand: "EICHER", year: "2023", type: "Single Car Carrier" },
    { number: "TG08T5503", chassis: "MAT792109R8H14166", brand: "TATA", year: "2025", type: "Single Car Carrier" },
    { number: "MH04MR5566", chassis: "MA1EACMWFR6K77657", brand: "MAHINDRA", year: "2025", type: "Single Carrier" },
    { number: "MH03CV5656", chassis: "MEC0463AALP042406", brand: "BHARAT BENZ", year: "2020", type: "Single Carrier" },
    { number: "MH01EE5566", chassis: "MC2EBKRC0NGB18056", brand: "EICHER", year: "2022", type: "Single Carrier" },
    { number: "MH04LM6655", chassis: "MC2EBKRC0PAB25100", brand: "EICHER", year: "2022", type: "Single Carrier" },
    { number: "MH02ER6565", chassis: "MEC0453AKJP032096", brand: "BHARAT BENZ", year: "2019", type: "Single Carrier" },
    { number: "MH04LX5566", chassis: "MA1EACMWFR6G78251", brand: "MAHINDRA", year: "2024", type: "Single Carrier" }
  ];

  const fleetStats = [
    { number: String(fleetVehicles.length), label: "Total Vehicles", icon: <Truck className="h-6 w-6" /> },
    { number: "100%", label: "GPS Tracked", icon: <MapPin className="h-6 w-6" /> },
    { number: "2025", label: "Latest Models", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "24/7", label: "Monitored", icon: <Clock className="h-6 w-6" /> }
  ];

  // Derived from the vehicle list so the composition always matches the fleet
  const brandBreakdown = Object.entries(
    fleetVehicles.reduce((counts, vehicle) => {
      counts[vehicle.brand] = (counts[vehicle.brand] || 0) + 1;
      return counts;
    }, {})
  )
    .map(([brand, count]) => ({
      brand,
      count,
      percentage: `${+((count / fleetVehicles.length) * 100).toFixed(1)}%`
    }))
    .sort((a, b) => b.count - a.count);

  const features = [
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Fully Insured",
      description: "Every vehicle in our fleet is comprehensively insured for maximum protection"
    },
    {
      icon: <MapPin className="h-7 w-7" />,
      title: "GPS Tracking",
      description: "Real-time tracking on all vehicles for complete transparency"
    },
    {
      icon: <CheckCircle className="h-7 w-7" />,
      title: "Regular Maintenance",
      description: "Scheduled servicing ensures optimal performance and safety"
    },
    {
      icon: <Clock className="h-7 w-7" />,
      title: "24/7 Monitoring",
      description: "Continuous oversight of all fleet operations round the clock"
    }
  ];

  return (
    <div id="fleet">
      {/* Intro */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal relative overflow-hidden rounded-[2.5rem]">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&h=700&fit=crop"
              alt="Fleet of trucks"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-white/85 md:bg-transparent md:bg-gradient-to-r md:from-white md:via-white/80 md:to-transparent"></div>
            <div className="relative max-w-2xl px-6 py-16 md:px-14 md:py-24">
              <Eyebrow>Our Fleet</Eyebrow>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
                Modern & <Highlight>Reliable Fleet</Highlight>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-700">
                {fleetVehicles.length} specialized single car carriers equipped with advanced technology for safe and efficient vehicle transportation across India.
              </p>
            </div>
          </div>

          {/* Fleet Stats */}
          <div className="relative z-10 -mt-10 grid grid-cols-2 gap-4 px-2 md:grid-cols-4 md:px-8">
            {fleetStats.map((stat, index) => (
              <div
                key={index}
                className="reveal flex items-center gap-4 rounded-3xl bg-white p-5 shadow-lift ring-1 ring-slate-200/80 md:p-6"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <IconBadge size="sm" className="hidden sm:flex">{stat.icon}</IconBadge>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900 md:text-3xl">{stat.number}</div>
                  <div className="text-sm font-semibold text-slate-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Breakdown + Features */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="reveal lg:col-span-2">
              <Eyebrow>Fleet Composition</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Trusted <Highlight>Brands</Highlight>
              </h2>
              <p className="mt-4 text-slate-600">Our diverse fleet includes trusted brands from leading manufacturers</p>

              <div className="mt-8 space-y-5 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-200/80">
                {brandBreakdown.map((item) => (
                  <div key={item.brand} title={`${item.brand}: ${item.count} vehicles (${item.percentage})`}>
                    <div className="mb-2 flex items-baseline justify-between">
                      <span className="font-bold text-slate-900">{item.brand}</span>
                      <span className="text-sm text-slate-500">
                        <span className="font-bold text-slate-900">{item.count}</span> · {item.percentage} of fleet
                      </span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-violet-800"
                        style={{ width: item.percentage }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="reveal">
                <h3 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                  Fleet <Highlight>Features</Highlight>
                </h3>
                <p className="mt-3 text-slate-600">
                  Every vehicle is equipped with advanced features ensuring safety and reliability
                </p>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={index} className={`reveal group p-7 ${card}`}>
                    <IconBadge className="mb-5 transition-colors duration-300 group-hover:bg-violet-800 group-hover:text-white">
                      {feature.icon}
                    </IconBadge>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet List */}
      {/* <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={<>Complete Fleet <Highlight>Details</Highlight></>}
            description="All our vehicles with registration numbers and specifications"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fleetVehicles.map((vehicle, index) => (
              <div key={index} className={`p-6 ${card}`}>
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-slate-900">{vehicle.number}</h3>
                    <p className="font-mono text-xs text-slate-500">{vehicle.chassis}</p>
                  </div>
                  <span className="rounded-full bg-violet-50 px-3 py-1 text-sm font-semibold text-violet-900">{vehicle.year}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Brand:</span>
                    <span className="font-semibold text-slate-900">{vehicle.brand}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Type:</span>
                    <span className="text-sm text-slate-700">{vehicle.type}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-violet-800" />
                    <span className="text-xs text-slate-500">GPS Tracked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-violet-800" />
                    <span className="text-xs text-slate-500">Insured</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Future Expansion */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal grid items-center gap-10 rounded-[2.5rem] bg-white p-8 shadow-soft ring-1 ring-slate-200/80 md:p-14 lg:grid-cols-2">
            <div>
              <IconBadge size="lg" className="mb-6">
                <TrendingUp className="h-8 w-8" />
              </IconBadge>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Expanding Our <Highlight>Fleet</Highlight>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                As part of our growth strategy, we're planning to add 20 more single car carriers to our fleet by April 2026, further strengthening our pan-India service capabilities.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '+20', label: 'New Vehicles' },
                { value: '2026', label: 'Target Year' },
                { value: '44', label: 'Total Fleet' }
              ].map((item) => (
                <div key={item.label} className="rounded-3xl bg-gradient-to-br from-violet-50 to-purple-50 p-5 text-center ring-1 ring-violet-100 md:p-6">
                  <div className="text-2xl font-extrabold text-slate-900 md:text-4xl">{item.value}</div>
                  <div className="mt-1 text-xs font-semibold text-violet-900 md:text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTAStrip
        title={<>Experience Our <Highlight>Modern Fleet</Highlight></>}
        description="Book your vehicle transportation today and see the difference a modern, well-maintained fleet makes"
      >
        <a href="#contact" className={btn.primary}>
          Get Free Quote
          <ArrowRight className="h-5 w-5" />
        </a>
        <a href="tel:+917988519924" className={btn.outline}>
          <Phone className="h-5 w-5" />
          Call: +91-7988519924
        </a>
      </CTAStrip>
    </div>
  );
}
