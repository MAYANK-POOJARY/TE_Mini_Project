import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
    return (
      <div className="flex h-screen bg-gray-100">
        {/* Left Side */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-[rgb(1,7,137)] text-white p-10">
          <h1 className="text-5xl font-extrabold mb-4">Join Us for a Safer Future</h1>
          <p className="text-lg text-center max-w-md">Register to Stay Informed and Take Action.</p>
        </div>
        
        {/* Right Side - Register Form */}
        <div className="w-1/2 flex items-center justify-center p-10">
          <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Register</h2>
            <form className="space-y-5">
              <input type="text" name="fullName" placeholder="Full Name" className="w-full p-4 border border-gray-300 rounded-lg" />
              <input type="email" name="email" placeholder="Email" className="w-full p-4 border border-gray-300 rounded-lg" />
              <input type="text" name="phone" placeholder="Phone Number" className="w-full p-4 border border-gray-300 rounded-lg" />
              <input type="password" name="password" placeholder="Password" className="w-full p-4 border border-gray-300 rounded-lg" />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full p-4 border border-gray-300 rounded-lg" />
              <button type="submit" className="w-full bg-blue-600 text-white p-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">Register</button>
            </form>
            
            <p className="mt-4 text-center text-gray-600">
              Already have an account? 
              <Link to="/login" className="text-blue-600 font-semibold ml-1 hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default  Register;
  