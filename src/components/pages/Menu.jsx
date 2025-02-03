import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const menuItems = [
  {
    name: "Kopi Susu",
    image: "/nimbus-kopi-susu.jpg",
    description: "Kopi susu khas Nimbus Coffee dengan rasa creamy dan seimbang.",
    variants: [
      { size: "200 ML", price: "Rp 20.000" },
      { size: "250 ML", price: "Rp 23.000" },
      { size: "500 ML", price: "Rp 44.000" },
      { size: "1000 ML", price: "Rp 90.000" },
    ],
  },
  {
    name: "Butterscotch",
    image: "/nimbus-coffee-butterscotch.jpg",
    description: "Kopi dengan sentuhan butterscotch yang manis dan lembut.",
    variants: [
      { size: "200 ML", price: "Rp 25.000" },
      { size: "250 ML", price: "Rp 28.000" },
      { size: "500 ML", price: "Rp 52.000" },
      { size: "1000 ML", price: "Rp 100.000" },
    ],
  },
];

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    if (!selectedItem || !selectedSize) return;
    const itemToAdd = {
      ...selectedItem,
      selectedSize,
      quantity,
      price: selectedItem.variants.find((v) => v.size === selectedSize)?.price || "Rp 0",
    };
    setCart([...cart, itemToAdd]);
    setSelectedItem(null);
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040402] to-[#351405] p-10 relative">
      {/* Floating Cart */}
      <motion.div
        className="fixed top-6 right-6 bg-[#6996c8] p-4 rounded-full shadow-lg cursor-pointer flex items-center gap-2"
        whileHover={{ scale: 1.1 }}
        onClick={() => alert(JSON.stringify(cart, null, 2))}
      >
        <FaShoppingCart className="text-white text-xl" />
        {cart.length > 0 && (
          <span className="text-white text-sm font-bold">{cart.length}</span>
        )}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto">
        <h2 className="text-6xl font-bold text-center mb-16">
          <span className="text-[#6996c8]">Our</span> <span className="text-[#eeb296]">Menu</span>
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
              onClick={() => {
                setSelectedItem(item);
                setSelectedSize(item.variants[0].size);
              }}
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img src={item.image} alt={item.name} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>

              <h3 className="text-2xl font-bold text-[#6996c8] mb-2">{item.name}</h3>
              <p className="text-xl text-[#eeb296]">{item.variants[0].price} - {item.variants[item.variants.length - 1].price}</p>

              <motion.button className="mt-4 px-6 py-2 bg-[#aa834c] text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" whileHover={{ scale: 1.05 }}>
                View Details
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedItem(null)}>
              <motion.div className="bg-[#351405] p-8 rounded-2xl shadow-2xl max-w-2xl mx-4 text-white border border-[#aa834c]/20" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
                <button className="absolute top-4 right-4 text-[#eeb296] hover:text-white transition-colors" onClick={() => setSelectedItem(null)}>
                  ✖
                </button>
                
                <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-72 object-cover rounded-xl mb-6 shadow-lg" />
                <h3 className="text-3xl font-bold text-[#6996c8] mb-4">{selectedItem.name}</h3>
                <p className="text-[#eeb296] text-lg mb-4">{selectedItem.description}</p>

                {/* Size Selection */}
                <div className="mb-4">
                  <label className="text-[#eeb296] text-lg">Choose Size:</label>
                  <select className="w-full p-2 mt-2 bg-[#040402] border border-[#aa834c] text-white rounded-lg" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                    {selectedItem.variants.map((v, i) => (
                      <option key={i} value={v.size}>{v.size} - {v.price}</option>
                    ))}
                  </select>
                </div>

                {/* Quantity */}
                <div className="flex items-center justify-between">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>➖</button>
                  <span className="text-xl">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>➕</button>
                </div>

                {/* Add to Cart */}
                <motion.button onClick={addToCart} className="mt-4 w-full bg-[#6996c8] text-white py-3 rounded-lg" whileHover={{ scale: 1.05 }}>Add to Cart</motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Menu;
