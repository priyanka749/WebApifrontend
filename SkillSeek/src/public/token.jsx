import React, { useState } from "react";
import logo from "../assets/image/skillseeklogo.png"; // Adjust the path if necessary

const TokenLogin = () => {
  const [token, setToken] = useState("");

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Token Submitted:", token); // Replace with actual token submission logic
  };

  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-3xl p-10">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="SkillSeek Logo" className="w-32 mb-6" />
          <h2 className="text-4xl font-extrabold text-[#1F4A9B] text-center mb-4">
            Token Verification
          </h2>
          <p className="text-gray-600 text-center text-lg">
            Enter the token sent to your email or phone to continue.
          </p>
        </div>

        {/* Token Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700"></label>
            <input
              type="text"
              value={token}
              onChange={handleTokenChange}
              placeholder="Enter your token"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-400 shadow-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white bg-[#1F4A9B] rounded-lg hover:bg-blue-800 transition-all"
          >
            Verify Token
          </button>
        </form>

        <p className="text-center text-gray-600 mt-8">
          Didn’t receive a token?{" "}
          <a href="#" className="text-[#1F4A9B] font-semibold hover:underline">
            Resend Token
          </a>
        </p>
      </div>
    </div>
  );
};

export default TokenLogin;
