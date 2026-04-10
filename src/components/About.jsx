import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-brand-400 to-blue-600 p-8 flex items-center justify-center min-h-[400px]">
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                   <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-center items-center text-white transform -translate-y-4 shadow-lg">
                     <Users size={40} className="mb-4 opacity-90" />
                     <span className="text-3xl font-bold">50+</span>
                     <span className="text-sm font-medium opacity-80 mt-1">Team Members</span>
                   </div>
                   <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-center items-center text-white transform translate-y-4 shadow-lg">
                     <Target size={40} className="mb-4 opacity-90" />
                     <span className="text-3xl font-bold">200+</span>
                     <span className="text-sm font-medium opacity-80 mt-1">Projects Done</span>
                   </div>
                   <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-center items-center text-white col-span-2 mt-4 shadow-lg">
                     <Zap size={40} className="mb-4 opacity-90" />
                     <span className="text-2xl font-bold text-center">Fast & Reliable Delivery</span>
                   </div>
                </div>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-200 rounded-full blur-2xl opacity-60 z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-60 z-[-1]"></div>
          </div>
          
          <div>
            <h2 className="text-sm text-brand-600 font-bold tracking-widest uppercase mb-3">About Us</h2>
            <p className="text-3xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Empowering businesses through innovative technology
            </p>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Founded in 2020, we are a team of passionate designers, developers, and strategists. We believe in the power of technology to transform the way businesses operate and interact with their customers.
              </p>
              <p>
                Our approach combines deep technical expertise with beautiful, user-centric design. We don't just build software; we craft experiences that leave a lasting impression and drive measurable results.
              </p>
            </div>
            
            <div className="mt-10 flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-brand-600 font-bold text-2xl">✓</span>
              </div>
              <p className="text-slate-800 font-semibold text-lg leading-snug">Committed to excellence in every pixel and line of code.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
