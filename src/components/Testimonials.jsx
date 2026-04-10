import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechFlow',
      review: "Working with this team was an absolute pleasure. They took our vision and transformed it into a stunning reality. The new platform has increased our conversion rate by over 40%.",
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, InnovateCo',
      review: "The level of professionalism and technical expertise is unmatched. They don't just write code, they understand the business goals behind the project and deliver accordingly.",
      avatar: 'MC'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Founder, StyleSpace',
      review: "Our app's user experience is now incredibly smooth and intuitive. The feedback from our customers has been overwhelmingly positive since the redesign.",
      avatar: 'ER'
    }
  ];

  return (
    <section className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm text-brand-600 font-bold tracking-widest uppercase mb-3">Testimonials</h2>
          <p className="text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            What Our Clients Say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-3xl relative border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex text-amber-400 mb-6 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 relative z-10 text-lg leading-relaxed">
                "{t.review}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 bg-gradient-to-tr from-brand-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg">{t.name}</h4>
                  <p className="text-sm text-slate-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
