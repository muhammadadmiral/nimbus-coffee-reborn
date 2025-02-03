import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Star, Award, Leaf, ChevronRight, Quote } from 'lucide-react';

const OurStory = () => {
  const [activeStory, setActiveStory] = useState('beginning');

  const storyContent = {
    beginning: {
      title: "Our Beginning",
      text: "Berawal dari 3 pemuda pecinta kopi yang gemar nongkrong dan menikmati kopi, kami memulai perjalanan ini di tahun 2024. Sering menghabiskan waktu bersama di berbagai kedai kopi, kami bermimpi menciptakan tempat yang tidak hanya menyajikan kopi berkualitas, tapi juga membangun komunitas.",
      image: "/story-1.jpg",
      quote: "Every great story starts with a dream and a cup of coffee"
    },
    realization: {
      title: "Dreams to Reality",
      text: "15 Januari 2025 menjadi tonggak sejarah bagi kami dengan membuka Nimbus Coffee. Nama 'Nimbus' terinspirasi dari awan yang membawa kesegaran, seperti kopi kami yang memberikan kesegaran di setiap cangkirnya.",
      image: "/story-2.jpg",
      quote: "Like clouds bringing rain, we bring freshness in every cup"
    },
    quality: {
      title: "Our Quality",
      text: "Kami hanya menggunakan biji kopi premium grade dari perkebunan terpilih. Setiap bahan pendukung - dari susu hingga sirup - dipilih dengan standar tertinggi untuk memastikan setiap sajian memberikan pengalaman terbaik.",
      image: "/story-3.jpg",
      quote: "Quality is not just a standard, it's our passion"
    }
  };

  const features = [
    { icon: Coffee, label: "Premium Beans", desc: "100% Arabica beans" },
    { icon: Star, label: "Quality First", desc: "Strict quality control" },
    { icon: Award, label: "Expert Crafted", desc: "Skilled baristas" },
    { icon: Leaf, label: "Fresh Ingredients", desc: "Daily fresh supplies" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a]">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/story-hero.jpg')" }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </motion.div>

        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-7xl font-black mb-6">
              Our <span className="text-[#eeb296]">Journey</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              From passion to perfection - the story of Nimbus Coffee
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        {/* Timeline Navigation */}
        <div className="flex justify-center mb-16">
          {Object.entries(storyContent).map(([key, section], index) => (
            <motion.button
              key={key}
              onClick={() => setActiveStory(key)}
              className={`relative px-8 py-4 ${activeStory === key ? 'text-[#eeb296]' : 'text-white/60'}`}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-lg font-bold">{section.title}</span>
              {activeStory === key && (
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#eeb296]"
                  layoutId="activeIndicator"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Story Content */}
        <motion.div
          key={activeStory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="relative">
            <motion.div
              className="absolute -top-8 -left-8 w-full h-full bg-[#eeb296]/10 rounded-2xl"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.img
              src={storyContent[activeStory].image}
              alt={storyContent[activeStory].title}
              className="rounded-2xl relative z-10"
              whileHover={{ scale: 1.02 }}
            />
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-start gap-4"
            >
              <Quote className="text-[#eeb296] w-12 h-12 shrink-0 opacity-50" />
              <p className="text-xl italic text-white/80">
                {storyContent[activeStory].quote}
              </p>
            </motion.div>

            <div>
              <h3 className="text-4xl font-bold text-[#eeb296] mb-6">
                {storyContent[activeStory].title}
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                {storyContent[activeStory].text}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Our <span className="text-[#eeb296]">Standards</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/5 rounded-xl p-8 text-center hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#eeb296]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                />
                <feature.icon className="w-12 h-12 text-[#eeb296] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.label}</h3>
                <p className="text-white/60">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;