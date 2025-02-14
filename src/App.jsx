import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import FindUs from './components/FindUs'
import Gallery from './components/Gallery'
import Gift from './components/Gift'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Img from './components/Img'



function App() {
  

  return (
    <>
       <div className='w-full h-full absolute'>
      <Navbar />
      <Hero />
      <About 
  showIntro={true}
  imageSrc="https://images.unsplash.com/photo-1512061942530-e6a4e9a5cf27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMHN0YWZmfGVufDB8fDB8fHwy"
  title="About Us"
  description="Welcome to Maison de l'Orchidée, where culinary excellence meets warm hospitality. Our chefs create dishes with passion, using the finest ingredients to bring you a dining experience like no other. Whether it's a romantic dinner or a family gathering, we promise an unforgettable journey of flavors and elegance."
/>

      <Menu />
      <Img/>
      <About 
  showIntro={false} 
  imageSrc="https://images.unsplash.com/photo-1571152786432-161dbc1a5a86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  title="Vine List"
  description="Explore our carefully curated selection of fine wines from around the world. At Maison de l'Orchidée, we believe that every meal deserves the perfect wine pairing. From rich reds to crisp whites, our collection offers something exquisite for every palate."
/>
<Gallery/>
<FindUs/>
<Gift/>
<Newsletter/>
<Footer/>
    </div>
    </>
  )
}

export default App
