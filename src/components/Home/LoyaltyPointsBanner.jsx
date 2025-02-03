import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link untuk navigasi

const LoyaltyPointsBanner = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-[#6996c8] to-[#4069a0] text-white py-8 text-center rounded-xl shadow-lg mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        position: "relative", // Tambahkan posisi relative pada container
        zIndex: 10, // Pastikan div ini tetap berada di atas elemen lain
        pointerEvents: "auto", // Pastikan elemen ini bisa di klik
      }}
    >
      <h3 className="text-3xl font-semibold mb-4">Earn Loyalty Points with Every Purchase!</h3>
      <p className="text-lg mb-6">
        Join our loyalty program to get exclusive rewards and discounts.
      </p>
      <Link to="/loyalty-points">
        <motion.button
          className="bg-[#eeb296] text-[#040402] px-6 py-3 rounded-full font-semibold hover:bg-[#d68c5e] transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          style={{
            position: "relative", // Menambahkan relative pada tombol
            zIndex: 20, // Pastikan tombol berada di atas semua elemen
          }}
        >
          Learn More
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default LoyaltyPointsBanner;
