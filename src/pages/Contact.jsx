import React from 'react';
import { Phone, Mail, MapPin, Clock, Headphones } from 'lucide-react';
import { Highlight, IconBadge, SectionHeading } from '../components/ui.jsx';

const tel = (phone) => `tel:${phone.replace(/-/g, '')}`;

export default function Contact() {
  const offices = [
    {
      title: "Registered Office",
      location: "Gurgaon, Haryana",
      address: "Shop No.1, Near Maruti Stock Yard, Opp. Bobby Dhaba, Carterpuri Road, Gurgaon-122017 (HARYANA)",
      phone: "+91-7988519924"
    },
    {
      title: "Corporate Office",
      location: "Navi Mumbai, Maharashtra",
      address: "Office no. 67, Kesar Garden, Plot no.53, Sector- 20, Kharghar, Navi Mumbai- 410210",
      phone: "+91-9717979991"
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="bg-grid absolute inset-0"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title={<>Call Us for a <Highlight>Free Quote</Highlight></>}
          description="Speak directly with our team. Tell us your pickup city, drop city and vehicle type, and we'll give you a transparent quote on the call."
        />

        {/* Call cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {offices.map((office) => (
            <div
              key={office.title}
              className="reveal flex flex-col rounded-[2rem] bg-white p-6 shadow-lift sm:p-8 ring-1 ring-slate-200/80"
            >
              <div className="flex items-start gap-4">
                <IconBadge size="sm">
                  <MapPin className="h-5 w-5" />
                </IconBadge>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{office.title}</h3>
                  <p className="text-sm font-semibold text-red-700">{office.location}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{office.address}</p>
                </div>
              </div>

              <a
                href={tel(office.phone)}
                className="mt-8 block whitespace-nowrap text-[1.7rem] font-extrabold tracking-tight text-slate-900 transition-colors hover:text-red-600 sm:text-3xl lg:text-4xl"
              >
                {office.phone}
              </a>

              <a
                href={tel(office.phone)}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-50 px-7 py-3.5 font-semibold text-red-700 ring-1 ring-red-100 transition-all duration-300 hover:bg-red-600 hover:text-white hover:ring-red-600"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          ))}
        </div>

        {/* Email, hours, support */}
        <div className="reveal mt-6 grid gap-6 rounded-[2rem] bg-slate-50 p-6 text-slate-900 ring-1 ring-slate-200/80 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
          <a href="mailto:rvtranslogistics@gmail.com" className="flex items-start gap-4 transition-opacity group">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-red-600 shadow-soft ring-1 ring-slate-200/80">
              <Mail className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm text-slate-500">Email us</span>
              <span className="block text-sm font-semibold transition-colors [overflow-wrap:anywhere] group-hover:text-red-600 sm:text-base">rvtranslogistics@gmail.com</span>
            </span>
          </a>

          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-red-600 shadow-soft ring-1 ring-slate-200/80">
              <Clock className="h-5 w-5" />
            </span>
            <div className="text-sm">
              <div className="text-slate-500">Operating hours</div>
              <div className="font-semibold">Mon - Fri: 9:00 AM - 7:00 PM</div>
              <div className="font-semibold">Sat - Sun: 9:00 AM - 6:00 PM</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-red-600 shadow-soft ring-1 ring-slate-200/80">
              <Headphones className="h-5 w-5" />
            </span>
            <div className="text-sm">
              <div className="text-slate-500">Always available</div>
              <div className="font-semibold">24/7 Emergency Support</div>
              <div className="text-slate-500">Free consultation • No hidden costs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
