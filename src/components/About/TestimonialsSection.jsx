import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { image: "/testi-nimbus-1.jpg", review: "Best coffee in town! ☕🔥", customer: "@coffee_lover" },
  { image: "/testi-nimbus-2.jpg", review: "Such a smooth taste, I love it! 💙", customer: "@javaqueen" },
  { image: "/testi-nimbus-3.jpg", review: "Nimbus Coffee never disappoints! ✨", customer: "@dailybrew" },
];

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

        <div className="relative w-full max-w-4xl mx-auto">
          <AnimatePresence>
            <motion.div
              key={testimonials[currentIndex].image}
              className="relative flex flex-col items-center text-white"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img 
                src={testimonials[currentIndex].image} 
                alt="Customer Testimonial"
                className="w-80 h-80 object-cover rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
              />
              <p className="mt-4 text-lg text-[#eeb296] font-semibold">
                "{testimonials[currentIndex].review}"
              </p>
              <p className="text-sm text-[#aa834c]">{testimonials[currentIndex].customer}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;
