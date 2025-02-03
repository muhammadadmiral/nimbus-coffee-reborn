import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaWhatsapp } from 'react-icons/fa';

const MenuModal = ({ item, onClose }) => {
  const [selectedVariant, setSelectedVariant] = useState(item.variants[0]);

  const handleWhatsAppOrder = () => {
    const orderText = `Saya ingin memesan ${item.name} - ${selectedVariant.size} (${selectedVariant.price.toLocaleString('id-ID')})`;
    window.open(`${item.whatsappLink}&text=${encodeURIComponent(orderText)}`, '_blank');
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-[#2f4e6d] rounded-2xl max-w-xl w-full p-6 text-white"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 left-4 text-[#eeb296] hover:text-white"
        >
          <FaArrowLeft size={24} />
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-64 object-cover rounded-xl" 
          />
          
          <div>
            <h2 className="text-3xl font-bold mb-2">{item.name}</h2>
            <p className="text-[#eeb296] mb-4">{item.description}</p>
            
            <div className="space-y-2 mb-4">
              <h3 className="font-semibold">Variants:</h3>
              {item.variants.map((variant, index) => (
                <div 
                  key={index}
                  className={`flex justify-between p-2 rounded ${
                    selectedVariant === variant 
                      ? 'bg-[#aa834c]/30' 
                      : 'hover:bg-white/10'
                  } cursor-pointer`}
                  onClick={() => setSelectedVariant(variant)}
                >
                  <span>{variant.size}</span>
                  <span>Rp {variant.price.toLocaleString('id-ID')}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700"
            >
              <FaWhatsapp /> Order via WhatsApp
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MenuModal;
