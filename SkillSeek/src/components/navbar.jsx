
import axios from "axios";
import { Bell, LogOut, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [userId, setUserId] = useState(null);
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (id) {
      setUserId(id);
      fetchProfileImage(id);
    }

  }, []);

  const fetchProfileImage = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/customers/profile/${userId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
        }
      );

      if (response.data && response.data.customer.profileImage) {
        let imageUrl = `http://localhost:3000${response.data.customer.profileImage}`;
        setProfileImage(imageUrl);
      }
    } catch (error) {
      console.error("❌ Error fetching profile image:", error);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("userId");
    setUserId(null);
    toast.success("Logged out successfully!");
    navigate("/home");
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />

      <nav className="bg-white shadow-xl rounded-full p-6 h-20 flex items-center justify-between font-bold relative">
        {/* Logo */}
        <a onClick={() => navigate("/home")} className="flex items-center space-x-4 cursor-pointer pl-8">
          <img src="/src/assets/image/skillseeklogo.png" className="h-20" alt="SkillSeek Logo" />
        </a>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <a
            onClick={() => navigate("/home")}
            className="py-3 px-5 rounded-full text-gray-900 hover:bg-blue-100 cursor-pointer"
          >
            Home
          </a>
          <a
            onClick={() => navigate("/service")}
            className="py-3 px-5 rounded-full text-gray-900 hover:bg-blue-100 cursor-pointer"
          >
            Service
          </a>
          <a
            onClick={() => navigate("/about")}
            className="py-3 px-5 rounded-full text-gray-900 hover:bg-blue-100 cursor-pointer"
          >
            About
          </a>
        </div>

        {/* Right Side: Notification, Profile, Auth Buttons */}
        <div className="flex items-center space-x-6 relative">
          {/* Notification Button */}
          <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 shadow-md">
            <Bell className="w-7 h-7 text-gray-600" />
          </button>

          {/* If user is logged in */}
          {userId ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 bg-gray-200 p-3 rounded-full hover:bg-gray-300 shadow-md"
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border border-gray-300"
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-52 bg-white shadow-lg rounded-lg z-50">
                  <button
                    onClick={() => navigate(`/userprofile/${userId}`)}
                    className="flex items-center px-5 py-3 text-gray-900 hover:bg-gray-100 w-full text-left"
                  >
                    <User className="w-5 h-5 mr-3 text-blue-600" /> Profile
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center px-5 py-3 text-gray-900 hover:bg-gray-100 w-full text-left"
                  >
                    <LogOut className="w-5 h-5 mr-3" /> Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
           
            <div className="flex space-x-4">
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-3 text-white font-bold rounded-full bg-[#1F4A9B] hover:bg-[#1A3C7D] transition duration-300"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-6 py-3 text-white font-bold rounded-full bg-[#1F4A9B] hover:bg-[#1A3C7D] transition duration-300"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
