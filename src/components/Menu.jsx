const Menu = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-12 px-6 md:px-16 py-10 mb-10">
      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl mx-auto relative z-10 px-6 md:px-16">
        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-amber-400 mb-6 font-[Parisienne]">Our Menu</h2>
          <p className="text-lg text-gray-600 font-[Cardo]">
            Discover a symphony of flavors at Maison de l'Orchidée. Our carefully crafted menu features exquisite dishes 
            prepared with the finest ingredients. From gourmet appetizers to indulgent desserts, every bite is a celebration 
            of culinary artistry.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1565895405137-3ca0cc5088c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnQlMjBtZW51fGVufDB8MHwwfHx8Mg%3D%3D"
            alt="A woman enjoying a delicious meal at a table"
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Menu;