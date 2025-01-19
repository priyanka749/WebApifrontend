import React from "react";
import "../index.css";

const HomePage = () => {
  return (
<div className="min-h-screen bg-gray-50 flex flex-col mx-auto">

      {/* Navbar */}
      <header className="bg-[#ecf4fb] shadow-md py-4">
  <div className="container mx-auto px-4 flex justify-between items-center">
    <img src="/src/assets/image/skillseeklogo.png" className="h-20" />
    <nav className="flex space-x-8">
      <a href="#" className="text-gray-700 font-semibold text-lg hover:text-[#1F4A9B] transition-colors duration-300 ease-in-out">Home</a>
      <a href="#" className="text-gray-700 font-semibold text-lg hover:text-[#1F4A9B] transition-colors duration-300 ease-in-out">Services</a>
      <a href="#" className="text-gray-700 font-semibold text-lg hover:text-[#1F4A9B] transition-colors duration-300 ease-in-out">Help</a>
      <a href="#" className="text-gray-700 font-semibold text-lg hover:text-[#1F4A9B] transition-colors duration-300 ease-in-out">Others</a>
    </nav>
    <div className="flex space-x-4">
      <button className="px-7 py-3 bg-[#1F4A9B] text-white font-bold rounded-full shadow-md hover:bg-[#155e8a] transition-all duration-300 ease-in-out transform hover:scale-105">
        Sign In
      </button>
      <button className="px-7 py-3 bg-[#1F4A9B] text-white font-bold rounded-full shadow-md hover:bg-[#155e8a] transition-all duration-300 ease-in-out transform hover:scale-105">
        Sign Up
      </button>
    </div>
  </div>
</header>

     
{/* Hero Section */}
<section className="bg-[#ecf4fb]  py-16">
  <div className="container mx-auto px-20 text-left">
    <div className="flex items-center justify-between">
      <div className="text-left">
        <h1 className="text-7xl font-bold text-[#1F4A9B] mb-4">SkillSeek</h1>
        <p className=" text-4xl  text-[#1F4A9B] mb-9 font-semibold">



  <span className="block">Your trusted platform for convenient, reliable,</span>
  <span className="block">and hassle-free services with professionals!</span>
</p>

        <button className="px-8 py-4 bg-gradient-to-r from-[#1F4A9B] to-[#155e8a] text-white  rounded-full font-bold shadow-lg shadow-[#1F4A9B] hover:-translate-y-1 hover:shadow-lg">
          Book the Service
        </button>
      </div>
      <div className="ml-auto justify-center" style={{ width: '22rem', height: '22rem' }}>

        <img
          src="src\assets\image\Premium_Vector___Technician__builders__engineers_and_mechanics-removebg-preview.png"
          alt="Workers illustration"
          
        />
      </div>
    </div>
  </div>
</section>
{/*service*/}
<section className="bg-[#ecf4fb]  py-20">
  <div className="container mx-auto px-8 text-center">
    <h2 className="text-2xl font-bold text-gray-700 mb-6">Find Services</h2>

    {/* Services Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 text-white lg:grid-cols-4 gap-6">
      {[
        { name: "Plumber", image: "src/assets/image/Plumber with tools repairing a pipe.png" },
        { name: "Painter", image: "src/assets/image/The painter paints the wall.png" },
        { name: "Carpenter", image: "src/assets/image/Working with a chainsaw.png" },
        { name: "Cook", image: "src/assets/image/Cook making a halloween dinner.png" }
      ].map((service) => (
        <button
          key={service.name}
          className="flex flex-col items-center space-y-2 rounded-lg shadow-lg p-4 text-center transition-transform transform rounded-full hover:scale-105 hover:shadow-xl bg-[#1F4A9B]"

        >
          {/* Image Container */}
         
            <img 
              src={service.image} 
              alt={`${service.name} icon`} 
              className="w-20 h-20 bg-[#1F4A9B] object-contain"
            />
          
          {/* Text */}
          <h3 className="text-gray-700 font-semibold text-lg mt-2">{service.name}</h3>
        </button>
      ))}
    </div>

    {/* Info and Button */}
    <p className="text-gray-600 mt-6 text-lg">
      Earn with your skills like Plumber, Carpenter, Painter, Cook, and others.
    </p>
    <button className="mt-4 px-8 py-3 bg-blue-700 text-white font-bold shadow-md rounded-full transition-transform transform hover:bg-blue-800 hover:scale-105 hover:shadow-lg">
      Be a Service Provider
    </button>
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
