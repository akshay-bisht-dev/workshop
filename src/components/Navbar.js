import React, { useState } from 'react'
import './CSS/Navbar.css'
import './JS/Navbar.js'
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import { ImMenu } from 'react-icons/im';


const Navbar = () => {

  const currDate = new Date().toLocaleDateString();
  let time = new Date().toLocaleDateString();

  
  const [currTime, setCurrTime] = useState(time);

  const updateTime = () => { time = new Date().toLocaleTimeString();
    setCurrTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <header>
    <nav className='nav-1'>
    <div className="logo"><span>X</span>tension</div>
    <div className="social">
    <div className="social-icon"><FaFacebook/></div>
    <div className="social-icon"><AiFillInstagram/></div>
    <div className="social-icon"><AiFillTwitterCircle/></div>
    <div className="social-icon"><AiFillYoutube/></div>
    <div className="social-icon"><AiFillLinkedin/></div>
    <div className="social-icon"><BsPinterest/></div>
    </div>
    </nav>
    <nav className='nav-2'>
    <ul className="ul-list ul-list-res">
      <li className="li-list"><a href="/">Home</a></li>
      <li className="li-list"><a href="/">About</a></li>
      <li className="li-list"><a href="/">Products</a></li>
      <li className="li-list"><a href="/">Services</a></li>
      <li className="li-list"><a href="https://akshaynmak.github.io/Bootstrap/" target='_blank'>Blog</a></li>
      <li className="li-list"><a href="/">Contact</a></li>
    </ul>
      <div className="toggle-menu toggle-menu-none"><ImMenu/></div>

    </nav>
    <nav className="nav-3">
      {/* <div className="header-headings">Random Headings */}
      
      <marquee className="header-headings" width="80%" direction="left">GoMechanic grants stock options worth INR 30CR to partners. IIT-ISM workshop to uplift tribal farmers in Jamtara dist. Rowdy arrested for attempting to murder motorcycle mechanic in Coimbatore. </marquee>
      
      {/* </div> */}
      <div className="dateAndTime">{currDate} & {currTime} </div>
    </nav>
    </header>
  )
}

export default Navbar