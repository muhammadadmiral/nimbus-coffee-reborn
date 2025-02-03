import React from "react";
import StatsSection from "../components/About/StatsSection";
import TeamSection from "../components/About/TeamSection";
import TestimonialsSection from "../components/About/TestimonialsSection";
import HeroSection from "../components/About/HeroSection";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#6996c8] to-[#3b5f87] p-10">
      <HeroSection />
      <StatsSection />
      <TestimonialsSection />
      <TeamSection />
    </div>
  );
};

export default About;
