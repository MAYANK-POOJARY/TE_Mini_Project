import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosInstance from "../Components/Axios/AxiosInstance";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await AxiosInstance.post("/login/", formData);
      const { token, role } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      alert("Login successful!");

      // Navigate based on role
      if (role === "Admin") {
        navigate("/adminpro");
      } else if (role === "User") {
        navigate("/");
      } else {
        navigate("/");
      }

    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Side */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-[rgb(1,7,137)] text-white p-10">
        <h1 className="text-5xl font-extrabold mb-4">Empowering Safety</h1>
        <p className="text-lg text-center max-w-md">
          One Step at a Time, Ensuring Awareness & Security for Everyone.
        </p>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Login
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>

          {error && (
            <p className="text-center font-semibold mt-2 text-red-500 text-sm">
              {error}
            </p>
          )}

          <p className="mt-2 text-center text-gray-600">
            <Link
              to="/reset-password"
              className="text-blue-600 font-semibold hover:underline"
            >
              Forgot password?
            </Link>
          </p>

          <p className="mt-4 text-center text-gray-600">
            Don't have an account?
            <Link
              to="/registration"
              className="text-blue-600 font-semibold ml-1 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
