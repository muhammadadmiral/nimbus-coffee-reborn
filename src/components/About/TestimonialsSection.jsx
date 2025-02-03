import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "./testimonialData";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-24 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#040402] to-[#1a1a1a]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-5xl font-black mb-4">
            What Our <span className="text-[#eeb296]">Customers</span> Say
          </h2>
          <p className="text-white/60">Real stories from coffee lovers</p>
        </motion.div>

        <div 
          className="max-w-6xl mx-auto relative min-h-[600px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ 
                opacity: 0,
                x: direction > 0 ? 1000 : -1000,
                scale: 0.8
              }}
              animate={{ 
                opacity: 1,
                x: 0,
                scale: 1
              }}
              exit={{ 
                opacity: 0,
                x: direction < 0 ? 1000 : -1000,
                scale: 0.8
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="absolute inset-0"
            >
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-3xl p-12 shadow-2xl border border-white/5">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <Quote className="text-[#eeb296] w-16 h-16 mb-8 opacity-50" />
                    <motion.p 
                      className="text-2xl text-white leading-relaxed mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      "{testimonials[currentIndex].review}"
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="text-[#eeb296] font-bold text-xl mb-2">
                        {testimonials[currentIndex].customer}
                      </p>
                      {testimonials[currentIndex].location && (
                        <p className="text-white/60">
                          {testimonials[currentIndex].location}
                        </p>
                      )}
                    </motion.div>
                  </div>

                  <motion.div
                    className="relative aspect-square"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#eeb296]/20 to-transparent rounded-2xl -rotate-6 scale-105" />
                    <img 
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].customer}
                      className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 space-y-4">
            <motion.button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
          </div>

          <div className="absolute -right-20 top-1/2 -translate-y-1/2 space-y-4">
            <motion.button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Progress Indicators */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#eeb296]' : 'bg-white/20'
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;