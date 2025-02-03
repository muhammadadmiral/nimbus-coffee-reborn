import React, { useState, useEffect } from "react";
import { Coffee, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "/logo-nimbus.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 
      ${scrolled 
        ? 'bg-gradient-to-r from-[#5a8bc2]/90 to-[#2f4e6d]/90 backdrop-blur-lg shadow-xl' 
        : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Nimbus Coffee" 
                className="h-14 w-14 rounded-full object-cover" 
              />
              <span className="font-bold text-xl text-white hidden sm:block">
                Nimbus Coffee
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {['Home', 'Menu', 'Loyalty', 'About', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                  {item}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden text-white p-2 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-gradient-to-r from-[#5a8bc2] to-[#2f4e6d] backdrop-blur-lg rounded-b-2xl"
            >
              <div className="py-4 px-2">
                {['Home', 'Menu', 'Loyalty', 'About', 'Contact'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <MobileNavLink 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </MobileNavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link to={to} className="relative group">
    <span className="text-lg font-medium transition-colors text-white/80 hover:text-white">
      {children}
    </span>
    <span className="absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 bg-white scale-x-0 group-hover:scale-x-100" />
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block py-3 px-4 my-1 rounded-lg transition-all text-white/80 hover:bg-white/10 hover:text-white"
  >
    {children}
  </Link>
);

export default Navbar;