import React, { useState } from "react";

const voucherCategories = [
  { name: "Fine Dining", id: "fine-dining" },
  { name: "Exclusive Dining", id: "exclusive-dining" },
  { name: "Sommelier’s Selection", id: "sommeliers-selection" },
  { name: "Chef’s Specialties", id: "chefs-specialties" },
  { name: "Signature Tastings", id: "signature-tastings" },
];

const vouchers = {
  "fine-dining": [
    { name: "Gourmet Dinner for Two", price: "150€", img: "https://images.unsplash.com/photo-1639873179448-2e7eb329d3aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Michelin Star Experience", price: "250€", img: "https://images.unsplash.com/photo-1616671276441-2f2c277b8bf9?q=80&w=1974&auto=format&fit=crop" },
    { name: "Tasting Menu Delight", price: "180€", img: "https://images.unsplash.com/photo-1669490048328-0d1e075a2b7c?q=80&w=2132&auto=format&fit=crop" },
    { name: "Elegant Wine & Dine", price: "200€", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Luxury Five-Course Meal", price: "220€", img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Romantic Candlelit Dinner", price: "190€", img: "https://images.unsplash.com/photo-1562050344-f7ad946cee35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],
  "exclusive-dining": [
    { name: "Private Dining Room Experience", price: "400€", img: "https://images.unsplash.com/photo-1617201835753-86a4c2a8c457?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Candlelit Rooftop Dinner", price: "350€", img: "https://images.unsplash.com/photo-1536392706976-e486e2ba97af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Exclusive Chef’s Table", price: "500€", img: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "VIP Sunset Dinner", price: "450€", img: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Gourmet Experience", price: "600€", img: "https://images.unsplash.com/photo-1498531872221-ce6d6216be71?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Majestic Banquet", price: "700€", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],
  "sommeliers-selection": [
    { name: "Private Wine Tasting", price: "120€", img: "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?q=80&w=2072&auto=format&fit=crop" },
    { name: "Whiskey Connoisseur", price: "200€", img: "https://images.unsplash.com/flagged/photo-1575451538043-06ae93bd7674?q=80&w=2069&auto=format&fit=crop" },
    { name: "Champagne Celebration", price: "250€", img: "https://images.unsplash.com/photo-1623428454697-08da4a100602?q=80&w=2071&auto=format&fit=crop" },
    { "name": "Grand Sommelier Pairing", "price": "300€", "img": "https://images.unsplash.com/photo-1596438214057-5ff7c7fa76b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { "name": "Rare Vintage Wine Tasting", "price": "450€", "img": "https://images.unsplash.com/photo-1566467021572-37fbefe8fcb2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { "name": "Exclusive Dessert & Wine Pairing", "price": "280€", "img": "https://images.unsplash.com/photo-1514809838646-2c2eac6c3910?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],
  "chefs-specialties": [
    { name: "Signature Tasting Menu", price: "200€", img: "https://images.unsplash.com/photo-1486419952281-2b1734713e54?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Seafood Extravaganza", price: "170€", img: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Black Truffle & Caviar Experience", price: "600€", img: "https://images.unsplash.com/photo-1597771125516-4eddaf867446?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { "name": " Beef Indulgence", "price": "450€", "img": "https://images.unsplash.com/photo-1615937695214-9c2f20f3ae28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { "name": "Molecular Gastronomy Experience", "price": "380€", "img": "https://images.unsplash.com/photo-1710261924580-e513dba07a6c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { "name": "Seasonal Chef’s Surprise Menu", "price": "220€", "img": "https://images.unsplash.com/photo-1505682750263-f3f9e519c565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],
  "signature-tastings": [
    { name: "Grand Cheese & Wine Pairing", price: "180€", img: "https://images.unsplash.com/photo-1471253794676-0f039a6aae9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Exotic Cocktail Masterclass", price: "120€", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Decadent Dessert Tasting", price: "100€", img: "https://images.unsplash.com/photo-1517084166762-9edca41416e6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { "name": "Gourmet Truffle & Foie Gras Pairing", "price": "250€", "img": "https://images.unsplash.com/photo-1601170022284-3a8b1eedf844?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { "name": "Rare Vintage Wine Tasting", "price": "300€", "img": "https://images.unsplash.com/photo-1600534180079-557cdc0258d0?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { "name": "Luxury Chocolate & Cognac Experience", "price": "220€", "img": "https://images.unsplash.com/photo-1514481372798-c8b2f7e6f708?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ]
};

const GiftCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("fine-dining");

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-[300px] md:h-[400px] relative">
        <img
          src="https://images.unsplash.com/photo-1579869696034-ec145eb3987c?q=80&w=2070&auto=format&fit=crop"
          alt="Gift Vouchers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-[Cardo] mt-20">Gift Vouchers</h1>
          <div className="w-24 h-[2px] bg-amber-400 mt-2"></div>
        </div>
      </div>

      <h1 className="text-4xl font-[Parisienne] text-center text-amber-500 mb-10 mt-10">
        <span className="text-4xl font-[Cardo]">Select Your</span> Dream Experience
      </h1>
      <p className="font-[Cardo] text-center text-lg text-gray-900 mb-10">
        Choose a gift voucher and surprise your loved ones with a taste of the extraordinary.
      </p>

      {/* Button Section */}
      <div className="flex justify-center mb-10">
        {voucherCategories.map((category) => (
          <button
            key={category.id}
            className={`px-6 py-3 mx-2 border rounded-full text-lg font-[Cardo] ${selectedCategory === category.id ? "bg-amber-400 text-white" : "text-amber-400 border-amber-500"}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Voucher Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {vouchers[selectedCategory].map((voucher, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={voucher.img} alt={voucher.name} className="w-full h-48 object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-xl font-[Cardo] text-gray-900">{voucher.name}</h3>
              <p className="text-sm text-gray-500">From</p>
              <p className="text-2xl font-semibold text-amber-500">{voucher.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftCard;
