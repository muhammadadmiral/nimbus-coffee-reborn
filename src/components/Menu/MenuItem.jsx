import React from "react";
import { motion } from "framer-motion";

const MenuItems = ({ menuItems, setSelectedItem }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {menuItems.map((item, index) => (
        <motion.div
          key={index}
          className="group relative bg-[#3b5f87] p-6 rounded-2xl shadow-xl border border-[#aa834c]/30 overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[#aa834c]/50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          onClick={() => setSelectedItem(item)}
        >
          <div className="relative overflow-hidden rounded-xl mb-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover rounded-lg transform group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>

          <div className="mt-4 text-[#eeb296] space-y-2">
            {item.variants.map((v, i) => (
              <div key={i} className="flex justify-between border-b border-[#aa834c]/40 pb-1">
                <span>{v.size}</span>
                <span>{v.price}</span>
              </div>
            ))}
          </div>

          <motion.button className="mt-4 px-6 py-2 bg-[#aa834c] text-white rounded-full transition-transform duration-300 group-hover:scale-105">
            View Details
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
};

export default MenuItems;
