import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "./testimonialdata";
import { Star, ChevronLeft, ChevronRight, Badge, Instagram, Twitter, Youtube } from "lucide-react";

const CustomerReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderSocialLinks = (socialMedia) => {
    const icons = {
      instagram: <Instagram className="w-5 h-5" />,
      twitter: <Twitter className="w-5 h-5" />,
      youtube: <Youtube className="w-5 h-5" />
    };

    return (
      <div className="flex gap-3 mt-4">
        {Object.entries(socialMedia).map(([platform, handle]) => (
          <motion.a
            key={platform}
            href={`https://www.${platform}.com/${handle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {icons[platform]}
          </motion.a>
        ))}
      </div>
    );
  };

  const renderRating = (rating) => (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <Star
            className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="py-16 relative">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-4xl font-bold text-[#eeb296]">What People Are Saying</h2>
        <p className="text-white/80 mt-4">Reviews from our valued customers</p>
      </motion.div>

      <div 
        className="relative min-h-[400px] max-w-4xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full"
          >
            <div className="bg-gradient-to-br from-[#3b5f87] to-[#2f4e6d] p-8 rounded-2xl shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <motion.img
                    src={testimonials[currentIndex].photo}
                    alt={testimonials[currentIndex].customer}
                    className="w-24 h-24 rounded-full object-cover"
                    whileHover={{ scale: 1.1 }}
                  />
                  {testimonials[currentIndex].verified && (
                    <Badge className="absolute -bottom-2 -right-2 w-6 h-6 text-blue-400" />
                  )}
                </div>

                <div className="flex-1 text-center md:text-left">
                  {renderRating(testimonials[currentIndex].rating)}
                  
                  <p className="text-xl md:text-2xl text-white mb-4 italic">
                    "{testimonials[currentIndex].review}"
                  </p>
                  
                  <div>
                    <p className="font-bold text-[#eeb296]">
                      {testimonials[currentIndex].customer}
                    </p>
                    <p className="text-sm text-white/60">
                      {testimonials[currentIndex].location} • {new Date(testimonials[currentIndex].date).toLocaleDateString()}
                    </p>
                    {renderSocialLinks(testimonials[currentIndex].socialMedia)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute -left-12 top-1/2 -translate-y-1/2">
          <motion.button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        <div className="absolute -right-12 top-1/2 -translate-y-1/2">
          <motion.button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        {/* Indicators */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-[#eeb296]" : "bg-white/20"
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewsCarousel;