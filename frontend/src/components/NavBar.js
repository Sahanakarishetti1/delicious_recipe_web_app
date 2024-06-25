import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav className="navBar">
    <ul className="navList">
      <li className="navItem"><Link to="/" className="navLink">Home</Link></li>
      <li className="navItem"><Link to="/login" className="navLink">Login</Link></li>
      <li className="navItem"><Link to="/signup" className="navLink">Signup</Link></li>
    </ul>
  </nav>
);

export default NavBar;
