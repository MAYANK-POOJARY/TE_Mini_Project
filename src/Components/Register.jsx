import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [role, setRole] = useState("User");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    address: "",
    policeStationCode: "",
    designation: "",
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
      const response = await axios.post("http://localhost:8000/api/register/", {
        ...formData,
        role,
      });
      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (err) {
      setError("Registration failed. Please check your details.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/2 flex flex-col items-center justify-center bg-[rgb(1,7,137)] text-white p-10">
        <h1 className="text-5xl font-extrabold mb-4">Join Us for a Safer Future</h1>
        <p className="text-lg text-center max-w-md">Register to Stay Informed and Take Action.</p>
      </div>
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Register</h2>
          <div className="flex justify-center mb-4">
            <button className={`px-4 py-2 rounded-l-lg ${role === "User" ? "bg-blue-600 text-white" : "bg-gray-300"}`} onClick={() => setRole("User")}>User</button>
            <button className={`px-4 py-2 rounded-r-lg ${role === "Admin" ? "bg-blue-600 text-white" : "bg-gray-300"}`} onClick={() => setRole("Admin")}>Admin</button>
          </div>
          {error && <p className="text-red-500 text-center mb-2">{error}</p>}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input type="text" name="fullName" placeholder="Full Name" className="w-full p-4 border rounded-lg" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" className="w-full p-4 border rounded-lg" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" className="w-full p-4 border rounded-lg" onChange={handleChange} required />
            {role === "Admin" && (
              <>
                <input type="text" name="address" placeholder="Address" className="w-full p-4 border rounded-lg" onChange={handleChange} required />
                <input type="text" name="policeStationCode" placeholder="Police Station Code (Unique ID)" className="w-full p-4 border rounded-lg" onChange={handleChange} required />
                <input type="text" name="designation" placeholder="Designation (e.g., Inspector, Sub-Inspector)" className="w-full p-4 border rounded-lg" onChange={handleChange} required />
              </>
            )}
            <button type="submit" className="w-full bg-blue-600 text-white p-4 rounded-lg text-lg font-semibold hover:bg-blue-700">Register</button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Already have an account? <Link to="/login" className="text-blue-600 font-semibold ml-1 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
