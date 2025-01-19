import React from "react";
import "../index.css";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 w-full max-w-4xl">
        <div className="bg-white shadow-xl rounded-lg flex overflow-hidden">
          {/* Left Section - Illustration */}
          <div className="w-1/2 flex items-center justify-center bg-[#1FFFFFF] p-8">
          <div className="w-80 h-80 bg-white rounded-full shadow-md shadow-[#1F4A9B] flex items-center justify-center">
          <img
                src="https://i.pinimg.com/736x/40/f5/51/40f551f1cb4ed3d8a3116c52a81e7552.jpg"
                alt="Workers illustration"
                className="w-72 h-72 object-contain rounded-full"
              />
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-1/2 p-8 space-y-4">
            <h2 className="text-2xl font-bold text-[#1F4A9B] text-center"></h2>
            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border-2 border-gray-400 rounded-md  focus:ring-[#1F4A9B]"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border-2 border-gray-400 rounded-md  focus:ring-[#1F4A9B]"
                />
              </div>

              {/* Phone Number */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border-2 border-gray-400 rounded-md focus:ring-[#1F4A9B]"
                />
              </div>

              {/* Address */}
              <div>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full px-4 py-2 border-2 border-gray-400 rounded-md focus:ring-[#1F4A9B]"
                />
              </div>

              {/* Password */}
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border-2 border-gray-400 rounded-md  focus:ring-2 focus:ring-[#1F4A9B]"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 border-2 border-gray-400 rounded-md  focus:ring-[#1F4A9B]"
                />
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full bg-[#1F4A9B] text-white py-2 rounded-md  hover:bg-blue-700 transition duration-200"
              >
                Sign Up
              </button>
            </form>

            {/* Sign In Link */}
            <p className="text-center text-sm mt-4">
              Already have an account?{' '}
              <a href="#" className="text-[#1F4A9B] hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
