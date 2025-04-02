import React, { useState } from "react";

const CrimeRegistration = () => {
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const complaints = [
    {
      id: 1,
      name: "Rahul Sharma",
      number: "9876543210",
      city: "Mumbai",
      complaint: "I was robbed near the railway station at night. The thief took my wallet and phone."
    },
    {
      id: 2,
      name: "Priya Verma",
      number: "8765432109",
      city: "Delhi",
      complaint: "Someone has been harassing me online and sending threatening messages."
    }
  ];


  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Crime Registration Details</h2>
      <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md">
        {complaints.map((complaint) => (
          <div
            key={complaint.id}
            className="flex justify-between items-center p-4 border-b border-gray-700"
          >
            <div>
              <p className="font-bold">{complaint.name}</p>
              <p>Phone: {complaint.number}</p>
              <p>City: {complaint.city}</p>
            </div>
            <button
              onClick={() => setSelectedComplaint(complaint)}
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-700"
            >
              View Complaint
            </button>
          </div>
        ))}
      </div>

      {selectedComplaint && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-bold mb-2">Complaint Details</h3>
            <p><strong>Name:</strong> {selectedComplaint.name}</p>
            <p><strong>Phone:</strong> {selectedComplaint.number}</p>
            <p><strong>City:</strong> {selectedComplaint.city}</p>
            <p className="mt-4">{selectedComplaint.complaint}</p>
            <button
              onClick={() => setSelectedComplaint(null)}
              className="mt-4 bg-red-500 px-4 py-2 rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CrimeRegistration;
