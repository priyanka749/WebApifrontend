import React from "react";

const plumbers = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://via.placeholder.com/100",
    experience: "10+ yrs",
    specialty: "Leak Detection, Pipe Repair",
    reviews: 25,
    rate: 50,
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "https://via.placeholder.com/100",
    experience: "8 yrs",
    specialty: "Water Heater Installation, Drain Cleaning",
    reviews: 18,
    rate: 45,
  },
  {
    id: 3,
    name: "Alex Johnson",
    photo: "https://via.placeholder.com/100",
    experience: "12 yrs",
    specialty: "Sewer Repair, Maintenance",
    reviews: 30,
    rate: 60,
  },
  {
    id: 4,
    name: "Emily Brown",
    photo: "https://via.placeholder.com/100",
    experience: "5 yrs",
    specialty: "Eco-Friendly Plumbing, Pipe Replacement",
    reviews: 10,
    rate: 40,
  },
  {
    id: 5,
    name: "Michael Green",
    photo: "https://via.placeholder.com/100",
    experience: "15 yrs",
    specialty: "Leak Detection, Installation",
    reviews: 35,
    rate: 70,
  },
];

const PlumberList = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Available Plumbers</h1>
      <div className="space-y-4">
        {plumbers.map((plumber) => (
          <div
            key={plumber.id}
            className="flex items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={plumber.photo}
              alt={plumber.name}
              className="w-20 h-20 rounded-full object-cover mr-4"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-red-600">{plumber.name}</h2>
              <p className="text-gray-600">Experience: {plumber.experience}</p>
              <p className="text-gray-600">Specialty: {plumber.specialty}</p>
              <p className="text-gray-600">Reviews: {plumber.reviews}</p>
            </div>
            <div className="text-right">
              <p className="text-green-600 text-xl font-bold">${plumber.rate} <span className="text-sm">per hour</span></p>
              <div className="mt-2 flex space-x-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                  Send Request
                </button>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlumberList;
