import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from "../assets/carousel-image-1.jpg"
import image2 from "../assets/carousel-image-2.jpg"
import image3 from "../assets/carousel-image-3.jpg"

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const slides = [
    {
      id: 1,
      image: image1,
      title: 'Specialized Pediatric Care',
      subtitle: 'Gentle and Compassionate Healthcare for Children',
      cta1: 'Book Appointment',
      cta2: 'Meet Our Team'
    },
    {
      id: 2,
      image: image2,
      title: 'Child Wellness Programs',
      subtitle: 'Comprehensive Health Plans for Growing Kids',
      cta1: 'View Services',
      cta2: 'Learn More'
    },
    {
      id: 3,
      image: image3,
      title: '24/7 Emergency Care',
      subtitle: 'Immediate Pediatric Attention When You Need It Most',
      cta1: 'Emergency Info',
      cta2: 'Contact Now'
    },
  ];

  useEffect(() => {
    const spinnerTimeout = setTimeout(() => {
      setShowSpinner(false);
    }, 100);

    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearTimeout(spinnerTimeout);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [slides.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <>
      {showSpinner && (
        <div id="spinner" className="show bg-white fixed translate-middle w-full h-full top-1/2 left-1/2 flex items-center justify-center">
          <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-primary rounded-full" role="status" aria-label="loading">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      <div className="container-fluid p-0 relative">
        <div className="relative w-full overflow-hidden h-[650px] md:h-[700px]"> {/* Increased height */}
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
              className="absolute w-full h-full"
            >
              <img 
                src={slides[currentSlide].image} 
                alt={`Pediatric Slide ${currentSlide + 1}`} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-transparent bg-opacity-40 flex flex-col items-center justify-center">
                <motion.div
                  className="p-12 text-center"
                  style={{ maxWidth: '900px' }}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h5 className="text-white uppercase mb-3 text-lg md:text-xl font-medium tracking-wider">
                    {slides[currentSlide].title}
                  </h5>
                  <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                    {slides[currentSlide].subtitle}
                  </h1>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <motion.a
                      href="#appointment"
                      className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-md text-lg font-medium transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {slides[currentSlide].cta1}
                    </motion.a>
                    <motion.a
                      href="#contact"
                      className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 py-4 px-8 rounded-md text-lg font-medium transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {slides[currentSlide].cta2}
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <button 
            onClick={prevSlide} 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 transition-all duration-300 z-10"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 transition-all duration-300 z-10"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-8' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        {/* Your navbar content here */}
      </div>
    </>
  );
};

export default Carousel;
