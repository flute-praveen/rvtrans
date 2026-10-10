import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Shield } from 'lucide-react';
import { btn, card, CTAStrip, Highlight, IconBadge, SectionHeading } from '../components/ui.jsx';

const inputClass =
  'w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-slate-900 placeholder:text-slate-400 transition-all focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-100';

const labelClass = 'mb-2 block text-sm font-semibold text-slate-700';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="h-7 w-7" />,
      title: "Call Us",
      details: ["+91-7988519924", "+91-9717979991"],
      description: "Available 7 days a week for your convenience",
      action: (detail) => `tel:${detail.replace(/-/g, '')}`
    },
    {
      icon: <Mail className="h-7 w-7" />,
      title: "Email Us",
      details: ["rvtranslogistics@gmail.com"],
      description: "We'll respond within 24 hours",
      action: (detail) => `mailto:${detail}`
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "GST Details",
      details: ["GST: 06ABKFR2142R1ZP", "Reg: U63000HR2015PTC216848"],
      description: "Fully compliant operations",
      action: null
    }
  ];

  const offices = [
    {
      title: "Registered Office",
      location: "Gurgaon, Haryana",
      address: "Shop No.1, Near Maruti Stock Yard, Opp. Bobby Dhaba, Carterpuri Road, Gurgaon-122017 (HARYANA)",
      phone: "+91-7988519924",
      hours: "Mon-Sun: 9:00 AM - 7:00 PM"
    },
    {
      title: "Corporate Office",
      location: "Navi Mumbai, Maharashtra",
      address: "Office no. 67, Kesar Garden, Plot no.53, Sector- 20, Kharghar, Navi Mumbai- 410210",
      phone: "+91-9717979991",
      hours: "Mon-Sun: 9:00 AM - 7:00 PM"
    }
  ];

  const services = [
    "Single Car Carrier",
    "Bike Transportation",
    "Warehouse Solutions",
    "Art & Sculpture Relocation",
    "Full Truck Load (FTL)",
    "Part Truck Load (PTL)",
    "Corporate Fleet Services",
    "Other"
  ];

  const benefits = [
    "Free detailed quotation within 24 hours",
    "Expert advice on best transportation options",
    "Flexible scheduling to suit your timeline",
    "Dedicated support throughout your journey",
    "No hidden costs or surprises",
    "Comprehensive insurance coverage"
  ];

  return (
    <div id="contact">
      <section className="relative overflow-hidden py-24">
        <div className="bg-grid absolute inset-0"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get In Touch"
            title={<>Let's Start <Highlight>Your Journey</Highlight></>}
            description="Whether you're planning a personal move, need vehicle transportation, or require corporate logistics solutions, we're here to help."
          />

          {/* Contact Methods */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {contactMethods.map((method, index) => (
              <div key={index} className={`reveal p-8 text-center ${card}`}>
                <IconBadge size="lg" className="mx-auto mb-6 !rounded-full">
                  {method.icon}
                </IconBadge>
                <h3 className="mb-4 text-xl font-bold text-slate-900">{method.title}</h3>
                {method.details.map((detail, idx) => (
                  method.action ? (
                    <a
                      key={idx}
                      href={method.action(detail)}
                      className="mb-1.5 block break-all font-semibold text-violet-900 transition-colors hover:text-violet-900"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p key={idx} className="mb-1 text-sm font-medium text-slate-700">{detail}</p>
                  )
                ))}
                <p className="mt-4 text-sm text-slate-500">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="reveal rounded-[2rem] bg-white p-6 shadow-lift ring-1 ring-slate-200/80 md:p-10 lg:col-span-3">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Send Us a <Highlight>Message</Highlight>
              </h2>
              <p className="mt-3 text-slate-600">
                Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
              </p>

              {submitted && (
                <div className="mt-6 flex items-center gap-4 rounded-2xl bg-emerald-50 p-5 ring-1 ring-emerald-200">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-emerald-600" />
                  <div>
                    <h4 className="font-bold text-emerald-800">Message Sent Successfully!</h4>
                    <p className="text-sm text-emerald-700">We'll get back to you shortly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="contact-email" className={labelClass}>Email *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className={labelClass}>Phone *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="+91-XXXXXXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className={labelClass}>Service Required *</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button type="submit" className={`${btn.primary} w-full text-lg`}>
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Benefits & Info */}
            <div className="space-y-6 lg:col-span-2">
              <div className="reveal rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-slate-200/80">
                <h3 className="mb-6 text-xl font-bold text-slate-900">Why Contact Us?</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-800" />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-800 to-purple-600 p-8 text-white shadow-xl shadow-violet-800/20">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10"></div>
                <Clock className="relative mb-4 h-10 w-10" />
                <h3 className="relative mb-3 text-xl font-bold">Quick Response Time</h3>
                <p className="relative leading-relaxed text-violet-50">
                  We understand that time is valuable. Our team is committed to responding to all inquiries within 24 hours with detailed, transparent quotations and expert advice.
                </p>
              </div>

              <div className="reveal rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-slate-200/80">
                <h3 className="mb-6 text-xl font-bold text-slate-900">Operating Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-slate-500">Monday - Friday</span>
                    <span className="font-semibold text-slate-900">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-slate-500">Saturday - Sunday</span>
                    <span className="font-semibold text-slate-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="border-t border-slate-100 pt-3">
                    <p className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                      <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                      24/7 Emergency Support Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Offices"
            title={<>Visit Us <Highlight>Anytime</Highlight></>}
            description="We have two strategic locations to serve you better across India"
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {offices.map((office, index) => (
              <div key={index} className={`reveal p-8 ${card}`}>
                <div className="mb-6 flex items-start gap-4">
                  <IconBadge>
                    <MapPin className="h-6 w-6" />
                  </IconBadge>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{office.title}</h3>
                    <p className="font-semibold text-violet-900">{office.location}</p>
                  </div>
                </div>

                <dl className="space-y-4">
                  <div>
                    <dt className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">Address</dt>
                    <dd className="leading-relaxed text-slate-700">{office.address}</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">Phone</dt>
                      <dd>
                        <a
                          href={`tel:${office.phone.replace(/-/g, '')}`}
                          className="font-semibold text-violet-900 transition-colors hover:text-violet-900"
                        >
                          {office.phone}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">Hours</dt>
                      <dd className="text-slate-700">{office.hours}</dd>
                    </div>
                  </div>
                </dl>

                <div className="mt-6 border-t border-slate-100 pt-6">
                  <a href={`tel:${office.phone.replace(/-/g, '')}`} className={`${btn.dark} !px-6 !py-3`}>
                    <Phone className="h-4 w-4" />
                    Call This Office
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        title={<>Ready for <Highlight>Hassle-Free</Highlight> Relocation?</>}
        description="Don't wait! Get your free quote today and discover why thousands of customers trust RV Trans Logistics."
      >
        <a href="tel:+917988519924" className={btn.primary}>
          <Phone className="h-5 w-5" />
          Call: +91-7988519924
        </a>
        <a href="mailto:rvtranslogistics@gmail.com" className={btn.outline}>
          <Mail className="h-5 w-5" />
          Email Us
        </a>
      </CTAStrip>
    </div>
  );
}
