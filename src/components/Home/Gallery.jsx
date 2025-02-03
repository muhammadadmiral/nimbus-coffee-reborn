import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  // Array berisi nama file gambar yang ada di folder public/images/gallery
  const galleryImages = [
    '/Images/gallery/gallery-1.jpg',
    '/Images/gallery/gallery-2.jpg',
    '/Images/gallery/gallery-3.jpg',
    '/Images/gallery/gallery-4.jpg',
    '/Images/gallery/gallery-5.jpg',
    '/Images/gallery/gallery-6.jpg',
  ];

  return (
    <div className="gallery-container py-16">
      <h2 className="text-4xl text-center mb-8 text-white">Gallery</h2>
      
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;
