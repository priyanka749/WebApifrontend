import API from "./api"; // Assuming api.js contains the axios instance

const getUserProfile = async () => {
    try {
      const token = localStorage.getItem("authToken");
      console.log(token);
      if (!token) {
        console.error("No token found in local storage");
        return null;
      }
  
      const response = await API.post("/auth/get-user-profile", 
        { token },  // ✅ Send token in the request body
        { headers: { "Content-Type": "application/json" } }  // ✅ Ensure JSON header
      );
  
      return response.data.userId;
    } catch (error) {
      console.error("Error fetching user ID:", error.response?.data || error.message);
      return null;
    }
  };
    

export { getUserProfile };
