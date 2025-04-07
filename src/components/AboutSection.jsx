import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div className="w-full py-16 bg-white animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="w-full lg:w-7/12">
            <div className="mb-8">
              <h5 className="relative inline-block text-blue-600 uppercase font-semibold mb-4">
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-200"></span>
                Our Pediatric Practice
              </h5>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Compassionate Care for Your Child's Health Journey
              </h1>
            </div>
            
            <h4 className="text-gray-600 italic mb-6 text-lg">
              Where children feel safe, parents feel confident, and health thrives at every stage of development.
            </h4>
            
            <p className="text-gray-600 mb-8">
              Founded in 2010, our pediatric practice has been dedicated to providing exceptional healthcare for children from birth through adolescence. 
              Our child-friendly environment and specially trained staff ensure that every visit is as comfortable and positive as possible. 
              We combine evidence-based medicine with a warm, personalized approach to meet each child's unique needs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center mb-4">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h5 className="text-gray-800 font-medium">Board-Certified Pediatricians</h5>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h5 className="text-gray-800 font-medium">Child Development Specialists</h5>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center mb-4">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h5 className="text-gray-800 font-medium">Same-Day Sick Visits</h5>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h5 className="text-gray-800 font-medium">Accepting Most Insurances</h5>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/appointment" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-colors animate-fade-in text-center" 
                style={{ animationDelay: '0.6s' }}
              >
                Schedule a Visit
              </Link>
              <Link 
                to="/team" 
                className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-8 rounded-lg font-medium transition-colors animate-fade-in text-center" 
                style={{ animationDelay: '0.8s' }}
              >
                Meet Our Team
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-5/12" style={{ minHeight: '500px' }}>
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <img 
                src="/img/pediatric-about.jpg" 
                alt="Pediatrician with child" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-xl font-semibold mb-2">Our Promise</h3>
                <p className="text-white/90">
                  To provide the highest standard of pediatric care in a nurturing environment that puts children at ease.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-blue-50 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">15+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">10K+</h3>
            <p className="text-gray-600">Happy Families</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">24/7</h3>
            <p className="text-gray-600">Emergency Support</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">98%</h3>
            <p className="text-gray-600">Patient Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
