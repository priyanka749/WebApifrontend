// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { FaBell, FaCamera, FaCog, FaEdit, FaHome, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom"; // Navigation Hook

// const ServiceProviderProfile = () => {
//   const [provider, setProvider] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     bio: "",
//     location: "",
//     skills: "",
//     phoneNumber: "",
//     profileImage: null,
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       fetchProfile(userId);
//     } else {
//       console.error("User ID not found in local storage.");
//     }
//   }, []);

//   const fetchProfile = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:3000/api/provider/profile/${userId}`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
//       });

//       setProvider(response.data);
//       setFormData({
//         name: response.data.name || "",
//         bio: response.data.bio || "",
//         location: response.data.location || "",
//         skills: response.data.skills?.join(", ") || "",
//         phoneNumber: response.data.phoneNumber || "",
//         profileImage: response.data.profileImage || "",
//       });
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setFormData({ ...formData, profileImage: e.target.files[0] });
//   };

//   const handleUpdate = async () => {
//     try {
//       const userId = localStorage.getItem("userId");
//       const token = localStorage.getItem("authToken");

//       const formDataToSend = new FormData();
//       formDataToSend.append("name", formData.name);
//       formDataToSend.append("bio", formData.bio);
//       formDataToSend.append("location", formData.location);
//       formDataToSend.append("skills", formData.skills);
//       formDataToSend.append("phoneNumber", formData.phoneNumber);
//       if (formData.profileImage instanceof File) {
//         formDataToSend.append("profileImage", formData.profileImage);
//       }

//       await axios.put(`http://localhost:3000/api/provider/${userId}`, formDataToSend, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       alert("Profile updated successfully!");
//       setIsEditing(false);
//       fetchProfile(userId);
//     } catch (error) {
//       console.error("Update failed", error);
//       alert("Update failed");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("userId");
//     navigate("/login");
//   };

