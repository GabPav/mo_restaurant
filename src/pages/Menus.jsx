import React, { useState } from "react";

const menuCategories = [
  { name: "Aperitifs", id: "aperitifs" },
  { name: "Starters", id: "starters" },
  { name: "Main Courses", id: "main-courses" },
  { name: "Desserts", id: "desserts" },
  { name: "Wine Card", id: "wine-card" },
];

const menuItems = {
  aperitifs: [
    { name: "Classic Negroni", description: "Gin, vermouth, Campari, orange twist" },
    { name: "Aperol Spritz", description: "Aperol, prosecco, soda, orange slice" },
    { name: "Martini Dry", description: "Gin, dry vermouth, olive or lemon twist" },
    { name: "Campari Soda", description: "Campari, soda water, orange slice" },
  ],
  starters: [
    { name: "Bruschetta al Pomodoro", description: "Toasted bread, fresh tomatoes, basil, garlic" },
    { name: "French Onion Soup", description: "Caramelized onions, beef broth, Gruyère cheese" },
    { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, basil, balsamic glaze" },
    { name: "Shrimp Cocktail", description: "Chilled shrimp, cocktail sauce, lemon wedge" },
  ],
  "main-courses": [
    { name: "Filet Mignon", description: "Grilled tenderloin, truffle butter, roasted potatoes" },
    { name: "Lobster Risotto", description: "Creamy Arborio rice, fresh lobster, parmesan" },
    { name: "Coq au Vin", description: "Braised chicken, red wine sauce, mushrooms, pearl onions" },
    { name: "Seafood Paella", description: "Saffron rice, shrimp, mussels, chorizo, peas" },
  ],
  desserts: [
    { name: "Tiramisu", description: "Espresso-soaked ladyfingers, mascarpone cream, cocoa" },
    { name: "Crème Brûlée", description: "Vanilla custard, caramelized sugar crust" },
    { name: "Chocolate Lava Cake", description: "Warm chocolate cake, molten center, vanilla ice cream" },
    { name: "Panna Cotta", description: "Creamy vanilla pudding, berry compote" },
  ],
  "wine-card": [
    { name: "Château Margaux 2015", description: "Full-bodied red wine, notes of blackberry and oak" },
    { name: "Dom Pérignon Vintage 2012", description: "Prestige champagne, citrus and almond flavors" },
    { name: "Sancerre Blanc 2020", description: "Crisp white wine, aromas of citrus and minerality" },
    { name: "Barolo 2016", description: "Rich Italian red wine, notes of cherry, rose, and spice" },
  ],
};

const Menus = () => {
  const [selectedCategory, setSelectedCategory] = useState("aperitifs");

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-[300px] md:h-[400px] relative">
        <img
          src="https://images.unsplash.com/photo-1447078806655-40579c2520d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Contact Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-[Cardo] mt-20">Menus</h1>
          <div className="w-24 h-[2px] bg-amber-400 mt-2"></div>
        </div>
      </div>
      <h1 className="text-3xl font-[Cardo] text-center text-amber-500 mb-10 mt-20">Exquisite flavors await</h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {menuCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 border rounded-full text-lg font-[Cardo] transition-all duration-300 ${
              selectedCategory === category.id ? "bg-amber-500 text-white" : "border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="text-center mb-20">
        {menuItems[selectedCategory].map((item, index) => (
          <div key={index} className="py-4 border-b border-gray-300">
            <h3 className="text-2xl font-[Cardo] text-gray-900">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menus;
