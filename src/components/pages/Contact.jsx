import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("general");
  const [showSuccess, setShowSuccess] = useState(false);

  const businessHours = [
    { days: "Monday - Friday", hours: "07:00 - 22:00" },
    { days: "Saturday - Sunday", hours: "08:00 - 23:00" }
  ];

  const handleSubmit = () => {
    if (name && message) {
      const whatsappLink = `https://wa.me/6281234567890?text=Halo,%20saya%20${name}%20ingin%20${subject === 'general' ? 'bertanya' : subject}:%20${message}`;
      window.open(whatsappLink, "_blank");
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040402] to-[#351405] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-6xl font-bold text-[#6996c8] mb-4">Get in Touch</h2>
          <p className="text-xl text-[#eeb296]">We'd love to hear from you!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[#351405] p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#6996c8] mb-6">Contact Information</h3>
              
              {/* Contact Details */}
              <div className="space-y-4">
                {[
                  { icon: FaPhone, text: "+62 812 3456 7890", label: "Phone" },
                  { icon: FaEnvelope, text: "info@nimbuscoffee.com", label: "Email" },
                  { icon: FaMapMarkerAlt, text: "Jl. Awan Indah No. 123, Bandung", label: "Address" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 text-[#eeb296]"
                    whileHover={{ x: 10 }}
                  >
                    <item.icon className="text-[#6996c8] text-xl" />
                    <div>
                      <p className="text-sm text-[#aa834c]">{item.label}</p>
                      <p>{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-[#6996c8] mb-4">Business Hours</h4>
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex items-center gap-3 mb-2">
                    <FaClock className="text-[#aa834c]" />
                    <p className="text-[#eeb296]">
                      <span className="text-[#aa834c]">{schedule.days}:</span> {schedule.hours}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Map or Additional Info */}
            <div className="bg-[#351405] p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#6996c8] mb-4">Find Us</h3>
              <div className="bg-[#040402] h-48 rounded-lg flex items-center justify-center text-[#aa834c]">
                [Map Integration Placeholder]
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-[#351405] p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-[#6996c8] mb-6">Send us a Message</h3>
            <div className="space-y-4">
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-[#040402] border border-[#aa834c]/30 rounded-lg text-white focus:border-[#6996c8] focus:ring-2 focus:ring-[#6996c8]/50 transition-all"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="email"
                  placeholder="Your Email (optional)"
                  className="w-full p-4 bg-[#040402] border border-[#aa834c]/30 rounded-lg text-white focus:border-[#6996c8] focus:ring-2 focus:ring-[#6996c8]/50 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <select
                  className="w-full p-4 bg-[#040402] border border-[#aa834c]/30 rounded-lg text-white focus:border-[#6996c8] focus:ring-2 focus:ring-[#6996c8]/50 transition-all"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="general">General Inquiry</option>
                  <option value="reservation">Make a Reservation</option>
                  <option value="feedback">Provide Feedback</option>
                  <option value="partnership">Business Partnership</option>
                </select>
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-4 bg-[#040402] border border-[#aa834c]/30 rounded-lg text-white focus:border-[#6996c8] focus:ring-2 focus:ring-[#6996c8]/50 transition-all"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </motion.div>

              <motion.button
                onClick={handleSubmit}
                className="w-full bg-[#6996c8] text-white py-4 rounded-lg hover:bg-[#6492c5] transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp className="text-xl" />
                Send via WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-[#6996c8] text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Message sent successfully! 🎉
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;