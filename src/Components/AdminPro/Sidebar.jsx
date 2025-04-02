// Sidebar.js
import React from "react";
import { FaUsers, FaBell, FaClipboardList, FaCog, FaChartBar, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ setActiveSection, activeSection }) => {
  return (
    <aside className="w-64 p-5 space-y-6 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <nav className="space-y-4">
        <button onClick={() => setActiveSection("Users")} className={`flex items-center space-x-2 ${activeSection === "Users" ? "text-blue-400" : "hover:text-gray-300"}`}>
          <FaUsers /> <span>Users</span>
        </button>
        <button onClick={() => setActiveSection("SOS Alerts")} className={`flex items-center space-x-2 ${activeSection === "SOS Alerts" ? "text-blue-400" : "hover:text-gray-300"}`}>
          <FaBell /> <span>SOS Alerts</span>
        </button>
        <button onClick={() => setActiveSection("Crime Reports")} className={`flex items-center space-x-2 ${activeSection === "Crime Reports" ? "text-blue-400" : "hover:text-gray-300"}`}>
          <FaClipboardList /> <span>Crime Reports</span>
        </button>
        <button onClick={() => setActiveSection("Graphs")} className={`flex items-center space-x-2 ${activeSection === "Graphs" ? "text-blue-400" : "hover:text-gray-300"}`}>
          <FaChartBar /> <span>Graphs</span>
        </button>
        <button onClick={() => setActiveSection("Settings")} className={`flex items-center space-x-2 ${activeSection === "Settings" ? "text-blue-400" : "hover:text-gray-300"}`}>
          <FaCog /> <span>Settings</span>
        </button>
        <button className="flex items-center space-x-2 text-red-400 hover:text-red-600 mt-10">
          <FaSignOutAlt /> <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;