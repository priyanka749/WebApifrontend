import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`shadow-lg py-4 sticky top-0 z-50 bg-white transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="src/assets/image/skillseeklogo.png" className="h-16" alt="SkillSeek Logo" />
        </div>
        <nav className="hidden md:flex space-x-6">
          {["Home", "Services", "Help", "Others"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[#1F4A9B] text-lg font-medium hover:text-gray-500 transition duration-300 ease-in-out"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex space-x-4 items-center">
          <button className="px-4 py-2 bg-[#1F4A9B] text-white font-bold rounded-full shadow-md hover:bg-[#104e71] transition-all duration-300 ease-in-out transform hover:scale-105">
            Sign In
          </button>
          <button className="px-4 py-2 bg-[#1F4A9B] text-white font-bold rounded-full shadow-md hover:bg-[#104e71] transition-all duration-300 ease-in-out transform hover:scale-105">
            Sign Up
          </button>
        </div>
        <button className="md:hidden text-[#1F4A9B] text-3xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          <nav className="flex flex-col space-y-4 p-4">
            {["Home", "Services", "Help", "Others"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#1F4A9B] text-lg font-medium hover:text-gray-500 transition duration-300 ease-in-out"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex flex-col space-y-4 p-4">
            <button className="px-4 py-2 bg-[#1F4A9B] text-white font-bold rounded-full shadow-md hover:bg-[#104e71] transition-all duration-300 ease-in-out transform hover:scale-105">
              Sign In
            </button>
            <button className="px-4 py-2 bg-[#1F4A9B] text-white font-bold rounded-full shadow-md hover:bg-[#104e71] transition-all duration-300 ease-in-out transform hover:scale-105">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
