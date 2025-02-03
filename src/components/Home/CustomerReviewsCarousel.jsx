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
    <div className="text-center mb-16 relative">
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
          <div className="bg-[#3b5f87] p-8 rounded-lg text-white shadow-xl max-w-lg mx-auto flex items-center justify-center relative">
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

            {/* Previous Button */}
            <motion.button
              onClick={prevTestimonial}
              className="absolute left-[-120px] top-1/2 transform -translate-y-1/2 px-6 py-3 bg-[#6996c8] text-white rounded-lg hover:bg-[#6492c5] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ zIndex: 10 }}
            >
              Previous
            </motion.button>

            {/* Next Button */}
            <motion.button
              onClick={nextTestimonial}
              className="absolute right-[-90px] top-1/2 transform -translate-y-1/2 px-6 py-3 bg-[#6996c8] text-white rounded-lg hover:bg-[#6492c5] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ zIndex: 10 }}
            >
              Next
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CustomerReviewsCarousel;
