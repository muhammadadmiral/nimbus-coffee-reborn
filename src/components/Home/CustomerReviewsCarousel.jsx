import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { review: "Best coffee in town!", customer: "@coffee_lover" },
  { review: "Such a smooth taste, I love it!", customer: "@javaqueen" },
  { review: "Nimbus Coffee never disappoints!", customer: "@dailybrew" },
];

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
    <div className="text-center mb-8">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-[#3b5f87] p-6 rounded-lg text-white shadow-lg">
            <p className="text-xl italic">"{testimonials[currentIndex].review}"</p>
            <p className="text-sm mt-4 font-semibold">{testimonials[currentIndex].customer}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-4">
        <button
          onClick={prevTestimonial}
          className="px-4 py-2 bg-[#6996c8] text-white rounded-lg mr-4"
        >
          Previous
        </button>
        <button
          onClick={nextTestimonial}
          className="px-4 py-2 bg-[#6996c8] text-white rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomerReviewsCarousel;
