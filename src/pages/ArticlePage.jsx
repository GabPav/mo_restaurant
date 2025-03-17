import { useParams } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: "The Art of French Pastry",
    image: "https://images.unsplash.com/photo-1615887381279-e6498132fce1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Discover the secrets behind the perfect French croissant.",
    content: `
      <p>Pastry making is an art form, one that blends tradition, technique, and patience. French pastry, in particular, has a long and revered history, with each creation offering a unique taste of both culinary innovation and centuries-old craftsmanship.</p>
      <p>The delicate and buttery layers of a croissant, the airy texture of a puff pastry, or the intricate designs of a mille-feuille — these all require meticulous attention to detail and a deep understanding of dough and flavor. At the heart of French pastry is lamination, the process of folding butter into dough to create thin layers that, when baked, puff up to perfection.</p>
      <p>Understanding the ingredients is also crucial. The combination of flour, butter, water, and a small amount of sugar is the foundation, but it’s the technique that makes the difference. Properly managing the temperature and timing of the dough’s resting phases allows the chef to achieve the ideal balance of flakiness and tenderness. The layers should be distinct but not too thick, creating a light and flaky texture that is both crisp and airy.</p>
      <p>With years of practice, any baker can master these techniques and produce pastries that are not just tasty but works of art in their own right. Whether it’s the classic croissant, a decadent éclair, or a delicate pain au chocolat, French pastries embody both technique and tradition, standing as the pinnacle of baking excellence.</p>
    `
  },
  {
    id: 2,
    title: "Wine Pairing 101",
    image: "https://images.unsplash.com/photo-1519092796169-bb9cc75a4b68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Learn how to pair wine with different dishes like a pro.",
    content: `
      <p>Wine pairing is an art form in itself, and when done correctly, it can elevate the entire dining experience. The magic lies in matching the wine's characteristics with the flavors, textures, and even the aromas of the food you’re eating.</p>
      <p>While some might think pairing wine is purely about personal taste, there’s a science to it that brings out the best in both the wine and the dish. When pairing wine, one of the first things to consider is the body of the wine. A full-bodied red wine, such as Cabernet Sauvignon or Syrah, pairs beautifully with rich, hearty dishes like steak, grilled lamb, or even a rich tomato-based pasta. These wines have the tannin structure and depth to balance out the fattiness and bold flavors of these foods.</p>
      <p>For lighter dishes, such as seafood, chicken, or salads, a medium-bodied wine like Pinot Noir or Chardonnay is the way to go. These wines have enough acidity to cut through the food’s natural richness while complementing their flavors. And, of course, a crisp, refreshing white wine such as Sauvignon Blanc is perfect for dishes like goat cheese salad, oysters, or grilled vegetables.</p>
      <p>When pairing wine, it's important to remember that there are no hard and fast rules. The most important thing is to experiment and discover what combinations work best for your palate. Each food and wine pairing offers a chance to discover new and exciting flavors that you may not have encountered before, making it an endlessly fascinating subject for enthusiasts and connoisseurs alike.</p>
    `
  },
  {
    id: 3,
    title: "The Magic of Truffles",
    image: "https://images.unsplash.com/photo-1601170022270-39cac948bfdc?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Why truffles are considered the diamonds of the kitchen.",
    content: `
      <p>Truffles are often referred to as the diamonds of the kitchen, and for good reason. These rare and highly prized fungi grow underground, typically in symbiosis with the roots of certain trees. Their unique, earthy aroma and intense flavor make them a coveted ingredient in gourmet cooking.</p>
      <p>The most well-known truffles are the black truffle from France and the white truffle from Italy, but there are several other varieties that are equally prized by chefs around the world. Truffles are used sparingly, often shaved over dishes like pasta, risotto, or scrambled eggs, adding an unparalleled depth of flavor.</p>
      <p>The process of harvesting truffles is equally fascinating. Truffle hunters use specially trained dogs or pigs to locate these elusive fungi, as truffles have a distinct scent that the animals can detect even beneath the soil. Once found, truffles are carefully harvested to preserve their delicate flavor and texture.</p>
      <p>Because of their rarity and the labor-intensive harvesting process, truffles can be quite expensive. However, their luxurious flavor and ability to elevate any dish make them a worthwhile indulgence for those who appreciate the finer things in life. From a simple pasta dish to an extravagant gourmet creation, truffles add a touch of magic to any meal.</p>
    `
  },
  {
    id: 4,
    title: "The Science of Fermentation",
    image: "https://images.unsplash.com/photo-1592878912415-353c89227af4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "How fermentation transforms simple ingredients into gourmet delicacies.",
    content: `
      <p>Fermentation is one of the oldest and most fascinating culinary processes, one that transforms simple ingredients into complex, flavorful delicacies. This natural process, which involves the conversion of sugars into alcohol or acids by bacteria, yeast, or molds, is behind many of our favorite foods and beverages, from bread and yogurt to beer and cheese.</p>
      <p>At its core, fermentation is a form of preservation, allowing us to store food for longer periods while also enhancing its flavors. For example, the yeast in bread dough causes the dough to rise, creating air pockets and giving the bread its soft, fluffy texture. The lactic acid bacteria in yogurt ferment milk, producing a tangy flavor and creamy texture that is both delicious and beneficial for digestion.</p>
      <p>Fermented foods can be enjoyed in a variety of ways, from a simple glass of kombucha to a plate of kimchi or a slice of sourdough bread. In addition to their unique flavors, these foods are also packed with beneficial probiotics, which support gut health and overall well-being.</p>
      <p>Whether you're making your own kimchi, brewing homemade beer, or simply enjoying a slice of artisanal cheese, fermentation adds a layer of complexity and richness to the food we eat. It’s a process that has been around for thousands of years, and one that continues to inspire chefs and home cooks alike.</p>
    `
  },
  {
    id: 5,
    title: "Sustainable Seafood Choices",
    image: "https://images.unsplash.com/photo-1707995548052-cfca47bfb6db?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "How to enjoy seafood responsibly while preserving ocean ecosystems.",
    content: `
      <p>Seafood has long been a cornerstone of global cuisine, offering a wealth of delicious dishes and a healthy source of protein. But as the demand for seafood has increased, so has the pressure on ocean ecosystems. Overfishing, habitat destruction, and unsustainable fishing practices have threatened the balance of marine life, making it more important than ever to choose seafood that is both delicious and sustainable.</p>
      <p>Sustainable seafood comes from well-managed fisheries or aquaculture farms that minimize their environmental impact. This includes avoiding species that are overfished, as well as selecting seafood that has been caught or farmed using responsible methods. Look for certifications like the Marine Stewardship Council (MSC) or the Aquaculture Stewardship Council (ASC), which indicate that the seafood meets sustainability standards.</p>
      <p>When choosing sustainable seafood, it's also important to consider the health of the ocean ecosystems. Look for species that are abundant and that are caught or farmed in ways that do not damage the environment. For example, choosing farmed mussels or oysters can be a more sustainable option compared to other types of seafood, as they require minimal resources to grow and can even help filter the water in coastal areas.</p>
      <p>By making mindful choices about the seafood we eat, we can help protect the oceans and ensure that future generations will be able to enjoy the flavors of the sea. Sustainable seafood is not only good for the planet, but it can also lead to better-tasting, fresher products that benefit both the environment and the consumer.</p>
    `
  },
  {
    id: 6,
    title: "Exploring Artisan Cheese",
    image: "https://images.unsplash.com/photo-1695606452817-e28a67339e57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A deep dive into the world of handcrafted cheeses and their rich flavors.",
    content: `
      <p>Cheese is an ancient food, with roots stretching back thousands of years. Over the centuries, cheese-making has evolved into a sophisticated craft, and today, artisan cheeses are highly prized for their complexity, flavor, and artistry. Whether it’s a creamy brie, a sharp blue, or a tangy goat cheese, each cheese tells a story of time, place, and tradition.</p>
      
      <p>The beauty of artisan cheese lies in the craftsmanship behind it. Unlike mass-produced cheeses, which often rely on industrial processes and standardized methods, artisan cheeses are made by hand, using traditional techniques passed down through generations. The result is a cheese that reflects the unique characteristics of its ingredients — the milk, the region, and the methods used by the cheesemaker.</p>
      <p>Some of the most famous artisan cheeses include French Camembert, Italian Parmigiano-Reggiano, and Spanish Manchego. These cheeses are often made in small batches, with attention to detail and a commitment to quality. The flavors can vary widely, from rich and nutty to tangy and pungent, but all artisan cheeses share a deep connection to the land and the traditions of their makers.</p>
      <p>Exploring the world of artisan cheese is a journey of discovery, one that offers endless opportunities for culinary exploration and enjoyment. Whether you’re pairing cheese with wine, adding it to a salad, or simply enjoying it on its own, artisan cheese adds depth and character to any meal.</p>
    `
  }
];

function ArticlePage() {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h2 className="text-center mb-6 text-3xl font-semibold text-amber-500">{article.title}</h2>
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-80 object-cover mx-auto mb-6" 
      />
      <div 
        className="text-lg text-gray-700 leading-relaxed mb-6 font-[Cardo]"
        dangerouslySetInnerHTML={{ __html: article.content }}/>
    </div>
  );
}

export default ArticlePage;
