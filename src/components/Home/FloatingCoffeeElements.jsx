import React from "react";
import { motion } from "framer-motion";

const FloatingCoffeeElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-5xl opacity-50"
          initial={{ y: "100vh", x: Math.random() * 100 - 50, rotate: 0 }}
          animate={{
            y: "-100vh",
            x: Math.random() * 200 - 100,
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
        >
          ☕
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingCoffeeElements;
