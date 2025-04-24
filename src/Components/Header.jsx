import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-blue-950 text-white shadow-lg rounded-full py-4">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo and Name */}
        <div className="flex items-center space-x-2 px-4">
          <FaShieldAlt className="text-3xl" />
          <h1 className="text-2xl font-bold">CrimeGuard</h1>
        </div>
        
        {/* Navigation Links */}
        <nav>
          <ul className="flex items-center space-x-6">
            <li><Link to="/" className="bg-white text-blue-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">Home</Link></li>
            <li><button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })} className="bg-white text-blue-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"> About Us</button></li>
            <li><button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })} className="bg-white text-blue-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 ">Contact Us</button></li>
          </ul>
        </nav>
        
        {/* Login Button */}
        <Link to="/login" className="bg-white text-blue-800 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 mr-4">Login</Link>
      </div>
    </header>
  );
};

export default Header;
