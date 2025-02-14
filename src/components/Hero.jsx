import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&auto=format&fit=crop&q=80",
    alt: "Plate of food on a table with a hand reaching for it"
  },
  {
    src: "https://images.unsplash.com/photo-1698265473208-ef2e5934e93c?w=1200&auto=format&fit=crop&q=80",
    alt: "Slightly blurred image of a restaurant with tables and a glass visible"
  },
  {
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1200&auto=format&fit=crop&q=80",
    alt: "Restaurant interior with tables and chairs"
  },
  {
    src: "https://images.unsplash.com/photo-1494233914995-8c8b438d3f60?w=1200&auto=format&fit=crop&q=80",
    alt: "Restaurant tables with orchids as decor"
  }
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[90vh] flex flex-col">
      {/* Slideshow */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index].src}
            src={images[index].src}
            alt={images[index].alt} // Added alt text specific to each image
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
        
        {/* Navigation arrows */}
        <button 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
          onClick={prevSlide}
        >
          <ChevronLeft size={30} />
        </button>
        <button 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
          onClick={nextSlide}
        >
          <ChevronRight size={30} />
        </button>
        
        {/* Indicators (circles) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${i === index ? "bg-white" : "bg-gray-400"}`}
              onClick={() => setIndex(i)}
            ></button>
          ))}
        </div>
      </div>

      {/* Reservation button */}
      <div className="w-full h-[10vh]">
        <button className="w-full h-full text-xl font-semibold text-white bg-gray-900 hover:bg-amber-400 transition-all font-[Cardo]">
          MAKE A RESERVATION
        </button>
      </div>
    </div>
  );
};

export default Hero;
