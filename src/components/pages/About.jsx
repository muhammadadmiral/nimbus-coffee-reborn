import React from "react";
import { motion } from "framer-motion";
import { FaCoffee, FaUsers, FaStar, FaHeart } from "react-icons/fa";

const About = () => {
  const stats = [
    { icon: FaCoffee, value: "10K+", label: "Cups Served" },
    { icon: FaUsers, value: "5K+", label: "Happy Customers" },
    { icon: FaStar, value: "4.9", label: "Rating" },
    { icon: FaHeart, value: "100%", label: "Love for Coffee" },
  ];

  const teamMembers = [
    { name: "John Doe", role: "Head Barista", image: "/placeholder-barista1.jpg" },
    { name: "Jane Smith", role: "Coffee Expert", image: "/placeholder-barista2.jpg" },
  ];

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

      {/* Vision & Mission */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="bg-[#040402]/80 p-8 rounded-2xl border border-[#aa834c]/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-[#6996c8] mb-8">Visi & Misi</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#eeb296]">Visi</h3>
              <p className="text-[#aa834c]">
                Menjadi destinasi kopi premium pilihan utama yang menginspirasi dan membangun komunitas pecinta kopi.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#eeb296]">Misi</h3>
              <ul className="space-y-2 text-[#aa834c]">
                <li>• Memberikan pengalaman kopi berkualitas terbaik</li>
                <li>• Mengutamakan pelayanan pelanggan yang luar biasa</li>
                <li>• Membangun komunitas pecinta kopi yang solid</li>
                <li>• Mendukung pertanian kopi berkelanjutan</li>
              </ul>
            </div>
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