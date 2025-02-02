import React from "react";

const menuItems = [
    { name: "Kopi Susu", price: "Rp 20.000", image: "/nimbus-kopi-susu.jpg" },
    { name: "Butterscotch", price: "Rp 25.000", image: "/nimbus-coffee-butterscotch.jpg" },
  ];
  
  const Menu = () => {
    return (
      <div className="p-10 text-center bg-secondary min-h-screen">
        <h2 className="text-4xl font-bold text-primary mb-6">Our Menu</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <p className="text-lg text-gray-600">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Menu;