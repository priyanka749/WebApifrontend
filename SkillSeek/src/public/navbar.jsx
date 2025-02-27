import axios from "axios";
import { Bell, LogOut, Menu, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
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
        const response = await axios.get(`http://localhost:3000/api/customers/profile/${userId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
        });

        if (response.data && response.data.profileImage) {
            let imageUrl = `http://localhost:3000${response.data.profileImage}`;
            imageUrl = imageUrl.replace(/\/?uploads\//, "/uploads/"); // ✅ Ensure correct URL formatting
            console.log("✅ Fetched Image URL:", imageUrl);
            setProfileImage(imageUrl);
        } else {
            setProfileImage(null); // Fallback if no profile image
        }
    } catch (error) {
        console.error("❌ Error fetching profile image:", error);
    }
};

  const handleSignOut = () => {
    localStorage.removeItem("userId");
    setUserId(null);
    navigate("/home");
  };
  
  return (
    <nav className="bg-white shadow-xl rounded-full p-6 h-20 flex items-center justify-between font-bold">
      <a onClick={() => navigate("/home")} className="flex items-center space-x-4 cursor-pointer pl-8">
        <img src="/src/assets/image/skillseeklogo.png" className="h-20" alt="SkillSeek Logo" />
      </a>
      <div className="flex space-x-8">
        <a onClick={() => navigate("/home")} className="py-3 px-5 rounded-full text-gray-900 hover:bg-blue-100 cursor-pointer">Home</a>
        <a onClick={() => navigate("/service")} className="py-3 px-5 rounded-full text-gray-900 hover:bg-blue-100 cursor-pointer">Service</a>
        <a onClick={() => navigate("/about")} className="py-3 px-5 rounded-full text-gray-900 hover:bg-blue-100 cursor-pointer">About</a>
      </div>
      <div className="flex items-center space-x-6">
        <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 shadow-md">
          <Bell className="w-7 h-7 text-gray-600" />
        </button>
        {userId ? (
          <div className="relative">
           <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center space-x-2 bg-gray-200 p-3 rounded-full hover:bg-gray-300 shadow-md">
  {profileImage ? (
    <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
  ) : (
    <User className="w-9 h-9 text-blue-600" />
  )}
  

            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-52 bg-white shadow-lg rounded-lg">
                <button onClick={() => navigate(`/userprofile/${userId}`)} className="flex items-center px-5 py-3 text-gray-900 hover:bg-gray-100 w-full text-left">
                  <User className="w-5 h-5 mr-3 text-blue-600" /> Profile
                </button>
                <button onClick={handleSignOut} className="flex items-center px-5 py-3 text-gray-900 hover:bg-gray-100 w-full text-left">
                  <LogOut className="w-5 h-5 mr-3" /> Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex space-x-6">
            <button onClick={() => navigate("/login")} className="py-3 px-6 bg-[#1F4A9B] text-white rounded-full hover:bg-blue-700 shadow-lg">Login</button>
            <button onClick={() => navigate("/signup")} className="py-3 px-6 bg-[#1F4A9B] text-white rounded-full hover:bg-blue-700 shadow-lg">Signup</button>
          </div>
        )}
        <button className="md:hidden p-3 text-gray-500 rounded-lg hover:bg-gray-100 shadow-md" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
