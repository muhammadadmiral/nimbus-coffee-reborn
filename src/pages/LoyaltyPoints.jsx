import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  Coffee, 
  Gift, 
  HelpCircle 
} from "lucide-react";

const LoyaltyPoints = () => {
  const [activeSection, setActiveSection] = useState('how-it-works');

  const renderSection = () => {
    switch(activeSection) {
      case 'how-it-works':
        return (
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Coffee size={48} className="text-white mb-4" />,
                  title: "Earn Points",
                  description: "Collect 1 point for every Rp 10,000 spent on your favorite coffee."
                },
                { 
                  icon: <Gift size={48} className="text-white mb-4" />,
                  title: "Redeem Rewards",
                  description: "Transform points into exclusive discounts, free drinks, and merchandise."
                },
                { 
                  icon: <Award size={48} className="text-white mb-4" />,
                  title: "Level Up",
                  description: "Unlock higher tiers with more benefits and personalized perks."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="text-center bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all"
                >
                  {item.icon}
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/80">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'rewards':
        // ... (rest of the code remains the same)
      case 'faq':
        return (
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="space-y-6">
              {[
                { 
                  question: "How do I earn points?", 
                  answer: "Points are automatically added with each purchase in our café or online store."
                },
                { 
                  question: "Do points expire?", 
                  answer: "Points are valid for 12 months from the date of earning." 
                },
                { 
                  question: "Can I transfer points?", 
                  answer: "Points are non-transferable and linked to your personal account." 
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all"
                >
                  <h3 className="text-2xl font-bold text-white mb-3">
                    <HelpCircle className="inline-block mr-3 text-white/70" size={24} />
                    {faq.question}
                  </h3>
                  <p className="text-white/80">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5a8bc2] to-[#2f4e6d] p-10 relative text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Loyalty Rewards Program
        </motion.h1>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12 space-x-4">
          {[
            { key: 'how-it-works', label: 'How It Works', icon: <Coffee /> },
            { key: 'rewards', label: 'Rewards', icon: <Gift /> },
            { key: 'faq', label: 'FAQ', icon: <HelpCircle /> }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveSection(tab.key)}
              className={`
                flex items-center space-x-2 px-6 py-3 rounded-full 
                transition-all duration-300
                ${activeSection === tab.key 
                  ? 'bg-white text-[#2f4e6d]' 
                  : 'bg-white/10 text-white hover:bg-white/20'
                }
              `}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Content Section */}
        {renderSection()}

        {/* CTA Button */}
        <div className="text-center mt-16">
          <motion.button
            className="bg-white text-[#2f4e6d] px-12 py-5 rounded-full 
            text-xl font-bold hover:bg-white/90 transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Loyalty Program
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyPoints;