import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo_dark.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 max-w-6xl">
        
        {/* Social Media Icons */}
        <div className="flex space-x-6 md:w-1/3 justify-start">
          <a href="#" className="text-gray-400 hover:text-amber-400 transition">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-amber-400 transition">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-amber-400 transition">
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Logo */}
        <div className="md:w-1/3 flex justify-center p-5">
          <img src={logo} alt="Maison de l'Orchidée Logo" className="h-20 md:h-24" />
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm md:w-1/3 text-right pt-10">
          &copy; 2024 Maison de l'Orchidée. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
