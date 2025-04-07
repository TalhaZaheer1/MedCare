import React from 'react';

const AppointmentSection = () => {
  return (
    <div className="appointment-section w-full bg-blue-600 bg-[url('/img/pediatric-bg.jpg')] bg-cover bg-center my-12 py-12 animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 py-12 px-4 lg:px-8">
            <div className="text-content">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted Pediatric Care for Your Child's Health Journey
              </h1>
              <p className="text-white font-semibold text-lg">
                Our board-certified pediatricians provide compassionate care for children from birth through adolescence. 
                We offer well-child visits, immunizations, sick visits, and specialized care in a child-friendly environment. 
                Your child's health and comfort are our top priorities.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-1/2">
            <div className="appointment-form h-full flex flex-col justify-center items-center p-8 lg:p-12 bg-white/10 backdrop-blur-sm rounded-lg animate-zoom-in">
              <h1 className="text-3xl font-bold text-white mb-8">Schedule Pediatric Visit</h1>
              <form className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <select className="w-full bg-white/90 border-0 rounded-md p-4 text-gray-800 focus:ring-2 focus:ring-primary h-[55px]">
                      <option selected>Select Visit Type</option>
                      <option value="1">Well-Child Checkup</option>
                      <option value="2">Sick Visit</option>
                      <option value="3">Vaccination</option>
                      <option value="4">Developmental Screening</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full bg-white/90 border-0 rounded-md p-4 text-gray-800 focus:ring-2 focus:ring-primary h-[55px]">
                      <option selected>Select Pediatrician</option>
                      <option value="1">Dr. Emily Rodriguez</option>
                      <option value="2">Dr. James Wilson</option>
                      <option value="3">Dr. Sarah Chen</option>
                      <option value="4">Dr. Michael Johnson</option>
                    </select>
                  </div>
                  <div>
                    <input 
                      type="text" 
                      className="w-full bg-white/90 border-0 rounded-md p-4 text-gray-800 focus:ring-2 focus:ring-green-500 h-[55px]" 
                      placeholder="Child's Name" 
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      className="w-full bg-white/90 border-0 rounded-md p-4 text-gray-800 focus:ring-2 focus:ring-green-500 h-[55px]" 
                      placeholder="Parent/Guardian Name" 
                    />
                  </div>
                  <div>
                    <input 
                      type="date" 
                      className="w-full bg-white/90 border-0 rounded-md p-4 text-gray-800 focus:ring-2 focus:ring-green-500 h-[55px]"
                      placeholder="Appointment Date"
                    />
                  </div>
                  <div>
                    <input 
                      type="time" 
                      className="w-full bg-white/90 border-0 rounded-md p-4 text-gray-800 focus:ring-2 focus:ring-green-500 h-[55px]"
                      placeholder="Preferred Time"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button 
                      type="submit" 
                      className="w-full bg-secondary hover:bg-white hover:text-secondary text-white font-bold py-4 px-6 rounded-md transition-colors duration-300"
                    >
                      Schedule Appointment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;
