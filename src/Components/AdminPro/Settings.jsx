import React, { useState } from "react";

const Settings = () => {
  // Sample admin data (this will come from the database in real use)
  const [adminData, setAdminData] = useState({
    name: "Inspector Rajesh Kumar",
    email: "rajesh.kumar@police.gov.in",
    password: "password123",
    address: "Sector 15, New Delhi",
    policeCode: "DL-PS-0098",
    phone: "+91 9876543210",
    designation: "Station In-Charge",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(adminData);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Toggle edit mode
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Handle save changes
  const handleSave = () => {
    setAdminData(formData); // Update the displayed data
    setIsEditing(false);
    
    // Here, send the updated data to the backend via an API call
    fetch("/api/updateAdminProfile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Profile updated successfully", data);
      })
      .catch((error) => {
        console.error("Error updating profile", error);
      });
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
      <div className="space-y-4">
        {Object.keys(adminData).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              disabled={!isEditing}
              className={`p-2 rounded bg-gray-800 text-white mt-1 ${isEditing ? "border border-blue-500" : "border-none"}`}
            />
          </div>
        ))}
      </div>
      <div className="mt-6">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Settings;