import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div 
      className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/nimbus-kopi-susu.jpg')", backgroundAttachment: "fixed" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content */}
      <motion.div 
        className="relative text-center text-white z-10 px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-6xl font-bold tracking-wide leading-tight"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          About <span className="text-[#6996c8]">Nimbus Coffee</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl mt-4 max-w-2xl mx-auto text-[#eeb296]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Experience the finest blend of coffee, crafted with passion and perfection.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
