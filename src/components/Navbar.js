

import React from 'react';
import './Navbar.css'; // Import the CSS for styling
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Search Bar */}
      <div className="navbar-search">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </div>

      {/* Buttons Section */}
      <div className="navbar-icons">
        <a href="#" className="cart">
          Cart <span className="cart-count">0</span>
        </a>
        <a href="#" className="login">Log In</a>
      </div>
    </nav>
  );
}

export default Navbar;