import React from 'react';
import Dark_City from '../assets/Dark_City.png';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


const Home = () => {
  return (
    <div className="text-center p-8 bg-gradient-to-r from-black to-blue-900 text-white min-h-screen">
      <Header />
      <h1 className="text-5xl font-bold mb-4 mt-6 ml-5">REPORT - PREVENT - PROTECT</h1>
      <div className=' h-170 w-full flex justify-center items-center overflow-hidden'>
        <img className='w-full h-140 object-cover' src={Dark_City} alt="" style={{ filter: 'drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5))' , transform: 'translateY(-80px)' }} />
      </div>
      <div  style={{transform: 'translateY(-70px)'}}>
      <p className="text-3xl font-semibold mb-6">I'm Here to Help!</p>
      <Link to="/chatbot" className=" bg-white text-black px-6 py-2 rounded-lg text-2xl font-bold hover:bg-gray-300 transition duration-300">CrimeGuard</Link>
      </div>

      <div className="mt- space-y-6">
        <div className="bg-blue-900 p-6 rounded-[25px] shadow-lg flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <h2 className="text-4xl font-semibold mb-4 mt-3 text-left ">Report a Crime Instantly</h2>
            <p className="text-gray-300 text-2xl text-left">Take action and make a difference. Use our seamless crime reporting feature to submit incidents securely and efficiently. Together, we can create safer communities.</p>
            <div className="text-left mt-6">
              <Link to="/chatbot" className='px-3 py-2 rounded-lg bg-white text-black font-bold text-lg hover:bg-gray-300 transition duration-300'>CrimeGuard</Link>
            </div>
          </div>
          <div className="ml-auto overflow-hidden">
            <img  src="https://images.unsplash.com/photo-1526666361175-e3595627c376?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='registration' className="w-150 h-60 object-cover rounded-[25px]"/>
          </div>
        </div>

        <div className="bg-blue-900 p-6 rounded-[25px] shadow-lg flex flex-col md:flex-row gap-6">
          <div className="ml-0 overflow-hidden">
            <img  src="https://images.unsplash.com/photo-1526666361175-e3595627c376?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='registration' className="w-150 h-60 object-cover rounded-[25px]"/>
          </div>
          <div className="md:w-2/3 ml-auto">
            <h2 className="text-4xl font-semibold mb-4 text-left">Stay Informed, Stay Safe</h2>
            <p className="text-gray-300 text-2xl text-left">Discover crucial crime trends and safety tips with our comprehensive awareness feature. Empower yourself with knowledge to protect your community and make informed decisions. Together, we can build a safer tomorrow.</p>
            <div className="text-left mt-6">
              <Link to="/chatbot" className='px-3 py-2 rounded-lg bg-white text-black font-bold text-lg hover:bg-gray-300 transition duration-300'>CrimeGuard</Link>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 p-6 rounded-[25px] shadow-lg flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <h2 className="text-4xl font-semibold mb-4 mt-3 text-left ">Emergency SOS: Help at Your Fingertips</h2>
            <p className="text-gray-300 text-2xl text-left">In critical moments, every second counts. Our SOS feature ensures instant access to emergency assistance, connecting you to help when you need it most. Stay safe, stay prepared.</p>
            <div className="text-left mt-5">
            <Link to="" className='px-3 py-2 rounded-lg bg-white text-black font-bold text-lg hover:bg-gray-300 transition duration-300'>SOS</Link>
            </div>
          </div>
          <div className="ml-auto overflow-hidden">
            <img  src="https://images.unsplash.com/photo-1526666361175-e3595627c376?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='registration' className="w-150 h-60 object-cover rounded-[25px]"/>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Home;