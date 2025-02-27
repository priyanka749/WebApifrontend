import axios from "axios";

const RequestList = ({ requests, fetchRequests }) => {
  // Function to update request status (Accept or Reject)
  const handleUpdateRequest = async (requestId, status) => {
    try {
      await axios.post("http://localhost:3000/api/update-request", { requestId, status });
      alert(`Request ${status}!`);
      fetchRequests(); // Refresh the request list after update
    } catch (error) {
      console.error("Error updating request:", error);
    }
  };

  return (
    <div>
      <h3>📌 Service Requests</h3>
      {requests.length === 0 ? (
        <p>No requests available</p>
      ) : (
        <ul>
          {requests.map((req) => (
            <li key={req._id}>
              <strong>{req.serviceDetails}</strong> - Status: <b>{req.status}</b>
              {req.status === "Pending" && (
                <>
                  <button onClick={() => handleUpdateRequest(req._id, "Accepted")}>✅ Accept</button>
                  <button onClick={() => handleUpdateRequest(req._id, "Rejected")}>❌ Reject</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RequestList;
