import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Navbar from "./navbar";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* About Section */}
      <section className="py-16 bg-gray-100 flex items-center justify-center min-h-screen relative">
        <div className="absolute inset-0 bg-cover bg-center filter blur-lg" style={{ backgroundImage: 'url(src/assets/image/about-us.png)' }}></div>
        <div className="relative bg-white rounded-lg shadow-lg p-12 flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className="md:w-3/5 text-left">
            <h1 className="text-6xl font-bold text-[#1F4A9B] mb-6">About SkillSeek</h1>
            <p className="text-lg text-gray-700 mb-6">
              SkillSeek is your premier platform for connecting with skilled professionals across multiple services. 
              Whether you need home repairs, creative services, or specialized expertise, SkillSeek ensures a seamless, 
              efficient, and reliable booking experience.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our mission is to bridge the gap between users and top-tier service providers by making professional services 
              accessible with just a few clicks. We strive for quality, trust, and efficiency in every connection made through SkillSeek.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[#1F4A9B] text-lg font-semibold hover:underline">Instagram</a>
              <a href="#" className="text-[#1F4A9B] text-lg font-semibold hover:underline">Facebook</a>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center mt-6 md:mt-0">
            <img
              src="src\assets\image\skillseeklogo.png"
              alt="SkillSeek Logo"
              className="w-72 h-72 object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F4A9B] text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="font-bold text-xl">SkillSeek</h3>
            <p className="text-gray-200 text-md">Your trusted platform for convenient, reliable services.</p>
          </div>
          <div className="text-center md:text-right">
            <ul className="space-y-2 text-lg">
              <li><a href="#" className="hover:underline">Our Services</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AboutPage;
