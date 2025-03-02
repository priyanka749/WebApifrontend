import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Navbar from "./navbar";

const HomePage = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        console.log("Fetching services...");
        const response = await axios.get("http://localhost:3000/api/services");
        setServices(response.data.map((service, index) => ({ ...service, id: service.id || index })));
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

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
          {/* Services Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {services.slice(0, showMore ? services.length : 4).map((service) => (
    <div
      key={service.id}
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 max-w-sm mx-auto"
    >
      <div className="w-56 h-56 rounded-lg overflow-hidden mb-4">
        <img
          src={`http://localhost:3000${service.image}`}
          alt={service.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
      <p className="text-gray-700 mb-4 text-center">{service.description}</p>
      <button
        className="px-6 py-2 bg-[#1F4A9B] text-white rounded-full font-semibold transition-transform transform hover:scale-105"
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
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "See Less" : "See More"}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F4A9B] text-white py-8">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
    <div className="text-center md:text-left mb-6 md:mb-0">
      <h3 className="font-bold text-lg">SkillSeek</h3>
      <p className="text-gray-200 text-sm mt-2">Discover skilled professionals for all your needs.</p>
    </div>
    <div className="text-center md:text-right">
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-gray-300 hover:underline transition-colors">Our Services</a></li>
        <li><a href="#" className="hover:text-gray-300 hover:underline transition-colors">FAQ</a></li>
      </ul>
    </div>
  </div>
  <div className="border-t border-gray-600 mt-4 pt-4">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
      <p className="text-sm text-center md:text-left text-gray-400">© 2025 SkillSeek. All rights reserved.</p>
      <div className="text-center md:text-right">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 1a9 9 0 110 18 9 9 0 010-18zm2.293 6.293a1 1 0 00-1.414 1.414L11 10.414V12a1 1 0 11-2 0v-1.586l-1.293 1.293a1 1 0 11-1.414-1.414l3-3a1 1 0 011.414 0l3 3z"/></svg>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.929 2.929A5 5 0 005.07 13.788L2.829 16.03A1 1 0 012 15.586V12a1 1 0 011-1h3.586a1 1 0 01.707.293l2.242 2.242a5 5 0 007.859-6.16l-2.243-2.242a1 1 0 01-.293-.707V3a1 1 0 01.414-.788l2.242-2.243zM17 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    </>
  );
};

export default HomePage;
