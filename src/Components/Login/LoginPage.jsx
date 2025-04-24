import React, { useState } from "react";
import AdminLogin from "./AdminLogin";
import UserLogin from "./UserLogin";

const Login = () => {
  const [loginType, setLoginType] = useState("User");

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 flex flex-col items-center justify-center bg-[rgb(1,7,137)] text-white p-10">
        <h1 className="text-5xl font-extrabold mb-4">Empowering Safety</h1>
        <p className="text-lg text-center max-w-md">
          One Step at a Time, Ensuring Awareness & Security for Everyone.
        </p>
      </div>

      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Login
          </h2>
          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 rounded-l-lg ${
                loginType === "User" ? "bg-blue-600 text-white" : "bg-gray-300"
              }`}
              onClick={() => setLoginType("User")}
            >
              User
            </button>
            <button
              className={`px-4 py-2 rounded-r-lg ${
                loginType === "Admin" ? "bg-blue-600 text-white" : "bg-gray-300"
              }`}
              onClick={() => setLoginType("Admin")}
            >
              Admin
            </button>
          </div>
          {loginType === "Admin" ? <AdminLogin /> : <UserLogin />}
        </div>
      </div>
    </div>
  );
};

export default Login;
