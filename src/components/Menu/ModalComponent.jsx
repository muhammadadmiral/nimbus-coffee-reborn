import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const Modal = ({ selectedItem, setSelectedItem }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedItem(null)}
    >
      <motion.div
        className="bg-[#3b5f87] p-8 rounded-2xl shadow-2xl max-w-2xl mx-4 text-white border border-[#aa834c]/30 backdrop-blur-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 left-4 text-[#eeb296] hover:text-white transition-colors"
          onClick={() => setSelectedItem(null)}
        >
          <FaArrowLeft size={24} />
        </button>

        <img
          src={selectedItem.image}
          alt={selectedItem.name}
          className="w-full h-72 object-cover rounded-xl mb-6 shadow-lg"
        />
        <h3 className="text-3xl font-bold text-white mb-4">{selectedItem.name}</h3>
        <p className="text-[#eeb296] text-lg mb-4">{selectedItem.description}</p>

        <div className="mb-4 text-[#eeb296] space-y-2">
          {selectedItem.variants.map((v, i) => (
            <div key={i} className="flex justify-between border-b border-[#aa834c]/40 pb-1">
              <span>{v.size}</span>
              <span>{v.price}</span>
            </div>
          ))}
        </div>

        <motion.button className="mt-4 w-full bg-[#aa834c] text-white py-3 rounded-lg transition-transform duration-300 hover:scale-105">
          Order Now
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
