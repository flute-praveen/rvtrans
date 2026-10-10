import React from 'react';
import { Truck, MapPin, Shield, Clock, CheckCircle, TrendingUp } from 'lucide-react';

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
    { number: "24", label: "Total Vehicles", icon: <Truck className="w-6 h-6" /> },
    { number: "100%", label: "GPS Tracked", icon: <MapPin className="w-6 h-6" /> },
    { number: "2025", label: "Latest Models", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Monitored", icon: <Clock className="w-6 h-6" /> }
  ];

  const brandBreakdown = [
    { brand: "TATA", count: 18, percentage: "75%" },
    { brand: "EICHER", count: 3, percentage: "12.5%" },
    { brand: "MAHINDRA", count: 2, percentage: "8.3%" },
    { brand: "BHARAT BENZ", count: 2, percentage: "8.3%" }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fully Insured",
      description: "Every vehicle in our fleet is comprehensively insured for maximum protection"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "GPS Tracking",
      description: "Real-time tracking on all vehicles for complete transparency"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Regular Maintenance",
      description: "Scheduled servicing ensures optimal performance and safety"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Monitoring",
      description: "Continuous oversight of all fleet operations round the clock"
    }
  ];

  return (
    <div id="fleet" className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-transparent to-orange-500/10"></div>
        
        {/* Background Fleet Image */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&h=900&fit=crop" 
            alt="Fleet of trucks"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-orange-400 font-bold tracking-widest text-sm">OUR FLEET</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6">
            Modern & <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Reliable Fleet</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
            24 specialized single car carriers equipped with advanced technology for safe and efficient vehicle transportation across India.
          </p>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {fleetStats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 text-center"
              >
                <div className="bg-orange-500/10 w-16 h-16 rounded-2xl flex items-center justify-center text-orange-400 mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Breakdown */}
      <section className="py-16 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Fleet <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Composition</span>
            </h2>
            <p className="text-slate-400">Our diverse fleet includes trusted brands from leading manufacturers</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {brandBreakdown.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 text-center"
              >
                <div className="text-5xl font-black text-orange-400 mb-2">{item.count}</div>
                <div className="text-xl font-bold text-white mb-1">{item.brand}</div>
                <div className="text-slate-400 text-sm">{item.percentage} of fleet</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Fleet <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Every vehicle is equipped with advanced features ensuring safety and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 text-center"
              >
                <div className="bg-orange-500/10 w-16 h-16 rounded-2xl flex items-center justify-center text-orange-400 mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet List */}
      {/* <section className="py-24 bg-gradient-to-br from-slate-900 via-orange-950/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Complete Fleet <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Details</span>
            </h2>
            <p className="text-slate-400 text-lg">All our vehicles with registration numbers and specifications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleetVehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-orange-400 mb-1">{vehicle.number}</h3>
                    <p className="text-slate-500 text-xs font-mono">{vehicle.chassis}</p>
                  </div>
                  <div className="bg-orange-500/10 px-3 py-1 rounded-full">
                    <span className="text-orange-400 text-sm font-semibold">{vehicle.year}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Brand:</span>
                    <span className="text-white font-semibold">{vehicle.brand}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Type:</span>
                    <span className="text-slate-300 text-sm">{vehicle.type}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-400" />
                    <span className="text-slate-400 text-xs">GPS Tracked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-orange-400" />
                    <span className="text-slate-400 text-xs">Insured</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Future Expansion */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-600/20 to-orange-500/20 rounded-3xl border border-orange-500/30 p-12 text-center">
            <TrendingUp className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Expanding Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Fleet</span>
            </h2>
            <p className="text-slate-300 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              As part of our growth strategy, we're planning to add 20 more single car carriers to our fleet by April 2026, further strengthening our pan-India service capabilities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl">
                <div className="text-3xl font-black text-orange-400 mb-2">+20</div>
                <div className="text-slate-300 text-sm">New Vehicles</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl">
                <div className="text-3xl font-black text-orange-400 mb-2">2026</div>
                <div className="text-slate-300 text-sm">Target Year</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl">
                <div className="text-3xl font-black text-orange-400 mb-2">44</div>
                <div className="text-slate-300 text-sm">Total Fleet</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Experience Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Modern Fleet</span>
          </h2>
          <p className="text-slate-300 text-xl mb-8">
            Book your vehicle transportation today and see the difference a modern, well-maintained fleet makes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-orange-600 to-orange-500 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+917988519924"
              className="border-2 border-orange-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-500/10 transition-all duration-300"
            >
              Call: +91-7988519924
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
