import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo-nimbus.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#040402]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Nimbus Coffee" className="h-14 rounded-full" />
              <span className="font-bold text-xl text-[#6996c8] hidden sm:block">
                Nimbus Coffee
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['Home', 'Menu', 'About', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  isActive={location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)}
                >
                  {item}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden text-[#6996c8] p-2 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-[#040402]/95 backdrop-blur-lg rounded-b-2xl"
            >
              <div className="py-4 px-2">
                {['Home', 'Menu', 'About', 'Contact'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <MobileNavLink
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      isActive={location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)}
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

const NavLink = ({ to, children, isActive }) => (
  <Link to={to} className="relative group">
    <span className={`text-lg font-medium transition-colors ${
      isActive ? 'text-[#6996c8]' : 'text-[#eeb296] hover:text-[#6996c8]'
    }`}>
      {children}
    </span>
    <span className={`absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
      isActive ? 'bg-[#6996c8] scale-x-100' : 'bg-[#6996c8] scale-x-0 group-hover:scale-x-100'
    }`} />
  </Link>
);

const MobileNavLink = ({ to, children, onClick, isActive }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block py-3 px-4 my-1 rounded-lg transition-all ${
      isActive 
        ? 'bg-[#6996c8]/20 text-[#6996c8]' 
        : 'text-[#eeb296] hover:bg-[#6996c8]/10 hover:text-[#6996c8]'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
