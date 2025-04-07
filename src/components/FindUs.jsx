const FindUs = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-12 px-6 md:px-16 py-10 mb-10">
      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-6xl mx-auto">
        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-amber-400 mb-6 font-[Parisienne]">Find Us</h2>
          <p className="text-lg text-gray-600 font-[Cardo]">
            Visit Maison de l'Orchidée and immerse yourself in an unforgettable dining experience. 
            We are located in the heart of the city, easily accessible and surrounded by a charming ambiance. 
            Stop by for a delightful meal and exceptional hospitality.
          </p>
        </div>

        {/* Google Map Embed */}
        <div className="w-full md:w-1/2 flex justify-center">
          <iframe
            title="Maison de l'Orchidée Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d417007.19521979026!2d2.3522!3d48.8566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTIzIE1haW4gU3RyZWV0LCBQYXJpcywgRnJhbmNl!5e0!3m2!1sen!2sus!4v1678946769741!5m2!1sen!2sus"
            className="w-full max-w-md h-80 rounded-lg shadow-lg border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
