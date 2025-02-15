import { Bell } from "lucide-react"; // Notification Icon
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePic, setProfilePic] = useState(null); // Profile picture state
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in and retrieve profile picture
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setProfilePic(user.profilePic || null); // Assume 'user' object has 'profilePic'
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setProfilePic(null);
    navigate("/login");
  };

  return (
    <header
      className={`shadow-lg py-5 sticky top-0 z-50 bg-white transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-6 cursor-pointer" onClick={() => handleNavigate("/home")}>
          <img src="src/assets/image/skillseeklogo.png" className="h-20 md:h-22" alt="SkillSeek Logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <span
            onClick={() => handleNavigate("/home")}
            className="cursor-pointer text-[#1F4A9B] text-lg font-medium hover:text-gray-500 transition duration-300 ease-in-out"
          >
            Home
          </span>
          <span
            onClick={() => handleNavigate("/service")}
            className="cursor-pointer text-[#1F4A9B] text-lg font-medium hover:text-gray-500 transition duration-300 ease-in-out"
          >
            Services
          </span>
          <span className="cursor-pointer text-[#1F4A9B] text-lg font-medium hover:text-gray-500 transition duration-300 ease-in-out">
            Help
          </span>
          <span className="cursor-pointer text-[#1F4A9B] text-lg font-medium hover:text-gray-500 transition duration-300 ease-in-out">
            Others
          </span>
        </nav>

        {/* Notification Icon and Profile/Buttons */}
        <div className="flex space-x-6 items-center">
          <Bell className="w-6 h-6 text-[#1F4A9B] cursor-pointer hover:text-gray-500 transition duration-300" />
          {isLoggedIn ? (
            <div className="relative flex items-center space-x-4">
              <img
                src={profilePic || "https://via.placeholder.com/50"} // Default profile icon if no picture is available
                alt="Profile"
                className="w-12 h-12 rounded-full cursor-pointer border border-gray-300"
                onClick={() => handleNavigate("/profile")}
              />
              <button
                className="px-4 py-2 bg-red-500 text-white font-bold rounded-full shadow-md hover:bg-red-600 transition-all duration-300 ease-in-out"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex space-x-4">
              <button
                className="px-4 py-2 bg-[#1F4A9B] text-white font-bold rounded-full shadow-md hover:bg-[#104e71] transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleNavigate("/login")}
              >
                Sign In
              </button>
              <button
                className="px-4 py-2 bg-[#1F4A9B] text-white font-bold rounded-full shadow-md hover:bg-[#104e71] transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleNavigate("/signup")}
              >
                Sign Up
              </button>
            </div>
          )}
          <button className="md:hidden text-[#1F4A9B] text-3xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 rounded-b-xl">
          <nav className="flex flex-col space-y-2 p-4">
            <span
              onClick={() => handleNavigate("/home")}
              className="cursor-pointer text-[#1F4A9B] text-lg font-medium bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              Home
            </span>
            <span
              onClick={() => handleNavigate("/service")}
              className="cursor-pointer text-[#1F4A9B] text-lg font-medium bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              Services
            </span>
            <span className="cursor-pointer text-[#1F4A9B] text-lg font-medium bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out">
              Help
            </span>
            <span className="cursor-pointer text-[#1F4A9B] text-lg font-medium bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out">
              Others
            </span>
          </nav>
          {!isLoggedIn && (
            <div className="flex flex-col space-y-4 p-4">
              <button
                className="px-4 py-3 bg-[#1F4A9B] text-white font-bold rounded-lg shadow-md hover:bg-[#104e71] transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleNavigate("/login")}
              >
                Sign In
              </button>
              <button
                className="px-4 py-3 bg-[#1F4A9B] text-white font-bold rounded-lg shadow-md hover:bg-[#104e71] transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleNavigate("/signup")}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
