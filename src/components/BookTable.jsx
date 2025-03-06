import React, { useState } from "react";

const BookTable = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Table booked for ${formData.name} on ${formData.date} at ${formData.time}`);
  };

  return (
    <div className="sticky bottom-0 left-0 w-full bg-gray-900
     text-amber-400 py-8 px-6 md:px-16 shadow-lg z-40">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        <h3 className="text-3xl font-[Parisienne] mr-6 text-amber-400">
          Book a Table
        </h3>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="p-3 w-40 md:w-52 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          style={{ accentColor: "#fbbf24", colorScheme: "dark" }}
          required
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="p-3 w-40 md:w-52 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
          style={{ accentColor: "#fbbf24", colorScheme: "dark" }}
          required
        />

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

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 w-40 md:w-52 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />

        <button
          type="submit"
          className="bg-amber-500 text-gray-900 px-6 py-3 rounded-full hover:bg-amber-400 transition font-semibold"
        >
          Reserve Now
        </button>
      </form>
    </div>
  );
};

export default BookTable;
