import React from "react";
import { motion } from "framer-motion";
import { Coffee, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/nimbus-kopi-susu.jpg')",
          backgroundAttachment: "fixed"
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#3b5f87]/90 backdrop-blur-sm" />
      </motion.div>

      {/* Content */}
      <div className="relative h-screen flex flex-col items-center justify-center px-4">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="mb-6 flex justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Coffee className="w-16 h-16 text-[#eeb296]" />
          </motion.div>

          <motion.h1 
            className="text-7xl md:text-8xl font-black mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Crafting <br />
            <span className="text-[#eeb296]">Perfect Moments</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            From bean to cup, we're passionate about delivering exceptional coffee experiences. 
            Every sip tells our story of dedication to quality and craft.
          </motion.p>

          <motion.div 
            className="space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.button
              className="px-8 py-4 bg-[#eeb296] text-[#2f4e6d] rounded-full text-lg font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Story
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full text-lg font-bold"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Meet The Team
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-10 h-10 text-white/50" />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-[#eeb296]/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-[#6996c8]/20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

export default HeroSection;