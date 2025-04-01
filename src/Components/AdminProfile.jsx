import React, { useState } from "react";
import {
  FaUserShield,
  FaUsers,
  FaClipboardList,
  FaBell,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminPage = () => {
  const [activeSection, setActiveSection] = useState("Users");

  return (
    <div className="flex h-screen bg-gradient-to-r from-black to-blue-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 p-5 space-y-6 bg-gray-900">
        <h1 className="text-2xl font-bold flex items-center space-x-2">
          <FaUserShield /> <span>Admin Panel</span>
        </h1>
        <nav className="space-y-4">
          <button
            onClick={() => setActiveSection("Users")}
            className={`flex items-center space-x-2 hover:text-gray-300 ${
              activeSection === "Users" ? "text-blue-400" : ""
            }`}
          >
            <FaUsers /> <span>Users</span>
          </button>
          <button
            onClick={() => setActiveSection("Complaints")}
            className={`flex items-center space-x-2 hover:text-gray-300 ${
              activeSection === "Complaints" ? "text-blue-400" : ""
            }`}
          >
            <FaClipboardList /> <span>Complaints</span>
          </button>
          <button
            onClick={() => setActiveSection("SOS Alerts")}
            className={`flex items-center space-x-2 hover:text-gray-300 ${
              activeSection === "SOS Alerts" ? "text-blue-400" : ""
            }`}
          >
            <FaBell /> <span>SOS Alerts</span>
          </button>
          <button
            onClick={() => setActiveSection("Reports")}
            className={`flex items-center space-x-2 hover:text-gray-300 ${
              activeSection === "Reports" ? "text-blue-400" : ""
            }`}
          >
            <FaChartBar /> <span>Reports</span>
          </button>
          <button
            onClick={() => setActiveSection("Settings")}
            className={`flex items-center space-x-2 hover:text-gray-300 ${
              activeSection === "Settings" ? "text-blue-400" : ""
            }`}
          >
            <FaCog /> <span>Settings</span>
          </button>
          <button className="flex items-center space-x-2 text-red-400 hover:text-red-600 mt-10">
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-semibold mb-4">Welcome, Admin</h2>
        {activeSection === "Users" && (
          <div className="bg-blue-950 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <FaUsers className="mr-2" /> Users
            </h3>
            <p>Manage all registered users.</p>
          </div>
        )}
        {activeSection === "Complaints" && (
          <div className="bg-blue-950 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <FaClipboardList className="mr-2" /> Complaints
            </h3>
            <p>View and handle submitted complaints.</p>
          </div>
        )}
        {activeSection === "SOS Alerts" && (
          <div className="bg-blue-950 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <FaBell className="mr-2" /> SOS Alerts
            </h3>
            <p>Monitor emergency SOS alerts.</p>
          </div>
        )}
        {activeSection === "Reports" && (
          <div className="bg-blue-950 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <FaChartBar className="mr-2" /> Reports
            </h3>
            <p>Generate and view reports.</p>
          </div>
        )}
        {activeSection === "Settings" && (
          <div className="bg-blue-950 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <FaCog className="mr-2" /> Settings
            </h3>
            <p>Adjust system settings.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPage;
