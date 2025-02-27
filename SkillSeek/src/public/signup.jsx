// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/image/skillseeklogo.png";

// const Signup = () => {
//   const [role, setRole] = useState("Customer");
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone_number: "",
//     password: "",
//     location: "",
//     bio: "",
//     skills: "",
//   });
//   const [profileImage, setProfileImage] = useState(null);
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setProfileImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataToSend = new FormData();
//     Object.keys(formData).forEach((key) => formDataToSend.append(key, formData[key]));
//     if (profileImage) {
//       formDataToSend.append("profileImage", profileImage);  // Use 'profileImage' as the key
//     }
//     formDataToSend.append("role", role);

//     try {
//       const response = await axios.post("http://localhost:3000/api/auth/register", formDataToSend, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setMessage(response.data.message);
//       navigate("/token", { state: { email: formData.email, otp: response.data.otp } });
//     } catch (error) {
//       console.error("Registration error:", error);
//       setMessage(error.response?.data?.message || "Something went wrong.");
//     }
//   };

//   return (
//     <div className="flex items-center py-6 justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
//       <div className="w-full max-w-5xl p-10 bg-white shadow-6xl rounded-3xl border-3 border-blue-100">
//         <div className="flex justify-center">
//           <img src={logo} alt="SkillSeek Logo" className="w-32" />
//         </div>

//         <h2 className="text-4xl font-extrabold text-center text-[#1F4A9B] mb-7">Create an Account</h2>

//         <div className="flex items-center justify-between bg-gray-200 rounded-full p-1 mb-10 shadow-inner">
//           <button
//             onClick={() => setRole("Customer")}
//             className={`w-1/2 py-3 font-semibold text-center rounded-full transition-all ${
//               role === "Customer" ? "bg-[#1F4A9B] text-white shadow-lg" : "text-gray-900 hover:bg-gray-300"
//             }`}
//           >
//             Customer
//           </button>
//           <button
//             onClick={() => setRole("Service Provider")}
//             className={`w-1/2 py-3 font-semibold text-center rounded-full transition-all ${
//               role === "Service Provider" ? "bg-[#1F4A9B] text-white shadow-lg" : "text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             Service Provider
//           </button>
//         </div>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div className="space-y-1">
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your full name"
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-600"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="space-y-1">
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-600"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="space-y-1">
//             <input
//               type="text"
//               name="phone_number"
//               placeholder="98XXXXXXXX"
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-600"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="space-y-1">
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-600"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="space-y-1">
//             <input
//               type="text"
//               name="location"
//               placeholder="Enter your location"
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-600"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {role === "Service Provider" && (
//             <>
//               <div className="space-y-1">
//                 <input
//                   type="text"
//                   name="skills"
//                   placeholder="Your skill (e.g., Plumber, Electrician)"
//                   className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-600"
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="space-y-1">
//                 <textarea
//                   name="bio"
//                   placeholder="Tell us about yourself"
//                   className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4A9B] placeholder-gray-600"
//                   rows="4"
//                   onChange={handleChange}
//                 ></textarea>
//               </div>
//             </>
//           )}

//           <div className="space-y-1">
//             <label className="block text-sm font-medium text-gray-700">Profile Image (optional)</label>
//             <input type="file" onChange={handleImageChange} />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-4 text-lg font-bold text-white bg-[#1F4A9B] rounded-lg hover:bg-[#163870] transition-all shadow-lg"
//           >
//             Sign Up as {role}
//           </button>
//         </form>

//         {message && <p className="mt-4 text-center text-red-500">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default Signup;
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/image/skillseeklogo.png";

const Signup = () => {
  const [role, setRole] = useState("Customer");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "", 
    password: "",
    location: "",
    bio: "",
    skills: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => formDataToSend.append(key, formData[key]));
    if (profileImage) {
      formDataToSend.append("profileImage", profileImage);
    }
    formDataToSend.append("role", role);
  
    try {
      const response = await axios.post("http://localhost:3000/api/auth/register", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(response.data.message);
      navigate("/token", { state: { email: formData.email, otp: response.data.otp } });
    } catch (error) {
      console.error("Registration error:", error);
      setMessage(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="flex items-center py-6 justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="w-full max-w-5xl p-10 bg-white shadow-6xl rounded-3xl border-3 border-blue-100">
        <div className="flex justify-center">
          <img src={logo} alt="SkillSeek Logo" className="w-32" />
        </div>

        <h2 className="text-4xl font-extrabold text-center text-[#1F4A9B] mb-7">Create an Account</h2>

        <div className="flex items-center justify-between bg-gray-200 rounded-full p-1 mb-10 shadow-inner">
          <button
            onClick={() => setRole("Customer")}
            className={`w-1/2 py-3 font-semibold text-center rounded-full transition-all ${
              role === "Customer" ? "bg-[#1F4A9B] text-white shadow-lg" : "text-gray-900 hover:bg-gray-300"
            }`}
          >
            Customer
          </button>
          <button
            onClick={() => setRole("Service Provider")}
            className={`w-1/2 py-3 font-semibold text-center rounded-full transition-all ${
              role === "Service Provider" ? "bg-[#1F4A9B] text-white shadow-lg" : "text-gray-700 hover:bg-gray-300"
            }`}
          >
            Service Provider
          </button>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Enter your full name" className="w-full px-4 py-3 border rounded-lg" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Enter your email" className="w-full px-4 py-3 border rounded-lg" onChange={handleChange} required />
          <input type="text" name="phone_number" placeholder="Enter your phone number" className="w-full px-4 py-3 border rounded-lg" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Enter your password" className="w-full px-4 py-3 border rounded-lg" onChange={handleChange} required />
          <input type="text" name="location" placeholder="Enter your location" className="w-full px-4 py-3 border rounded-lg" onChange={handleChange} required />
          {role === "Service Provider" && (
            <>
              <input type="text" name="skills" placeholder="Your skill (e.g., Plumber, Electrician)" className="w-full px-4 py-3 border rounded-lg" onChange={handleChange} />
              <textarea name="bio" placeholder="Tell us about yourself" className="w-full px-4 py-3 border rounded-lg" rows="4" onChange={handleChange}></textarea>
            </>
          )}
          <button type="submit" className="w-full py-4 text-lg font-bold text-white bg-[#1F4A9B] rounded-lg hover:bg-[#163870]">Sign Up as {role}</button>
        </form>

        {message && <p className="mt-4 text-center text-red-500">{message}</p>}

        <p className="mt-6 text-center text-gray-600">
          Already have an account? 
          <button onClick={() => navigate("/login")} className="text-[#1F4A9B] font-semibold hover:underline"> Login </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
