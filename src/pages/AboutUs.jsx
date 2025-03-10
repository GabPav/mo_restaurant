import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Image */}
      <div className="w-full h-[300px] md:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gallery Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center mb-60">
          <h1 className="text-4xl text-white font-[Cardo]">Our Story</h1>
          <div className="w-24 h-[2px] bg-amber-500 mt-2"></div>
        </div>
      </div>

      {/* About Us Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-[Parisienne] text-center text-amber-500 mb-8"><span className="font-[Cardo]">About Us </span>
          - A Legacy of Excellence
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed font-[Cardo] text-center">
          Nestled in the heart of the city, <span className="font-semibold text-amber-600">Maison de l'Orchidée</span> has been a symbol of refined dining since its inception in 1995. Founded by the renowned chef, Pierre Laurent, our restaurant was born out of a passion for exquisite cuisine and an unwavering dedication to perfection.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed font-[Cardo] text-center mt-6">
          Over the decades, we have preserved the art of culinary craftsmanship, blending traditional techniques with innovative flavors. Every dish tells a story, crafted with the finest seasonal ingredients, ensuring an unforgettable dining experience.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed font-[Cardo] text-center mt-6">
          More than just a restaurant, Maison de l'Orchidée is a sanctuary where gastronomic excellence meets timeless elegance. Our candle-lit ambiance, curated wine selection, and impeccable service have made us a cherished destination for those who appreciate the finer things in life.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed font-[Cardo] text-center mt-6">
          Join us, and become part of a tradition where every meal is a masterpiece, every guest a treasured friend, and every visit a journey into the soul of fine dining.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
