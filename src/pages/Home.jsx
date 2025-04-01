import React from 'react';
// Importing all the necessary components for the homepage
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import FindUs from '../components/FindUs';
import Gallery from '../components/Gallery';
import Gift from '../components/Gift';
import Newsletter from '../components/Newsletter';
import Img from '../components/Img';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section: Displays information about the restaurant */}
      <About 
        showIntro={true} // Show intro text on the About section
        imageSrc="https://images.unsplash.com/photo-1512061942530-e6a4e9a5cf27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMHN0YWZmfGVufDB8fDB8fHwy" 
        title="About Us" // Title for this section
        description="Welcome to Maison de l'Orchidée, where culinary excellence meets warm hospitality..." // Short description of the restaurant
      />
      <Menu />
      <Img />
      <About 
        showIntro={false} // No intro text in this section
        imageSrc="https://images.unsplash.com/photo-1571152786432-161dbc1a5a86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        title="Vine List" // Title for the vine list section
        description="Explore our carefully curated selection of fine wines from around the world..." // Short description about the wine selection
        link="/menus" // Passing the link prop to navigate to the full menu
      />

  
      <Gallery />
      <FindUs />
      <Gift />
      <Newsletter />
    </>
  );
};

export default Home;
