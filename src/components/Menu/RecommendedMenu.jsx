import React from "react";
import { motion } from "framer-motion";

const RecommendedMenu = ({ menuItems, setSelectedItem }) => {
  return (
    <div className="mb-10">
      <h3 className="text-4xl font-semibold text-[#eeb296] mb-6">⭐ Recommended Menu</h3>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {menuItems.filter(item => item.recommended).map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#2f4e6d] p-6 rounded-2xl shadow-lg border border-[#aa834c]/30 flex-shrink-0 w-80 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.image} alt={item.name} className="w-full h-52 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-white">{item.name}</h3>
            <p className="text-[#eeb296]">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedMenu;
