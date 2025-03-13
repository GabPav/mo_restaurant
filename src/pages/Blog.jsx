import { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("⏳ Pokušaj dohvatanja postova...");
    axios.get("http://localhost/mywordpress/wp-json/wp/v2/posts")
      .then((response) => {
        console.log("📌 Stigli podaci iz API-ja:", response.data);
        setPosts(response.data);
      })
      .catch((error) => console.error("❌ Greška pri dohvatanju podataka:", error));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-8 text-center">Moj Blog</h1>
      
      {posts.map((post) => (
        <div key={post.id} className="mb-8 p-6 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold mb-4 text-amber-400 font-[Cardo]">{post.title.rendered}</h2>
          <div 
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
          />
        </div>
      ))}
    </div>
  );
};

export default Blog;
