import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_ITEMS, MENU_CATEGORIES } from '../components/Menu/menuData';
import SearchFilter from '../components/Menu/SearchFilter';
import RecommendedMenu from '../components/Menu/RecommendedMenu';
import MenuModal from '../components/Menu/MenuModal';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [sortOption, setSortOption] = useState('recommended');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    let result = MENU_ITEMS.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === '' || item.category === category)
    );

    switch (sortOption) {
      case 'rating':
        return result.sort((a, b) => b.rating - a.rating);
      case 'price-asc':
        return result.sort((a, b) => a.variants[0].price - b.variants[0].price);
      default:
        return result.sort((a, b) => (b.recommended ? 1 : -1));
    }
  }, [searchTerm, category, sortOption]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5a8bc2] to-[#2f4e6d] p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-white">
          Nimbus <span className="text-[#eeb296]">Coffee Menu</span>
        </h1>

        <SearchFilter 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          category={category}
          setCategory={setCategory}
          sortOption={sortOption}
          setSortOption={setSortOption}
          categories={MENU_CATEGORIES}
        />

        <RecommendedMenu 
          items={filteredItems.filter(item => item.recommended)}
          onItemSelect={setSelectedItem}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-[#2f4e6d] p-4 rounded-2xl cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedItem(item)}
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-48 object-cover rounded-lg mb-4" 
              />
              <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
              <p className="text-[#eeb296] mb-2">{item.description}</p>
              <div className="text-white">
                Start from Rp {item.variants[0].price.toLocaleString('id-ID')}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedItem && (
            <MenuModal 
              item={selectedItem} 
              onClose={() => setSelectedItem(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Menu;