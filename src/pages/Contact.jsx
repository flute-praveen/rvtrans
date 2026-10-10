import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Shield } from 'lucide-react';

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
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      details: ["+91-7988519924", "+91-9717979991"],
      description: "Available 7 days a week for your convenience",
      action: "tel:+917988519924"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      details: ["rvtranslogistics@gmail.com"],
      description: "We'll respond within 24 hours",
      action: "mailto:rvtranslogistics@gmail.com"
    },
    {
      icon: <Shield className="w-8 h-8" />,
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
    <div id="contact" className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-transparent to-orange-500/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-orange-400 font-bold tracking-widest text-sm">GET IN TOUCH</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6">
            Let's Start <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Your Journey</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Whether you're planning a personal move, need vehicle transportation, or require corporate logistics solutions, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 text-center"
              >
                <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-400">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{method.title}</h3>
                {method.details.map((detail, idx) => (
                  method.action ? (
                    <a
                      key={idx}
                      href={method.action}
                      className="block text-orange-400 font-semibold mb-2 hover:text-orange-300 transition-colors"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p key={idx} className="text-slate-300 text-sm mb-1">{detail}</p>
                  )
                ))}
                <p className="text-slate-400 text-sm mt-4">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-orange-950/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Send Us a <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Message</span>
              </h2>
              <p className="text-slate-400 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
              </p>

              {submitted && (
                <div className="bg-green-500/10 border border-green-500/50 rounded-2xl p-6 mb-6 flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-green-400 font-bold mb-1">Message Sent Successfully!</h4>
                    <p className="text-slate-300 text-sm">We'll get back to you shortly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-300 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="+91-XXXXXXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-2">Service Required *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Benefits & Info */}
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-6 text-white">Why Contact Us?</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-600/20 to-orange-500/20 rounded-3xl border border-orange-500/30 p-8">
                <Clock className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-white">Quick Response Time</h3>
                <p className="text-slate-300 leading-relaxed">
                  We understand that time is valuable. Our team is committed to responding to all inquiries within 24 hours with detailed, transparent quotations and expert advice.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-6 text-white">Operating Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Monday - Friday</span>
                    <span className="text-white font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Saturday - Sunday</span>
                    <span className="text-white font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="pt-3 border-t border-slate-700">
                    <p className="text-orange-400 text-sm">24/7 Emergency Support Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-bold tracking-widest text-sm">OUR OFFICES</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
              Visit Us <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Anytime</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We have two strategic locations to serve you better across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-orange-500/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{office.title}</h3>
                    <p className="text-orange-400 font-semibold">{office.location}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-slate-400 text-sm font-semibold mb-2">Address:</h4>
                    <p className="text-slate-300 leading-relaxed">{office.address}</p>
                  </div>

                  <div>
                    <h4 className="text-slate-400 text-sm font-semibold mb-2">Phone:</h4>
                    <a
                      href={`tel:${office.phone}`}
                      className="text-orange-400 font-semibold hover:text-orange-300 transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>

                  <div>
                    <h4 className="text-slate-400 text-sm font-semibold mb-2">Hours:</h4>
                    <p className="text-slate-300">{office.hours}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-700">
                    <a
                      href={`tel:${office.phone}`}
                      className="inline-block bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                      Call This Office
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready for <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Hassle-Free</span> Relocation?
          </h2>
          <p className="text-slate-300 text-xl mb-8 max-w-2xl mx-auto">
            Don't wait! Get your free quote today and discover why thousands of customers trust RV Trans Logistics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+917988519924"
              className="bg-gradient-to-r from-orange-600 to-orange-500 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Call: +91-7988519924
            </a>
            <a
              href="mailto:rvtranslogistics@gmail.com"
              className="border-2 border-orange-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-500/10 transition-all duration-300"
            >
              Email: rvtranslogistics@gmail.com
            </a>
          </div>

          <p className="text-slate-400 text-sm">
            Free consultation • No obligation quotes • Dedicated support • 24/7 availability
          </p>
        </div>
      </section>
    </div>
  );
}
