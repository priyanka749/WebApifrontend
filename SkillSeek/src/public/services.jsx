import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import Navbar from "./navbar"; // Import Navbar

const services = [
  { name: "Plumber", image: "src/assets/image/om54m6zx.bmp", description: "Expert plumbing services for your home and office.", rating: 4.5 },
  { name: "Painter", image: "src/assets/image/wagke2a5.bmp", description: "High-quality painting services for a fresh look.", rating: 4.7 },
  { name: "Carpenter", image: "src/assets/image/2xizyjeo.bmp", description: "Custom woodwork and carpentry solutions.", rating: 4.8 },
  { name: "Cook", image: "src/assets/image/4p8r98ea.bmp", description: "Professional cooking services for events and daily needs.", rating: 4.6 },
  { name: "Electrician", image: "src/assets/image/2jfm1job.bmp", description: "Reliable electrical services for all your needs.", rating: 4.9 },
  { name: "Cleaner", image: "src/assets/image/mymaxb2f.bmp", description: "Top-notch cleaning services for homes and offices.", rating: 4.8 },
  { name: "Driver", image: "src/assets/image/7yx2yawu.bmp", description: "Professional driving services for all your needs.", rating: 4.8 }
];

const ServicePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      {/* Search Bar */}
      <div className="container mx-auto px-7 py-9">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-[#1F4A9B] rounded-lg p-5 text-sm text-gray-1000 focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] h-10"
        />
      </div>

      {/* Service Listing Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#1F4A9B]">Find Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 w-full flex items-center justify-center bg-gray-100">
                <img src={service.image} alt={service.name} className="h-full object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-2">{service.description}</p>
                <div className="flex justify-center items-center mb-4">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="ml-1 text-gray-800 font-bold">{service.rating}</span>
                </div>
                <button
                  className="bg-[#1F4A9B] text-white px-6 py-2 rounded-full font-medium hover:bg-[#104E71] transition duration-300"
                  onClick={() => navigate(`/service-detail?name=${service.name.toLowerCase()}`)}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
