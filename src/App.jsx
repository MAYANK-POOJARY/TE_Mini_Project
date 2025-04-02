import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatbotUI from './Components/ChatbotUI'
import Login from './Components/Login'
import Register from './Components/Register';
import Home from './Components/Home';
import UserProfile from './Components/UserProfile';
import AdminProfile from './Components/AdminProfile';
import AdminPro from './Components/AdminPro/AdminPro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chatbot" element={<ChatbotUI />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/adminProfile" element={<AdminProfile />} />
        <Route path="/adminPro" element={<AdminPro />} />
        <Route path="" element={<Home />} />
      </Routes>
    </Router>

  )
}

export default App