//   if (!provider) return <p className="text-center text-gray-500">Loading profile...</p>;

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-20 bg-[#1F4A9B] text-white flex flex-col items-center p-5">
//         <FaHome onClick={() => navigate("/serviceDashboard")} className="text-3xl my-6 cursor-pointer hover:text-gray-300" />
//         <FaBell onClick={() => navigate("/notifications")} className="text-3xl my-6 cursor-pointer hover:text-gray-300" />
//         <FaCog className="text-3xl my-6 cursor-pointer hover:text-gray-300" />
//         <FaSignOutAlt onClick={handleLogout} className="text-3xl my-6 cursor-pointer hover:text-gray-300" />
//       </div>

//       {/* Profile Section */}
//       <div className="flex-1 flex flex-col items-center justify-center">
//         <div className="bg-white p-8 rounded-2xl shadow-lg w-3/5">
//           {/* Profile Header */}
//           <div className="flex items-center justify-between">
//             <h2 className="text-2xl font-semibold text-gray-800">Edit Profile</h2>
//             <button
//               onClick={() => setIsEditing(!isEditing)}
//               className="bg-[#1F4A9B] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-800"
//             >
//               <FaEdit />
//               <span>Edit</span>
//             </button>
//           </div>

//           {/* Profile Image */}
//           <div className="flex items-center justify-center mt-6">
//             <div className="relative w-36 h-36 flex items-center justify-center">
//               {provider.profileImage ? (
//                 <img
//                   src={`http://localhost:3000${provider.profileImage}`}
//                   alt="Profile"
//                   className="w-full h-full rounded-full border-4 border-[#1F4A9B] shadow-md object-cover"
//                 />
//               ) : (
//                 <FaUserCircle className="text-[#1F4A9B] text-8xl" />
//               )}
//               <label htmlFor="fileUpload" className="absolute bottom-2 right-2 bg-[#1F4A9B] text-white p-2 rounded-full cursor-pointer shadow-md">
//                 <FaCamera />
//               </label>
//               <input type="file" name="profileImage" onChange={handleImageChange} className="hidden" id="fileUpload" />
//             </div>
//           </div>

//           {/* Profile Details */}
//           <div className="mt-6 grid grid-cols-2 gap-6">
//             <div>
//               <label className="text-gray-700 font-semibold">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1F4A9B] mt-2"
//                 placeholder="Full Name"
//                 disabled={!isEditing}
//               />
//             </div>
//             <div>
//               <label className="text-gray-700 font-semibold">Email</label>
//               <input
//                 type="text"
//                 value={provider.email}
//                 className="w-full p-3 border rounded-lg bg-gray-100 mt-2"
//                 disabled
//               />
//             </div>
//             <div>
//               <label className="text-gray-700 font-semibold">Phone Number</label>
//               <input
//                 type="text"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1F4A9B] mt-2"
//                 placeholder="Phone Number"
//                 disabled={!isEditing}
//               />
//             </div>
//             <div>
//               <label className="text-gray-700 font-semibold">Location</label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1F4A9B] mt-2"
//                 placeholder="Location"
//                 disabled={!isEditing}
//               />
//             </div>
//           </div>

//           {/* Bio & Skills */}
//           <div className="mt-6">
//             <label className="text-gray-700 font-semibold">Bio</label>
//             <textarea
//               name="bio"
//               value={formData.bio}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1F4A9B] mt-2"
//               placeholder="Tell us about yourself"
//               disabled={!isEditing}
//             />
//           </div>

//           {/* Save & Cancel Buttons */}
//           {isEditing && (
//             <div className="flex justify-between mt-6">
//               <button onClick={handleUpdate} className="bg-[#1F4A9B] text-white px-6 py-3 rounded-lg hover:bg-blue-800">
//                 Save
//               </button>
//               <button onClick={() => setIsEditing(false)} className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400">
//                 Cancel
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceProviderProfile;
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { FaBell, FaCamera, FaCog, FaEdit, FaHome, FaSignOutAlt } from "react-icons/fa";
// import { useNavigate } from "react-router-dom"; // Navigation Hook

// const ServiceProviderProfile = () => {
//   const [provider, setProvider] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     bio: "",
//     location: "",
//     skills: "",
//     phoneNumber: "",
//     profileImage: null,
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       fetchProfile(userId);
//     } else {
//       console.error("User ID not found in local storage.");
//     }
//   }, []);

//   const fetchProfile = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:3000/api/provider/profile/${userId}`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
//       });

//       setProvider(response.data);
//       setFormData({
//         name: response.data.name || "",
//         bio: response.data.bio || "",
//         location: response.data.location || "",
//         skills: response.data.skills?.join(", ") || "",
//         phoneNumber: response.data.phoneNumber || "",
//         profileImage: response.data.profileImage || "", // Will be used to conditionally display the avatar
//       });
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setFormData({ ...formData, profileImage: e.target.files[0] });
//   };

//   const handleUpdate = async () => {
//     try {
//       const userId = localStorage.getItem("userId");
//       const token = localStorage.getItem("authToken");

//       const formDataToSend = new FormData();
//       formDataToSend.append("name", formData.name);
//       formDataToSend.append("bio", formData.bio);
//       formDataToSend.append("location", formData.location);
//       formDataToSend.append("skills", formData.skills);
//       formDataToSend.append("phoneNumber", formData.phoneNumber);
//       if (formData.profileImage instanceof File) {
//         formDataToSend.append("profileImage", formData.profileImage);
//       }

//       await axios.put(`http://localhost:3000/api/provider/${userId}`, formDataToSend, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       alert("Profile updated successfully!");
//       setIsEditing(false);
//       fetchProfile(userId);
//     } catch (error) {
//       console.error("Update failed", error);
//       alert("Update failed");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("userId");
//     navigate("/login");
//   };

//   if (!provider) return <p className="text-center text-gray-500">Loading profile...</p>;

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-20 bg-[#1F4A9B] text-white flex flex-col items-center p-5">
//         <FaHome onClick={() => navigate("/serviceDashboard")} className="text-3xl my-6 cursor-pointer hover:text-gray-300" />
//         <FaBell onClick={() => navigate("/notifications")} className="text-3xl my-6 cursor-pointer hover:text-gray-300" />
//         <FaCog className="text-3xl my-6 cursor-pointer hover:text-gray-300" />
//         <FaSignOutAlt onClick={handleLogout} className="text-3xl my-6 cursor-pointer hover:text-gray-300" />
//       </div>

//       {/* Profile Section */}
//       <div className="flex-1 flex flex-col items-center justify-center">
//         <div className="bg-white p-8 rounded-2xl shadow-lg w-3/5">
//           {/* Profile Header */}
//           <div className="flex items-center justify-between">
//             <h2 className="text-2xl font-semibold text-gray-800">Edit Profile</h2>
//             <button
//               onClick={() => setIsEditing(!isEditing)}
//               className="bg-[#1F4A9B] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-800"
//             >
//               <FaEdit />
//               <span>Edit</span>
//             </button>
//           </div>

//           {/* Profile Image */}
//           <div className="flex items-center justify-center mt-6">
//             <div className="relative w-36 h-36 flex items-center justify-center">
//               {provider.profileImage ? (
//                 <img
//                 src={provider.profileImage ? `http://localhost:3000${provider.profileImage}` : "https://icon-library.com/images/human-icon/human-icon-22.jpg"}
//                 alt="Profile"
//                 className="w-full h-full rounded-full border-4 border-[#1F4A9B] shadow-md object-cover"
//               />
              
//               ) : (
//                 <img
//                   src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`} // Random Avatar URL
//                   alt="Default Avatar"
//                   className="w-full h-full rounded-full border-4 border-[#1F4A9B] shadow-md object-cover"
//                 />
//               )}
//               <label htmlFor="fileUpload" className="absolute bottom-2 right-2 bg-[#1F4A9B] text-white p-2 rounded-full cursor-pointer shadow-md">
//                 <FaCamera />
//               </label>
//               <input type="file" name="profileImage" onChange={handleImageChange} className="hidden" id="fileUpload" />
//             </div>
//           </div>

//           {/* Profile Details */}
//           <div className="mt-6 grid grid-cols-2 gap-6">
//             <div>
//               <label className="text-gray-700 font-semibold">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1F4A9B] mt-2"
//                 placeholder="Full Name"
//                 disabled={!isEditing}
//               />
//             </div>
//             <div>
//               <label className="text-gray-700 font-semibold">Email</label>
//               <input
//                 type="text"
//                 value={provider.email}
//                 className="w-full p-3 border rounded-lg bg-gray-100 mt-2"
//                 disabled
//               />
//             </div>
//             <div>
//               <label className="text-gray-700 font-semibold">Phone Number</label>
//               <input
//                 type="text"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1F4A9B] mt-2"
//                 placeholder="Phone Number"
//                 disabled={!isEditing}
//               />
//             </div>
//             <div>
//               <label className="text-gray-700 font-semibold">Location</label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1F4A9B] mt-2"
//                 placeholder="Location"
//                 disabled={!isEditing}
//               />
//             </div>
//           </div>

//           {/* Bio & Skills */}
//           <div className="mt-6">
//             <label className="text-gray-700 font-semibold">Bio</label>
//             <textarea
//               name="bio"
//               value={formData.bio}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1F4A9B] mt-2"
//               placeholder="Tell us about yourself"
//               disabled={!isEditing}
//             />
//           </div>

//           {/* Save & Cancel Buttons */}
//           {isEditing && (
//             <div className="flex justify-between mt-6">
//               <button onClick={handleUpdate} className="bg-[#1F4A9B] text-white px-6 py-3 rounded-lg hover:bg-blue-800">
//                 Save
//               </button>
//               <button onClick={() => setIsEditing(false)} className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400">
//                 Cancel
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceProviderProfile;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaBell, FaCamera, FaCog, FaEdit, FaHome, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Navigation Hook

const ServiceProviderProfile = () => {
  const [provider, setProvider] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    location: "",
    skills: "",
    phoneNumber: "",
    profileImage: null,
  });

  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      fetchProfile(userId);
    } else {
      console.error("User ID not found in local storage.");
    }
  }, []);

  const fetchProfile = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/provider/profile/${userId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
      });

      setProvider(response.data);
      setFormData({
        name: response.data.name || "",
        bio: response.data.bio || "",
        location: response.data.location || "",
        skills: response.data.skills?.join(", ") || "",
        phoneNumber: response.data.phoneNumber || "",
        profileImage: response.data.profileImage || "", // Will be used to conditionally display the avatar
      });
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleUpdate = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("authToken");

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("bio", formData.bio);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("skills", formData.skills);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      if (formData.profileImage instanceof File) {
        formDataToSend.append("profileImage", formData.profileImage);
      }

      await axios.put(`http://localhost:3000/api/provider/${userId}`, formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Profile updated successfully!");
      setIsEditing(false);
      fetchProfile(userId);
    } catch (error) {
      console.error("Update failed", error);
      alert("Update failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  if (!provider) return <p className="text-center text-gray-500">Loading profile...</p>;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-20 bg-[#1F4A9B] text-white flex flex-col items-center p-5">
        <FaHome onClick={() => navigate("/serviceDashboard")} className="text-3xl my-6 cursor-pointer hover:text-gray-300" />
        <FaBell onClick={() => navigate("/notifications")} className="text-3xl my-6 cursor-pointer hover:text-gray-300" />
        <FaCog className="text-3xl my-6 cursor-pointer hover:text-gray-300" />
        <FaSignOutAlt onClick={handleLogout} className="text-3xl my-6 cursor-pointer hover:text-gray-300" />
      </div>

      {/* Profile Section */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-3/5">
          {/* Profile Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800">Edit Profile</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-[#1F4A9B] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-800"
            >
              <FaEdit />
              <span>Edit</span>
            </button>
          </div>

          {/* Profile Image */}
          <div className="flex items-center justify-center mt-6">
            <div className="relative w-36 h-36 flex items-center justify-center">
              {provider.profileImage ? (
                <img
                  src={`http://localhost:3000${provider.profileImage}`}
                  alt="Profile"
                  className="w-full h-full rounded-full border-4 border-[#1F4A9B] shadow-md object-cover"
                />
              ) : (
                <img
                  src={`https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg`} // Random Avatar URL
                  alt="Default Avatar"
                  className="w-full h-full rounded-full border-4 border-[#1F4A9B] shadow-md object-cover"
                />
              )}
              <label htmlFor="fileUpload" className="absolute bottom-2 right-2 bg-[#1F4A9B] text-white p-2 rounded-full cursor-pointer shadow-md">
                <FaCamera />
              </label>
              <input type="file" name="profileImage" onChange={handleImageChange} className="hidden" id="fileUpload" />
            </div>
          </div>

          {/* Profile Details */}
          <div className="mt-6 grid grid-cols-2 gap-6">
            <div>
              <label className="text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1F4A9B] mt-2"
                placeholder="Full Name"
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="text-gray-700 font-semibold">Email</label>
              <input
                type="text"
                value={provider.email}
                className="w-full p-3 border rounded-lg bg-gray-100 mt-2"
                disabled
              />
            </div>
            <div>
              <label className="text-gray-700 font-semibold">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1F4A9B] mt-2"
                placeholder="Phone Number"
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="text-gray-700 font-semibold">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1F4A9B] mt-2"
                placeholder="Location"
                disabled={!isEditing}
              />
            </div>
          </div>

          {/* Bio & Skills */}
          <div className="mt-6">
            <label className="text-gray-700 font-semibold">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1F4A9B] mt-2"
              placeholder="Tell us about yourself"
              disabled={!isEditing}
            />
          </div>

          {/* Save & Cancel Buttons */}
          {isEditing && (
            <div className="flex justify-between mt-6">
              <button onClick={handleUpdate} className="bg-[#1F4A9B] text-white px-6 py-3 rounded-lg hover:bg-blue-800">
                Save
              </button>
              <button onClick={() => setIsEditing(false)} className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400">
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderProfile;
