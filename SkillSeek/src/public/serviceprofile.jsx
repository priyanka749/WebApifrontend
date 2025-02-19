import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaStar, FaWrench } from "react-icons/fa";

const ServiceProviderList = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProviders = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/api/provider?page=1&limit=10");
        setProviders(response.data.providers);
      } catch (err) {
        setError("Failed to fetch service providers.");
        console.error("Error fetching providers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, []);

  const handleSendRequest = async (providerId) => {
    const requestPayload = {
      customerId: "67afaabbc0b1c93513a31c07", // Replace with actual customer ID
      providerId: providerId,
      serviceDetails: "Looking for plumbing services",
    };

    try {
      const response = await axios.post("http://localhost:3000/api/request", requestPayload);
      alert("Request sent successfully!");
    } catch (error) {
      console.error("Error sending request:", error);
      alert("Failed to send request.");
    }
  };

  // Filter only plumbers based on skills
  const plumbers = providers.filter(
    (provider) =>
      provider.skills.some((skill) => skill.toLowerCase().includes("plumber")) &&
      provider.bio.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <p className="text-center text-blue-500">Loading service providers...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1F4A9B] text-center mb-10">Available Plumbers</h1>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by specialty (e.g., Leak Detection, Installation)"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="space-y-6">
          {plumbers.length > 0 ? (
            plumbers.map((provider) => (
              <div
                key={provider.id}
                className="bg-white shadow-lg rounded-lg p-6 flex items-center hover:shadow-xl transition-all"
              >
                <div className="w-24 h-24 rounded-full border-4 border-[#1F4A9B] mr-6 flex items-center justify-center bg-gray-100 overflow-hidden">
                  {provider.profileImage ? (
                    <img
                      src={provider.profileImage}
                      alt={provider.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaWrench className="text-4xl text-gray-500" />
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-black">{provider.name || "N/A"}</h2>
                  <p className="text-black font-medium mt-2">
                    <FaPhone className="inline-block text-[#1F4A9B] mr-2" />
                    {provider.phoneNumber || "No phone number available"}
                  </p>
                  <p className="text-black font-medium mt-1">
                    <FaMapMarkerAlt className="inline-block text-[#1F4A9B] mr-2" />
                    {provider.location || "Location not available"}
                  </p>
                  <p className="text-black font-medium mt-1">Bio: {provider.bio || "No bio available"}</p>
                  <div className="mt-2 flex items-center">
                    <FaStar className="text-yellow-500 mr-1" />
                    <span className="text-black font-semibold">{provider.rating?.toFixed(1) || "0.0"}</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleSendRequest(provider.id)}
                    className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600"
                  >
                    Send Request
                  </button>
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600">
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No plumbers found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderList;
