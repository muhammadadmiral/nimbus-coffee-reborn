import React from "react";
import { Link } from "react-router-dom";
import heroImage from "/public/nimbus-kopi-susu.jpg"; // Pastikan file gambar berada di folder `public`

const Home = () => {
    return (
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url('/nimbus-kopi-susu.jpg')` }} // ✅ Perbaiki path gambar
      >
        <div className="text-center text-white bg-black bg-opacity-60 p-10 rounded-lg">
          <h2 className="text-5xl font-bold">Nimbus Coffee</h2>
          <p className="text-lg mt-4">Light, Fresh, Like a Cloud.</p>
          <Link to="/menu">
            <button className="mt-6 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-500 transition">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    );
  };
  

export default Home;
