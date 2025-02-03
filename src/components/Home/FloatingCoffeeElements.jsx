import React from "react";
import { motion } from "framer-motion";

const FloatingCoffeeElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            opacity: 0,
            scale: Math.random() * 0.6 + 0.8,  // Random scale between 0.8 and 1.4
            y: "100vh", 
            x: Math.random() * 100 - 50,
          }}
          animate={{
            opacity: 1,
            scale: Math.random() * 0.4 + 1.1,  // Random scale between 1.1 and 1.5
            y: "-100vh",
            x: Math.random() * 300 - 150,  // Move across a wider area horizontally
            rotate: [0, 360],  // 360 degrees rotation
          }}
          transition={{
            duration: 12 + Math.random() * 8, // Random animation duration between 12s to 20s
            repeat: Infinity,
            delay: i * 0.5, // Slight delay for each element
            ease: "easeInOut",
          }}
        >
          <motion.img
            src="/coffee-beans.png"  // Ensure the path to the image is correct
            alt="Floating Coffee Bean"
            className="w-16 h-16 object-contain"  // Adjust size to fit the animation scale
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingCoffeeElements;
