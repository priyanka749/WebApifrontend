import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  // ✅ Fetch all services from backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        console.log("Fetching services...");
        const response = await axios.get("http://localhost:3000/api/services");
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  // ✅ Filter Services Based on Search Input
  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Search Bar */}
      <div className="container mx-auto px-4 py-6">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-[#1F4A9B] rounded-lg p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] h-12"
        />
      </div>

      {/* Service Listing Section */}
      <div className="container mx-auto px-4 py-9">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#1F4A9B]">Find Services</h2>

        {filteredServices.length === 0 ? (
          <p className="text-center text-gray-600">No services found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
              >
                <div className="h-52 w-full flex items-center justify-center bg-white overflow-hidden">
                  <img
                    src={`http://localhost:3000${service.image}`}
                    alt={service.title}
                    className="w-[85%] h-[90%] object-contain mt-5" // ✅ Image alignment fixed
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-2">{service.description}</p>
                  <div className="flex justify-center items-center mb-4">
                    <span className="text-yellow-500 text-lg">★</span>
                    <span className="ml-1 text-gray-800 font-bold">4.5</span>
                  </div>
                  <div className="pb-2">
                    <button
                      className="bg-[#1F4A9B] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#104E71] transition duration-300"
                      onClick={() => navigate("/available")}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicePage;
