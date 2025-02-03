import React from "react";
import { motion } from "framer-motion";
import { Coffee, Users, Star, Heart } from "lucide-react";

const stats = [
  { 
    icon: Coffee, 
    value: "90+", 
    label: "Bottle Served",
    color: "#eeb296",
    detail: "Fresh brewed daily" 
  },
  { 
    icon: Users, 
    value: "60+", 
    label: "Happy Customers",
    color: "#6996c8",
    detail: "Growing community" 
  },
  { 
    icon: Star, 
    value: "4.9", 
    label: "Rating",
    color: "#ffd700",
    detail: "Customer satisfaction" 
  },
  { 
    icon: Heart, 
    value: "100%", 
    label: "Love for Coffee",
    color: "#ff6b6b",
    detail: "Passion in every cup" 
  }
];

const StatsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.h2 
        className="text-6xl font-black text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Why Choose 
        <span className="bg-gradient-to-r from-[#eeb296] to-[#ffffff] text-transparent bg-clip-text"> Nimbus Coffee?</span>
      </motion.h2>

      <motion.p 
        className="text-xl text-center text-white/80 mb-16 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Experience the difference in every cup we serve
      </motion.p>

      <motion.div 
        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 overflow-hidden">
              {/* Animated Background Gradient */}
              <div 
                className="absolute inset-0 bg-gradient-to-br opacity-20 transition-opacity duration-300 group-hover:opacity-30"
                style={{ 
                  backgroundImage: `linear-gradient(to bottom right, ${stat.color}, transparent)` 
                }}
              />

              {/* Icon */}
              <motion.div
                className="mb-6 relative"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center relative">
                  <stat.icon 
                    size={40} 
                    className="relative z-10"
                    style={{ color: stat.color }} 
                  />
                  <div 
                    className="absolute inset-0 blur-lg opacity-50"
                    style={{ backgroundColor: stat.color }}
                  />
                </div>
              </motion.div>

              {/* Value Counter */}
              <motion.h3 
                className="text-5xl font-black text-white mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {stat.value}
              </motion.h3>

              {/* Label */}
              <p className="text-lg font-medium text-white/80 mb-2">
                {stat.label}
              </p>

              {/* Detail - Appears on Hover */}
              <motion.p 
                className="text-sm text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 10 }}
                whileInView={{ y: 0 }}
              >
                {stat.detail}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StatsSection;