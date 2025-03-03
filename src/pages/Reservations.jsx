import React, { useState } from "react";

const Reservations = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation confirmed for ${formData.name} on ${formData.date} at ${formData.time}`);
  };

  return (
    <div  className="w-full min-h-screen bg-[url('https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover  bg-center bg-no-repeat">
    <div className="max-w-6xl mx-auto  text-center ">
    <div className="max-w-3xl mx-auto px-6 py-16 mt-20 text-center">
      <h1 className="text-4xl font-[Parisienne] text-amber-200 p-5">Book a Table <span className="text-3xl font-[Cardo]">– Reserve Your Spot</span></h1>
      
      
      <form
        onSubmit={handleSubmit}
        className="bg-amber-50/80 p-8 rounded-lg shadow-lg flex flex-col gap-6 font-[Cardo]"
      >
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-700"
          required
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-700 "
          required
        />

        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-700"
        >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} Guest{i !== 0 ? "s" : ""}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-700 placeholder-gray-800"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-700 placeholder-gray-800"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-700 placeholder-gray-800"
          required
        />

        <textarea
          name="specialRequests"
          placeholder="Special Requests (optional)"
          value={formData.specialRequests}
          onChange={handleChange}
          className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-900 placeholder-gray-800"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-amber-400 text-white font-[Cardo] text-lg py-3 rounded-md hover:bg-gray-900 transition"
        >
          Confirm Reservation
        </button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Reservations;
