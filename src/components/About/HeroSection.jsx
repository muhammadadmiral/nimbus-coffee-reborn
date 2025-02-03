import React, { useState } from "react";
import { motion } from "framer-motion";
import { Coffee, ArrowDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToTeam = () => {
    const teamElement = document.getElementById('team-section');
    if (teamElement) {
      const headerOffset = 100;
      const elementPosition = teamElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-[100svh] overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        animate={{
          backgroundPosition: isHovered ? "50% 60%" : "50% 50%"
        }}
        transition={{ duration: 1.5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{ 
          backgroundImage: "url('/nimbus-kopi-susu.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#3b5f87]/90"
          animate={{ opacity: isHovered ? 0.7 : 0.8 }}
        />
      </motion.div>

      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-overlay"
            style={{
              width: `clamp(60px, 15vw, 128px)`,
              height: `clamp(60px, 15vw, 128px)`,
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              background: i % 2 === 0 ? "#eeb296" : "#6996c8",
              filter: "blur(40px)"
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              delay: i * 1.5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="relative min-h-[100svh] flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="inline-block"
          >
            <motion.div
              className="relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Coffee className="w-16 h-16 sm:w-24 sm:h-24 text-[#eeb296]" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-7xl md:text-8xl font-black mt-6 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-white">Experience</span>
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-[#eeb296] to-[#6996c8] text-transparent bg-clip-text">
              Pure Bliss
            </span>
          </motion.h1>

          <motion.p 
            className="text-base sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Premium coffee crafted with passion, served with love
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Link to="/our-story" className="w-full sm:w-auto">
              <motion.button
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#eeb296] text-[#2f4e6d] rounded-full text-base sm:text-lg font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Our Story</span>
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>
            </Link>

            <motion.button
              onClick={scrollToTeam}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white rounded-full text-base sm:text-lg font-bold"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Meet The Team
            </motion.button>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-8 h-8 sm:w-12 sm:h-12 text-white/50" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;