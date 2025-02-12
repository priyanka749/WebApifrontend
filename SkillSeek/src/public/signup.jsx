import React, { useState } from "react";
import logo from "../assets/image/skillseeklogo.png"; // Adjust path if necessary

const Signup = () => {
  const [role, setRole] = useState("Customer");

  return (
    <div className="flex items-center py-8 py-30 justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="w-full max-w-5xl p-10 bg-white shadow-4xl rounded-3xl border-2 border-blue-100">
        {/* Logo */}
        <div className="flex justify-center  ">
          <img src={logo} alt="SkillSeek Logo" className="w-32" />
        </div>

        <h2 className="text-4xl font-extrabold text-center text-[#1F4A9B] mb-7">
          Create an Account
        </h2>

        {/* Role Selection Slider */}
        <div className="flex items-center justify-between bg-gray-200 rounded-full p-1 mb-10 shadow-inner">
          <button
            onClick={() => setRole("Customer")}
            className={`w-1/2 py-3 font-semibold text-center rounded-full transition-all ${
              role === "Customer"
                ? "bg-[#1F4A9B] text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-300"
            }`}
          >
            Customer
          </button>
          <button
            onClick={() => setRole("Service Provider")}
            className={`w-1/2 py-3 font-semibold text-center rounded-full transition-all ${
              role === "Service Provider"
                ? "bg-[#1F4A9B] text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-300"
            }`}
          >
            Service Provider
          </button>
        </div>

        {/* Form Fields */}
        <form className="space-y-6">
          {/* Common Fields */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-400 shadow-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-400 shadow-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="98XXXXXXXX"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-400 shadow-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-400 shadow-sm"
            />
          </div>

          {/* Role-specific Fields */}
          {role === "Service Provider" && (
            <>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <input
                  type="text"
                  placeholder="Your role (e.g., Plumber, Electrician)"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-400 shadow-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Skills
                </label>
                <input
                  type="text"
                  placeholder="Enter your skills (comma-separated)"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-400 shadow-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Bio
                </label>
                <textarea
                  placeholder="Tell us about yourself"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-400 shadow-sm"
                  rows="4"
                ></textarea>
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 text-lg font-bold text-white bg-[#1F4A9B] rounded-lg hover:bg-[#163870] transition-all shadow-lg"
          >
            Sign Up as {role}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
