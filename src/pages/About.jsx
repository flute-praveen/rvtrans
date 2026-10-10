import React from 'react';
import { Users, ShieldCheck, Award, TrendingUp, Clock, MapPin, FileCheck, Receipt } from 'lucide-react';
import { card, Eyebrow, Highlight, IconBadge, SectionHeading } from '../components/ui.jsx';

export default function About() {
  const whyChoose = [
    {
      icon: <Clock className="h-7 w-7" />,
      title: "Nearly a Decade of Experience",
      description: "Since 2015, we have successfully completed thousands of relocations across India, building expertise in handling diverse transportation challenges, from metropolitan moves to remote location deliveries."
    },
    {
      icon: <MapPin className="h-7 w-7" />,
      title: "Advanced Tracking Systems",
      description: "Real-time GPS tracking allows you to monitor your vehicle's location throughout the journey. Our customer support team provides regular updates and remains available 24/7 for any queries."
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Trained Professional Team",
      description: "Our drivers, packers, and logistics coordinators undergo rigorous training in safe handling practices, customer service excellence, and efficient operations management to ensure flawless execution."
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      title: "Pan-India Network",
      description: "With strategic partnerships and operational presence across major cities and towns, we offer seamless connectivity from any location to any destination within India."
    }
  ];

  const teamMembers = [
    {
      name: "Mr. Vishu Sharma",
      initials: "VS",
      role: "Managing Director",
      description: "With over 15 years of experience, Mr. Sharma oversees sales, marketing, and overall company operations, guiding our strategic vision."
    },
    {
      name: "Mr. Rahul Choudhary",
      initials: "RC",
      role: "Executive Director",
      description: "Mr. Choudhary is dedicated to ensuring customer satisfaction and manages the marketing division under the guidance of Mr. Vishu Sharma."
    },
    {
      name: "Mr. Keshav Sharma",
      initials: "KS",
      role: "Sr. Foreman",
      description: "An expert in customer handling, Mr. Sharma is responsible for all technical aspects of transport and logistics operations."
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
      icon: <ShieldCheck className="h-6 w-6" />
    },
    {
      title: "Customer Focus",
      description: "Your satisfaction is our success. We go the extra mile to exceed expectations.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in every aspect of our operations.",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Innovation",
      description: "Continuously improving our services with the latest technology and practices.",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  const locations = [
    {
      title: "Registered Office",
      city: "Gurgaon, Haryana",
      description: "Strategically positioned in the National Capital Region, our Gurgaon office serves as our registered headquarters and primary operations hub for North India.",
      address: "Shop No.1, Near Maruti Stock Yard, Opp. Bobby Dhaba, Carterpuri Road, Gurgaon-122017 (HARYANA)"
    },
    {
      title: "Corporate Office",
      city: "Navi Mumbai, Maharashtra",
      description: "Our corporate office extends our operational reach to Western and Southern India, offering proximity to India's financial capital and major industrial zones.",
      address: "Office no. 67, Kesar Garden, Plot no.53, Sector-20, Kharghar, Navi Mumbai-410210"
    }
  ];

  return (
    <div id="about">
      {/* Company Overview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="reveal">
              <Eyebrow>About Us</Eyebrow>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Your Trusted <Highlight>Logistics Partner</Highlight>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                RV Trans Logistics LLP was founded on 31st March 2015 with a clear vision: to revolutionise the relocation and car transportation industry in India through reliable, efficient, and customer-centric services.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                As a fully registered and GST-compliant organisation, we operate with complete transparency and adhere to all regulatory requirements. Our legal standing ensures that every transaction with us is secure, documented, and backed by the proper authorisations.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
                  <IconBadge size="sm">
                    <FileCheck className="h-5 w-5" />
                  </IconBadge>
                  <div className="min-w-0">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Registration Number</h3>
                    <p className="mt-1 break-all font-semibold text-slate-900">U63000HR2015PTC216848</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
                  <IconBadge size="sm">
                    <Receipt className="h-5 w-5" />
                  </IconBadge>
                  <div className="min-w-0">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">GST Number</h3>
                    <p className="mt-1 break-all font-semibold text-slate-900">06ABKFR2142R1ZP</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal relative">
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-lift">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=900&fit=crop"
                  alt="Professional logistics operations"
                  className="h-[560px] w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Overlay Stats */}
              <div className="absolute -bottom-8 left-6 right-6 rounded-3xl bg-white p-6 shadow-lift ring-1 ring-slate-200/80 md:left-auto md:w-80">
                <div className="text-xs font-bold uppercase tracking-wider text-violet-900">Since 2015</div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-extrabold text-slate-900">10+</div>
                    <div className="text-sm text-slate-500">Years Experience</div>
                  </div>
                  <div className="border-l border-slate-100 pl-4">
                    <div className="text-3xl font-extrabold text-slate-900">24+</div>
                    <div className="text-sm text-slate-500">Fleet Vehicles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Partners */}
      <section className="border-y border-slate-200/70 bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
            Trusted by Industry Leaders
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
            We take immense pride in our partnerships with leading automotive brands and logistics providers.
          </p>
        </div>
        <div className="mask-fade-x relative mt-8 overflow-hidden">
          <div className="animate-marquee flex w-max gap-4 hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                aria-hidden={index >= partners.length}
                className="flex-shrink-0 whitespace-nowrap rounded-2xl bg-white px-6 py-4 text-sm font-bold tracking-wide text-slate-700 shadow-soft ring-1 ring-slate-200/80"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={<>Setting Industry <Highlight>Standards</Highlight></>}
            description="Our unwavering commitment to quality, safety, and customer satisfaction sets us apart from the competition."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {whyChoose.map((item, index) => (
              <div key={index} className={`reveal group p-8 ${card}`}>
                <div className="flex items-start gap-5">
                  <IconBadge className="transition-colors duration-300 group-hover:bg-violet-800 group-hover:text-white">
                    {item.icon}
                  </IconBadge>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Values" title={<>What We <Highlight>Stand For</Highlight></>} />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className={`reveal p-8 ${card}`} style={{ transitionDelay: `${index * 80}ms` }}>
                <IconBadge className="mb-6">{value.icon}</IconBadge>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{value.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Team"
            title={<>Leadership <Highlight>Excellence</Highlight></>}
            description="Our dedicated workforce consists of 20+ experienced professionals led by industry veterans."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div key={index} className={`reveal p-8 text-center ${card}`}>
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-800 to-purple-600 text-2xl font-extrabold text-white shadow-xl shadow-violet-800/25 ring-8 ring-violet-50">
                  {member.initials}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">{member.name}</h3>
                <p className="mt-2 inline-block rounded-full bg-violet-50 px-3 py-1 text-sm font-semibold text-violet-900">
                  {member.role}
                </p>
                <p className="mt-4 leading-relaxed text-slate-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal rounded-[2.5rem] bg-gradient-to-br from-violet-50 via-white to-sky-50 p-8 ring-1 ring-slate-200/70 md:p-14">
            <SectionHeading eyebrow="Our Achievements" title={<>Numbers That <Highlight>Speak</Highlight></>} />

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {achievements.map((stat, index) => (
                <div key={index} className="rounded-2xl bg-white/80 p-6 text-center shadow-soft ring-1 ring-slate-200/70 backdrop-blur">
                  <div className="text-3xl font-extrabold tracking-tight text-slate-900">{stat.number}</div>
                  <div className="mt-2 text-sm font-bold text-violet-900">{stat.label}</div>
                  <div className="mt-1 text-xs text-slate-500">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Locations" title={<>Strategic <Highlight>Presence</Highlight></>} />

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {locations.map((location) => (
              <div key={location.title} className={`reveal p-8 ${card}`}>
                <div className="mb-6 flex items-start gap-4">
                  <IconBadge>
                    <MapPin className="h-6 w-6" />
                  </IconBadge>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{location.title}</h3>
                    <p className="font-semibold text-violet-900">{location.city}</p>
                  </div>
                </div>
                <p className="mb-6 leading-relaxed text-slate-600">{location.description}</p>
                <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                  <p className="text-sm text-slate-700">{location.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
