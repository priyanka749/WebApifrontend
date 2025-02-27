// import axios from "axios";
// import React, { useState } from "react";

// const AddService = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [skills, setSkills] = useState("");
//   const [imageFile, setImageFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const formData = new FormData();
//     formData.append("userId", localStorage.getItem("userId")); // Ensure userId exists
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("skills", skills);
//     formData.append("image", imageFile); // File upload support
  
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/services/add", // Ensure this matches backend route
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Ensure token is valid
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
  
//       alert("Service added successfully!");
//     } catch (error) {
//       console.error("Error adding service:", error);
//       alert("Failed to add service. Check console for details.");
//     }
//   };
  
//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
//       <h1 className="text-2xl font-bold text-center">Add New Service</h1>
//       <form onSubmit={handleSubmit} className="mt-4">
//         <input
//           type="text"
//           placeholder="Service Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-3 border rounded-lg mb-3"
//           required
//         />
//         <textarea
//           placeholder="Service Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full p-3 border rounded-lg mb-3"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Skills (comma separated)"
//           value={skills}
//           onChange={(e) => setSkills(e.target.value)}
//           className="w-full p-3 border rounded-lg mb-3"
//           required
//         />
//         <input
//           type="file"
//           onChange={(e) => setImageFile(e.target.files[0])}
//           className="w-full p-3 border rounded-lg mb-3"
//           required
//         />
//         <button
//           type="submit"
//           className="bg-[#1F4A9B] text-white w-full p-3 rounded-lg hover:bg-blue-800"
//         >
//           Add Service
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddService;


import axios from "axios";
import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";

const AddService = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    // Show Image Preview
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("userId", localStorage.getItem("userId")); // Ensure userId exists
    formData.append("title", title);
    formData.append("description", description);
    formData.append("skills", skills);
    formData.append("image", imageFile); // File upload support

    try {
      const response = await axios.post(
        "http://localhost:3000/api/services/add", // Ensure this matches backend route
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Ensure token is valid
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Service added successfully!");
    } catch (error) {
      console.error("Error adding service:", error);
      alert("Failed to add service. Check console for details.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-[#1F4A9B] mb-6">
          Add New Service
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Service Title */}
          <input
            type="text"
            placeholder="Service Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F4A9B] focus:outline-none"
            required
          />

          {/* Service Description */}
          <textarea
            placeholder="Service Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F4A9B] focus:outline-none"
            required
          />

          {/* Skills */}
          <input
            type="text"
            placeholder="Skills (comma separated)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F4A9B] focus:outline-none"
            required
          />

          {/* Image Upload */}
          <div className="border-2 border-dashed border-gray-400 p-4 rounded-lg text-center cursor-pointer relative">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-40 object-cover rounded-md"
              />
            ) : (
              <>
                <FaUpload className="text-gray-500 text-3xl mx-auto mb-2" />
                <p className="text-gray-600">Click to upload image</p>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              required
            />
          </div>

          {/* Submit Button */}
          <button
  type="submit"
  className="w-full bg-[#1F4A9B] text-white p-3 rounded-lg font-medium hover:bg-blue-800 transition duration-300"
  onClick={() => navigate("/servicedash")} // ✅ Redirect on click
>
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
