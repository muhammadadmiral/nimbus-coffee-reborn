import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "../components/Home/HeroSection";
import FloatingCoffeeElements from "../components/Home/FloatingCoffeeElements";
import TimeBasedGreeting from "../components/Home/TimeBasedGreeting";
import CustomerReviewsCarousel from "../components/Home/CustomerReviewsCarousel";
import LoyaltyPointsBanner from "../components/Home/LoyaltyPointsBanner"; 
import Gallery from "../components/Home/Gallery";

const Home = () => {
  return (
    <div className="relative bg-[#040402] min-h-screen overflow-hidden">
      {/* Background Parallax Effect */}
      <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/coming-soon-nimbus.jpg')" }}></div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#6996c8] to-[#3b5f87] opacity-80 backdrop-blur-lg z-0"></div>

      {/* Hero Section */}
      <div className="relative z-10">
        <HeroSection />
      </div>

      {/* Floating Coffee Elements */}
      <div className="relative z-10">
        <FloatingCoffeeElements />
      </div>

      {/* Time Based Greeting */}
      <div className="relative z-10">
        <TimeBasedGreeting />
      </div>

      {/* Customer Reviews Carousel */}
      <div className="relative z-10">
        <CustomerReviewsCarousel />
      </div>

      {/* Gallery */}
      <div className="relative z-10">
        <Gallery />
      </div>

      {/* Loyalty Points Banner */}
      <div className="relative z-10">
        <LoyaltyPointsBanner />
      </div>

      {/* Additional Features */}
      <div className="container mx-auto text-center mt-16 relative z-10">
        <p className="text-lg text-white">Want to learn more? Visit our menu and explore the taste!</p>
      </div>
    </div>
  );
};

export default Home;
