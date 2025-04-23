import React, { useState } from 'react';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={18}
        className={`${
          index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Trusted by 900+ Users
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear what our customers have to say about their experience with zRad Services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-lg p-8 md:p-12">
            <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
              <div className="text-6xl text-blue-500 opacity-30 font-serif">"</div>
            </div>
            
            <div className="relative z-10">
              <div className="flex mb-6">
                {renderStars(testimonials[activeIndex].rating)}
              </div>
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 italic">
                "{testimonials[activeIndex].content}"
              </p>
              
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[activeIndex].name.split(' ').map(name => name[0]).join('')}
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-500 shadow-md transition-colors"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-500 shadow-md transition-colors"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  activeIndex === index ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                } transition-colors`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;