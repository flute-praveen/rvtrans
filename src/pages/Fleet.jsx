import React from 'react';
import { Truck, MapPin, Shield, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { Eyebrow, Highlight, IconBadge } from '../components/ui.jsx';

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
    { number: String(fleetVehicles.length), label: "Total Vehicles", icon: <Truck className="h-5 w-5" /> },
    { number: "100%", label: "GPS Tracked", icon: <MapPin className="h-5 w-5" /> },
    { number: "2025", label: "Latest Models", icon: <TrendingUp className="h-5 w-5" /> },
    { number: "24/7", label: "Monitored", icon: <Clock className="h-5 w-5" /> }
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
    { icon: <Shield className="h-5 w-5" />, title: "Fully Insured", description: "Comprehensive cover on every vehicle" },
    { icon: <MapPin className="h-5 w-5" />, title: "GPS Tracking", description: "Real-time tracking for full transparency" },
    { icon: <CheckCircle className="h-5 w-5" />, title: "Regular Maintenance", description: "Scheduled servicing for safety" },
    { icon: <Clock className="h-5 w-5" />, title: "24/7 Monitoring", description: "Round-the-clock fleet oversight" }
  ];

  return (
    <section id="fleet" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="reveal">
            <Eyebrow>Our Fleet</Eyebrow>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Modern & <Highlight>Reliable Fleet</Highlight>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {fleetVehicles.length} specialized single car carriers equipped with advanced technology for safe and efficient vehicle transportation across India.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {fleetStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4 rounded-3xl bg-white p-4 shadow-soft ring-1 ring-slate-200/80 sm:p-5">
                  <IconBadge size="sm" className="hidden sm:flex">{stat.icon}</IconBadge>
                  <div>
                    <div className="text-2xl font-extrabold text-slate-900">{stat.number}</div>
                    <div className="text-sm font-semibold text-slate-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-600">{feature.icon}</span>
                  <div>
                    <h3 className="font-bold text-slate-900">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal overflow-hidden rounded-[2rem] bg-white shadow-lift ring-1 ring-slate-200/80">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&h=500&fit=crop"
              alt="Fleet truck on the road"
              className="h-56 w-full object-cover"
              loading="lazy"
            />
            <div className="p-7">
              <h3 className="text-lg font-bold text-slate-900">Fleet Composition</h3>
              <p className="mt-1 text-sm text-slate-500">Trusted brands from leading manufacturers</p>
              <div className="mt-6 space-y-5">
                {brandBreakdown.map((item) => (
                  <div key={item.brand} title={`${item.brand}: ${item.count} vehicles (${item.percentage})`}>
                    <div className="mb-2 flex items-baseline justify-between">
                      <span className="font-bold text-slate-900">{item.brand}</span>
                      <span className="text-sm text-slate-500">
                        <span className="font-bold text-slate-900">{item.count}</span> · {item.percentage} of fleet
                      </span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-red-600" style={{ width: item.percentage }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
