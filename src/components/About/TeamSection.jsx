import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const teamMembers = [
  { name: "Fachri Makmura", role: "Head Barista", bio: "Ahli dalam latte art dan brewing techniques.", image: "/placeholder-barista1.jpg" },
  { name: "Mochammad Haekal Poetra", role: "Owner & Barista", bio: "Menciptakan pengalaman kopi terbaik.", image: "/placeholder-barista2.jpg" },
  { name: "Arfa Maritza Rosyadi", role: "Owner & Barista", bio: "Berkomitmen untuk kualitas kopi premium.", image: "/placeholder-barista3.jpg" }
];

const TeamSection = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-[#6996c8] mb-12">Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-xl cursor-pointer"
            onClick={() => setSelectedTeam(member)}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <h3 className="text-2xl font-bold text-[#eeb296]">{member.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedTeam && (
          <motion.div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTeam(null)}
          >
            <motion.div 
              className="bg-[#351405] p-8 rounded-lg shadow-lg max-w-md text-white"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold">{selectedTeam.name}</h3>
              <p className="text-[#eeb296]">{selectedTeam.role}</p>
              <p className="text-sm mt-4">{selectedTeam.bio}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeamSection;
