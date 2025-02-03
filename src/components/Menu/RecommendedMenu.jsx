import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const RecommendedMenu = ({ items, onItemSelect }) => {
  if (items.length === 0) return null;

  return (
    <div className="mb-10">
      <h3 className="text-3xl font-semibold text-[#eeb296] mb-6">⭐ Recommended</h3>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-[#2f4e6d] p-4 rounded-2xl w-72 flex-shrink-0 transform hover:scale-105 transition-transform"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onItemSelect(item)}
          >
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-48 object-cover rounded-lg mb-4" 
            />
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-bold text-white">{item.name}</h4>
              <div className="flex items-center text-[#eeb296]">
                <FaStar className="mr-1" />
                {item.rating}
              </div>
            </div>
            <p className="text-[#eeb296] mt-2 line-clamp-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedMenu;