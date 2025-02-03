import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingCoffeeElements = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderBean = (index) => {
    const size = ['w-6', 'w-8', 'w-10'][index % 3];
    const startX = Math.random() * windowSize.width;
    const endX = startX + (Math.random() * 200 - 100);

    return (
      <motion.div
        key={`bean-${index}`}
        className="fixed"
        style={{
          left: startX,
          bottom: -50
        }}
        initial={{ y: 0, opacity: 0, rotate: 0 }}
        animate={{
          y: [-50, -windowSize.height],
          x: [0, endX - startX],
          opacity: [0, 0.4, 0],
          rotate: 360
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          repeat: Infinity,
          delay: index * 1.5,
          ease: "linear"
        }}
      >
        <img 
          src="/single-coffee-beans.png"
          alt=""
          className={`${size} opacity-40`}
          style={{
            filter: "sepia(20%) hue-rotate(340deg)"
          }}
        />
      </motion.div>
    );
  };

  return (
    <div className="pointer-events-none">
      {[...Array(6)].map((_, i) => renderBean(i))}
    </div>
  );
};

export default FloatingCoffeeElements;