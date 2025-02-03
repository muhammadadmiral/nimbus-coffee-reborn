import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "./testimonialData";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        className="bg-[#040402]/80 p-8 rounded-2xl border border-[#aa834c]/20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-[#6996c8] mb-8">Customer Testimonials</h2>

        {/* Fixed height container to prevent layout shifts */}
        <div className="relative w-full max-w-4xl mx-auto min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex} // Use index as key for smoother transitions
              className="absolute inset-0 flex flex-col items-center text-white"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ 
                duration: 0.6,
                type: "tween" // More predictable animation
              }}
              layout // Helps with layout stability
            >
              <motion.img 
                src={testimonials[currentIndex].image} 
                alt="Customer Testimonial"
                className="w-80 h-80 object-cover rounded-xl shadow-lg mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <p className="mt-4 text-lg text-[#eeb296] font-semibold max-w-xl text-center">
                "{testimonials[currentIndex].review}"
              </p>
              <p className="text-sm text-[#aa834c] mt-2">
                {testimonials[currentIndex].customer}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;