import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send 
} from "lucide-react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      const whatsappLink = `https://wa.me/6281234567890?text=Halo,%20saya%20${name}%20ingin%20${subject === 'general' ? 'bertanya' : subject}:%20${message}`;
      window.open(whatsappLink, "_blank");
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5a8bc2] to-[#2f4e6d] py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-white/80">We'd love to hear from you!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-lg border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              {/* Contact Details */}
              <div className="space-y-4">
                {[
                  { icon: Phone, text: "+62 812 3456 7890", label: "Phone" },
                  { icon: Mail, text: "contact@nimbuscoffee.com", label: "Email" },
                  { icon: MapPin, text: "Jl. Muhammad Ali II no 29, Depok", label: "Address" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 text-white"
                    whileHover={{ x: 10 }}
                  >
                    <item.icon className="text-white/80 text-xl" />
                    <div>
                      <p className="text-sm text-white/60">{item.label}</p>
                      <p>{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Business Hours</h4>
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex items-center gap-3 mb-2">
                    <Clock className="text-white/60" />
                    <p className="text-white">
                      <span className="text-white/60">{schedule.days}:</span> {schedule.hours}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-lg border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/nimbuscoffeee/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/10 p-8 rounded-xl backdrop-blur-lg border border-white/20 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="email"
                  placeholder="Your Email (optional)"
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <select
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
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
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-white text-[#2f4e6d] py-4 rounded-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="text-xl" />
                Send Message
              </motion.button>
            </form>
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
            className="fixed bottom-6 left-6 bg-white text-[#2f4e6d] px-6 py-3 rounded-lg shadow-xl"
          >
            Message sent successfully! 🎉
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;