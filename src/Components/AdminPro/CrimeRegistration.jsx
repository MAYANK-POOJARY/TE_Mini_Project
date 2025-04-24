import React, { useState } from "react";

const CrimeRegistration = () => {
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const complaints = [
    {
      id: 1,
      name: "Rahul Sharma",
      number: "9876543210",
      city: "Mumbai",
      witnessName: "Amit Kumar",
      witnessNumber: "9123456789",
      evidence: "https://images.unsplash.com/photo-1656267125450-c5a2e87a9d8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJvYmJlcnklMjBzY2VuZXxlbnwwfHwwfHx8MA%3D%3D",
      incidentDateTime: "2025-03-15 22:30",
      location: "Railway Station, Mumbai",
      additionalNotes: "The area was dimly lit, and there were no CCTV cameras nearby.",
      complaint: "I was robbed near the railway station at night. The thief took my wallet and phone."
    },
    {
      id: 2,
      name: "Priya Verma",
      number: "8765432109",
      city: "Delhi",
      witnessName: "Neha Singh",
      witnessNumber: "9012345678",
      evidence: "https://plus.unsplash.com/premium_photo-1718999209503-7602e1a67093?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      incidentDateTime: "2025-03-16 18:45",
      location: "Connaught Place, Delhi",
      additionalNotes: "I have saved screenshots of the messages as evidence.",
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
            <p className="mt-1"><strong>Name:</strong> {selectedComplaint.name}</p>
            <p className="mt-1"><strong>Phone:</strong> {selectedComplaint.number}</p>
            <p className="mt-1"><strong>City:</strong> {selectedComplaint.city}</p>
            <p className="mt-1"><strong>Incident Date & Time:</strong> {selectedComplaint.incidentDateTime}</p>
            <p className="mt-1"><strong>Location:</strong> {selectedComplaint.location}</p>
            <p className="mt-1"><strong>Witness Name:</strong> {selectedComplaint.witnessName}</p>
            <p className="mt-1"><strong>Witness Number:</strong> {selectedComplaint.witnessNumber}</p>
            <p className="mt-1"><strong>Complaint:</strong>{selectedComplaint.complaint}</p>
            <p className="mt-1"><strong>Additional Notes:</strong> {selectedComplaint.additionalNotes}</p>
            <p className="mt-1"><strong>Evidence :</strong></p>
            <img src={selectedComplaint.evidence} alt="Evidence" className="mt-2 w-full h-40 object-cover rounded" />
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
