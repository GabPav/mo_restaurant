import { useParams } from 'react-router-dom';

// Array of articles containing details like id, title, image, description, and content
const articles = [
  {
    id: 1,
    title: "The Art of French Pastry",
    image: "https://images.unsplash.com/photo-1615887381279-e6498132fce1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Discover the secrets behind the perfect French croissant.",
    content: `
      <p>Pastry making is an art form, one that blends tradition, technique, and patience...</p>
    `
  },
  {
    id: 2,
    title: "Wine Pairing 101",
    image: "https://images.unsplash.com/photo-1519092796169-bb9cc75a4b68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Learn how to pair wine with different dishes like a pro.",
    content: `
      <p>Wine pairing is an art form in itself, and when done correctly, it can elevate the entire dining experience...</p>
    `
  },
  {
    id: 3,
    title: "The Magic of Truffles",
    image: "https://images.unsplash.com/photo-1601170022270-39cac948bfdc?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Why truffles are considered the diamonds of the kitchen.",
    content: `
      <p>Truffles are often referred to as the diamonds of the kitchen, and for good reason...</p>
    `
  },
  {
    id: 4,
    title: "The Science of Fermentation",
    image: "https://images.unsplash.com/photo-1592878912415-353c89227af4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "How fermentation transforms simple ingredients into gourmet delicacies.",
    content: `
      <p>Fermentation is one of the oldest and most fascinating culinary processes...</p>
    `
  },
  {
    id: 5,
    title: "Sustainable Seafood Choices",
    image: "https://images.unsplash.com/photo-1707995548052-cfca47bfb6db?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "How to enjoy seafood responsibly while preserving ocean ecosystems.",
    content: `
      <p>Seafood has long been a cornerstone of global cuisine, offering a wealth of delicious dishes...</p>
    `
  },
  {
    id: 6,
    title: "Exploring Artisan Cheese",
    image: "https://images.unsplash.com/photo-1695606452817-e28a67339e57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A deep dive into the world of handcrafted cheeses and their rich flavors.",
    content: `
      <p>Cheese is an ancient food, with roots stretching back thousands of years...</p>
    `
  }
];

function ArticlePage() {
  // Retrieve the article ID from the URL parameters
  const { id } = useParams();
  
  // Find the article that matches the given ID
  const article = articles.find(article => article.id === parseInt(id));

  // If no article is found, display a message
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 pt-30">
      {/* Article title */}
      <h2 className="text-center mb-6 text-3xl font-semibold font-[Cardo] text-amber-500">{article.title}</h2>
      
      {/* Article image */}
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-80 object-cover mx-auto mb-6" 
      />
      
      {/* Article content rendered as HTML */}
      <div 
        className="text-lg text-gray-700 leading-relaxed mb-6 font-[Cardo]"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}

export default ArticlePage;
