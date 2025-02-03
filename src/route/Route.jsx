import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Menu from "../pages/Menu";
import LoyaltyPoints from "../pages/LoyaltyPoints";
import OurStory from "../pages/OurStory";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loyalty" element={<LoyaltyPoints />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/our-story" element={<OurStory /> } />
    </Routes>
  );
};

export default AppRoutes;
