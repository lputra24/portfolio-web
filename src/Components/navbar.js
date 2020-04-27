import React from 'react';
import './navbar.scss';
import logo from '../Resources/Logo(temp).png'

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
          <a href="#"><img src={logo} alt="Leonardus Elbert"/></a>
      </div>
      <div className="nav active">
        <a href="#">Home</a>
        <a href="#">Skills</a>
        <a href="#">Project</a>
        <a href="#">Contact</a>
      </div>
      <div className="nav-burger active">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}

export default Navbar;