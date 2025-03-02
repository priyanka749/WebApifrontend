import axios from "axios";
import { ArrowLeft, Edit, LogOut, PlusCircle, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = () => {
    const [customer, setCustomer] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        location: "",
        profileImage: "",
    });
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        if (userId) {
            fetchProfile(userId);
        } else {
            toast.error("User ID not found. Please log in again.");
        }
    }, []);

    const fetchProfile = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/customers/profile/${userId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
            });

            if (!response.data) throw new Error("Empty response from server");

            setCustomer(response.data);

            // ✅ Ensure image updates immediately after upload
            const timestamp = new Date().getTime();
            setFormData({
                name: response.data.name || "",
                location: response.data.location || "",
                phoneNumber: response.data.phoneNumber || "",
                profileImage: response.data.profileImage
                    ? `http://localhost:3000${response.data.profileImage}?t=${timestamp}`
                    : "",
            });

        } catch (error) {
            toast.error("Failed to load profile. Please check your connection.");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            // ✅ Preview the selected image before uploading
            setFormData({ ...formData, profileImage: URL.createObjectURL(file) });
        }
    };

    const handleUpdate = async () => {
        try {
            const userId = localStorage.getItem("userId");
            const formDataToSend = new FormData();

            formDataToSend.append("name", formData.name);
            formDataToSend.append("location", formData.location);
            formDataToSend.append("phoneNumber", formData.phoneNumber);
            if (imageFile) {
                formDataToSend.append("profileImage", imageFile);
            }

            const response = await axios.put(
                `http://localhost:3000/api/customers/profile/${userId}`,
                formDataToSend,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                    },
                }
            );

            // ✅ Check the response and log it
            console.log("Profile update response:", response.data);

            if (response.data.customer.profileImage) {
                const updatedProfileImage = `http://localhost:3000${response.data.customer.profileImage}?t=${new Date().getTime()}`;
                console.log("Updated profile image URL:", updatedProfileImage);  // Debugging line
                setFormData({
                    ...formData,
                    profileImage: updatedProfileImage,
                });
            }

            toast.success(response.data.message || "Profile updated successfully!");
            setIsEditing(false);

            // ✅ Refresh profile after update
            fetchProfile(userId);
        } catch (error) {
            console.error("Profile update error:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || "Update failed");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userId");
        navigate("/login"); // ✅ Redirect to login page after logout
    };

    if (!customer) return <div className="text-center mt-10 text-gray-700">Loading...</div>;

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-10 text-gray-900 border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#1F4A9B]">Customer Profile</h2>
            <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-4 border-gray-300 shadow-md bg-gray-100">
                    {formData.profileImage ? (
                        <img 
                            src={formData.profileImage} 
                            alt="Profile" 
                            className="w-full h-full rounded-full object-cover"
                        />
                    ) : (
                        <User className="w-16 h-16 text-[#1F4A9B]" />
                    )}
                    {isEditing && (
                        <label className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700">
                            <PlusCircle className="w-5 h-5" />
                            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                        </label>
                    )}
                </div>
                {isEditing ? (
                    <>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="border p-3 mt-4 w-full rounded bg-gray-100 text-gray-900" placeholder="Name" />
                        <input type="text" name="location" value={formData.location} onChange={handleChange} className="border p-3 mt-4 w-full rounded bg-gray-100 text-gray-900" placeholder="Location" />
                        <div className="flex justify-between w-full mt-4">
                            <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-6 py-3 rounded-full shadow-md flex items-center space-x-2 hover:bg-gray-600">
                                <ArrowLeft className="w-5 h-5" /> <span>Back</span>
                            </button>
                            <button onClick={handleUpdate} className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600">
                                Save
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h3 className="text-xl font-semibold mt-4">{customer.name}</h3>
                        <p className="text-lg text-gray-600">{customer.location}</p>
                        <button onClick={() => setIsEditing(true)} className="bg-[#1F4A9B] text-white px-6 py-3 mt-4 rounded-full shadow-md flex items-center space-x-2 hover:bg-blue-800">
                            <Edit className="w-5 h-5" /> <span>Edit Profile</span>
                        </button>
                    </>
                )}
                <button onClick={handleLogout} className="bg-red-500 text-white px-6 py-3 mt-4 rounded-full shadow-md flex items-center space-x-2 hover:bg-red-600">
                    <LogOut className="w-5 h-5" /> <span>Logout</span>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UserProfile;
