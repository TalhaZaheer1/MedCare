import React from 'react';

const ServicesSection = () => {
const services = [
  {
    id: 1,
    title: 'Well-Child Checkups',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHBhZWRpYXRyaWNpYW4lMjBjaGVja3VwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    delay: '0.3s',
    description: 'Comprehensive physical exams and developmental screenings for children of all ages'
  },
  {
    id: 2,
    title: 'Vaccinations',
    image: 'https://img.freepik.com/free-vector/hand-drawn-needle-cartoon-illustration_23-2151311315.jpg?t=st=1743975694~exp=1743979294~hmac=1689c7dc24d7b5c6f5656fc099f5800175d8cf8afe7fc9ff23cab8dcce34d007&w=740',
    delay: '0.6s',
    description: 'Complete immunization schedules including flu shots and COVID-19 vaccines for children'
  },
  {
    id: 3,
    title: 'Acute Illness Care',
    image: 'https://img.freepik.com/free-photo/indoor-shot-little-girl-with-fair-hair-lying-her-bed-hugging-favourite-toy-having-unknown-hand-forehead-checking-temperature_176532-9504.jpg?t=st=1743975757~exp=1743979357~hmac=7291704e8074ebbe2939bb926b8aeaf6d2d7eb32ce7c6d28e90a1dbbff9531d0&w=826',
    delay: '0.9s',
    description: 'Same-day appointments for fevers, infections, injuries and other urgent concerns'
  },
  {
    id: 4,
    title: 'Developmental Screenings',
    image: 'https://img.freepik.com/free-vector/business-people-with-magnifying-glass-diagrams_1262-18919.jpg?t=st=1743975547~exp=1743979147~hmac=bef235792679248e2e585fba9517df62b1f7860f6150ec579cd6352020f4399b&w=740',
    delay: '1.2s',
    description: 'Early identification and intervention for developmental delays or learning differences'
  },
  {
    id: 5,
    title: 'Asthma & Allergy Management',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVkaWF0cmljaWFuJTIwYXN0aG1hfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    delay: '1.5s',
    description: 'Personalized treatment plans for respiratory conditions and allergic reactions'
  },
  {
    id: 6,
    title: 'Behavioral Health',
    image: 'https://img.freepik.com/free-vector/children-flat-set_98292-1087.jpg?t=st=1743975861~exp=1743979461~hmac=2da501c1f3565c6305154e1298f49ba6b7024f9026a10ea36c1a92a49f41b941&w=740',
    delay: '1.8s',
    description: 'Support for ADHD, anxiety, depression and other behavioral health concerns'
  }
];  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h5 className="relative inline-block text-blue-600 uppercase font-semibold mb-4">
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-200"></span>
            Our Services
          </h5>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            We Offer The Best Quality Pediatric Services
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group animate-fade-in-up rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: service.delay }}
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-transparent bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-40"></div>
              </div>
              <div className="bg-white p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Appointment CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Dental Services?</h2>
              <p className="text-gray-600 mb-6">
                Our team of experienced professionals uses the latest technology to provide your child with the best care. 
                We prioritize your comfort and satisfaction in every procedure.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Modern Equipment</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Painless Procedures</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Expert Doctors</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Affordable Pricing</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-600 rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center text-center p-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold text-white mb-4">Make Appointment</h3>
            <p className="text-blue-100 mb-6">
              Ready to transform your smile? Schedule your appointment today!
            </p>
            <h2 className="text-3xl font-bold text-white mb-8">+012 345 6789</h2>
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
