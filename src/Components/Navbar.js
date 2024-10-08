import React from 'react';
import './Navbar.css'; // Optional, for specific Navbar styles

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <a href="#delivery" id="delivery-link">Delivery to Chennai</a>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
        </div>
        <div className="nav-right">
          <a href="signin.html" className="sign-in">Hello Sign In</a>
          <a href="#return-order">Return Order</a>
          <a href="#cart" className="cart">🛒cart</a>
        </div>
      </nav>
      <nav className="second-navbar">
        <a href="#all" className="active">All</a>
        <a href="#erasers">Erasers</a>
        <a href="#pastels">Pastels</a>
        <a href="#paper">Paper</a>
        <a href="#sketches">Sketches</a>
        <a href="#pen-pencil">Pen & Pencil</a>
        <a href="#paint">Paint</a>
      </nav>
    </header>
  );
}

export default Navbar;
