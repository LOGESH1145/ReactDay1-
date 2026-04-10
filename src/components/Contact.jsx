import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[30rem] h-[30rem] rounded-full bg-brand-500 blur-[120px] opacity-20 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] rounded-full bg-blue-500 blur-[120px] opacity-20 pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="mb-16 lg:mb-0">
            <h2 className="text-sm text-brand-400 font-bold tracking-widest uppercase mb-3">Contact Us</h2>
            <p className="text-3xl leading-tight font-extrabold tracking-tight text-white md:text-5xl mb-6">
              Let's build something amazing together
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-lg leading-relaxed">
              Have a project in mind? We'd love to hear about it. Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-400 border border-white/10 shadow-lg backdrop-blur-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Email us at</p>
                  <p className="text-white font-semibold text-lg">hello@brand.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-400 border border-white/10 shadow-lg backdrop-blur-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Call us</p>
                  <p className="text-white font-semibold text-lg">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-400 border border-white/10 shadow-lg backdrop-blur-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Visit us</p>
                  <p className="text-white font-semibold text-lg pt-1">123 Innovation Drive, Tech City</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative z-10 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2 mt-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all bg-slate-50 focus:bg-white text-slate-900 shadow-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2 mt-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all bg-slate-50 focus:bg-white text-slate-900 shadow-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2 mt-1">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all bg-slate-50 focus:bg-white text-slate-900 shadow-sm resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-brand-600 text-white font-bold text-lg py-4 px-8 rounded-2xl hover:bg-brand-700 transition-all hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
