import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="bg-[#1F4A9B] p-8 text-white flex flex-col lg:flex-row items-center lg:items-start">
          <img
            src="https://img.freepik.com/free-photo/young-bearded-man-with-white-t-shirt_273609-7187.jpg"
            alt="Service Provider"
            className="w-32 h-32 rounded-full object-cover border-4 border-white mb-6 lg:mb-0 lg:mr-8"
          />
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl font-bold">John Doe</h1>
            <p className="text-lg mt-2">
              Professional Plumber <span className="text-gray-300"> | </span> 10+ Years Experience
            </p>
            <p className="flex items-center justify-center lg:justify-start mt-2 text-gray-200">
              <FaMapMarkerAlt className="mr-2" /> Boston, MA, United States
            </p>
          </div>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-bold mt-6 lg:mt-0 flex items-center hover:bg-gray-300 transition">
            <FaEnvelope className="mr-2" /> Send Message
          </button>
        </div>

        {/* Stats Section */}
        <div className="p-6 flex flex-wrap justify-around bg-gray-50">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">440</h2>
            <p className="text-gray-600">Followers</p>
          </div>
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">4.8</h2>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">120</h2>
            <p className="text-gray-600">Completed Jobs</p>
          </div>
        </div>

        {/* Core Skills */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#1F4A9B] mb-4">My Core Skills</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium">
              Leak Detection
            </span>
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium">
              Pipe Repair
            </span>
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium">
              Water Heater Installation
            </span>
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium">
              Eco-Friendly Solutions
            </span>
          </div>
        </div>

        {/* Professional Bio */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#1F4A9B] mb-4">Professional Bio</h2>
          <p className="text-gray-700 leading-relaxed">
            With over a decade of experience in residential and commercial plumbing, I specialize in
            providing fast and reliable plumbing solutions. From leak detection and pipe repair to
            water heater installations, I am committed to delivering high-quality service. I am also
            passionate about eco-friendly solutions to reduce water waste and ensure sustainable
            practices.
          </p>
        </div>

        {/* Badges Section */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#1F4A9B] mb-4">My Badges</h2>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center">
              <img
                src="https://img.icons8.com/color/96/plumbing.png"
                alt="Certified Plumber"
                className="w-16 h-16"
              />
              <p className="ml-4 font-medium">Certified Plumber</p>
            </div>
            <div className="flex items-center">
              <img
                src="https://img.icons8.com/color/96/water.png"
                alt="Eco-Friendly Solutions"
                className="w-16 h-16"
              />
              <p className="ml-4 font-medium">Eco-Friendly Solutions</p>
            </div>
            <div className="flex items-center">
              <img
                src="https://img.icons8.com/color/96/toolbox.png"
                alt="Maintenance Expert"
                className="w-16 h-16"
              />
              <p className="ml-4 font-medium">Maintenance Expert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
