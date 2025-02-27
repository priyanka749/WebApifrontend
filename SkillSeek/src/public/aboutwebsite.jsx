// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../index.css";
// import Navbar from "./navbar";

// const AboutPage = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <Navbar />

//       {/* About Section */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#1F4A9B] mb-6">About SkillSeek</h2>
//           <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
//             SkillSeek is your go-to platform for finding skilled professionals for various services. Our goal is to make
//             professional services accessible, convenient, and trustworthy. Whether you need a plumber, painter, or a
//             professional cook, we’ve got you covered!
//           </p>
//           <div className="mt-8 flex justify-center">
//             <img
//               src="src/assets/image/about-us.png"
//               alt="About SkillSeek"
//               className="w-[24rem] h-[24rem] md:w-[32rem] md:h-[32rem] object-contain"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Our Mission Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#1F4A9B] mb-6">Our Mission</h2>
//           <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//             Our mission is to bridge the gap between customers and skilled professionals by providing an easy-to-use
//             platform that ensures quality service and customer satisfaction.
//           </p>
//         </div>
//       </section>

//       {/* Meet Our Team Section */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#1F4A9B] mb-6">Meet Our Team</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {["Alice", "Bob", "Charlie", "Diana"].map((name, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//                 <img
//                   src={`src/assets/image/team-member-${index + 1}.png`}
//                   alt={name}
//                   className="w-32 h-32 rounded-full mx-auto mb-4"
//                 />
//                 <h3 className="text-xl font-bold text-gray-800">{name}</h3>
//                 <p className="text-gray-600">Expert in their field</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 text-center">
//         <div className="container mx-auto px-6 md:px-12 lg:px-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#1F4A9B] mb-6">Join SkillSeek Today</h2>
//           <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
//             Sign up now to connect with skilled professionals and get the best services hassle-free.
//           </p>
//           <button
//             className="px-6 py-3 bg-[#1F4A9B] text-white rounded-full font-bold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-transform"
//             onClick={() => navigate("/signup")}
//           >
//             Get Started
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#1F4A9B] text-white py-8">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
//           <div className="text-center md:text-left mb-6 md:mb-0">
//             <h3 className="font-bold text-lg">SkillSeek</h3>
//             <p className="text-gray-200 text-sm">Your trusted platform for convenient, reliable services.</p>
//           </div>
//           <div className="text-center md:text-right">
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:underline">Our Services</a></li>
//               <li><a href="#" className="hover:underline">FAQ</a></li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default AboutPage;
