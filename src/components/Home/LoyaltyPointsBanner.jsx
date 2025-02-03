import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Coffee, Gift, Award, ChevronRight } from "lucide-react";

const LoyaltyPointsBanner = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: <Coffee size={32} />,
      title: "Collect Points",
      description: "1 point for every 10k spent"
    },
    {
      icon: <Gift size={32} />,
      title: "Redeem Rewards",
      description: "Exclusive perks & free drinks"
    },
    {
      icon: <Award size={32} />,
      title: "Level Up",
      description: "Unlock premium benefits"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#5a8bc2] via-[#4a7ab2] to-[#2f4e6d] rounded-2xl overflow-hidden shadow-2xl">
      <motion.div 
        className="relative p-12 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: "url('/pattern.svg')",
            backgroundSize: "cover"
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.h2 
                className="text-6xl font-black leading-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Join Our
                <span className="block text-[#eeb296]">Rewards Program</span>
              </motion.h2>

              <motion.p 
                className="text-xl text-white/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Start your journey with exclusive perks, personalized rewards, and a coffee experience like never before.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4"
              >
                <Link to="/loyalty-points">
                  <motion.button 
                    className="group flex items-center gap-2 bg-[#eeb296] text-[#2f4e6d] px-8 py-4 rounded-full text-lg font-bold 
                    hover:bg-[#d68c5e] transition-all duration-300 shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight />
                    </motion.span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Right Content - Features */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="relative bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index }}
                  onHoverStart={() => setHoveredFeature(index)}
                  onHoverEnd={() => setHoveredFeature(null)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {hoveredFeature === index && (
                      <motion.div
                        className="absolute inset-0 border-2 border-white/40 rounded-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        layoutId="outline"
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoyaltyPointsBanner;