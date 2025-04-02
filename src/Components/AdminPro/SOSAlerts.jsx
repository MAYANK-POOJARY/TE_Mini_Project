import React from "react";

const SOSAlerts = () => {
  const sosAlerts = [
    {
      id: 1,
      name: "John Doe",
      phone: "9876543210",
      location: "https://maps.google.com/?q=28.7041,77.1025",
      timestamp: "2025-04-02 14:30",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "9876543211",
      location: "https://maps.google.com/?q=19.0760,72.8777",
      timestamp: "2025-04-02 15:00",
    },
  ];

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">SOS Alerts</h2>
      <div className="space-y-4">
        {sosAlerts.map((alert) => (
          <div
            key={alert.id}
            className="p-4 bg-gray-700 rounded-lg flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{alert.name}</h3>
              <p>Phone: {alert.phone}</p>
              <p>Time: {alert.timestamp}</p>
            </div>
            <a
              href={alert.location}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              View
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SOSAlerts;