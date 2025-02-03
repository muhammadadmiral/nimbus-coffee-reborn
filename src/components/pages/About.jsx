import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCoffee, FaUsers, FaStar, FaHeart } from "react-icons/fa";

const About = () => {
  const stats = [
    { icon: FaCoffee, value: "90+", label: "Bottle Served" },
    { icon: FaUsers, value: "60+", label: "Happy Customers" },
    { icon: FaStar, value: "4.9", label: "Rating" },
    { icon: FaHeart, value: "100%", label: "Love for Coffee" },
  ];

  const teamMembers = [
    { name: "Fachri Makmur", role: "Head Barista", image: "/placeholder-barista1.jpg" },
    { name: "Jane Smith", role: "Coffee Expert", image: "/placeholder-barista2.jpg" },
  ];

  const testimonials = [
    { image: "/testi-nimbus-1.jpg", review: "Best coffee in town! ☕🔥", customer: "@coffee_lover" },
    { image: "/testi-nimbus-2.jpg", review: "Such a smooth taste, I love it! 💙", customer: "@javaqueen" },
    { image: "/testi-nimbus-3.jpg", review: "Nimbus Coffee never disappoints! ✨", customer: "@dailybrew" },
    { image: "/testi-nimbus-4.jpg", review: "My new favorite coffee place! ❤️", customer: "@caffeineaddict" },
    { image: "/testi-nimbus-5.jpg", review: "Perfect blend, amazing flavors! 👌", customer: "@barista_vibes" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Slide setiap 5 detik
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040402] to-[#351405]">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/our-menus-nimbus.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div 
          className="relative text-center text-white z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-[#eeb296]">Brewing Perfection Since 2020</p>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-[#351405] rounded-xl border border-[#aa834c]/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <stat.icon className="text-4xl text-[#6996c8] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-[#eeb296]">{stat.value}</h3>
              <p className="text-[#aa834c]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="bg-[#040402]/80 p-8 rounded-2xl border border-[#aa834c]/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#6996c8] mb-8">Customer Testimonials</h2>

          <div className="relative w-full max-w-4xl mx-auto">
            <AnimatePresence>
              <motion.div
                key={testimonials[currentIndex].image}
                className="relative flex flex-col items-center text-white"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
              >
                <motion.img 
                  src={testimonials[currentIndex].image} 
                  alt="Customer Testimonial"
                  className="w-80 h-80 object-cover rounded-xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                />
                <p className="mt-4 text-lg text-[#eeb296] font-semibold">
                  "{testimonials[currentIndex].review}"
                </p>
                <p className="text-sm text-[#aa834c]">{testimonials[currentIndex].customer}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-[#6996c8] mb-12">Our Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#eeb296]">{member.name}</h3>
                  <p className="text-[#aa834c]">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
