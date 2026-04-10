import React from 'react';
import { Layout, Smartphone, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Create stunning, responsive, and user-centric websites that look perfect on any device and screen size.',
      icon: <Layout className="w-8 h-8 text-brand-500" />,
    },
    {
      title: 'Mobile Apps',
      description: 'Build native and cross-platform mobile experiences that engage your audience seamlessly anywhere.',
      icon: <Smartphone className="w-8 h-8 text-brand-500" />,
    },
    {
      title: 'Custom Software',
      description: 'Develop tailored software solutions that streamline operations, scale infrastructure, and accelerate growth.',
      icon: <Code className="w-8 h-8 text-brand-500" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm text-brand-600 font-bold tracking-widest uppercase mb-3">Our Services</h2>
          <p className="text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            What We Do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 bg-slate-50 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-100 hover:border-brand-200">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
