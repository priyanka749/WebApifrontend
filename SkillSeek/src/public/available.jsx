import React, { useState } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Navbar from "./navbar";

const plumbers = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://img.freepik.com/free-photo/young-bearded-man-with-white-t-shirt_273609-7187.jpg",
    experience: "10+ yrs",
    specialty: "Leak Detection, Pipe Repair",
    reviews: 25,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    experience: "8 yrs",
    specialty: "Water Heater Installation, Drain Cleaning",
    reviews: 18,
    rating: 4.0,
  },
  // Add more plumber objects as needed
];

const renderRating = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center text-yellow-500">
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <FaStar key={index} />
        ))}
      {halfStar && <FaStarHalfAlt />}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <FaRegStar key={index} />
        ))}
    </div>
  );
};

const PlumberList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");

  const filteredPlumbers = plumbers.filter((plumber) =>
    plumber.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendRequest = async (providerId) => {
    try {
      const response = await fetch("http://localhost:3000/api/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerId: "customer_id_here",  // Replace with actual logged-in customer ID
          providerId: providerId,
          serviceDetails: "Plumbing Repair",  // Modify as needed
        }),
      });
  
      if (response.ok) {
        alert("Request sent successfully!");
      } else {
        const errorData = await response.json();
        alert(`Failed to send request: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error sending request:", error);
      alert("Failed to send request. Please try again.");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="max-w-8xl mx-auto px-20 py-8 font-semibold">
        <h1 className="text-5xl font-bold text-[#1F4A9B] mb-8 text-center">Available Plumbers</h1>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by specialty (e.g., Leak Detection, Installation)"
            className="w-full p-4 border border-[#1F4A9B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {message && (
          <div className="mb-6 p-4 text-center bg-green-100 text-green-700 rounded-lg">{message}</div>
        )}

        <div className="space-y-8">
          {filteredPlumbers.length > 0 ? (
            filteredPlumbers.map((plumber) => (
              <div
                key={plumber.id}
                className="flex items-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <img
                  src={plumber.photo}
                  alt={plumber.name}
                  className="w-28 h-28 rounded-full object-cover mr-8 border-4 border-[#1F4A9B]"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[#1F4A9B]">{plumber.name}</h2>
                  <div className="mt-1">{renderRating(plumber.rating)}</div>
                  <p className="text-gray-700 font-bold mt-2">
                    <span className="font-semibold">Experience:</span> {plumber.experience}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Specialty:</span> {plumber.specialty}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Reviews:</span> {plumber.reviews}
                  </p>
                </div>
                <div className="text-right">
                  <div className="mt-3 flex space-x-3">
                    <button
                      className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
                      onClick={() => handleSendRequest(plumber)}
                    >
                      Send Request
                    </button>
                    <button className="bg-[#1F4A9B] text-white px-5 py-2 rounded-lg hover:bg-gray-300 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 text-lg">No plumbers found for this search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlumberList;
