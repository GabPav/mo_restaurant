import { useParams } from 'react-router-dom';

// Array of articles containing details like id, title, image, description, and content
const articles = [
  {
    id: 1,
    title: "The Art of French Pastry",
    image: "https://images.unsplash.com/photo-1615887381279-e6498132fce1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Discover the secrets behind the perfect French croissant.",
    content: `
      <p class="mb-4">There's something irresistibly elegant about the French croissant — its flaky golden layers, the buttery aroma that fills the air as it bakes, and the delicate crunch that gives way to a soft, airy center. But behind this seemingly simple pastry lies a complex dance of technique, timing, and tradition.</p>

      <p class="mb-4">The journey to the perfect croissant begins with the dough — a pâte levée feuilletée — a yeasted, laminated dough that’s folded multiple times to create those famous layers. The choice of butter is crucial. In France, the best pâtissiers swear by high-fat European-style butter, with its low water content and rich flavor. The dough must be cold yet pliable, the butter evenly distributed, and every fold precise. Rushing this process means disaster — melting butter, uneven layers, and a dense crumb.</p>

      <p class="mb-4">Temperature plays a sneaky role too. The dough should be rested between each turn, allowing the gluten to relax and the butter to chill again. Bakers often start before dawn, timing each phase with the rhythm of the kitchen. The final proof — letting the shaped croissants rise before baking — is where patience meets intuition. Too short, and the layers won’t puff. Too long, and they collapse under their own weight.</p>

      <p class="mb-4">When done right, baking is pure alchemy. The oven transforms the laminated dough into a crisp, airy marvel. Steam helps separate the layers, while the butter inside sizzles and browns. The result? A croissant that shatters delicately when bitten into, yet melts on the tongue.</p>

      <p class="mb-4">But perhaps the greatest secret of all is this: the croissant is not meant to be perfect in appearance, but in experience. Whether enjoyed plain with a café crème, filled with almond paste, or slathered with jam, the perfect croissant is one that delights — flake by golden flake.</p>
    `
  },
  {
    id: 2,
    title: "Wine Pairing 101",
    image: "https://images.unsplash.com/photo-1519092796169-bb9cc75a4b68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Learn how to pair wine with different dishes like a pro.",
    content: `
      <p class="mb-4">Pairing wine with food is more than just matching red with meat and white with fish — it’s an art form rooted in balance, contrast, and harmony. For centuries, sommeliers and chefs have worked hand in hand to uncover the subtle relationships between flavor, aroma, and texture that elevate a meal from ordinary to unforgettable.</p>

      <p class="mb-4">At the heart of a perfect pairing lies the principle of balance. A bold dish calls for an equally bold wine. Think of a rich beef bourguignon alongside a full-bodied Cabernet Sauvignon — the depth of the wine complements the savory complexity of the dish. On the other hand, a delicate poached sole might be overwhelmed by such intensity and instead sings when served with a crisp, citrusy Sauvignon Blanc.</p>

      <p class="mb-4">But contrast can be just as powerful. Creamy cheeses like Brie or Camembert often pair beautifully with sparkling wines. The bubbles cut through the richness, refreshing the palate with every sip. Spicy foods, such as Thai curries or Szechuan noodles, surprisingly benefit from off-dry Rieslings or Gewürztraminers — their touch of sweetness tempers the heat while highlighting aromatic spices.</p>

      <p class="mb-4">One of the most underrated aspects of pairing is texture. A fatty cut of meat finds a natural partner in a tannic red, where the wine’s astringency cleanses the palate. Meanwhile, silky sauces often call for wines with equal softness — perhaps a mellow Pinot Noir or a rounded Chardonnay aged in oak.</p>

      <p class="mb-4">Then there’s the magic of regional pairings — foods and wines that grow together often go together. A rustic Tuscan pasta, dressed in olive oil and garlic, pairs effortlessly with a Chianti from the same sun-soaked hills. A Provençal seafood stew? Bring on the chilled rosé.</p>

      <p class="mb-4">Of course, the most important rule is this: drink what you enjoy. The best pairings aren’t about rigid rules but about enhancing the moment. A glass of wine should elevate your meal — not overshadow it.</p>

      <p class="mb-4">So the next time you sit down to eat, take a moment to think about what’s on your plate — and what’s in your glass. With a bit of curiosity and a willingness to explore, you’ll be pairing wine like a true pro in no time.</p>
    `
  },
  {
    id: 3,
    title: "The Magic of Truffles",
    image: "https://images.unsplash.com/photo-1601170022270-39cac948bfdc?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Why truffles are considered the diamonds of the kitchen.",
    content: `
      <p class="mb-4">There’s a certain mystique surrounding truffles — a sense of rarity, indulgence, and almost mythical allure. Often referred to as “the diamonds of the kitchen,” truffles have earned their nickname not just because of their price, but because of their deep, earthy aroma and ability to transform even the simplest of dishes into something extraordinary.</p>

      <p class="mb-4">Truffles grow underground, in a delicate symbiosis with the roots of trees like oaks and hazelnuts. Their elusive nature makes them incredibly hard to find. Truffle hunters, often accompanied by specially trained dogs, roam forests in the early hours of the morning, searching for this buried treasure. The window of opportunity is brief — truffles are highly seasonal, and once unearthed, they have a very short shelf life.</p>

      <p class="mb-4">What makes them so special in the culinary world? It’s all about their flavor and aroma. A good truffle has an unmistakable scent — pungent, earthy, musky, and even slightly garlicky. It's the kind of ingredient that doesn't just sit quietly on the plate; it announces itself the moment it hits the air. Even a few delicate shavings over pasta, risotto, or eggs can perfume an entire room.</p>

      <p class="mb-4">There are many types of truffles, but the most prized are the white truffle from Alba in Italy and the black Périgord truffle from France. White truffles are never cooked — they’re too delicate. Instead, they’re shaved raw over warm dishes so their aroma can blossom without being destroyed by heat. Black truffles, on the other hand, can be gently heated and even infused into sauces, oils, and butters.</p>

      <p class="mb-4">Beyond flavor, truffles symbolize luxury and exclusivity. Their price can reach thousands of euros per kilogram, and they're often sold at auction to the highest bidder. But what you're paying for is more than just taste — it’s the romance of the hunt, the fleeting season, the connection to the land, and centuries of tradition.</p>

      <p class="mb-4">Chefs and gourmands alike revere truffles not just for how they taste, but for how they make you feel. A truffle dish is never just about nourishment — it’s about experience. It's a whisper of the forest floor, a celebration of craftsmanship, and a reminder that sometimes, the most extraordinary things grow hidden in the dark, waiting to be discovered.</p>
    `
  },
  {
    id: 4,
    title: "The Science of Fermentation",
    image: "https://images.unsplash.com/photo-1592878912415-353c89227af4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "How fermentation transforms simple ingredients into gourmet delicacies.",
    content: `
      <p class="mb-4">At first glance, fermentation might seem like little more than food left out a bit too long — a curious mix of time and microbes. But in the hands of skilled chefs, artisans, and centuries-old traditions, fermentation becomes one of the most powerful culinary tools for unlocking flavor, texture, and depth. It’s the invisible magic behind some of the world’s most beloved gourmet delicacies.</p>

      <p class="mb-4">Fermentation is a natural metabolic process in which microorganisms like bacteria, yeasts, or molds break down sugars and starches. While that may sound technical, the results are anything but sterile. Think of velvety Brie, rich soy sauce, complex wines, or a crusty sourdough loaf — all owe their existence to the quiet alchemy of fermentation.</p>

      <p class="mb-4">One of fermentation’s greatest gifts is flavor enhancement. Through slow transformation, it can turn the bland into bold. Cabbage becomes tangy, effervescent kimchi. Milk evolves into creamy, pungent cheese. Soybeans — hard and bitter on their own — are reborn as miso or soy sauce, packed with umami.</p>

      <p class="mb-4">What’s even more fascinating is how fermentation preserves and elevates. Long before refrigeration, people discovered fermentation as a way to extend the life of food. But it didn’t just make ingredients last longer — it made them better. Aged salamis, pickled vegetables, and barrel-aged vinegars all carry depth that only time and microbes can develop.</p>

      <p class="mb-4">Fermentation also plays a major role in texture. Take sourdough, for example — the bubbles created by wild yeast give bread a chewy crust and tender crumb. Or think of a perfectly ripened camembert with its soft, almost melting center. These aren’t just accidents of age — they’re carefully nurtured by fermentation.</p>

      <p class="mb-4">Beyond the plate, fermentation carries cultural richness. Every country has its own signature ferments — from French wines and cheeses, to Japanese miso and sake, to Ethiopian injera and Korean gochujang. Each one tells a story of geography, climate, and community tradition.</p>

      <p class="mb-4">In modern gastronomy, fermentation is enjoying a renaissance. Chefs now cultivate their own starters, kombucha cultures, and fermentation labs to explore new frontiers in flavor. It’s not just about following old recipes — it’s about experimentation and discovery.</p>

      <p class="mb-4">So the next time you bite into a fermented delicacy, remember: you’re tasting the work of time, nature, and invisible allies. Fermentation isn’t just a technique — it’s transformation. And through it, the humble becomes the extraordinary.</p>
    `
  },
  {
    id: 5,
    title: "Sustainable Seafood Choices",
    image: "https://images.unsplash.com/photo-1707995548052-cfca47bfb6db?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "How to enjoy seafood responsibly while preserving ocean ecosystems.",
    content: `
      <p class="mb-4">Seafood has long been a cornerstone of global cuisine — from delicate oysters served on the half shell in France, to rich, savory bowls of ramen with slices of tender fish in Japan. But behind every plate of seafood lies a much larger story: the health of our oceans. As appetites for fish and shellfish grow worldwide, so does the pressure on marine ecosystems. The good news? We can still enjoy seafood while making choices that help protect the ocean’s delicate balance.</p>

      <p class="mb-4">Sustainable seafood means fish or shellfish caught or farmed in ways that consider the long-term vitality of the species and the well-being of the oceans. Overfishing, destructive harvesting methods, and unregulated aquaculture can lead to collapsed populations, damaged habitats, and bycatch — the accidental capture of non-target species like turtles, dolphins, and seabirds.</p>

      <p class="mb-4">So, what can we do as conscious consumers?</p>

      <h3 class="text-2xl font-bold mb-4">1. Know what you’re eating.</h3>
      <p class="mb-4">Not all seafood is created equal. Some species — like bluefin tuna or Chilean sea bass — are severely overfished, while others — like mussels, oysters, or sardines — are abundant and farmed in ways that actually help the environment. Filter feeders, for instance, clean the water as they grow, making them some of the most eco-friendly options on any menu.</p>

      <h3 class="text-2xl font-bold mb-4">2. Look for certifications.</h3>
      <p class="mb-4">When shopping or dining out, keep an eye out for labels like the Marine Stewardship Council (MSC), Aquaculture Stewardship Council (ASC), or Best Aquaculture Practices (BAP). These programs certify that seafood is sourced responsibly, with attention to sustainability, traceability, and ethical labor practices.</p>

      <h3 class="text-2xl font-bold mb-4">3. Diversify your plate.</h3>
      <p class="mb-4">Rather than sticking to the same overfished favorites, explore lesser-known options. Try Arctic char instead of salmon, or Pacific pole-and-line-caught tuna instead of the more common — and often overfished — varieties. Broadening your seafood repertoire helps reduce pressure on popular species and supports underutilized fisheries.</p>

      <h3 class="text-2xl font-bold mb-4">4. Support local and seasonal choices.</h3>
      <p class="mb-4">Buying local means your seafood hasn’t traveled halfway across the world, reducing your carbon footprint. It also supports small-scale fishers who often use more traditional, environmentally friendly methods. Ask your fishmonger or server where the seafood comes from and how it was caught — transparency is a sign of responsibility.</p>

      <h3 class="text-2xl font-bold mb-4">5. Educate yourself and stay informed.</h3>
      <p class="mb-4">Organizations like Seafood Watch offer up-to-date guides and mobile apps that help you make informed decisions based on your location and what’s in season. Knowledge is power — and it can be delicious, too.</p>

      <p class="mb-4">By making thoughtful choices, we can ensure that future generations also get to experience the joy of fresh, flavorful seafood. Eating sustainably doesn’t mean sacrificing taste — it means savoring it with greater purpose. Because when we protect the ocean, we protect the planet — and everything on our plate.</p>
    `
  },
  {
    id: 6,
    title: "Exploring Artisan Cheese",
    image: "https://images.unsplash.com/photo-1695606452817-e28a67339e57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A deep dive into the world of handcrafted cheeses and their rich flavors.",
    content: `
      <p class="mb-4">Cheese is more than just food — it's a story, a craft, and, in many ways, a celebration of tradition. While supermarket shelves are stacked with familiar blocks of cheddar or mozzarella, there's an entire world of artisan cheese that offers a far richer and more nuanced tasting experience. Made by skilled cheesemakers using time-honored methods, handcrafted cheeses are the heart and soul of dairy alchemy.</p>

      So, what makes artisan cheese different?</p>

      <p class="mb-4">At its core, artisan cheese is made in small batches, often using milk from local farms or even a single herd of animals. The process is deeply personal and hands-on: curds are cut and stirred manually, aged in controlled environments, and turned or brushed regularly to develop the desired rind and texture. Unlike mass-produced varieties, artisan cheeses are alive — maturing and evolving over time, shaped by their environment, ingredients, and the cheesemaker’s touch.</p>

      <h3 class="text-2xl font-bold mb-4">Flavor is where artisan cheese truly shines.</h3>
      <p class="mb-4">Each cheese tells a unique story of its region — from the grassy, nutty notes of an Alpine tomme aged in mountain caves, to the creamy, mushroomy profile of a bloomy-rind brie ripened in the French countryside. Goat cheeses often carry a tangy brightness, while sheep’s milk varieties lean toward buttery and rich. And then there are the blues — bold, veined, and bursting with character.</p>

      <h3 class="text-2xl font-bold mb-4">Texture and aroma are just as diverse.</h3>
      <p class="mb-4">A fresh chèvre might crumble delicately on your tongue, while an aged gouda can crunch slightly from tyrosine crystals — tiny bursts of umami. Some cheeses melt into luxurious puddles, perfect for pairing with crusty bread or fruit, while others are firm and perfect for grating.</p>

      <p class="mb-4">Pairing artisan cheese with wine, honey, nuts, or charcuterie turns a tasting into an experience. A strong blue like Roquefort sings when balanced with a drizzle of sweet fig jam. Earthy hard cheeses like Comté or Manchego find their match in full-bodied reds or dry sherries. The contrast in flavor, texture, and aroma transforms each bite into something memorable.</p>

      <p class="mb-4">But artisan cheese isn’t just about indulgence — it’s about connection.
      You’re tasting the work of farmers who care deeply for their animals, of cheesemakers who rise early and stay late to monitor aging rooms, and of local traditions passed down through generations. It’s slow food in a fast world — and it invites us to pause, savor, and appreciate the complexity of something seemingly simple.</p>

      <p class="mb-4">Whether you're nibbling on a wedge of cave-aged cheddar from England or a floral goat cheese from the Loire Valley, handcrafted cheese offers a delicious reminder that the best flavors often come from patience, passion, and place.</p>
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
