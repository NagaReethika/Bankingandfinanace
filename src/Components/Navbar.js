import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'; // Optional: Import your Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo"></Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/servies">Services</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
