// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">Astral Enterprises</div>

      <div className="nav-buttons-container">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/bio" className="nav-button">Bio</Link>
        <Link to="/contact" className="nav-button">Contact</Link>
      </div>

      <div className="call-to-action-container">
        <button
          className="call-to-action-button"
          onClick={() => console.log('Buy me a drink clicked!')}
        >
          Buy Me a Drink
        </button>
      </div>
    </div>
  );
};

export default Navbar;
