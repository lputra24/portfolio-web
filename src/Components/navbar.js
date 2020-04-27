import React from 'react';
import './navbar.scss';
import Navburger from './navburger.js'
import logo from '../Resources/Logo(temp).png'

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
          <a href="#"><img src={logo} alt="Leonardus Elbert"/></a>
      </div>
      <div className="nav">
        <a href="#">Home</a>
        <a href="#">Skills</a>
        <a href="#">Project</a>
        <a href="#">Contact</a>
      </div>
      <Navburger></Navburger>
    </div>
  );
}

export default Navbar;