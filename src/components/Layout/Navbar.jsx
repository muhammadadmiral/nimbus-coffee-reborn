import React from "react";
import { Link } from "react-router-dom";
import logo from "/public/logo-nimbus.jpg";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Nimbus Coffee" className="h-12 w-auto rounded-full" />
        </Link>
        <ul className="flex gap-6">
          {["Home", "Menu", "About", "Contact"].map((item, index) => (
            <li key={index}>
              <Link 
                to={item.toLowerCase()} 
                className="relative hover:text-accent transition duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-accent scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
