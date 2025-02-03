import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { 
    name: "Kopi Susu", 
    price: "Rp 20.000", 
    image: "/nimbus-kopi-susu.jpg", 
    description: "Kopi susu khas Nimbus Coffee dengan rasa yang creamy dan seimbang, dibuat dari campuran kopi premium dan susu segar yang memberikan rasa lembut di setiap tegukan."
  },
  { 
    name: "Butterscotch", 
    price: "Rp 25.000", 
    image: "/nimbus-coffee-butterscotch.jpg", 
    description: "Kopi dengan sentuhan butterscotch yang memberikan rasa manis dan lembut. Perpaduan yang sempurna untuk pecinta kopi dengan sedikit sentuhan karamel."
  }
];

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040402] to-[#351405] p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto"
      >
        <h2 className="text-6xl font-bold text-center mb-16">
          <span className="text-[#6996c8]">Our</span>
          <span className="text-[#eeb296]"> Menu</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-[#aa834c]/20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#6996c8] mb-2">{item.name}</h3>
              <p className="text-xl text-[#eeb296]">{item.price}</p>
              
              <motion.button
                className="mt-4 px-6 py-2 bg-[#aa834c] text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
              >
                View Details
              </motion.button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedItem && (
            <motion.div 
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
            >
              <motion.div 
                className="bg-gradient-to-br from-[#040402] to-[#351405] p-8 rounded-2xl shadow-2xl max-w-2xl mx-4 border border-[#aa834c]/20"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-4 right-4 text-[#eeb296] hover:text-white transition-colors"
                  onClick={() => setSelectedItem(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.name} 
                  className="w-full h-72 object-cover rounded-xl mb-6 shadow-lg"
                />
                <h3 className="text-3xl font-bold text-[#6996c8] mb-4">{selectedItem.name}</h3>
                <p className="text-[#eeb296] text-lg mb-4">{selectedItem.description}</p>
                <p className="text-2xl font-bold text-[#aa834c]">{selectedItem.price}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Menu;