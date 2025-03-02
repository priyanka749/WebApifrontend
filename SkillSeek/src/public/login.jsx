import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import illustration from "../assets/image/home-cleaning-services-500x500 1.png"; // Adjust path
import logo from "../assets/image/skillseeklogo.png"; // Adjust path


import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
    
    const Login = () => {
      const [formData, setFormData] = useState({ email: '', password: '' });
      const [isLoading, setIsLoading] = useState(false);
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        try {
          const response = await axios.post("http://localhost:3000/api/auth/login", formData);
          const { token, userId, role } = response.data;
    
          if (token && userId && role) {
            localStorage.setItem("authToken", token);
            localStorage.setItem("userId", userId);
            localStorage.setItem("userRole", role);
    
            toast.success("Login successful! Redirecting...", { autoClose: 2000 });
    
            setTimeout(() => {
              if (role === "Customer") {
                navigate(`/home?userId=${userId}`);
              } else if (role === "Service Provider") {
                navigate(`/servicedash?userId=${userId}`);
              } else {
                toast.error("Role not recognized.");
              }
            }, 400);
          } else {
            toast.error("No token received from the server.");
          }
        } catch (error) {
          toast.error("Login failed. Invalid credentials.");
        } finally {
          setIsLoading(false);
        }
      };
    
      return (
        <div className="flex items-center justify-center py-10 min-h-screen bg-gray-100">
          <div className="w-full max-w-6xl bg-white shadow-xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
            
            {/* Left Section - Form */}
            <div className="p-10 flex flex-col justify-center">
              <div className="mb-6">
                <img src={logo} alt="SkillSeek Logo" className="w-32 mx-auto mb-6" />
                <h2 className="text-4xl font-extrabold text-[#1F4A9B] text-center mb-2">
                  Welcome Back!
                </h2>
                <p className="text-gray-500 font-semibold text-center text-lg">
                  Simplify your workflow with SkillSeek. Get started now.
                </p>
              </div>
    
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-600 shadow-sm"
                    onChange={handleChange}
                    required
                  />
                </div>
    
                <div>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-600 shadow-sm"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
    
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 text-[#1F4A9B] border-gray-300 rounded focus:ring-[#1F4A9B]"
                    />
                    <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-[#1F4A9B] hover:underline">
                    Forgot password?
                  </a>
                </div>
    
                <button
                  type="submit"
                  className="w-full py-3 text-lg font-semibold text-white bg-[#1F4A9B] rounded-lg hover:bg-blue-800 transition-all"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>
              </form>
    
              <p className="text-center text-gray-900 mt-9">
                Don’t have an account?{" "}
                <button onClick={() => navigate("/signup")} className="text-[#1F4A9B] font-bold hover:underline">
                  Sign Up
                </button>
              </p>
            </div>
    
            {/* Right Section - Image */}
            <div className="hidden md:flex items-center justify-center bg-gray-50 p-20">
              <img src={illustration} alt="Service Providers Illustration" className="w-86" />
            </div>
          </div>
    
          {/* Toastify Container */}
          <ToastContainer position="top-right" autoClose={200} />
        </div>
      );
    };
    
    export default Login;
    