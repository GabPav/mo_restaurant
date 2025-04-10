import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookTable = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    date: null,
    time: null,
    guests: "2",
    name: "",
  });

  // Handle input changes and update state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date || !formData.time || !formData.name || !formData.guests) {
      alert("Please fill out all fields before submitting the form.");
      return;
    }
    const formattedDate = formData.date ? formData.date.toLocaleDateString() : "";
    const formattedTime = formData.time ? formData.time.toLocaleTimeString() : "";
    alert(`Table booked for ${formData.name} on ${formattedDate} at ${formattedTime}`);
  };

  return (
    <div className="sticky bottom-0 left-0 w-full bg-gray-900 text-amber-400 shadow-lg z-40">
      {/* Button for smaller screens */}
      <div className="flex justify-center md:hidden">
        <Link to="/reservations">
          <button className="bg-amber-500 text-white font-[Cardo] px-6 py-3 m-3 rounded-full hover:bg-amber-400 transition font-semibold">
            Book a Table
          </button>
        </Link>
      </div>

      {/* Form for larger screens */}
      <form onSubmit={handleSubmit} className="hidden md:flex flex-wrap items-center justify-center gap-6 p-5">
        {/* Form title */}
        <h3 className="text-3xl font-[Parisienne] mr-6 text-amber-400">Book a Table</h3>

        {/* Date input field using DatePicker */}
        <DatePicker
          selected={formData.date}
          onChange={(date) => setFormData({ ...formData, date })}
          dateFormat="yyyy-MM-dd"
          placeholderText="Pick a date"
          className="p-3 w-40 md:w-52 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        {/* Time input field using DatePicker (showing only time picker) */}
        <DatePicker
          selected={formData.time}
          onChange={(time) => setFormData({ ...formData, time })}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          timeCaption="Time"
          dateFormat="HH:mm"
          placeholderText="Pick a time"
          className="p-3 w-40 md:w-52 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />

        {/* Select dropdown for number of guests */}
        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="p-3 w-40 md:w-52 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} Guest{i !== 0 ? "s" : ""}
            </option>
          ))}
        </select>

        {/* Name input field */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 w-40 md:w-52 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />

        {/* Submit button */}
        <button
          type="submit"
          className="bg-amber-500 text-white font-[Cardo] px-6 py-3 rounded-full hover:bg-amber-400 transition font-semibold"
        >
          Reserve Now
        </button>
      </form>
    </div>
  );
};

export default BookTable;
