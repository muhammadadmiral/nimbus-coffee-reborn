import React, { useState, useEffect } from "react";

const InteractiveSocialFeed = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Anda bisa menggunakan API Instagram untuk mendapatkan gambar feed atau menggunakan placeholder untuk contoh
    setImages([
      "/image1.jpg",
      "/image2.jpg",
      "/image3.jpg",
      "/image4.jpg",
    ]);
  }, []);

  return (
    <div className="flex justify-center gap-4 mt-10">
      {images.map((img, index) => (
        <div key={index} className="w-1/4">
          <img src={img} alt={`Instagram Post ${index}`} className="w-full rounded-lg shadow-lg" />
        </div>
      ))}
    </div>
  );
};

export default InteractiveSocialFeed;
