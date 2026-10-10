import React from 'react';
import { Users, TrendingUp, Clock, MapPin, FileCheck, Receipt } from 'lucide-react';
import { card, Eyebrow, Highlight, IconBadge } from '../components/ui.jsx';

export default function About() {
  const whyChoose = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "A Decade of Experience",
      description: "Thousands of relocations across India since 2015, from metro moves to remote deliveries."
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Advanced Tracking",
      description: "Real-time GPS tracking with regular updates and 24/7 customer support."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Trained Professionals",
      description: "Drivers, packers, and coordinators trained in safe handling and service."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Pan-India Network",
      description: "Seamless connectivity from any location to any destination within India."
    }
  ];

  const teamMembers = [
    {
      name: "Mr. Vishu Sharma",
      initials: "VS",
      role: "Managing Director",
      description: "With over 15 years of experience, oversees sales, marketing, and overall company operations."
    },
    {
      name: "Mr. Rahul Choudhary",
      initials: "RC",
      role: "Executive Director",
      description: "Dedicated to customer satisfaction and manages the marketing division."
    },
    {
      name: "Mr. Keshav Sharma",
      initials: "KS",
      role: "Sr. Foreman",
      description: "Expert in customer handling, responsible for all technical aspects of transport operations."
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Company Overview */}
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
              As a fully registered and GST-compliant organisation, every transaction with us is secure, documented, and backed by the proper authorisations.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
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
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=700&fit=crop"
                alt="Professional logistics operations"
                className="h-[460px] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-8 left-6 right-6 rounded-3xl bg-white p-6 shadow-lift ring-1 ring-slate-200/80 md:left-auto md:w-80">
              <div className="text-xs font-bold uppercase tracking-wider text-red-700">Since 2015</div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-extrabold text-slate-900">10+</div>
                  <div className="text-sm text-slate-500">Years Experience</div>
                </div>
                <div className="border-l border-slate-100 pl-4">
                  <div className="text-3xl font-extrabold text-slate-900">20+</div>
                  <div className="text-sm text-slate-500">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item, index) => (
            <div
              key={index}
              className={`reveal group p-6 ${card}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <IconBadge className="mb-5 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                {item.icon}
              </IconBadge>
              <h3 className="mb-2 text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Leadership */}
        <div className="reveal mt-16">
          <h3 className="text-center text-2xl font-extrabold text-slate-900">
            Meet Our <Highlight>Leadership</Highlight>
          </h3>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex items-start gap-4 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200/70 md:flex-col lg:flex-row">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-rose-500 text-lg font-extrabold text-white shadow-lg shadow-red-600/25">
                  {member.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{member.name}</h4>
                  <p className="text-sm font-semibold text-red-700">{member.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
