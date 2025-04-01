import React, { useState, useEffect } from "react";
import Header from "./Header";

const UserProfile = () => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    gender: "Male",
    profilePhoto: "",
    address: "Street, City",
    state: "State",
    country: "Country",
    dob: "1990-01-01"
  });
  
  const [complaints, setComplaints] = useState(() => JSON.parse(localStorage.getItem("complaints")) || []);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editableUser, setEditableUser] = useState(user);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("complaints", JSON.stringify(complaints));
  }, [user, complaints]);

  const addComplaint = () => {
    const newComplaint = {
      title: `Complaint ${complaints.length + 1}`,
      description: "This is a sample complaint description."
    };
    setComplaints(prev => [newComplaint, ...prev]);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditableUser(user);
  };

  const handleSave = () => {
    setUser(editableUser);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-black to-blue-900 text-white p-7 overflow-auto">
        <div className="mb-7">
            <Header />
        </div>
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.name}!</h1>
      <div className="flex flex-1">
        {/* Complaints List */}
        <div className="w-2/5 bg-gray-900 p-4 space-y-4 rounded-lg overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Registered Complaints</h2>
          <button onClick={addComplaint} className="w-full p-2 mb-4 bg-blue-500 rounded-lg">Add Complaint</button>
          {complaints.map((complaint, index) => (
            <div key={index} className="p-3 bg-gray-700 rounded-lg flex justify-between items-center">
              <p>{complaint.title}</p>
              <button className="bg-green-500 px-4 py-2 rounded" onClick={() => setSelectedComplaint(complaint)}>View Complaint</button>
            </div>
          ))}
        </div>

        {/* User Profile Details */}
        <div className="w-3/4 bg-gray-900 p-8 rounded-2xl shadow-lg ml-6 flex flex-col items-center overflow-auto min-h-full">
          <div className="w-35 h-35 bg-gray-700 rounded-full flex items-center justify-center text-4xl font-bold mb-4 overflow-hidden">
            {user.profilePhoto ? <img src={user.profilePhoto} alt="Profile" className="w-full h-full object-cover rounded-full" /> : user.name.charAt(0)}
          </div>
          <h2 className="text-2xl font-bold mb-4">User Profile</h2>
          {isEditing ? (
            <div className="space-y-2 w-full max-w-lg bg-gray-800 p-6 rounded-lg overflow-auto">
              <label className="block">Profile Photo</label>
              <input type="file" accept="image/*" className="w-full p-3 bg-gray-700 rounded-lg" onChange={(e) => setEditableUser({ ...editableUser, profilePhoto: URL.createObjectURL(e.target.files[0]) })} />
              <label className="block">Name</label>
              <input type="text" className="w-full p-3 bg-gray-700 rounded-lg" value={editableUser.name} onChange={(e) => setEditableUser({ ...editableUser, name: e.target.value })} />
              <label className="block">Email</label>
              <input type="email" className="w-full p-3 bg-gray-700 rounded-lg" value={editableUser.email} disabled />
              <label className="block">Phone</label>
              <input type="text" className="w-full p-3 bg-gray-700 rounded-lg" value={editableUser.phone} onChange={(e) => setEditableUser({ ...editableUser, phone: e.target.value })} />
              <label className="block">Gender</label>
              <select className="w-full p-3 bg-gray-700 rounded-lg" value={editableUser.gender} onChange={(e) => setEditableUser({ ...editableUser, gender: e.target.value })}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <label className="block">Address</label>
              <input type="text" className="w-full p-3 bg-gray-700 rounded-lg" value={editableUser.address} onChange={(e) => setEditableUser({ ...editableUser, address: e.target.value })} />
              <label className="block">State</label>
              <input type="text" className="w-full p-3 bg-gray-700 rounded-lg" value={editableUser.state} onChange={(e) => setEditableUser({ ...editableUser, state: e.target.value })} />
              <label className="block">Country</label>
              <input type="text" className="w-full p-3 bg-gray-700 rounded-lg" value={editableUser.country} onChange={(e) => setEditableUser({ ...editableUser, country: e.target.value })} />
              <label className="block">Date of Birth</label>
              <input type="date" className="w-full p-3 bg-gray-700 rounded-lg" value={editableUser.dob} onChange={(e) => setEditableUser({ ...editableUser, dob: e.target.value })} />
              <button onClick={handleSave} className="w-full p-3 bg-green-500 rounded-lg mt-2">Save</button>
            </div>
          ) : (
            <div className="w-full max-w-lg space-y-2">
              <p className="w-full p-3 bg-gray-700 rounded-lg text-lg"><strong>Name:</strong> {user.name}</p>
              <p className="w-full p-3 bg-gray-700 rounded-lg text-lg"><strong>Email:</strong> {user.email}</p>
              <p className="w-full p-3 bg-gray-700 rounded-lg text-lg"><strong>Phone:</strong> {user.phone}</p>
              <p className="w-full p-3 bg-gray-700 rounded-lg text-lg"><strong>Gender:</strong> {user.gender}</p>
              <p className="w-full p-3 bg-gray-700 rounded-lg text-lg"><strong>Address:</strong> {user.address}</p>
              <p className="w-full p-3 bg-gray-700 rounded-lg text-lg"><strong>State:</strong> {user.state}</p>
              <p className="w-full p-3 bg-gray-700 rounded-lg text-lg"><strong>Country:</strong> {user.country}</p>
              <p className="w-full p-3 bg-gray-700 rounded-lg text-lg"><strong>Date of Birth:</strong> {user.dob}</p>
              <button onClick={handleEdit} className="w-full p-3 bg-blue-500 rounded-lg mt-4">Edit Profile</button>
            </div>
          )}
        </div>
      </div>
      {selectedComplaint && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={() => setSelectedComplaint(null)}>
          <div className="bg-white text-black p-6 rounded-lg" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-2">{selectedComplaint.title}</h2>
            <p>{selectedComplaint.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
