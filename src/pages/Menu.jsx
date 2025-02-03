import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuItems from "../components/Menu/MenuItem";
import Modal from "../components/Menu/ModalComponent";
import RecommendedMenu from "../components/Menu/RecommendedMenu";


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
    recommended: true,
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5a8bc2] to-[#2f4e6d] p-10 relative">
      {/* Background Paralaks */}
      <div className="absolute inset-0 bg-fixed" style={{ backgroundImage: "url('/background-coffee.jpg')", opacity: 0.1 }}></div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto relative">
        <h2 className="text-6xl font-bold text-center mb-16">
          <span className="text-white">Our</span> <span className="text-[#eeb296]">Menu</span>
        </h2>

        {/* Recommended Menu */}
        <RecommendedMenu menuItems={menuItems} setSelectedItem={setSelectedItem} />

        {/* Menu Items */}
        <MenuItems menuItems={menuItems} setSelectedItem={setSelectedItem} />

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <Modal selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Menu;
