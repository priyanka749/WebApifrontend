// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { FaUserCircle } from "react-icons/fa"; // ✅ Import user icon
// import { useNavigate } from "react-router-dom";
// import Navbar from "./navbar";

// const ServiceProviders = () => {
//   const [providers, setProviders] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   // ✅ Fetch all service providers
//   useEffect(() => {
//     const fetchProviders = async () => {
//       try {
//         console.log("Fetching providers...");
//         const response = await axios.get("http://localhost:3000/api/provider");
//         console.log("Providers fetched:", response.data);
//         setProviders(response.data.providers);
//       } catch (error) {
//         console.error("Error fetching providers:", error);
//       }
//     };

//     fetchProviders();
//   }, []);

//   // ✅ Filter providers based on search
//   const filteredProviders = providers.filter((provider) =>
//     provider.skills.some((skill) =>
//       skill.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <div className="container mx-auto px-6 py-10">
//         <h2 className="text-4xl font-bold text-center text-[#1F4A9B] mb-6">
//           Available Service Providers
//         </h2>

//         {/* Search Bar */}
//         <div className="w-full flex justify-center mb-6">
//           <input
//             type="text"
//             placeholder="Search by specialty (e.g., Plumber, Electrician, Painter)"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full max-w-3xl border border-[#1F4A9B] rounded-lg p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] h-14"
//           />
//         </div>

//         {/* Service Provider List */}
//         {filteredProviders.length === 0 ? (
//           <p className="text-center text-gray-600">No providers found.</p>
//         ) : (
//           <div className="space-y-6">
//             {filteredProviders.map((provider) => (
//               <div
//                 key={provider.id}
//                 className="bg-white rounded-xl border border-[#1F4A9B] shadow-md p-6 flex flex-col md:flex-row items-center justify-between"
//               >
//                 {/* Provider Details */}
//                 <div className="flex items-center space-x-6">
//                   {/* Profile Image with Icon */}
//                   <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[#1F4A9B]">
//                     {provider.profileImage ? (
//                       <img
//                         src={provider.profileImage}
//                         alt={provider.name}
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <FaUserCircle className="text-gray-400 w-full h-full" />
//                     )}
//                   </div>

//                   {/* Provider Info */}
//                   <div>
//                     <h3 className="text-xl font-bold text-[#1F4A9B]">{provider.name}</h3>
//                     <p className="text-gray-700">
//                       <strong>Email:</strong> {provider.email}
//                     </p>
//                     <p className="text-gray-700">
//                       <strong>Phone:</strong> {provider.phoneNumber}
//                     </p>
//                     <p className="text-gray-700">
//                       <strong>Bio:</strong> {provider.bio}
//                     </p>
//                     <p className="text-gray-700">
//                       <strong>Skills:</strong> {provider.skills.join(", ")}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex space-x-3 mt-4 md:mt-0">
//                   <button className="bg-green-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-600 transition duration-300">
//                     Send Request
//                   </button>
//                   <button
//                     onClick={() => navigate(`/provider-detail/${provider.id}`)}
//                     className="bg-[#1F4A9B] text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-800 transition duration-300"
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ServiceProviders;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // ✅ Import user icon
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";

const ServiceProviders = ({ userId }) => {
  const [providers, setProviders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // ✅ Fetch all service providers
  useEffect(() => {
    const fetchProviders = async () => {
      try {
        console.log("Fetching providers...");
        const response = await axios.get("http://localhost:3000/api/provider");
        console.log("Providers fetched:", response.data);
        setProviders(response.data.providers);
      } catch (error) {
        console.error("Error fetching providers:", error);
      }
    };

    fetchProviders();
  }, []);

  // ✅ Filter providers based on search
  const filteredProviders = providers.filter((provider) =>
    provider.skills.some((skill) =>
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // ✅ Function to send a service request
  const sendRequest = async (providerUserId) => {
    try {
      const serviceTitle = prompt("Enter service title:");
      const message = prompt("Enter message for the provider:");

      if (!serviceTitle || !message) return alert("Service Title & Message are required!");

      const token = localStorage.getItem("authToken"); // ✅ Retrieve token from local storage

      if (!token) {
        return alert("You must be logged in to send a request.");
      }

      const response = await axios.post(
        "http://localhost:3000/api/requests/send",
        {
          providerUserId,
          serviceTitle,
          message,
        },
        {
          headers: { Authorization: `Bearer ${token}` }, // ✅ Include token in headers
          withCredentials: true, // ✅ Ensures authentication if using cookies/sessions
        }
      );

      alert(response.data.message); // ✅ Show success message
    } catch (error) {
      console.error("Error sending request:", error.response?.data || error.message);
      alert(error.response?.data?.error || "Failed to send request.");
    }
};


  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-center text-[#1F4A9B] mb-6">
          Available Service Providers
        </h2>

        {/* Search Bar */}
        <div className="w-full flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search by specialty (e.g., Plumber, Electrician, Painter)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-3xl border border-[#1F4A9B] rounded-lg p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] h-14"
          />
        </div>

        {/* Service Provider List */}
        {filteredProviders.length === 0 ? (
          <p className="text-center text-gray-600">No providers found.</p>
        ) : (
          <div className="space-y-6">
            {filteredProviders.map((provider) => (
              <div
                key={provider.id}
                className="bg-white rounded-xl border border-[#1F4A9B] shadow-md p-6 flex flex-col md:flex-row items-center justify-between"
              >
                {/* Provider Details */}
                <div className="flex items-center space-x-6">
                  {/* Profile Image with Icon */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[#1F4A9B]">
                    {provider.profileImage ? (
                      <img
                        src={provider.profileImage}
                        alt={provider.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FaUserCircle className="text-gray-400 w-full h-full" />
                    )}
                  </div>

                  {/* Provider Info */}
                  <div>
                    <h3 className="text-xl font-bold text-[#1F4A9B]">{provider.name}</h3>
                    <p className="text-gray-700">
                      <strong>Email:</strong> {provider.email}
                    </p>
                    <p className="text-gray-700">
                      <strong>Phone:</strong> {provider.phoneNumber}
                    </p>
                    <p className="text-gray-700">
                      <strong>Bio:</strong> {provider.bio}
                    </p>
                    <p className="text-gray-700">
                      <strong>Skills:</strong> {provider.skills.join(", ")}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex space-x-3 mt-4 md:mt-0">
                  <button
                    onClick={() => sendRequest(provider.id)} // ✅ Send request to this provider
                    className="bg-green-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-600 transition duration-300"
                  >
                    Send Request
                  </button>
                  <button
                    onClick={() => navigate(`/provider-detail/${provider.id}`)}
                    className="bg-[#1F4A9B] text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-800 transition duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceProviders;

