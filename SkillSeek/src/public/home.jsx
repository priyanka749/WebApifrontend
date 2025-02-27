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
