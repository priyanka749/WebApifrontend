import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../index.css";
import Navbar from "./navbar";

const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 md:px-16 lg:px-20 text-left">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-6xl md:text-6xl font-bold text-[#1F4A9B] mb-4">SkillSeek</h1>
              <p className="text-xl md:text-3xl text-[#1F4A9B] mb-9 font-semibold">
                <span className="block">Your trusted platform for convenient, reliable,</span>
                <span className="block">and hassle-free services with professionals!</span>
              </p>
              <button
                className="px-8 py-3 bg-[#1F4A9B] text-white rounded-full font-bold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-transform"
                onClick={() => navigate("/service")}
              >
                Book the Service
              </button>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <img
                src="src/assets/image/Premium_Vector___Technician__builders__engineers_and_mechanics-removebg-preview.png"
                alt="Workers illustration"
                className="w-[20rem] h-[20rem] md:w-[28rem] md:h-[28rem] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 md:px-12 lg:px-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1F4A9B] mb-8">Find Services</h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Plumber", image: "src/assets/image/om54m6zx.bmp", rating: 4.5, description: "Expert plumbing services for your home and office." },
              { name: "Painter", image: "src/assets/image/wagke2a5.bmp", rating: 4.7, description: "High-quality painting services for a fresh look." },
              { name: "Carpenter", image: "src/assets/image/2xizyjeo.bmp", rating: 4.8, description: "Custom woodwork and carpentry solutions." },
              { name: "Cook", image: "src/assets/image/4p8r98ea.bmp", rating: 4.6, description: "Professional cooking services for events and daily needs." },
              { name: "Electrician", image: "src/assets/image/2jfm1job.bmp", rating: 4.9, description: "Reliable electrical services for all your needs." },
              { name: "Cleaner", image: "src/assets/image/mymaxb2f.bmp", rating: 4.8, description: "Top-notch cleaning services for homes and offices." },
              { name: "Driver", image: "src/assets/image/7yx2yawu.bmp", rating: 4.8, description: "Professional driving services for all your needs." }
            ].map((service) => (
              <div
                key={service.name}
                className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="bg-[#1F4A9B] w-40 h-40 md:w-52 md:h-52 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                  <img src={service.image} alt={`${service.name} icon`} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">{service.description}</p>
                <div className="flex items-center space-x-1 mb-2">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="text-gray-800 font-semibold">{service.rating}</span>
                </div>
                <button
                  className="px-4 py-2 bg-[#1F4A9B] text-white rounded-full font-medium transition-transform transform hover:scale-105"
                  onClick={() => navigate("/service-detail")}
                >
                  View More
                </button>
              </div>
            ))}
          </div>

          {/* See More Button */}
          <div className="mt-6">
            <button
              id="seeMoreBtn"
              className="px-6 py-3 bg-[#1F4A9B] text-white rounded-full font-bold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-transform"
              onClick={() => {
                document.querySelectorAll(".more-services").forEach((el) => el.classList.toggle("hidden"));
                const btn = document.getElementById("seeMoreBtn");
                btn.innerText = btn.innerText === "See More" ? "See Less" : "See More";
              }}
            >
              See More
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">What Our Customers Say About Us</h2>
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
      <footer className="bg-[#1F4A9B] text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="font-bold text-lg">SkillSeek</h3>
            <p className="text-gray-200 text-sm">Your trusted platform for convenient, reliable services.</p>
          </div>
          <div className="text-center md:text-right">
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Our Services</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
