import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      className="relative h-screen bg-cover bg-center text-center text-white p-8"
      style={{
        backgroundImage: "url('/nimbus-kopi-susu.jpg')",
        backgroundAttachment: "fixed",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-7xl sm:text-8xl font-extrabold tracking-wide text-white leading-tight"
          initial={{ scale: 0.8, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <span className="text-[#eeb296]">Nimbus</span> Coffee
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl mt-6 max-w-2xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <span className="text-[#eeb296]">Light</span>,{" "}
          <span className="text-[#6492c5]">Fresh</span>,{" "}
          <span className="text-[#aa834c]">Like a Cloud</span> ☁️✨
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <a href="#menu">
            <motion.button
              className="px-8 py-4 bg-[#eeb296] text-[#040402] font-bold rounded-full shadow-lg hover:bg-[#d68c5e] transition-all duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
            >
              Explore Our Menu
            </motion.button>
          </a>
        </motion.div>

        {/* Additional Section if needed */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
        >
          <a href="#about">
            <motion.button
              className="px-8 py-4 bg-transparent border-2 border-[#aa834c] text-[#aa834c] font-bold rounded-full hover:bg-[#aa834c] hover:text-white transition-all duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
            >
              About Us
            </motion.button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
