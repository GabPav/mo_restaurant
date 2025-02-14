import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
];

const Gallery = () => {
  const scrollRef = useRef(null);

  // Function to handle horizontal scrolling
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full mt-20">
      {/* Left arrow button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md z-10 hidden md:flex"
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Scrollable image container with fade effect on edges */}
      <div className="relative w-full">
        {/* Left fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent pointer-events-none hidden sm:block"></div>
        
        {/* Image slider */}
        <div ref={scrollRef} className="flex overflow-x-scroll scrollbar-hide space-x-2 w-full">
          {images.map((image, index) => (
            <motion.div key={index} className="flex-shrink-0" style={{ minWidth: "33.33%", maxWidth: "33.33%" }}>
              <img src={image.src} alt={image.alt} className="h-[400px] w-full object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Right fade effect */}
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent pointer-events-none hidden sm:block"></div>
      </div>

      {/* Right arrow button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md z-10 hidden md:flex"
        aria-label="Scroll right"
      >
        <ChevronRight size={24} />
      </button>

      {/* Mobile swipe indicator */}
      <div className="block md:hidden text-center mt-4 text-gray-600 font-semibold text-sm animate-pulse">
        Swipe to explore →
      </div>
    </div>
  );
};

export default Gallery;
