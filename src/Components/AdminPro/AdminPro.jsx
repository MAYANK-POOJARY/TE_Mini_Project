import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Users from "./Users";
import SOSAlerts from "./SOSAlerts";
import CrimeRegistration from "./CrimeRegistration";
import Settings from "./Settings";
import Dashboard from "./Dashboard";
import ReportsGraph from "./ReportsGraph";

const AdminPage = () => {
  const [activeSection, setActiveSection] = useState("Crime Reports");

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-black to-blue-900 text-white">
      <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
      <main className="flex-1 p-6">
        {activeSection === "Users" && <Users />}
        {activeSection === "SOS Alerts" && <SOSAlerts />}
        {activeSection === "Crime Reports" && <CrimeRegistration />}
        {activeSection === "Settings" && <Settings />}
        {activeSection === "Dashboard" && <Dashboard />}
        {activeSection === "ReportsGraph" && <ReportsGraph/>}
      </main>
    </div>
  );
};

export default AdminPage;
