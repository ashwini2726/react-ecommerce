import React from 'react';
import Navbar from './Components/Navbar';
import OfferSlider from './Components/OfferSlider';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import './App.css';

function App() {
  return (
    <div className="App"> {/* Uncommented this line */}
      <Navbar />
      <OfferSlider />
      <ProductList />
      <Footer />
      <AboutUs />
    </div>
  );
}

export default App;
