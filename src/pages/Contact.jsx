import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-[300px] md:h-[400px] relative">
        <img
          src="https://images.unsplash.com/photo-1504718855392-c0f33b372e72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Contact Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-[Cardo] mt-20">Get in Touch</h1>
          <div className="w-24 h-[2px] bg-amber-400 mt-2"></div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-[Parisienne] text-amber-400 mb-8 font-semibold">
          Contact Us
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-12">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-amber-400 text-2xl" />
            <p className="text-lg text-gray-700 font-[Cardo]">
              123 Main Street, Paris, France
            </p>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-amber-400 text-2xl" />
            <p className="text-lg text-gray-700 font-[Cardo]">+33 1 23 45 67 89</p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-amber-400 text-2xl" />
            <p className="text-lg text-gray-700 font-[Cardo]">info@maisonorchidee.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-[Cardo] text-amber-400 text-center mb-8">
          Send Us a Message
        </h2>

        <form className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-[Cardo] text-lg mb-2">
              Your Name
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-[Cardo] text-lg mb-2">
              Your Email
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-[Cardo] text-lg mb-2">
              Your Message
            </label>
            <textarea
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-400 text-white font-[Cardo] text-lg py-3 rounded-md hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
