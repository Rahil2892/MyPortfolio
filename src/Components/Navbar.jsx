import React from 'react'
import { useRef } from "react";
import brook_logo from "../Img/brook_logo.png"
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';
import {HashLink as Link} from 'react-router-hash-link';

const Navbar = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  return (
    <div className='navbar' id='myNavbar'>
        <header>
			   <h3><Link to="/" className='links'><img src={brook_logo} alt=""  className='logo'/></Link></h3>
			   <button className="nav-btn" onClick={showNavbar}><FaBars /></button>
			   <nav ref={navRef}>
				    <Link to="tools" className='links' smooth>Tools</Link>
				    <Link to="works" className='links' smooth>Works</Link>
				    <Link to="/#aboutMe" className='links' smooth>About Me</Link>
				    <Link to="goals" className='links' smooth>Goals</Link>
				    <button className="nav-btn nav-close-btn" onClick={showNavbar}>	<FaTimes /></button>
		     </nav>
		    </header>
    </div>
  )
}

export default Navbar;





