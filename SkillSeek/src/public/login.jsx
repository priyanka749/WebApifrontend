import React from "react";
import illustration from "../assets/image/home-cleaning-services-500x500 1.png"; // Adjust path
import logo from "../assets/image/skillseeklogo.png"; // Adjust path

const Login = () => {
  return (
    <div className="flex items-center justify-center py-10 min-h-10 bg-gray-100">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-3xl overflow-hidden grid grid-cols-4 md:grid-cols-2">
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

          <form className="space-y-6">
            <div>
              <label className="block text-sm-10 font-medium text-gray-900">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-400 shadow-sm-10"
              />
            </div>

            <div>
              <label className="block text-sm-10 font-medium text-gray-900">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-400 shadow-sm"
                />
                <button type="button" className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                  <i className="fas fa-eye"></i>
                </button>
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
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-900 mt-9">
            Don’t have an account?{" "}
            <a href="#" className="text-[#1F4A9B] font-bold hover:underline">
              SignUp
            </a>
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="hidden md:flex items-center justify-center bg-gray-50 p-20">
          <img src={illustration} alt="Service Providers Illustration" className="w-86" />
        </div>
      </div>
    </div>
  );
};

export default Login;
