import axios from "axios";
import { useState } from "react";
import Notifications from "../components/notification";
import RequestList from "../components/requestlist";

const SendRequest = ({ provider }) => {
  const [message, setMessage] = useState("");

  // ✅ Get logged-in user ID from localStorage
  const userId = localStorage.getItem("userId");
  const authToken = localStorage.getItem("authToken");

  const handleSendRequest = async () => {
    if (!userId) {
      toast.error("User not logged in!");
      return;
    }

    try {
      await axios.post(
        "http://localhost:3000/api/requests/send",
        {
          providerUserId: provider.id, // ✅ Sending request to this provider
          serviceTitle: provider.specialty, // Example: "Plumber"
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      toast.success("Request sent successfully!");
      setMessage(""); // Clear input after sending
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send request");
    }
  };

  return (
    <div>
      <h1>🚀 Dashboard</h1>
      <Notifications userId={userId} />
      <RequestList requests={requests} fetchRequests={fetchRequests} />
    </div>
  );
};

export default Request;