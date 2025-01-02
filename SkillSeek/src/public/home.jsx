import React from "react";
import "../index.css";

const HomePage = () => {
  return (
<div className="min-h-screen bg-gray-50 flex flex-col mx-auto">

      {/* Navbar */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <img src="/src/assets/image/skillseeklogo.png" className="h-20" />
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-[#1F4A9B] transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-[#1F4A9B] transition">Services</a>
            <a href="#" className="text-gray-700 hover:text-[#1F4A9B] transition">Help</a>
            <a href="#" className="text-gray-700 hover:text-[#1F4A9B] transition">Others</a>
          </nav>
          <div className="flex space-x-4">
            <button className="bg-[#1F4A9B] text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">Sign In</button>
            <button className="bg-gray-100 text-[#1F4A9B] px-4 py-2 rounded shadow hover:bg-gray-200 transition">Sign Up</button>
          </div>
        </div>
      </header>

     
{/* Hero Section */}
<section className="bg-gray-50 py-16">
  <div className="container mx-auto px-20 text-left">
    <div className="flex items-center justify-between">
      <div className="text-left">
        <h1 className="text-4xl font-bold text-[#1F4A9B] mb-4">SkillSeek</h1>
        <p className="text-[#1F4A9B] text-lg mb-6">Your trusted platform for convenient, reliable, and hassle-free services with professionals!</p>
        <button className="px-8 py-4 bg-gradient-to-r from-[#1F4A9B] to-blue-500 text-white font-bold shadow-lg shadow-[#1F4A9B] rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
          Book the Service
        </button>
      </div>
      <div className="w-80 h-80 bg-white rounded-full shadow-lg shadow-[#1F4A9B] flex items-center justify-center ml-auto">
        <img
          src="https://i.pinimg.com/736x/40/f5/51/40f551f1cb4ed3d8a3116c52a81e7552.jpg"
          alt="Workers illustration"
          className="w-72 h-72 object-contain rounded-full"
        />
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Find Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Plumber', 'Painter', 'Carpenter', 'Cook'].map((service) => (
              <div
                key={service}
                className="bg-gray-100 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition"
              >
                <div className="bg-[#1F4A9B] text-white w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-lg font-bold">{service[0]}</span>
                </div>
                <h3 className="text-gray-700 font-semibold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">What Our Customers Say About Us</h2>
          <blockquote className="bg-white rounded-lg shadow-md p-6 mx-auto max-w-2xl">
            <p className="text-gray-600 italic mb-4">"The professionals listed are trustworthy and skilled. The reviews really help in choosing the right person."</p>
            <div className="flex items-center justify-center space-x-2">
              <img
                src="https://via.placeholder.com/40"
                alt="Customer"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-gray-700 font-medium">Customer Feedback</span>
            </div>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F4A9B] text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="font-bold text-lg">SkillSeek</h3>
            <p>Your trusted platform for convenient, reliable, and hassle-free services with professionals!</p>
          </div>
          <div className="text-center md:text-right">
            <p>Useful Links</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">Our Services</a>
              </li>
              <li>
                <a href="#" className="hover:underline">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
