import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch this data based on the ID
  const course = {
    id: 1,
    title: 'Pediatric Nutrition Certification',
    description: 'Master evidence-based approaches to childhood nutrition and dietary planning',
    longDescription: 'This comprehensive course covers nutritional requirements for children from infancy through adolescence. You will learn assessment techniques, dietary planning strategies, and intervention approaches for common nutritional challenges in pediatric populations. The course includes case studies, practical exercises, and the latest research in pediatric nutrition.',
    price: '$399',
    duration: '6 Weeks',
    sessions: '12 Online Sessions',
    certification: 'CPN (Certified Pediatric Nutritionist)',
    instructor: 'Dr. Sarah Johnson',
    instructorBio: 'Board-certified pediatric nutritionist with 15 years of clinical experience. Author of "Nutritional Foundations for Healthy Children".',
    image: '/img/pediatric-course-1.jpg',
    syllabus: [
      'Week 1: Nutritional Requirements by Age Group',
      'Week 2: Assessment Techniques',
      'Week 3: Dietary Planning Strategies',
      'Week 4: Special Nutritional Needs',
      'Week 5: Counseling Families',
      'Week 6: Case Studies & Certification Exam'
    ],
    features: [
      '24/7 access to course materials',
      'Weekly live Q&A sessions',
      'Practical case studies',
      'Downloadable resources',
      'Professional certification'
    ]
  };

  return (
    <div className="course-detail w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Course Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="relative h-64 w-full">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {course.duration}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{course.title}</h1>
                <p className="text-blue-600 font-medium mb-4">{course.instructor}</p>
                <p className="text-gray-700 mb-6">{course.longDescription}</p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Course Syllabus</h3>
                  <ul className="space-y-2">
                    {course.syllabus.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">What You'll Learn</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.features.map((feature, index) => (
                      <div key={index} className="bg-blue-50 p-4 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-4">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-gray-800">{course.price}</span>
                  <span className="bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded">
                    {course.certification}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{course.sessions}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 mb-4">
                  Enroll Now
                </button>
                <button className="w-full bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
                  Add to Wishlist
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">About the Instructor</h3>
                <div className="flex items-center mb-4">
                  <img 
                    src="/img/instructor.jpg" 
                    alt={course.instructor}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">{course.instructor}</h4>
                    <p className="text-sm text-gray-600">Pediatric Nutrition Specialist</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{course.instructorBio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
