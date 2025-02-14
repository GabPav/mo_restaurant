const Newsletter = () => {
    return (
      <div className="flex flex-col items-center text-center px-6 py-20 bg-white">
        <h2 className="text-4xl font-bold text-amber-400 mb-6 font-[Parisienne]">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg text-gray-700 max-w-xl font-[Cardo] mb-8">
          Stay updated with the latest news, exclusive offers, and special events at Maison de l'Orchidée.
          Subscribe now and never miss out on a delightful dining experience!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <button className="bg-gray-900 text-white px-6 py-3 rounded-full shadow-md hover:bg-amber-400 transition">
            Subscribe
          </button>
        </div>
      </div>
    );
  };
  
  export default Newsletter;
  