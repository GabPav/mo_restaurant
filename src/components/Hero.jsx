import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] flex flex-col">
      {/* Slideshow */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index].src}
            src={images[index].src}
            alt={images[index].alt}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {/* Navigation arrows */}
        <button 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition hidden sm:block"
          onClick={prevSlide}
        >
          <ChevronLeft size={30} />
        </button>
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition hidden sm:block"
          onClick={nextSlide}
        >
          <ChevronRight size={30} />
        </button>

        {/* Indicators (circles) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 sm:flex hidden">
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
        <Link
          to="/reservations"
          className="w-full h-full md:py-5 xl:py-13  flex items-center justify-center text-xl font-semibold text-white bg-gray-900 hover:bg-amber-400 transition-all font-[Cardo]"
        >
          MAKE A RESERVATION
        </Link>
      </div>
    </div>
  );
};

export default Hero;
