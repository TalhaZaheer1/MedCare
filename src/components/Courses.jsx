import React from 'react';
import { Link } from 'react-router-dom';

const CoursesSection = () => {
const courses = [
  {
    id: 1,
    title: 'Pediatric Nutrition Certification',
    description: 'Master evidence-based approaches to childhood nutrition and dietary planning',
    price: '$399',
    duration: '6 Weeks',
    image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVkaWF0cmljJTIwbnV0cml0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    featured: false,
    delay: '0.1s'
  },
  {
    id: 2,
    title: 'Child Development Specialist',
    description: 'Comprehensive training in developmental milestones and early intervention',
    price: '$799',
    duration: '10 Weeks',
    image: 'https://img.freepik.com/free-photo/doctor-doing-their-work-pediatrics-office_23-2149224144.jpg?t=st=1743976018~exp=1743979618~hmac=848ead749ffc6e4cc008ac5947c76b583a2f45d449ca6162c192d44605bb4548&w=826',
    featured: true,
    delay: '0.2s'
  },
  {
    id: 3,
    title: 'Pediatric Emergency Care',
    description: 'Essential skills for managing medical emergencies in children',
    price: '$449',
    duration: '5 Weeks',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVkaWF0cmljJTIwZW1lcmdlbmN5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    featured: false,
    delay: '0.3s'
  },
  {
    id: 4,
    title: 'Adolescent Mental Health',
    description: 'Understanding and supporting mental health in teenage patients',
    price: '$599',
    duration: '8 Weeks',
    image: 'https://img.freepik.com/premium-vector/family-counseling-father-is-introducing-his-sons-lifestyle-accepting-frustrations-build-up-strength_610956-5.jpg?w=826',
    featured: false,
    delay: '0.4s'
  },
  {
    id: 5,
    title: 'Neonatal Resuscitation Program',
    description: 'Advanced training for newborn emergency care and stabilization',
    price: '$549',
    duration: '4 Weeks',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmVvbmF0YWwlMjBjYXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    featured: false,
    delay: '0.5s'
  },
  {
    id: 6,
    title: 'Pediatric Vaccination Protocols',
    description: 'Latest guidelines and best practices for childhood immunization',
    price: '$349',
    duration: '3 Weeks',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHBhZWRpYXRyaWNpYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    featured: true,
    delay: '0.6s'
  }
];  return (
    <div className="courses-section w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h5 className="relative inline-block text-blue-600 uppercase font-semibold mb-4">
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-200"></span>
            Pediatric Education
          </h5>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Advance Your Pediatric Practice
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from leading pediatric specialists and gain practical skills for better patient outcomes.
          </p>
        </div>

        {/* Courses Grid - Show only 4 courses in preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {courses.map((course) => (
            <div 
              key={course.id}
              className={`course-card group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up ${course.featured ? 'featured-card border-2 border-blue-500' : ''}`}
              style={{ animationDelay: course.delay }}
            >
              {course.featured && (
                <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  Featured
                </div>
              )}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6 bg-white">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2 py-1 rounded">
                    {course.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {course.duration}
                  </span>
                  <Link 
                    to={`/courses/${course.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link 
            to="/courses"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
