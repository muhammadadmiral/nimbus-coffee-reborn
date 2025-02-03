import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Coffee, Gift, HelpCircle, Star, Trophy, Users } from "lucide-react";

const LoyaltyPoints = () => {
  const [activeSection, setActiveSection] = useState('how-it-works');
  const [selectedTier, setSelectedTier] = useState(null);

  const tiers = [
    {
      name: "Bronze",
      points: "0-500",
      perks: ["Basic reward rates", "Birthday reward", "Free drink upsize"],
      icon: <Coffee size={32} className="text-[#cd7f32]" />
    },
    {
      name: "Silver",
      points: "501-1500",
      perks: ["1.2x reward rates", "Free monthly drink", "Exclusive events access"],
      icon: <Star size={32} className="text-gray-400" />
    },
    {
      name: "Gold",
      points: "1501+",
      perks: ["1.5x reward rates", "Priority ordering", "Customized rewards"],
      icon: <Trophy size={32} className="text-yellow-500" />
    }
  ];

  const rewards = [
    {
      points: 100,
      reward: "Free Extra Shot",
      icon: <Coffee size={24} />
    },
    {
      points: 200,
      reward: "Free Drink",
      icon: <Gift size={24} />
    },
    {
      points: 500,
      reward: "Exclusive Merch",
      icon: <Trophy size={24} />
    }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'how-it-works':
        return (
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Point System */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">How Points Work</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { 
                    icon: <Coffee size={48} className="text-[#eeb296]" />,
                    title: "Earn Points",
                    description: "Get 1 point for every Rp 10,000 spent"
                  },
                  { 
                    icon: <Gift size={48} className="text-[#eeb296]" />,
                    title: "Redeem Rewards",
                    description: "Use points for drinks, food, and merchandise"
                  },
                  { 
                    icon: <Award size={48} className="text-[#eeb296]" />,
                    title: "Level Up",
                    description: "Unlock premium benefits as you earn more"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/10 p-6 rounded-xl text-center"
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    <motion.div 
                      className="mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/80">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Membership Tiers */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">Membership Tiers</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {tiers.map((tier, index) => (
                  <motion.div
                    key={tier.name}
                    className={`
                      relative p-6 rounded-xl cursor-pointer
                      ${selectedTier === index ? 'bg-white/20' : 'bg-white/10'}
                    `}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedTier(index)}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {tier.icon}
                      <h3 className="text-2xl font-bold">{tier.name}</h3>
                    </div>
                    <p className="text-sm text-white/60 mb-4">{tier.points} points</p>
                    <ul className="space-y-2">
                      {tier.perks.map((perk, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Star size={16} className="text-[#eeb296]" />
                          <span className="text-sm">{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 'rewards':
        return (
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-8">Available Rewards</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {rewards.map((reward, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 p-6 rounded-xl"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <div className="flex justify-between items-center mb-4">
                    {reward.icon}
                    <span className="text-lg font-bold">{reward.points} pts</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{reward.reward}</h3>
                  <motion.button
                    className="w-full bg-[#eeb296] text-[#2f4e6d] py-2 rounded-lg mt-4 font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Redeem Now
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'faq':
        return (
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { 
                  question: "How do I earn points?", 
                  answer: "Points are automatically added with each purchase using your registered account."
                },
                { 
                  question: "When do points expire?", 
                  answer: "Points are valid for 12 months from the date of earning." 
                },
                { 
                  question: "Can I transfer my points?", 
                  answer: "Points are non-transferable and linked to your personal account." 
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 p-6 rounded-xl"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <HelpCircle className="text-[#eeb296]" size={24} />
                    <h3 className="text-xl font-bold">{faq.question}</h3>
                  </div>
                  <p className="text-white/80 ml-9">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5a8bc2] to-[#2f4e6d] p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl font-bold mb-4">Loyalty Rewards</h1>
          <p className="text-xl text-white/80">Join our rewards program and unlock exclusive perks</p>
        </motion.div>

        <nav className="flex justify-center mb-12 gap-4">
          {[
            { key: 'how-it-works', label: 'How It Works', icon: <Coffee /> },
            { key: 'rewards', label: 'Rewards', icon: <Gift /> },
            { key: 'faq', label: 'FAQ', icon: <HelpCircle /> }
          ].map((tab) => (
            <motion.button
              key={tab.key}
              onClick={() => setActiveSection(tab.key)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full 
                transition-all duration-300
                ${activeSection === tab.key 
                  ? 'bg-white text-[#2f4e6d]' 
                  : 'bg-white/10 text-white hover:bg-white/20'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </nav>

        {renderSection()}

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="bg-[#eeb296] text-[#2f4e6d] px-12 py-5 rounded-full 
            text-xl font-bold hover:bg-[#d68c5e] transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default LoyaltyPoints;