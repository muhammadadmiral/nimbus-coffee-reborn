import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "./testimonialdata";

const CustomerReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextTestimonial, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-center mb-16 relative">
      <h2 className="text-3xl font-semibold text-[#eeb296] mb-12 mt-12">
        What People Are Saying
      </h2>

      {/* Fixed height container to prevent layout shifts */}
      <div className="min-h-[300px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }} // Changed y to x for horizontal movement
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ 
              duration: 0.4, 
              type: "tween" // More predictable animation
            }}
            layout // Helps with smoother transitions
            className="w-full max-w-2xl"
          >
            <div className="bg-[#3b5f87] p-10 rounded-lg text-white shadow-xl">
              <div className="flex items-center gap-6">
                <img
                  src={testimonials[currentIndex].photo}
                  alt={testimonials[currentIndex].customer}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <p className="text-xl italic mb-6">
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
      </div>
    </div>
  );
};

export default CustomerReviewsCarousel;