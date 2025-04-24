import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatbotUI from './Components/ChatbotUI'
import Login from './Components/Login'
import Register from './Components/Register';
import Home from './Components/Home';
import UserProfile from './Components/UserProfile';
import AdminProfile from './Components/AdminProfile';
import AdminPro from './Components/AdminPro/AdminPro'
import SOSButton from './Components/SOSButton';
import Registration from './Components/Register/Registration'
import LoginPage from './Components/Login/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/loginP" element={<Login />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/chatbot" element={<ChatbotUI />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/adminProfile" element={<AdminProfile />} />
        <Route path="/adminPro" element={<AdminPro />} />
        <Route path="/SOS" element={<SOSButton />} />
        <Route path="" element={<Home />} />
      </Routes>
    </Router>

  )
}

export default App
