import React, { useState } from "react";

const SOSButton = () => {
  const [location, setLocation] = useState(null);
  const [alertSent, setAlertSent] = useState(false);
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem("sosContacts")) || []);
  const [newContact, setNewContact] = useState({ name: "", phone: "" });

  // Function to fetch user's location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          // Simulate sending the location to contacts
          sendSOSAlert(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Failed to get location. Please enable GPS.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Function to send SOS alert
  const sendSOSAlert = (latitude, longitude) => {
    if (contacts.length === 0) {
      alert("No emergency contacts found! Please add contacts first.");
      return;
    }

    console.log("🚨 SOS Alert Sent to:", contacts);
    console.log("📍 Location:", { latitude, longitude });

    // Simulate API call (Replace with actual backend call)
    setTimeout(() => {
      setAlertSent(true);
      alert("SOS alert sent to your emergency contacts!");
    }, 1000);
  };

  // Function to handle adding a new contact
  const addContact = () => {
    if (newContact.name.trim() === "" || newContact.phone.trim() === "") {
      alert("Please enter both name and phone number.");
      return;
    }

    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    localStorage.setItem("sosContacts", JSON.stringify(updatedContacts));
    setNewContact({ name: "", phone: "" });
  };

  // Function to remove a contact
  const removeContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
    localStorage.setItem("sosContacts", JSON.stringify(updatedContacts));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🚨 Emergency SOS</h1>
      
      {/* SOS Button */}
      <button
        className="bg-red-600 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg text-xl shadow-lg transition-all"
        onClick={getLocation}
        disabled={alertSent}
      >
        {alertSent ? "SOS Sent ✅" : "Send SOS 🚨"}
      </button>

      {/* Location Display */}
      {location && (
        <div className="mt-6 bg-gray-800 p-4 rounded-lg text-lg">
          <p><strong>Latitude:</strong> {location.latitude}</p>
          <p><strong>Longitude:</strong> {location.longitude}</p>
        </div>
      )}

      {/* Alert Message */}
      {alertSent && (
        <p className="mt-4 text-green-400 text-lg">
          🚀 SOS alert has been sent successfully!
        </p>
      )}

      {/* Emergency Contacts Section */}
      <div className="mt-8 bg-gray-800 p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">📞 Emergency Contacts</h2>

        {/* Add New Contact */}
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 rounded bg-gray-700 text-white w-1/2"
            value={newContact.name}
            onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="p-2 rounded bg-gray-700 text-white w-1/2"
            value={newContact.phone}
            onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
          />
          <button className="bg-green-500 p-2 rounded" onClick={addContact}>
            ➕
          </button>
        </div>

        {/* Display Saved Contacts */}
        {contacts.length === 0 ? (
          <p className="text-gray-400">No emergency contacts added.</p>
        ) : (
          <ul className="space-y-2">
            {contacts.map((contact, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-700 p-2 rounded">
                <span>{contact.name} - {contact.phone}</span>
                <button className="bg-red-500 px-2 rounded" onClick={() => removeContact(index)}>❌</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SOSButton;
