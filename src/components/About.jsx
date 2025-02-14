const About = ({ showIntro = true, imageSrc, title, description }) => {
  return (
    <section className="flex flex-col items-center px-6 md:px-16 py-10 gap-12 max-w-6xl mx-auto mt-15">
      {/* Intro section */}
      {showIntro && (
        <div className="text-center pt-10">
          <h2 className="text-4xl font-semibold mb-6 font-[Cardo] text-gray-700">
            Discover the Art of Fine Dining at 
            <span className="font-[Parisienne] text-amber-400"> Maison de l'Orchidée</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8 font-[Cardo]">
            Step into a world where fine dining meets timeless sophistication. At Maison de l'Orchidée, every dish is a masterpiece, crafted with passion and the finest ingredients. Let us take you on an unforgettable culinary journey, where every bite tells a story of tradition, creativity, and excellence.
          </p>
        </div>
      )}

      {/* Section with image and text */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
        {/* Slika */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={imageSrc}
            alt="About Section"
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-amber-400 mb-6 font-[Parisienne]">{title}</h2>
          <p className="text-lg text-gray-600 font-[Cardo]">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default About;