import React, { useState } from "react";
import { FaCheckCircle, FaClock, FaFileAlt, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import plumberImage from "../assets/image/om54m6zx.bmp"; // Import plumber image

const ServiceDetail = () => {
  const [activeTab, setActiveTab] = useState("description");

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
      case "documents":
        return (
          <div className="text-gray-700">
            <p>The following documents are required for this service:</p>
            <ul className="mt-4 space-y-2">
              <li><FaFileAlt className="inline text-blue-500 mr-2" /> Proof of ownership</li>
              <li><FaFileAlt className="inline text-blue-500 mr-2" /> Government-issued ID</li>
              <li><FaFileAlt className="inline text-blue-500 mr-2" /> Service request form</li>
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
              <li><FaMapMarkerAlt className="inline text-red-500 mr-2" /> New York City</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  const reviews = [
    { name: "John Doe", rating: 5, date: "Jan 20, 2025", comment: "Excellent service, highly recommended!" },
    { name: "Jane Smith", rating: 4, date: "Feb 5, 2025", comment: "Professional and quick response time." },
    { name: "Michael Lee", rating: 5, date: "Feb 10, 2025", comment: "Great experience! The plumber was very friendly." },
  ];

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
              {["description", "documents", "cost", "location"].map((tab) => (
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
        <button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
          Request Service
        </button>
      </div>

      {/* Review and Rating Section */}
      <div className="max-w-7xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-[#1F4A9B] mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 mr-1 text-sm" />
                  ))}
                  <span className="ml-2 text-sm font-medium">{review.name}</span>
                </div>
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>
              <p className="text-gray-600 text-sm">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
