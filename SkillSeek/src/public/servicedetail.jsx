import React, { useState } from "react";
import { FaCheckCircle, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import plumberImage from "../assets/image/om54m6zx.bmp"; // Import plumber image

const ServiceDetail = () => {
  const [activeTab, setActiveTab] = useState("description");
  const navigate = useNavigate(); // Initialize useNavigate

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="text-gray-700">
            <p>
              Our expert plumbers offer fast, reliable service for all your plumbing needs. We handle everything from leaky faucets to major installations.
            </p>
            <ul className="mt-4 space-y-2">
              <li><FaCheckCircle className="inline text-green-500 mr-2" /> Emergency plumbing services</li>
              <li><FaCheckCircle className="inline text-green-500 mr-2" /> Installation and maintenance</li>
              <li><FaCheckCircle className="inline text-green-500 mr-2" /> Affordable pricing and guaranteed quality</li>
            </ul>
          </div>
        );
      
      
      case "cost":
        return (
          <div className="text-gray-700">
            <p>Estimated cost and timeframe for this service:</p>
            <ul className="mt-4 space-y-2">
              <li><FaClock className="inline text-yellow-500 mr-2" /> Service Fee: After seeing the service</li>
              <li><FaClock className="inline text-yellow-500 mr-2" /> Timeframe: depends on damages</li>
              <li><FaClock className="inline text-yellow-500 mr-2" /> Additional costs may apply for emergency services</li>
            </ul>
          </div>
        );
      case "location":
        return (
          <div className="text-gray-700">
            <p>Service available in:</p>
            <ul className="mt-4 space-y-2">
              <li><FaMapMarkerAlt className="inline text-red-500 mr-2" />Kathmandu</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };


  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-7xl mx-auto bg-[#1F4A9B] p-6 rounded-b-lg shadow-md text-white">
        <h1 className="text-3xl font-bold">Plumber Service</h1>
        <p className="mt-1">High-quality plumbing services for residential and commercial needs.</p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Image Section */}
        <div className="lg:col-span-1 bg-white p-4 rounded-lg shadow-md">
          <img 
            src={plumberImage} 
            alt="Plumber Service" 
            className="w-full max-h-[300px] object-contain rounded-lg" 
          />
        </div>

        {/* Right Column: Tabs and Content */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <div className="border-b border-gray-300 mb-4">
            <nav className="flex flex-wrap space-x-4 overflow-auto">
              {["description", "cost", "location"].map((tab) => (
                <button
                  key={tab}
                  className={`${
                    activeTab === tab
                      ? "text-[#1F4A9B] border-b-2 border-[#1F4A9B] pb-2"
                      : "text-gray-600 hover:text-[#1F4A9B]"
                  } text-lg font-medium whitespace-nowrap`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, " $1")}
                </button>
              ))}
            </nav>
          </div>
          {/* Render Tab Content */}
          {renderTabContent()}
        </div>
      </div>

      {/* Full-Width Request Service Button */}
      <div className="max-w-7xl mx-auto mt-8">
        <button
          className="w-full bg-[#1F4A9B] hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
          onClick={() => navigate("/available")} // Navigate to available services
        >
          Find Plumbers Available 
        </button>
      </div>

     
    </div>
  );
}

export default ServiceDetail;
