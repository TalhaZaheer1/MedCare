import React, { useEffect } from 'react';
import '@glidejs/glide/dist/css/glide.core.min.css';
import Glide from '@glidejs/glide';

const TestimonialSection = () => {
  // Color variables
  const colors = {
    primary: 'bg-white',       // Main brand color
    primaryLight: 'bg-blue-500',  // Lighter primary
    secondary: 'bg-secondary',     // Accent color
    textPrimary: 'text-blue-800', // Dark text
    textSecondary: 'text-secondary', // Accent text
    textLight: 'text-gray-100',   // Light text
  };

  useEffect(() => {
    new Glide('.glide', {
      type: 'carousel',
      perView: 1,
      autoplay: 4000,
      hoverpause: true,
      animationDuration: 600,
      gap: 0
    }).mount();
  }, []);

  const testimonials = [
    {
      id: 1,
      quote: "The pediatricians here are amazing with kids! My daughter used to be terrified of doctor visits, but now she actually looks forward to them. The staff goes above and beyond to make children feel comfortable.",
      name: "Sarah Johnson",
      role: "Mother of 2",
      image: "/img/testimonial-pediatric-1.jpg"
    },
    {
      id: 2,
      quote: "As a first-time mom, I was nervous about my baby's health. The doctors patiently answered all my questions and never made me feel rushed. We've been coming here for 3 years now and couldn't be happier with the care.",
      name: "Michael Chen",
      role: "Father",
      image: "/img/testimonial-pediatric-2.jpg"
    },
    {
      id: 3,
      quote: "When my son developed asthma, the pediatric team created a comprehensive treatment plan and educated us on managing his condition. Their expertise and compassion made all the difference during a scary time.",
      name: "Emily Wilson",
      role: "Mother of 3",
      image: "/img/testimonial-pediatric-3.jpg"
    }
  ];

  return (
    <div className={`w-full ${colors.primary} bg-opacity-95 py-20 my-20 animate-fade-in-up`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={`inline-block ${colors.textPrimary} uppercase tracking-widest text-sm font-semibold mb-4`}>
            Patient Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            What Families Say About Our Care
          </h2>
          <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
        </div>

        {/* Testimonial Carousel */}
        <div className="flex justify-center">
          <div className="w-full  lg:w-4/5 xl:w-3/4">
            <div className="glide relative">
              <div className="glide__track" data-glide-el="track">
                <div className="glide__slides">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="glide__slide py-4 px-2">
                      <div className={`testimonial-item p-8 lg:p-10 rounded-xl ${colors.primaryLight} bg-opacity-30 backdrop-blur-sm border border-white border-opacity-20`}>
                        <div className="text-center text-white">
                          <div className="flex justify-center mb-6">
                            <img 
                              className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-orange-400 shadow-lg"
                              src={testimonial.image} 
                              alt={testimonial.name}
                            />
                          </div>
                          <div className="flex justify-center mb-4">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                className="w-6 h-6 text-yellow-400 mx-1" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <blockquote className="text-lg lg:text-xl mb-8 px-20 leading-relaxed font-light italic">
                            "{testimonial.quote}"
                          </blockquote>
                          <div className="w-1/4 mx-auto border-t border-secondary mb-4"></div>
                          <h4 className="text-white text-xl font-semibold mb-1">{testimonial.name}</h4>
                          <p className={`text-secondary font-medium`}>{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <div className="glide__arrows" data-glide-el="controls">
                <button 
                  className={`glide__arrow glide__arrow--left absolute left-7 lg:-left-14 top-1/2 transform -translate-y-1/2 ${colors.secondary} hover:bg-secondary text-white p-3 rounded-full shadow-lg transition-colors`}
                  data-glide-dir="<"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className={`glide__arrow glide__arrow--right absolute right-7 lg:-right-14 top-1/2 transform -translate-y-1/2 ${colors.secondary} hover:bg-secondary text-white p-3 rounded-full shadow-lg transition-colors`}
                  data-glide-dir=">"
                  aria-label="Next testimonial"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Bullet Indicators */}
              <div className="glide__bullets flex justify-center mt-8" data-glide-el="controls[nav]">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className="glide__bullet w-3 h-3 mx-2 rounded-full bg-white bg-opacity-30 hover:bg-opacity-50 transition-all"
                    data-glide-dir={`=${index}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
