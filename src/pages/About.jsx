import React from 'react';
import { Users, ShieldCheck, Award, TrendingUp, Clock, MapPin, CheckCircle } from 'lucide-react';

export default function About() {
  const whyChoose = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Nearly a Decade of Experience",
      description: "Since 2015, we have successfully completed thousands of relocations across India, building expertise in handling diverse transportation challenges, from metropolitan moves to remote location deliveries."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Advanced Tracking Systems",
      description: "Real-time GPS tracking allows you to monitor your vehicle's location throughout the journey. Our customer support team provides regular updates and remains available 24/7 for any queries."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Trained Professional Team",
      description: "Our drivers, packers, and logistics coordinators undergo rigorous training in safe handling practices, customer service excellence, and efficient operations management to ensure flawless execution."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Pan-India Network",
      description: "With strategic partnerships and operational presence across major cities and towns, we offer seamless connectivity from any location to any destination within India."
    }
  ];

  const teamMembers = [
    {
      name: "Mr. Vishu Sharma",
      role: "Managing Director",
      description: "With over 15 years of experience, Mr. Sharma oversees sales, marketing, and overall company operations, guiding our strategic vision.",
      icon: "👨‍💼"
    },
    {
      name: "Mr. Rahul Choudhary",
      role: "Executive Director",
      description: "Mr. Choudhary is dedicated to ensuring customer satisfaction and manages the marketing division under the guidance of Mr. Vishu Sharma.",
      icon: "👔"
    },
    {
      name: "Mr. Keshav Sharma",
      role: "Sr. Foreman",
      description: "An expert in customer handling, Mr. Sharma is responsible for all technical aspects of transport and logistics operations.",
      icon: "🔧"
    }
  ];

  const achievements = [
    { number: "10K+", label: "Vehicles Transported", description: "Successfully delivered across India" },
    { number: "99.8%", label: "Safety Record", description: "Damage-free deliveries since inception" },
    { number: "98%", label: "On-Time Delivery", description: "Meeting promised timelines consistently" },
    { number: "4.8/5", label: "Customer Rating", description: "Based on verified customer reviews" },
    { number: "24+", label: "Fleet Vehicles", description: "Modern car carriers" },
    { number: "20+", label: "Team Members", description: "Experienced professionals" }
  ];

  const partners = [
    "MAHINDRA & MAHINDRA LTD",
    "TOYOTA TLI",
    "TESLA INDIA MOTORS",
    "GALLOPS AUTOHAUS BMW",
    "EXTRAME MOTORS PORSCHE",
    "B U BHANDARI MERCEDES",
    "DPS MOTORS MASERATI",
    "SELECT CARS LAMBORGHINI",
    "FERRARI",
    "AUDI GURGAON",
    "LANDMARK GROUP"
  ];

  const values = [
    {
      title: "Safety First",
      description: "We prioritize the safety of your vehicles and belongings above everything else.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Customer Focus",
      description: "Your satisfaction is our success. We go the extra mile to exceed expectations.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in every aspect of our operations.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Innovation",
      description: "Continuously improving our services with the latest technology and practices.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <div id="about" className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-transparent to-orange-500/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-orange-400 font-bold tracking-widest text-sm">ABOUT US</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6">
            Your Trusted <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Logistics Partner</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Established in 2015, RV Trans Logistics LLP has been revolutionizing the relocation and car transportation industry in India through reliable, efficient, and customer-centric services.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Established <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Excellence</span>
              </h2>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                RV Trans Logistics LLP was founded on 31st March 2015 with a clear vision: to revolutionise the relocation and car transportation industry in India through reliable, efficient, and customer-centric services.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                As a fully registered and GST-compliant organisation, we operate with complete transparency and adhere to all regulatory requirements. Our legal standing ensures that every transaction with us is secure, documented, and backed by the proper authorisations.
              </p>
              
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                  <h3 className="text-orange-400 font-bold mb-2">Registration Number</h3>
                  <p className="text-slate-300">U63000HR2015PTC216848</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                  <h3 className="text-orange-400 font-bold mb-2">GST Number</h3>
                  <p className="text-slate-300">06ABKFR2142R1ZP</p>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Main Company Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=900&fit=crop" 
                  alt="Professional logistics operations"
                  className="w-full h-[600px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Overlay Stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                    <h3 className="text-white font-bold text-xl mb-4">Since 2015</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl font-black text-orange-400">10+</div>
                        <div className="text-slate-200 text-sm">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-orange-400">24+</div>
                        <div className="text-slate-200 text-sm">Fleet Vehicles</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-bold tracking-widest text-sm">WHY CHOOSE US</span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6">
              Setting Industry <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Standards</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Our unwavering commitment to quality, safety, and customer satisfaction sets us apart from the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/10 p-4 rounded-xl text-orange-400">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-bold tracking-widest text-sm">OUR VALUES</span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6">
              What We <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Stand For</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 text-center"
              >
                <div className="bg-orange-500/10 w-16 h-16 rounded-2xl flex items-center justify-center text-orange-400 mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-orange-950/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-bold tracking-widest text-sm">OUR TEAM</span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6">
              Leadership <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Our dedicated workforce consists of 20+ experienced professionals led by industry veterans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
              >
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
                <p className="text-orange-400 font-semibold mb-4">{member.role}</p>
                <p className="text-slate-400 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-bold tracking-widest text-sm">OUR ACHIEVEMENTS</span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6">
              Numbers That <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Speak</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl font-black bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-slate-300 mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partners */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-bold tracking-widest text-sm">TRUSTED BY INDUSTRY LEADERS</span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6">
              Our Corporate <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Partners</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We take immense pride in our partnerships with leading automotive brands and logistics providers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center text-center"
              >
                <span className="text-slate-300 font-semibold">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-bold tracking-widest text-sm">OUR LOCATIONS</span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6">
              Strategic <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Presence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-500/10 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Registered Office</h3>
                  <p className="text-orange-400 font-semibold">Gurgaon, Haryana</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Strategically positioned in the National Capital Region, our Gurgaon office serves as our registered headquarters and primary operations hub for North India.
              </p>
              <div className="bg-slate-900/50 p-4 rounded-xl">
                <p className="text-slate-300 text-sm">
                  Shop No.1, Near Maruti Stock Yard, Opp. Bobby Dhaba, Carterpuri Road, Gurgaon-122017 (HARYANA)
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-500/10 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Corporate Office</h3>
                  <p className="text-orange-400 font-semibold">Navi Mumbai, Maharashtra</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Our corporate office extends our operational reach to Western and Southern India, offering proximity to India's financial capital and major industrial zones.
              </p>
              <div className="bg-slate-900/50 p-4 rounded-xl">
                <p className="text-slate-300 text-sm">
                  Office no. 67, Kesar Garden, Plot no.53, Sector-20, Kharghar, Navi Mumbai-410210
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
