import React from "react";

const Banner = () => {
  return (
    <div className="w-full  relative py-5 min-h-60">
      <div className="container mx-auto md:mx-0 px-4">
        <div className="flex flex-col md:absolute w-full   justify-center  -top-20 z-10  md:flex-row">
          {/* Opening Hours Card */}
          <div
            className="w-full md:w-[25%] animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="bg-blue-600 flex flex-col p-5 h-[300px] rounded-t-2xl md:rounded-t-none md:rounded-l-2xl shadow-lg">
              <h3 className="text-white text-3xl font-bold mb-3">
                Opening Hours
              </h3>
              <div className="text-xl">
                {" "}
                <div className="flex justify-between text-white mb-3">
                  <h6 className="text-white">Mon - Fri</h6>
                  <p>8:00am - 9:00pm</p>
                </div>
                <div className="flex justify-between  text-white mb-3">
                  <h6 className="text-white">Saturday</h6>
                  <p>8:00am - 7:00pm</p>
                </div>
                <div className="flex justify-between text-white mb-3">
                  <h6 className="text-white">Sunday</h6>
                  <p>8:00am - 5:00pm</p>
                </div>
              </div>

              <a
                href="#appointment"
                className="mt-auto bg-white text-blue-600 py-2 px-4 rounded-md text-center font-medium hover:bg-gray-100 transition-colors"
              >
                Appointment
              </a>
            </div>
          </div>

          <div
            className="w-full md:w-[25%] animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="bg-purple-600 flex flex-col p-5 h-[300px]  shadow-lg">
              <h3 className="text-white text-3xl font-bold mb-3">
                Choose From a Variety of Courses
              </h3>

              <a
                href="#appointment"
                className="mt-auto bg-white text-blue-600 py-2 px-4 rounded-md text-center font-medium hover:bg-gray-100 transition-colors"
              >
                Buy Courses
              </a>
            </div>
          </div>

          {/* Make Appointment Card */}
          <div
            className="w-full md:w-[25%] animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="bg-secondary flex flex-col p-5 h-[300px] rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl shadow-lg">
              <h3 className="text-white text-3xl font-bold mb-3">
                Make Appointment
              </h3>
              <p className="text-white mb-2 text-xl">
                Ipsum erat ipsum dolor clita rebum no rebum dolores labore,
                ipsum magna at eos et eos amet.
              </p>
              <h2 className="text-white text-3xl font-extrabold my-auto ">
                +012 345 6789
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
