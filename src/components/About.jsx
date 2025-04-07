import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const About = ({ 
  showIntro = true, 
  imageSrc, 
  title, 
  description, 
  link = "/AboutUs", 
  isWineList = false 
}) => {
  return (
    <section className="flex flex-col items-center px-6 md:px-16 py-4 sm:py-6 md:py-10 gap-12 max-w-6xl mx-auto mt-8 sm:mt-12 md:mt-15">
      {/* Intro section */}
      {showIntro && !isWineList && (
        <div className="text-center pt-4 sm:pt-6 md:pt-10">
          <h2 className="text-4xl font-semibold mb-6 font-[Cardo] text-gray-700">
            Discover the Art of Fine Dining at 
            <span className="font-[Parisienne] text-amber-400"> {`Maison de l'Orchidée`}</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8 font-[Cardo]">
            {`Step into a world where fine dining meets timeless sophistication. At Maison de l'Orchidée, every dish is a masterpiece, crafted with passion and the finest ingredients. Let us take you on an unforgettable culinary journey, where every bite tells a story of tradition, creativity, and excellence.`}
          </p>
        </div>
      )}

      {/* Section with image and text */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
        {/* Image */}
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

          {/* Learn More Button */}
          {!isWineList && (
            <Link to={link}>
              <button className="px-6 py-3 text-lg font-semibold font-[Cardo] bg-amber-400 text-white rounded-lg shadow-md hover:bg-amber-500 transition duration-300 mt-6">
                Learn More
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Wine List Button */}
      {isWineList && (
        <Link to={link}>
          <button className="px-6 py-3 text-lg font-semibold font-[Cardo] bg-amber-400 text-white rounded-lg shadow-md hover:bg-amber-500 transition duration-300 mt-6">
            Learn More
          </button>
        </Link>
      )}
    </section>
  );
};

// Update PropTypes to expect boolean for showIntro and isWineList
About.propTypes = {
  description: PropTypes.string,
  showIntro: PropTypes.bool, // Change to boolean
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  isWineList: PropTypes.bool, // Change to boolean
};

export default About;
