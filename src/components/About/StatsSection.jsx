import React from "react";
import { motion } from "framer-motion";
import { FaCoffee, FaUsers, FaStar, FaHeart } from "react-icons/fa";

const stats = [
  { icon: FaCoffee, value: "90+", label: "Bottle Served" },
  { icon: FaUsers, value: "60+", label: "Happy Customers" },
  { icon: FaStar, value: "4.9", label: "Rating" },
  { icon: FaHeart, value: "100%", label: "Love for Coffee" },
];

const StatsSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2 
        className="text-5xl font-bold text-center mb-12 text-[#eeb296]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Why <span className="text-[#6996c8]">Nimbus Coffee?</span>
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="relative text-center p-8 rounded-xl bg-gradient-to-b from-[#3b5f87] to-[#2e4b6e] shadow-lg border border-[#aa834c]/30 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Efek Glow di Background */}
            <div className="absolute inset-0 bg-[#6996c8]/20 blur-3xl opacity-30"></div>

            {/* Icon dengan Efek Glow */}
            <motion.div
              className="flex justify-center items-center mb-4"
              whileHover={{ scale: 1.1 }}
            >
              <stat.icon className="text-5xl text-[#eeb296] drop-shadow-lg" />
            </motion.div>

            <h3 className="text-4xl font-extrabold text-white">{stat.value}</h3>
            <p className="text-lg text-[#eeb296]">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
