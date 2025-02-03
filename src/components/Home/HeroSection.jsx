import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div className="relative h-screen">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/nimbus-kopi-susu.jpg')" }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-8xl font-black text-white mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#eeb296] to-[#d68c5e]">
                Nimbus
              </span>
              <br />
              Coffee
            </h1>
            
            <p className="text-3xl text-white/90 mb-12">
              Experience Coffee Like Never Before
            </p>

            <motion.div 
              className="flex gap-6 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.button
                className="px-8 py-4 bg-[#eeb296] rounded-full text-lg font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-white text-white rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                Our Story
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 20] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;