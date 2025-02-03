import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import AppRoutes from "./route/Route";  // Pastikan path benar!

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <AppRoutes />  {/* ✅ Pastikan ini ada untuk memuat halaman */}
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
