import React, {useState} from 'react';
import './Navbar.css';
import { BiMenu } from 'react-icons/bi';
import { TiTimes } from 'react-icons/ti';

const Navbar = () => {
      return (
    <div>
        <div className="navbar">
            <div className="nav-logo">
                <h2>Prudento</h2>
            </div>
            <div className="link">
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#about"><li>About</li></a>
                    <a href="#services"><li>Services</li></a>
                    <a href="#projects"><li>Projects</li></a>
                </ul>
            </div>
            <div className="nav_btn">
                <a href="#contact"><button>Contact Us</button></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar