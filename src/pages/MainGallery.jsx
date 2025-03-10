import React, { useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D",
    alt: "Elegant restaurant interior with dim lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1471253794676-0f039a6aae9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D",
    alt: "Fine dining table setting with wine glasses",
  },
  {
    src: "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D",
    alt: "Gourmet dish with artistic plating",
  },
  {
    src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D",
    alt: "Cozy restaurant ambiance with candlelit tables",
  },
  {
    src: "https://images.unsplash.com/photo-1482275548304-a58859dc31b7?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D",
    alt: "Chef preparing a gourmet meal in an open kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1631303494240-7c3bc6bd8c03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D",
    alt: "Exquisite dessert served on a fine dining plate",
  },
  {
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Top-down view of a table filled with food, waffles, and drinks",
  },
  {
    src: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Woman enjoying pasta, bringing a fork to her mouth with a satisfied expression",
  },
  {
    src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD",
    alt: "Close-up of a plate with eggs on top, served over fresh greens",
  },
  {
    src: "https://images.unsplash.com/photo-1504718855392-c0f33b372e72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Moody restaurant ambiance with warm hanging lights",
  },
  {
    src: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Empty bar area with neatly arranged tables and chairs",
  },
  {
    src: "https://images.unsplash.com/photo-1560053608-13721e0d69e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Dimly lit restaurant with elegantly set tables, creating a cozy atmosphere",
  },
];

const MainGallery = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreImages = () => {
    setVisibleCount(images.length);
  };

  return (
    <div className="w-full min-h-screen ">
      {/* Hero Image */}
      <div className="w-full h-[300px] md:h-[400px] relative">
        <img
          src="https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D"
          alt="Gallery Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-[Cardo] mt-20">Our Gallery</h1>
          <div className="w-24 h-[2px] bg-amber-400 mt-2"></div>
        </div>
      </div>
      {/* Title & Description */}
      <div className="text-center py-8 px-4">
        <h2 className="text-3xl font-[Cardo] text-amber-400 pt-10 pb-5">
        Step Into Elegance – <span className="text-4xl font-semibold font-[Parisienne]">View Our Gallery</span>
        </h2>
        <p className="text-lg text-gray-600 mt-2 font-[Cardo]">
          Join our story by tagging us with{" "}
          <span className="font-semibold text-amber-500">#maisondelorchidee</span>
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-16 pb-12">
        {images.slice(0, visibleCount).map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-64 object-cover rounded-lg shadow-md transition-all duration-300 hover:ring-4 hover:ring-amber-300"
          />
        ))}
      </div>

      {/* See More Button */}
      {visibleCount < images.length && (
        <div className="flex justify-center pb-12">
          <button
            onClick={showMoreImages}
            className="px-6 py-2 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 transition-all"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default MainGallery;
