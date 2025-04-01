import React, { useState, useEffect, useRef } from "react";
import { MdDelete } from "react-icons/md";
import Header from "./Header";

const ChatbotUI = () => {
  const [chats, setChats] = useState(() => JSON.parse(localStorage.getItem("chatSessions")) || []);
  const [currentChat, setCurrentChat] = useState(chats.length ? chats[chats.length - 1] : { id: Date.now(), messages: [] });
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("chatSessions", JSON.stringify(chats));
  }, [chats]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentChat.messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessage = { text: input, sender: "user" };
    const updatedChat = { ...currentChat, messages: [...currentChat.messages, newMessage] };
    
    setChats(prevChats => prevChats.map(chat => chat.id === currentChat.id ? updatedChat : chat));
    setCurrentChat(updatedChat);
    setInput("");
    setIsTyping(true);
    
    setTimeout(() => {
      const botMessage = { text: "Hello! How can I assist?", sender: "bot" };
      const updatedChatWithBot = { ...updatedChat, messages: [...updatedChat.messages, botMessage] };
      setChats(prevChats => prevChats.map(chat => chat.id === currentChat.id ? updatedChatWithBot : chat));
      setCurrentChat(updatedChatWithBot);
      setIsTyping(false);
    }, 1000);
  };

  const handleNewChat = () => {
    const newChat = { id: Date.now(), messages: [] };
    setChats(prevChats => [newChat, ...prevChats]);
    setCurrentChat(newChat);
  };

  const handleDeleteChat = (chatId) => {
    setChats(prevChats => prevChats.filter(chat => chat.id !== chatId));
    if (currentChat.id === chatId) {
      setCurrentChat(chats.length > 1 ? chats[0] : { id: Date.now(), messages: [] });
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-black to-blue-900 text-white p-4">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 p-4 space-y-4 rounded-2xl ml-15">
        <button onClick={handleNewChat} className="w-full p-3 bg-blue-500 rounded-lg">New Chat</button>
        <div className="space-y-2">
          {chats.map(chat => (
            <div key={chat.id} className={`p-2 flex justify-between items-center cursor-pointer rounded-lg ${chat.id === currentChat.id ? "bg-gray-700" : "bg-gray-600"}`}>
              <span onClick={() => setCurrentChat(chat)} className="flex-1 truncate cursor-pointer">{chat.messages.length > 0 ? chat.messages[0].text.substring(0, 20) : "New Chat"}</span>
              <button onClick={() => handleDeleteChat(chat.id)} className="ml-2 text-white p-2 border rounded bg-red-500 hover:bg-red-600">
                <MdDelete />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex flex-col flex-1 h-full max-w-7xl mx-auto bg-gray-900 rounded-2xl shadow-lg overflow-hidden ml-4">
        <div className="p-6 text-left text-xl font-bold flex">
            <img src="https://plus.unsplash.com/premium_photo-1739538279172-9bd4d900e60e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="botImage" className="w-15 h-15 rounded-full mr-2 object-cover"/>   
            <h1 className="font-bold text-3xl mt-2 ml-3">CrimeGuard</h1>
        </div>
        {/* Header (Only show if no messages) */}
        {currentChat.messages.length === 0 && (
        <div> 
          <div className=" ml-10 p-6 text-left">
            <h1 className="text-2xl font-bold">Hello Mate!! Do you want to :</h1>
            <h3 className="text-xl font-semibold mt-5 ml-5">1. Report a crime</h3>
            <h3 className=" text-xl font-semibold mt-2 ml-5">2. Be aware of crime</h3>
          </div>
        </div>
        )}
        
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col-reverse space-y-4"> 
          <div ref={messagesEndRef} />
          {isTyping && <div className="text-gray-400">CrimeGuard is typing...</div>}
          {currentChat.messages.slice().reverse().map((msg, index) => (
            <div key={index} className={`flex items-center ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              {msg.sender === "bot" && <img src="https://plus.unsplash.com/premium_photo-1739538279172-9bd4d900e60e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bot" className="w-8 h-8 rounded-full mr-2 object-cover" />}
              <div className={`max-w-xs p-3 rounded-lg ${msg.sender === "user" ? "bg-blue-500" : "bg-gray-700"}`}>
                {msg.text}
              </div>
              {msg.sender === "user" && <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User" className="w-8 h-8 rounded-full ml-2" />}
            </div>
          ))}
        </div>
        
        {/* Input Bar */}
        <div className="p-4 bg-gray-800 flex items-center rounded-b-2xl">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message CrimeGuard"
            className="flex-1 p-3 bg-gray-700 rounded-lg outline-none text-white"
          />
          <button onClick={handleSend} className="ml-2 px-5 py-3 bg-blue-500 rounded-lg">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotUI;
