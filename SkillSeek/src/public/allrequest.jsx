import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllProviderRequests = () => {
    const [requests, setRequests] = useState([]);

    // Get `authToken` from Local Storage
    const authToken = localStorage.getItem("authToken");

    // Fetch requests for the provider
    const fetchRequests = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/api/requests/all-providers`, {
                headers: { Authorization: `Bearer ${authToken}` },
            });
            setRequests(res.data);
        } catch (error) {
            toast.error("Failed to fetch all provider requests");
            console.error("Error fetching all provider requests:", error);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    // Function to handle Accept & Reject actions
    const handleRequestAction = async (requestId, action) => {
        try {
            let status = "";
            // Map action to status (Accept = 'Accepted', Reject = 'Rejected')
            if (action === "Accepted") {
                status = "Accepted";
            } else if (action === "Rejected") {
                status = "Rejected";
            }

            // Send PUT request to update request status
            const res = await axios.patch(
                `http://localhost:3000/api/requests/update-status`,
                { requestId, status },
                {
                    headers: { Authorization: `Bearer ${authToken}` },
                }
            );

            // Show success message
            toast.success(`Request ${action} successfully!`);
            fetchRequests(); // Refresh list after action
        } catch (error) {
            toast.error(`Failed to ${action} request`);
            console.error(`Error ${action.toLowerCase()}ing request:`, error);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center text-[#1F4A9B] mb-6">All Service Requests</h2>

            {requests.length === 0 ? (
                <p className="text-center text-gray-600">No service requests available</p>
            ) : (
                <div className="space-y-4">
                    {requests.map((req, index) => (
                        <div key={index} className="bg-white p-6 shadow-lg rounded-lg border border-gray-300 flex justify-between items-center">
                            {/* Left Side: Service & Customer Information */}
                            <div>
                                <p><strong>Service:</strong> {req.serviceTitle}</p>
                                <p><strong>Message:</strong> {req.message}</p>

                                <div className="flex items-center space-x-4 mt-4">
                                    {/* Profile Image */}
                                    {req.userId?.profile?.profileImage ? (
                                        <img 
                                            src={`http://localhost:3000/${req.userId.profile.profileImage}`} 
                                            alt="Customer Profile"
                                            className="w-16 h-16 rounded-full border border-gray-300 object-cover"
                                        />
                                    ) : (
                                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                                            No Image
                                        </div>
                                    )}

                                    {/* Customer Details */}
                                    <div>
                                        <p><strong>Customer:</strong> {req.userId?.profile?.name || "Unknown"} ({req.userId?.email || "N/A"})</p>
                                        <p><strong>Phone:</strong> {req.userId?.profile?.phoneNumber || "N/A"}</p>
                                        <p><strong>Location:</strong> {req.userId?.profile?.location || "N/A"}</p>
                                    </div>
                                </div>

                                {/* Status Information */}
                                <p className="mt-4"><strong>Status:</strong> 
                                    <span className={req.status === "Pending" ? "text-yellow-500" : req.status === "Accepted" ? "text-green-500" : "text-red-500"}>
                                        {req.status}
                                    </span>
                                </p>
                            </div>

                            {/* Right Side: Action Buttons */}
                            {req.status === "Pending" && (
                                <div className="flex space-x-4">
                                    <button 
                                        onClick={() => handleRequestAction(req._id, "Accepted")}
                                        className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
                                    >
                                        Accept
                                    </button>
                                    <button 
                                        onClick={() => handleRequestAction(req._id, "Rejected")}
                                        className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
                                    >
                                        Reject
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllProviderRequests;
