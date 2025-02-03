import React, { useState } from 'react';
import { 
  Instagram, 
  Wifi, 
  Mail, 
  MapPin, 
  ArrowUp 
} from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from "/logo-nimbus.jpg";

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
    <footer className="bg-gradient-to-b from-[#5a8bc2] to-[#2f4e6d] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={logo} 
                alt="Nimbus Coffee" 
                className="h-16 w-16 rounded-full object-cover" 
              />
              <h2 className="text-2xl font-bold">Nimbus Coffee</h2>
            </div>
            <p className="text-white/80">
              Crafting exceptional coffee experiences, one cup at a time. 
              Join us in our journey of flavor and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-4">
              {['Home', 'Menu', 'Loyalty', 'About', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter and Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Stay Connected</h3>
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex">
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-l-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <button 
                  type="submit"
                  className="bg-white text-[#2f4e6d] px-6 py-3 rounded-r-lg hover:bg-white/90 transition-all"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-white/80" />
                <span>Jl. Muhammad Ali II no 29, Depok</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-white/80" />
                <span>contact@nimbuscoffee.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6 flex space-x-4">
              {[
                { 
                  icon: Instagram, 
                  link: "https://www.instagram.com/nimbuscoffeee/" 
                }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/20 text-center">
          <p className="text-white/80">
            © {new Date().getFullYear()} Nimbus Coffee. All Rights Reserved.
          </p>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-white text-[#2f4e6d] p-3 rounded-full shadow-xl hover:bg-white/90 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp />
        </motion.button>

        {/* Notification */}
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-6 left-6 bg-white text-[#2f4e6d] px-6 py-3 rounded-lg shadow-xl"
            >
              Thank you for subscribing! 🎉
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
};

export default Footer;