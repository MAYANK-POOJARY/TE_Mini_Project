import { useState } from "react";
import UserRegister from "./UserRegister";
import AdminRegister from "./AdminRegister";

const Registration = () => {
  const [role, setRole] = useState("User");

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/2 flex flex-col items-center justify-center bg-[rgb(1,7,137)] text-white p-10">
        <h1 className="text-5xl font-extrabold mb-4">Join Us for a Safer Future</h1>
        <p className="text-lg text-center max-w-md">Register to Stay Informed and Take Action.</p>
      </div>
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Register</h2>
          <div className="flex justify-center mb-6">
            <button className={`px-4 py-2 rounded-l-lg ${role === "User" ? "bg-blue-600 text-white" : "bg-gray-300"}`} onClick={() => setRole("User")}>User</button>
            <button className={`px-4 py-2 rounded-r-lg ${role === "Admin" ? "bg-blue-600 text-white" : "bg-gray-300"}`} onClick={() => setRole("Admin")}>Admin</button>
          </div>

          {role === "User" ? <UserRegister /> : <AdminRegister />}
        </div>
      </div>
    </div>
  );
};

export default Registration;
