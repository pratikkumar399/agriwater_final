import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons

const testimonials = [
  {
    name: 'John Doe',
    role: 'Corn Farmer, Iowa',
    content:
      "AgriWater Insights has revolutionized how I manage water on my farm. I've seen a 20% reduction in water usage while maintaining crop yields.",
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Jane Smith',
    role: 'Vineyard Owner, California',
    content:
      "The predictive analytics have been a game-changer for our vineyard. We're now able to anticipate dry spells and adjust our irrigation accordingly.",
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Carlos Martinez',
    role: 'Wheat Farmer, Texas',
    content:
      "The dashboard is easy to use, and the water-saving recommendations have been invaluable for maintaining my farm's health in the dry season.",
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Marie Leblanc',
    role: 'Rice Farmer, Louisiana',
    content:
      "AgriWater helps me stay ahead of potential droughts. My crop health has improved significantly thanks to the insights I receive.",
    image:
      'https://images.unsplash.com/photo-1592595896551-8128f4d78cb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-r from-green-400 to-blue-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          What Our Users Say
        </h2>

        {/* Testimonial Card */}
        <div className="relative max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-16 h-16 rounded-full mr-4 border-2 border-blue-300"
            />
            <div>
              <h3 className="font-semibold text-gray-800">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaQuoteLeft className="text-blue-500 text-3xl mr-3" /> {/* Quote icon */}
            <p className="text-gray-700">{testimonials[currentIndex].content}</p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between mt-6">
            <button
              onClick={goToPrevious}
              className="text-green-600 hover:text-green-800 transition"
            >
              <FaChevronLeft size={30} />
            </button>
            <button
              onClick={goToNext}
              className="text-green-600 hover:text-green-800 transition"
            >
              <FaChevronRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
