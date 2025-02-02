import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center p-6 mt-auto">
      <p>&copy; 2025 Nimbus Coffee. All rights reserved.</p>
      <div className="mt-4 flex justify-center gap-4">
        <a href="#" className="hover:text-accent transition">Instagram</a>
        <a href="#" className="hover:text-accent transition">Facebook</a>
        <a href="#" className="hover:text-accent transition">WhatsApp</a>
      </div>
    </footer>
  );
};

export default Footer;
