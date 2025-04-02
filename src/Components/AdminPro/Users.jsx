// Users Component
import React from "react";

const Users = () => {
  // Example data
  const users = [
    { id: 1, name: "John Doe", city: "Mumbai" },
    { id: 2, name: "Jane Smith", city: "Delhi" },
    { id: 3, name: "Alice Johnson", city: "Bangalore" },
  ];

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">Users</h3>
      <ul className="flex flex-col gap-5">
        {users.map((user) => (
          <li key={user.id}  className="p-4 bg-gray-700 rounded-lg flex justify-between items-center">
            {user.id} - {user.name} - {user.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;