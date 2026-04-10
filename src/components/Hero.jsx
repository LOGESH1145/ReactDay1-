import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[32rem] h-[32rem] rounded-full bg-brand-100 blur-3xl opacity-50 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 rounded-full bg-blue-100 blur-3xl opacity-50 z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-6 ring-1 ring-inset ring-brand-500/20">
          New Digital Experience
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
          Crafting Digital <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-blue-600">Masterpieces</span>
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto mb-10 leading-relaxed">
          We help forward-thinking brands build modern, scalable, and immersive digital solutions that drive growth and inspire users.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-full shadow-lg text-white bg-brand-600 hover:bg-brand-700 transition-all hover:shadow-brand-500/30 hover:-translate-y-0.5 duration-300">
            Get Started
          </a>
          <a href="#services" className="inline-flex justify-center items-center px-8 py-3.5 border-2 border-slate-200 text-base font-semibold rounded-full text-slate-700 bg-white hover:border-slate-300 hover:bg-slate-50 transition-all duration-300">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
