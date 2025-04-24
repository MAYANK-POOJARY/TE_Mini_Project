import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AxiosInstance from "../Axios/AxiosInstance";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await AxiosInstance.post("/register/", {
        ...formData,
        role: "User",
      });
      alert("User registered successfully!");
      navigate("/login");
    } catch (err) {
      setError("Registration failed. Please check your details.");
    }
  };

  return (
    <>
      {error && <p className="text-red-500 text-center mb-2">{error}</p>}
      <form className="space-y-5" onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" className="w-full p-4 border rounded-lg" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="w-full p-4 border rounded-lg" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="w-full p-4 border rounded-lg" onChange={handleChange} required />
        <button type="submit" className="w-full bg-blue-600 text-white p-4 rounded-lg text-lg font-semibold hover:bg-blue-700">Register</button>
      </form>
      <p className="mt-4 text-center text-gray-600">
        Already have an account? <Link to="/login" className="text-blue-600 font-semibold ml-1 hover:underline">Login</Link>
      </p>
    </>
  );
};

export default UserRegister;
