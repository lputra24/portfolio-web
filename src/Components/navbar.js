import React from 'react';
import './navbar.scss';
import Navburger from './navburger.js'
import logo from '../Resources/Logo(temp).png'

function Navbar() {
  return (
    <div>
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
        <div className="navbar-mobile">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Contact</a> </li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;