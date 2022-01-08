import React from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo"></div>
        <ul className="navbar-links-container">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/media'>Media</Link></li>
          <li><Link to='/gallery'>Gallery</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </div>

  )
}

export default Navbar;
