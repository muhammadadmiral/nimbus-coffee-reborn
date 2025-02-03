import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div 
      className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/coming-soon-nimbus.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#040402]/70"></div>
      
      {/* Floating coffee elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            initial={{ y: "100vh", x: Math.random() * 100 - 50 }}
            animate={{ 
              y: "-100vh",
              x: Math.random() * 200 - 100,
              rotate: [0, 360]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
          >
            ☕
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative text-center text-white p-8 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1 
          className="text-8xl font-bold tracking-wider"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <span className="text-[#6996c8]">Nimbus</span> Coffee
        </motion.h1>
        
        <motion.p 
          className="text-2xl mt-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-[#eeb296]">Light</span>, 
          <span className="text-[#6492c5]"> Fresh</span>, 
          <span className="text-[#aa834c]"> Like a Cloud</span> ☁️✨
        </motion.p>

        <motion.div 
          className="mt-12 space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Link to="/menu">
            <button className="px-8 py-4 bg-[#6996c8] text-white font-bold rounded-full hover:bg-[#6492c5] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#6996c8]/50">
              Explore Our Menu
            </button>
          </Link>
          <Link to="/about">
            <button className="px-8 py-4 bg-transparent border-2 border-[#aa834c] text-[#aa834c] font-bold rounded-full hover:bg-[#aa834c] hover:text-white transition-all duration-300 transform hover:scale-105">
              About Us
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;