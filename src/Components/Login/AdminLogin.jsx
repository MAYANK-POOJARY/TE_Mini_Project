import React, { useState } from "react";
import { Link } from "react-router-dom";
import AxiosInstance from "../Axios/AxiosInstance";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await AxiosInstance.post("/login/admin/", formData);
      localStorage.setItem("token", response.data.token);
      alert("Admin login successful!");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
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
    </>
  );
};

export default AdminLogin;
