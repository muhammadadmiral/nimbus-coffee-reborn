import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LoyaltyPointsBanner = () => {
  return (
    <div className="bg-gradient-to-b from-[#5a8bc2] to-[#2f4e6d] rounded-2xl overflow-hidden shadow-2xl">
      <motion.div 
        className="relative p-10 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Abstract Coffee Bean Background */}
        <div className="absolute inset-0 opacity-20">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="100%" 
            height="100%" 
            viewBox="0 0 1000 600"
          >
            <defs>
              <pattern id="coffeePattern" patternUnits="userSpaceOnUse" width="200" height="200">
                <path 
                  d="M100 50 Q150 100, 100 150 Q50 100, 100 50 Z" 
                  fill="rgba(255,255,255,0.1)" 
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#coffeePattern)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Unlock Your Coffee Journey
          </motion.h2>

          <motion.p 
            className="text-xl mb-8 text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Every cup tells a story. Collect points, savor exclusive rewards, 
            and transform your coffee experience with our loyalty program.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link to="/loyalty-points">
              <button 
                className="bg-white text-[#2f4e6d] px-10 py-4 rounded-full text-lg font-bold 
                hover:bg-white/90 transition-all duration-300 shadow-xl"
              >
                Discover Rewards
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoyaltyPointsBanner;