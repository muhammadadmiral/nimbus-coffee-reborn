import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaArrowUp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from "/logo-nimbus.jpg"; // pastikan pathnya benar


const Footer = () => {
  const [email, setEmail] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setShowNotification(true);
      setEmail('');
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#040402] to-[#351405] text-white">
   {/* Menghapus tombol panah */}




      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#6996c8]">Stay Connected</h3>
            <form onSubmit={handleSubscribe} className="relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#aa834c]/30 focus:border-[#6996c8] focus:outline-none focus:ring-2 focus:ring-[#6996c8]/50 transition-all"
              />
              <motion.button 
                type="submit"
                className="mt-3 w-full bg-[#6996c8] px-6 py-3 rounded-lg hover:bg-[#6492c5] transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe to Newsletter
              </motion.button>
            </form>
          </div>
<div className="text-center space-y-4">
  <div className="h-20 w-20 mx-auto">
    <img
      src={logo}  // Pastikan Anda sudah mengimpor logo dari file yang sesuai
      alt="Nimbus Coffee"
      className="h-full w-full object-contain rounded-full"
    />
  </div>
  <div>
    <p className="text-2xl font-bold text-[#eeb296]">Nimbus Coffee</p>
    <p className="text-[#aa834c] mt-2">Jl. Muhammad Ali II no 29, Tanah Baru, Beji, Depok</p>
  </div>
</div>
          <div className="space-y-6 text-center md:text-right">
            <h3 className="text-2xl font-bold text-[#6996c8]">Follow Us</h3>
            <div className="flex justify-center md:justify-end gap-4">
              {[{ icon: FaInstagram, link: "https://www.instagram.com/nimbuscoffeee/" }].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  aria-label="Instagram"
                  className="p-3 bg-white/5 rounded-full hover:bg-[#6996c8]/20 transition-all"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="text-2xl text-[#eeb296]" />
                </motion.a>
              ))}
            </div>
            <p className="text-[#aa834c]">&copy; 2025 Nimbus Coffee</p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-[#6996c8] text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Thank you for subscribing! 🎉
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
