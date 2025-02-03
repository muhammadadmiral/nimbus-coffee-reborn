import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, X, Instagram, Mail, Phone } from "lucide-react";

const teamMembers = [
  {
    name: "Fachri Makmura",
    role: "Head Barista",
    bio: "Ahli dalam latte art dan brewing techniques.",
    image: "/placeholder-barista1.jpg",
    expertise: ["Latte Art", "Pour Over", "Coffee Cupping"],
    social: {
      instagram: "@fachrimakmura",
      email: "fachri@nimbus.com"
    }
  },
  {
    name: "Mochammad Haekal Poetra",
    role: "Owner & Barista",
    bio: "Menciptakan pengalaman kopi terbaik.",
    image: "/placeholder-barista2.jpg",
    expertise: ["Business Development", "Coffee Roasting", "Customer Experience"],
    social: {
      instagram: "@haekalp",
      email: "haekal@nimbus.com"
    }
  },
  {
    name: "Arfa Maritza Rosyadi",
    role: "Owner & Barista",
    bio: "Berkomitmen untuk kualitas kopi premium.",
    image: "/placeholder-barista3.jpg",
    expertise: ["Quality Control", "Menu Development", "Team Management"],
    social: {
      instagram: "@arfamr",
      email: "arfa@nimbus.com"
    }
  }
];

const TeamSection = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl font-black mb-4">
          Meet Our <span className="text-[#eeb296]">Team</span>
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Passionate coffee experts dedicated to crafting your perfect cup
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="group relative rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => setSelectedTeam(member)}
            onHoverStart={() => setHoveredMember(member)}
            onHoverEnd={() => setHoveredMember(null)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative aspect-[3/4] overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover"
              />
              
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="absolute bottom-0 p-8 w-full">
                  <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-[#eeb296] mb-4">{member.role}</p>
                  <div className="flex gap-2 mb-4">
                    {member.expertise.map((skill, i) => (
                      <span 
                        key={i}
                        className="bg-white/20 px-3 py-1 rounded-full text-sm text-white/90"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedTeam && (
          <motion.div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTeam(null)}
          >
            <motion.div 
              className="bg-gradient-to-br from-[#3b5f87] to-[#2e4b6e] p-8 rounded-2xl shadow-2xl max-w-2xl w-full relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedTeam(null)}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col md:flex-row gap-8">
                <motion.img 
                  src={selectedTeam.image}
                  alt={selectedTeam.name}
                  className="w-full md:w-48 h-48 object-cover rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />

                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedTeam.name}
                  </h3>
                  <p className="text-[#eeb296] mb-4">{selectedTeam.role}</p>
                  <p className="text-white/80 mb-6">{selectedTeam.bio}</p>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTeam.expertise.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-white/10 px-3 py-1 rounded-full text-sm text-white/90"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <a 
                        href={`https://instagram.com/${selectedTeam.social.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        <Instagram size={20} />
                      </a>
                      <a 
                        href={`mailto:${selectedTeam.social.email}`}
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeamSection;