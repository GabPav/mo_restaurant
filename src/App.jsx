import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // Importing necessary components for routing
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
import MainGallery from "./pages/MainGallery";
import BehindThePlate from "./pages/BehindThePlate"; 
import ArticlePage from "./pages/ArticlePage"; 

function App() {
  return (
    <div className="w-full h-full absolute">
      <Router>
        {/* Scroll to top on page change */}
        <ScrollToTop />
        {/* AppContent is where the main routes and layout are rendered */}
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const location = useLocation(); // Get the current location (route) to determine what to render
  const hideBookTable = location.pathname === "/reservations"; // Conditionally hide BookTable on the reservations page

  return (
    <>
      {/* Navbar is displayed on every page */}
      <Navbar />
      
      <Routes>
        {/* Define all the routes and components */}
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/giftcard" element={<GiftCard />} />
        <Route path="/maingallery" element={<MainGallery />} />
        <Route path="/behindtheplate" element={<BehindThePlate />} />
        <Route path="/article/:id" element={<ArticlePage />} /> {/* Dynamic route for individual articles */}
      </Routes>
      
      {/* Conditionally render BookTable component unless we are on the reservations page */}
      {!hideBookTable && <BookTable />}
      
      {/* Footer is displayed on every page */}
      <Footer />
    </>
  );
}

export default App;
