import React, { useState, useEffect } from "react";
import logo from "../assets/logo_white.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-menu")) {
        setDropdownOpen(false);
        setMobileDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="relative z-50 flex items-center justify-between bg-white text-black px-8 md:px-32 drop-shadow-md h-20">
      {/* Left Navigation - Desktop */}
      <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
        {["HOME", "RESERVATION", "MENUS"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative cursor-pointer text-gray-700 transition-all after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 font-[Cardo]"
          >
            {item}
          </a>
        ))}
      </ul>

      {/* Logo Centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
        <img
          src={logo}
          alt="Company Logo"
          className="h-20"
        />
      </div>

      {/* Right Navigation - Desktop */}
      <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
        {["CONTACT", "ABOUT"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative cursor-pointer text-gray-700 transition-all after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 font-[Cardo]"
          >
            {item}
          </a>
        ))}

        {/* MORE Dropdown - Desktop */}
        <div className="relative dropdown-menu">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setDropdownOpen(!dropdownOpen);
            }}
            className="relative cursor-pointer text-gray-700 px-4 py-2 transition-all font-[Cardo] tracking-wide"
          >
            MORE ▼
          </button>
          <ul
            className={`absolute right-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-lg py-2 transition-all duration-300 transform z-50 ${
              dropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {["GIFT", "GALLERY", "BEHIND THE PLATE"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-5 py-3 text-gray-800 hover:bg-gray-100 font-[Cardo] text-lg tracking-wide rounded-md"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </ul>

      {/* Mobile Menu Icon */}
      <FiMenu 
   className="block text-4xl cursor-pointer xl:hidden text-amber-400 absolute right-8 md:left-6" 
   onClick={() => setIsOpen(!isOpen)} 
/>

      {/* Mobile Navigation */}
      <div
        className={`absolute xl:hidden top-20 left-0 w-full bg-white text-black flex flex-col items-center gap-6 font-semibold text-base transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="w-full">
          {["Home", "Reservation", "Menus", "Contact", "About"].map((item) => (
            <li key={item} className="w-full text-center p-4 border-b border-gray-200 font-[Cardo]">
              <a href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-gray-900">
                {item}
              </a>
            </li>
          ))}

          {/* Mobile Dropdown */}
          <div className="w-full text-center dropdown-menu">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileDropdownOpen(!mobileDropdownOpen);
              }}
              className="w-full p-4 bg-gray-100 hover:bg-gray-200 transition text-gray-700 font-[Cardo]"
            >
              MORE ▼
            </button>
            <ul
              className={`w-full bg-white border-t border-gray-300 transition-all duration-300 ${
                mobileDropdownOpen ? "block" : "hidden"
              }`}
            >
              {["GIFT", "GALLERY", "BEHIND THE PLATE"].map((item) => (
                <li key={item} className="w-full">
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block w-full px-5 py-3 text-gray-700 hover:bg-gray-100 font-[Cardo]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
