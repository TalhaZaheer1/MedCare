import React from 'react';
import { Link } from 'react-router-dom';

const CoursesPage = () => {
  const allCourses = [
    {
      id: 1,
      title: 'Pediatric Nutrition Certification',
      description: 'Master evidence-based approaches to childhood nutrition and dietary planning',
      longDescription: 'This comprehensive course covers nutritional requirements for children from infancy through adolescence. Learn to assess dietary needs, create meal plans, and address common nutritional challenges in pediatric practice.',
      price: '$399',
      duration: '6 Weeks',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmVvbmF0YWwlMjBjYXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      featured: false,
      instructor: 'Dr. Sarah Johnson',
      certification: 'CPN (Certified Pediatric Nutritionist)'
    },
    {
      id: 2,
      title: 'Child Development Specialist',
      description: 'Comprehensive training in developmental milestones and early intervention',
      longDescription: 'Gain in-depth knowledge of child development from birth to adolescence. Learn assessment techniques, early intervention strategies, and how to support families through developmental challenges.',
      price: '$799',
      duration: '10 Weeks',
      image: 'https://img.freepik.com/free-photo/doctor-doing-their-work-pediatrics-office_23-2149224144.jpg?t=st=1743976018~exp=1743979618~hmac=848ead749ffc6e4cc008ac5947c76b583a2f45d449ca6162c192d44605bb4548&w=826',
      featured: true,
      instructor: 'Dr. Michael Chen',
      certification: 'CDS (Child Development Specialist)'
    },
    // Add all 8 courses here with extended details
    // ... (additional courses)
  ];

  return (
    <div className="courses-page w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h5 className="relative inline-block text-blue-600 uppercase font-semibold mb-4">
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-200"></span>
            Our Courses
          </h5>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Pediatric Professional Development
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive training programs designed for pediatric healthcare providers.
          </p>
        </div>

        {/* Filter/Search Section */}
        <div className="mb-12 bg-white p-6 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-full md:w-1/3">
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full md:w-1/3">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Categories</option>
                <option value="nutrition">Nutrition</option>
                <option value="development">Development</option>
                <option value="emergency">Emergency Care</option>
                <option value="mental-health">Mental Health</option>
              </select>
            </div>
            <div className="w-full md:w-1/3">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Sort By</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>
        </div>

        {/* All Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allCourses.map((course) => (
            <div 
              key={course.id}
              className="course-card bg-white group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
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
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2 py-1 rounded">
                    {course.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {course.duration}
                  </span>
                  <span className="text-sm text-gray-500">
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    {course.instructor}
                  </span>
                </div>
                <Link 
                  to={`/courses/${course.id}`}
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <button className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-blue-600 font-medium">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
