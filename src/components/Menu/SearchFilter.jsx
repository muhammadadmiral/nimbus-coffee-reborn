import React from 'react';
import { FaSearch, FaFilter, FaSort } from 'react-icons/fa';

const SearchFilter = ({ 
  searchTerm, 
  setSearchTerm, 
  category, 
  setCategory, 
  sortOption, 
  setSortOption,
  categories 
}) => {
  return (
    <div className="flex flex-wrap gap-4 items-center mb-8">
      <div className="relative flex-grow">
        <input 
          type="text" 
          placeholder="Search menu..." 
          className="w-full p-3 rounded-lg bg-white/10 text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute right-4 top-4 text-[#eeb296]" />
      </div>

      <select 
        className="p-3 rounded-lg bg-white/10 text-white"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>

      <select 
        className="p-3 rounded-lg bg-white/10 text-white"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="recommended">Recommended</option>
        <option value="rating">Top Rated</option>
        <option value="price-asc">Price: Low to High</option>
      </select>
    </div>
  );
};

export default SearchFilter;