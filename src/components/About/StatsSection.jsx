import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Users, Star, Heart } from "lucide-react";

const stats = [
  { 
    icon: Coffee, 
    value: "90+", 
    label: "Bottle Served",
    color: "#eeb296",
    detail: "Fresh brewed daily",
    percentage: 90
  },
  { 
    icon: Users, 
    value: "60+", 
    label: "Happy Customers",
    color: "#6996c8",
    detail: "Growing community",
    percentage: 60
  },
  { 
    icon: Star, 
    value: "4.9", 
    label: "Rating",
    color: "#ffd700",
    detail: "Customer satisfaction",
    percentage: 98
  },
  { 
    icon: Heart, 
    value: "100%", 
    label: "Love for Coffee",
    color: "#ff6b6b",
    detail: "Passion in every cup",
    percentage: 100
  }
];

const StatsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <motion.div className="text-center mb-12">
        <motion.h2 
          className="text-4xl sm:text-6xl font-black mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose
          <span className="bg-gradient-to-r from-[#eeb296] to-[#ffffff] text-transparent bg-clip-text"> Nimbus?</span>
        </motion.h2>

        <motion.p 
          className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Experience the difference in every cup we serve
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="group cursor-pointer"
          >
            <motion.div 
              className="relative bg-white/10 backdrop-blur-lg p-4 sm:p-8 rounded-2xl border border-white/20 overflow-hidden h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Progress Circle */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="none"
                  stroke={stat.color}
                  strokeWidth="1"
                  strokeDasharray="283"
                  initial={{ strokeDashoffset: 283 }}
                  whileInView={{ 
                    strokeDashoffset: 283 - (283 * stat.percentage / 100),
                    transition: { duration: 1.5, ease: "easeOut" }
                  }}
                  className="opacity-10"
                />
              </svg>

              <motion.div 
                className="mb-4 sm:mb-6"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto flex items-center justify-center relative">
                  <stat.icon 
                    size={32} 
                    className="relative z-10"
                    style={{ color: stat.color }} 
                  />
                  <motion.div 
                    className="absolute inset-0 blur-lg"
                    animate={{ 
                      opacity: hoveredIndex === index ? 0.7 : 0.3
                    }}
                    style={{ backgroundColor: stat.color }}
                  />
                </div>
              </motion.div>

              <motion.h3 
                className="text-3xl sm:text-4xl font-black text-white mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.h3>

              <p className="text-sm sm:text-base font-medium text-white/80 mb-2">
                {stat.label}
              </p>

              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <p className="text-xs sm:text-sm text-white/60">
                      {stat.detail}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r"
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${stat.color}, transparent)`
                }}
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;