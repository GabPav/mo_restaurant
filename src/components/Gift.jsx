const Gift = () => {
    return (
      <div className="flex flex-col items-center text-center px-6 py-20 bg-gray-100 mt-20">
        <h2 className="text-4xl font-bold text-amber-400 mb-6 font-[Parisienne]">Gift Card</h2>
        <p className="text-lg text-gray-700 max-w-xl font-[Cardo] mb-8">
          Give the gift of a memorable dining experience at Maison de l'Orchidée.  
          Treat your loved ones to an exquisite meal and an evening of fine dining.  
          A perfect way to celebrate special moments!
        </p>
        <button className="bg-gray-900 text-white text-lg px-6 py-3 rounded-full shadow-md hover:bg-amber-400 transition">
          Buy a Gift Card
        </button>
      </div>
    );
  };
  
  export default Gift;
  