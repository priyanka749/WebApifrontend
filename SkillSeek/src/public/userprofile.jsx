import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = () => {
    const [customer, setCustomer] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        profileImage: "",
    });

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
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            });

            if (!response.data) {
                throw new Error("Empty response from server");
            }

            setCustomer(response.data);
            setFormData({
                name: response.data.name || "",
                location: response.data.location || "",
                profileImage: response.data.profileImage || "",
            });
        } catch (error) {
            console.error("Error fetching profile:", error.response?.data || error.message);
            toast.error(
                error.response?.data?.message
                    ? `Failed to load profile: ${error.response.data.message}`
                    : "Failed to load profile. Please check your connection."
            );
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        try {
            const token = localStorage.getItem("authToken");
            const decodedToken = jwt_decode(token);
            const userId = decodedToken.id;

            await axios.put(`http://localhost:3000/api/customers/profile/${userId}`, formData, {
                headers: { Authorization: `Bearer ${token}` },
            });

            toast.success("Profile updated successfully!");
            setIsEditing(false);
            fetchProfile(userId); // Refresh the data
        } catch (error) {
            toast.error("Update failed");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userId");
        window.location.reload();
    };

    if (!customer) return <div className="text-center mt-10">Loading...</div>;

    // Construct the correct profile image URL
    const profileImageUrl = customer.profileImage.startsWith("http")
        ? customer.profileImage
        : `http://localhost:3000/${customer.profileImage.replace("\\", "/")}`;

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Customer Profile</h2>
            <div className="flex flex-col items-center">
                <img
                    src={profileImageUrl}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border"
                />
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border p-2 mt-3 w-full rounded"
                            placeholder="Name"
                        />
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="border p-2 mt-3 w-full rounded"
                            placeholder="Location"
                        />
                        <input
                            type="text"
                            name="profileImage"
                            value={formData.profileImage}
                            onChange={handleChange}
                            className="border p-2 mt-3 w-full rounded"
                            placeholder="Profile Image URL"
                        />
                        <button
                            onClick={handleUpdate}
                            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
                        >
                            Save
                        </button>
                    </>
                ) : (
                    <>
                        <h3 className="text-xl font-semibold mt-3">{customer.name}</h3>
                        <p className="text-gray-600">{customer.location}</p>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded"
                        >
                            Edit Profile
                        </button>
                    </>
                )}
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
                >
                    Logout
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UserProfile;
