import { Link } from 'react-router-dom';  

// Array of articles with essential details
const articles = [
  {
    id: 1,
    title: "The Art of French Pastry",
    image: "https://images.unsplash.com/photo-1615887381279-e6498132fce1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Discover the secrets behind the perfect French croissant.",
  },
  {
    id: 2,
    title: "Wine Pairing 101",
    image: "https://images.unsplash.com/photo-1519092796169-bb9cc75a4b68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Learn how to pair wine with different dishes like a pro.",
  },
  {
    id: 3,
    title: "The Magic of Truffles",
    image: "https://images.unsplash.com/photo-1601170022270-39cac948bfdc?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Why truffles are considered the diamonds of the kitchen.",
  },
  {
    id: 4,
    title: "The Science of Fermentation",
    image: "https://images.unsplash.com/photo-1592878912415-353c89227af4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "How fermentation transforms simple ingredients into gourmet delicacies.",
  },
  {
    id: 5,
    title: "Sustainable Seafood Choices",
    image: "https://images.unsplash.com/photo-1707995548052-cfca47bfb6db?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "How to enjoy seafood responsibly while preserving ocean ecosystems.",
  },
  {
    id: 6,
    title: "Exploring Artisan Cheese",
    image: "https://images.unsplash.com/photo-1695606452817-e28a67339e57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A deep dive into the world of handcrafted cheeses and their rich flavors.",
  },
];

// Main component that displays the articles
export default function BehindThePlate() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-30 pb-10">
      <h1 className="text-4xl font-bold text-center font-[Parisienne] text-amber-400 mb-8">
        Behind the Plate
      </h1>
      {/* Paragraph with introduction text */}
      <p className="font-[Cardo] text-center text-gray-700 max-w-4xl mx-auto mb-6">
        For all food lovers! Discover the secrets of gourmet cooking, learn how to pair wine like a pro, and explore the fascinating stories behind your favorite ingredients. Click on an article that interests you and dive into the world of flavors!
      </p>
      {/* Grid layout to display articles */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Link to the individual article page */}
            <Link to={`/article/${article.id}`}>
              {/* Image of the article */}
              <img src={article.image} alt={article.title} loading="lazy" className="w-full h-40 object-cover" />
              <div className="p-4">
                {/* Article title */}
                <h2 className="text-xl font-semibold text-gray-800 font-[Cardo]">{article.title}</h2>
                {/* Article description */}
                <p className="text-gray-600 mt-2 font-[Cardo]">{article.description}</p>
                {/* Button to read more */}
                <button className="mt-4 px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 font-[Cardo]">
                  Read More
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
