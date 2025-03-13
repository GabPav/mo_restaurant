import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookTable from "./components/BookTable";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import GiftCard from "./pages/GiftCard";
import Recipes from "./pages/Recipes";
import MainGallery from "./pages/MainGallery";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="w-full h-full absolute">
      <Router>
      <ScrollToTop />
        <AppContent />
      </Router>
    </div>
  );
}

// Novo: Ovo nam omogućava da koristimo useLocation
function AppContent() {
  const location = useLocation();
  const hideBookTable = location.pathname === "/reservations";

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/giftcard" element={<GiftCard />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/maingallery" element={<MainGallery />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {!hideBookTable && <BookTable />}
      <Footer />
    </>
  );
}

export default App;
