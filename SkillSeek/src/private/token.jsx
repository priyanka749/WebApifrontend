import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/image/skillseeklogo.png";

const TokenLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const email = location.state?.email || ""; // Get email from state passed by navigate

  // Automatically fill the token if it's passed via location.state
  useEffect(() => {
    if (location.state?.otp) {
      setToken(location.state.otp);
    }
  }, [location.state]);

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/auth/verify-otp", {
        email,
        otp: token,
      });

      setMessage(response.data.message);
      // Redirect to login page after a delay
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error("Token verification error:", error);
      setMessage(error.response?.data?.message || "Invalid token.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-3xl p-10">
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="SkillSeek Logo" className="w-32 mb-6" />
          <h2 className="text-4xl font-extrabold text-[#1F4A9B] text-center mb-4">
            Token Verification
          </h2>
          <p className="text-gray-600 text-center text-lg">
            Enter the token sent to your email to complete the registration.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={token}
              onChange={handleTokenChange}
              placeholder="Enter your token"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-400 shadow-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white bg-[#1F4A9B] rounded-lg hover:bg-blue-800 transition-all"
          >
            Verify Token
          </button>
        </form>

        {message && <p className={`mt-4 text-center ${message.includes("successfully") ? "text-green-500" : "text-red-500"}`}>{message}</p>}

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
