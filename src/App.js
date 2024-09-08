import React from 'react';
import Navbar from './Components/Navbar';
import OfferSlider from './Components/OfferSlider';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import Login from './Components/login';
import ShoppingCart from './Components/ShoppingCart';
import SignUp from './Components/signup';
import UserProfile from './Components/UserProfile';
import './App.css';

function App() {
  return (
    <div className="App"> {/* Uncommented this line */}
      <Navbar />
      <OfferSlider />
      <ProductList />
      <Footer />
      <AboutUs />
      <Login/>
      <ShoppingCart/>
      <SignUp/>
      <UserProfile/>

    </div>
  );
}

export default App;
