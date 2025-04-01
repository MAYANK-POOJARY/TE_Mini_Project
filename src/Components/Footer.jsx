import { FaShieldAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-blue-950 text-white py-8 px-4 rounded-[20px] mt-15">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Info */}
        <div className="ml-10">
          <div className="flex items-center space-x-2 ">
            <FaShieldAlt className="text-4xl" />
            <h1 className="text-3xl font-bold">CrimeGuard</h1>
          </div>
          <p className="text-gray-400 mt-2">
            Your trusted crime awareness and complaint registration platform.
          </p>
        </div>

        {/* Quick Links */}
        <div className="ml-30">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <div className="flex gap-8 font-semibold">
          <ul className="mt-2 space-y-2">
            <li><NavLink to="" onClick={scrollToTop} className="hover:text-gray-300">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-gray-300">About</NavLink></li>
            </ul>
            <ul className="mt-2 space-y-2">
            <li><NavLink to="/contact" className="hover:text-gray-300">Contact</NavLink></li>
            <li><NavLink to="/terms" className="hover:text-gray-300">Terms of Service</NavLink></li>
          </ul>
          </div>
        </div>

        {/* Helpline Numbers */}
        <div>
          <h3 className="text-lg font-bold">Helpline Numbers</h3>
          <div className="flex gap-8 font-semibold">
          <ul className="mt-2 space-y-2 ">
            <li>Police: <span className="text-gray-400">100</span></li>
            <li>Women Helpline: <span className="text-gray-400">1091</span></li>
            <li>Child Helpline: <span className="text-gray-400">1098</span></li>
          </ul>
          <ul className="mt-2 space-y-2 ">
            <li>Cyber Crime: <span className="text-gray-400">1930</span></li>
            <li>Emergency Medical: <span className="text-gray-400">108</span></li>
            <li>Senior Citizen Helpline: <span className="text-gray-400">14567</span></li>
          </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} CrimeGuard. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
