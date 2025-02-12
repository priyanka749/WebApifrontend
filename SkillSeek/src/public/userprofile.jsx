import React, { useState } from "react";
import { FaCamera, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState(
    "https://img.freepik.com/free-photo/portrait-smiling-young-man-casual-shirt_23-2148479847.jpg"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="bg-[#1F4A9B] p-8 text-white flex flex-col lg:flex-row items-center lg:items-start">
          <div className="relative w-32 h-32 mb-6 lg:mb-0 lg:mr-8">
            <img
              src={profileImage}
              alt="User"
              className="w-32 h-32 rounded-full object-cover border-4 border-white"
            />
            <label
              htmlFor="profileImage"
              className="absolute bottom-0 right-0 bg-gray-800 p-2 rounded-full cursor-pointer hover:bg-gray-700 transition"
            >
              <FaCamera className="text-white text-lg" />
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl font-bold">John Smith</h1>
            <p className="text-lg mt-2 flex items-center justify-center lg:justify-start">
              <FaUser className="mr-2" /> User Profile
            </p>
          </div>
        </div>

        {/* User Details */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#1F4A9B] mb-4">Profile Details</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaUser className="text-[#1F4A9B] text-2xl mr-4" />
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Name:</span> John Smith
              </p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-[#1F4A9B] text-2xl mr-4" />
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Email:</span> john.smith@example.com
              </p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-[#1F4A9B] text-2xl mr-4" />
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Address:</span> 123 Main Street, Boston, MA, USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
