import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "./testimonialdata"; // Import testimonial data

const CustomerReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="text-center mb-16">
      {/* Title above the carousel */}
      <h2 className="text-3xl font-semibold text-[#eeb296] mb-8">
        What People Are Saying
      </h2>

      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-[#3b5f87] p-8 rounded-lg text-white shadow-xl max-w-lg mx-auto flex items-center justify-center">
            {/* Testimonial with image */}
            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentIndex].photo}
                alt={testimonials[currentIndex].customer}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="text-xl italic mb-4">
                  "{testimonials[currentIndex].review}"
                </p>
                <p className="text-sm font-semibold">
                  {testimonials[currentIndex].customer}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Buttons below the carousel */}
      <div className="mt-6 flex justify-center space-x-6">
        <motion.button
          onClick={prevTestimonial}
          className="px-8 py-3 bg-[#6996c8] text-white rounded-lg hover:bg-[#6492c5] transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }} // No scale on tap to avoid movement
          style={{ zIndex: 10 }} // Keep the button on top of other elements
        >
          Previous
        </motion.button>
        <motion.button
          onClick={nextTestimonial}
          className="px-8 py-3 bg-[#6996c8] text-white rounded-lg hover:bg-[#6492c5] transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }} // No scale on tap to avoid movement
          style={{ zIndex: 10 }} // Keep the button on top of other elements
        >
          Next
        </motion.button>
      </div>
    </div>
  );
};

export default CustomerReviewsCarousel;
