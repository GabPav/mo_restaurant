import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reservations = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  // Handles form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation confirmed for ${formData.name} on ${formData.date} at ${formData.time}`);
  };

  return (
    <div className="w-full min-h-screen bg-[url('https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-6xl mx-auto text-center">
        <div className="max-w-3xl mx-auto px-6 py-16 mt-20 text-center">
          <h1 className="text-4xl font-[Parisienne] text-amber-100 pt-5">
            Book a Table <span className="text-3xl font-[Cardo]">– Reserve Your Spot</span>
          </h1>

          <div className="flex justify-center mb-5">
            <div className="w-48 h-[2px] bg-amber-400 mt-2"></div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-amber-50/80 p-8 rounded-lg shadow-lg flex flex-col gap-6 font-[Cardo]"
          >
            {/* Date input using DatePicker */}
            <DatePicker
              selected={formData.date ? new Date(formData.date) : null}
              onChange={(date) => setFormData({ ...formData, date: date })}
              className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-700 placeholder-gray-800"
              placeholderText="Select a date"
              dateFormat="yyyy/MM/dd"
              required
            />

            {/* Time input using DatePicker (time picker) */}
            <DatePicker
              selected={formData.time ? new Date(`1970-01-01T${formData.time}`) : null}
              onChange={(time) => setFormData({ ...formData, time: time.toTimeString().slice(0, 5) })}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              placeholderText="Select a time"
              dateFormat="h:mm aa"
              className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-700 placeholder-gray-800"
              required
            />

            {/* Guest number selection */}
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-700 placeholder-gray-800"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} Guest{i !== 0 ? "s" : ""}
                </option>
              ))}
            </select>

            {/* Name input */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-700 placeholder-gray-800"
              required
            />

            {/* Email input */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-700 placeholder-gray-800"
              required
            />

            {/* Phone input */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-700 placeholder-gray-800"
              required
            />

            {/* Special requests textarea */}
            <textarea
              name="specialRequests"
              placeholder="Special Requests (optional)"
              value={formData.specialRequests}
              onChange={handleChange}
              className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-900 placeholder-gray-800"
            ></textarea>

            {/* Submit button */}
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
