import React, { useState } from "react";
import { FaBars, FaBell, FaPlusCircle, FaSearch, FaSignOutAlt, FaTools, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewRequests, setViewRequests] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };


  const fetchRequests = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/requests/provider/provider_id_here");
      const data = await response.json();
      setRequests(data);
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };
  

  // const requests = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     service: "Plumbing Repair",
  //     requestDate: "2025-02-15",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     service: "Electrical Installation",
  //     requestDate: "2025-02-14",
  //   },
  // ];

  const cards = [
    {
      title: "Profile Overview",
      description: "Update your personal information and profile picture.",
      icon: <FaUser className="text-[#1F4A9B] text-4xl mb-4" />,
      action: () => handleNavigate("/serviceprofile"),
    },
    {
      title: "Manage Requests",
      description: "Respond to customer service requests.",
      icon: <FaTools className="text-[#1F4A9B] text-4xl mb-4" />,
      action: () => setViewRequests(true),
    },
    {
      title: "Add New Service",
      description: "Expand your service offerings.",
      icon: <FaPlusCircle className="text-[#1F4A9B] text-4xl mb-4" />,
      action: () => handleNavigate("/addservice"),
    },
    {
      title: "Notifications",
      description: "View and manage your notifications.",
      icon: <FaBell className="text-[#1F4A9B] text-4xl mb-4" />,
      action: () => handleNavigate("/notifications"),
    },
  ];

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? "w-64" : "w-20"} bg-[#1F4A9B] text-white transition-all duration-300 ease-in-out min-h-screen`}>
        <div className="p-4 flex items-center justify-between">
          <h1 className={`text-xl font-bold ${!isSidebarOpen && "hidden"}`}>Dashboard</h1>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-white focus:outline-none">
            <FaBars className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-10 space-y-4">
          <button onClick={() => handleNavigate("/serviceprofile")} className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-800 rounded-lg w-full">
            <FaUser className="w-5 h-5" />
            <span className={`${!isSidebarOpen && "hidden"}`}>Profile</span>
          </button>
          <button onClick={() => handleNavigate("/allrequests")} className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-800 rounded-lg w-full">
            <FaTools className="w-5 h-5" />
            <span className={`${!isSidebarOpen && "hidden"}`}>Requests</span>
          </button>
          <button onClick={() => handleNavigate("/addservice")} className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-800 rounded-lg w-full">
            <FaPlusCircle className="w-5 h-5" />
            <span className={`${!isSidebarOpen && "hidden"}`}>Add Service</span>
          </button>
          <button onClick={() => handleNavigate("/notifications")} className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-800 rounded-lg w-full">
            <FaBell className="w-5 h-5" />
            <span className={`${!isSidebarOpen && "hidden"}`}>Notifications</span>
          </button>
          <button onClick={() => handleNavigate("/login")} className="flex items-center space-x-3 px-4 py-3 hover:bg-red-700 rounded-lg w-full">
            <FaSignOutAlt className="w-5 h-5" />
            <span className={`${!isSidebarOpen && "hidden"}`}>Logout</span>
          </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Top Header with Search Bar */}
        <header className="bg-white shadow-lg py-4 px-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#1F4A9B]"></h1>
          <div className="relative w-full max-w-4xl">
            <FaSearch className="absolute left-4 top-4 text-[#1F4A9B]" />
            <input
              type="text"
              placeholder="Search across dashboard..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-[#1F4A9B] rounded-lg focus:outline-none focus:ring-3 focus:ring-[#1F4A9B] transition-all"
            />
          </div>
          <div className="flex items-center space-x-4">
            <FaBell className="text-[#1F4A9B] w-6 h-6 cursor-pointer hover:text-blue-700 transition" />
            <img 
        src="https://via.placeholder.com/40" 
        alt="Profile" 
        className="w-10 h-10 rounded-full border border-gray-500 cursor-pointer"
        onClick={() => handleNavigate("/serviceprofile")} // ✅ Fixed onClick placement
    />
</div>
        </header>

        {/* Dashboard Content */}
        <main className="p-12">
          {viewRequests ? (
            <div>
              <h2 className="text-2xl font-bold text-[#1F4A9B] mb-6">Service Requests</h2>
              <div className="space-y-4">
                {requests.map((request) => (
                  <div key={request.id} className="bg-white shadow-md p-6 rounded-lg border border-gray-300 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold text-[#1F4A9B]">{request.name}</h3>
                      <p className="text-gray-700">Service: {request.service}</p>
                      <p className="text-gray-700">Request Date: {request.requestDate}</p>
                    </div>
                    <div className="flex space-x-4">
                      <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Accept</button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Reject</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCards.map((card, index) => (
                <div key={index} onClick={card.action} className="bg-white shadow-md p-6 rounded-lg border border-gray-300 transform transition-transform hover:scale-105 hover:shadow-lg cursor-pointer">
                  <div className="flex flex-col items-center">
                    {card.icon}
                    <h3 className="text-lg font-bold text-[#1F4A9B]">{card.title}</h3>
                    <p className="text-gray-700 text-center">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
