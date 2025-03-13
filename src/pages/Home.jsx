import React from 'react';
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
      <Hero />
      <About 
        showIntro={true}
        imageSrc="https://images.unsplash.com/photo-1512061942530-e6a4e9a5cf27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMHN0YWZmfGVufDB8fDB8fHwy"
        title="About Us"
        description="Welcome to Maison de l'Orchidée, where culinary excellence meets warm hospitality..."
      />
      <Menu />
      <Img />
      <About 
        showIntro={false} 
        imageSrc="https://images.unsplash.com/photo-1571152786432-161dbc1a5a86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Vine List"
        description="Explore our carefully curated selection of fine wines from around the world..."
        link="/menus" // Correctly passing the link prop
      />
      <Gallery />
      <FindUs />
      <Gift />
      <Newsletter />
    </>
  );
};

export default Home;
