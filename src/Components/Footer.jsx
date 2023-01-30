import React from 'react'
import {
    TiSocialInstagram,
    TiSocialLinkedin,
    TiSocialFacebook,
    TiMail,
} from "react-icons/ti";
import { FaGithub} from 'react-icons/fa';
import "./Footer.css"
import {HashLink as Link} from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_box">
            <div className="footer_box_social">
                <h3>Contact Me</h3>
                <div className="footer_social">
                    <a href="https://github.com/Rahil2892"><FaGithub />Rahil2892</a>
                    <a href="https://www.linkedin.com/in/rahil-gavande-051602222/"><TiSocialLinkedin/>@rahil-gavande</a>
                    <a href="https://www.facebook.com/rahil.gavande.5"><TiSocialFacebook/>@rahil.gavande</a>
                    <a href="https://www.instagram.com/rahil_2892/?hl=en"><TiSocialInstagram/>@rahil_2892</a>
                    {/* <a href="rahilhgavande@gmail.com"><TiMail />rahilhgavande@gmail.com</a> */}
                </div>
            </div>
            <div className="footer_box_map">
                <h3>Site Map</h3>
                <div className="footer_sitemap">
				    <Link to="tools" smooth>Tools</Link>
				    <Link to="works" smooth>Works</Link>
				    <Link to="/#aboutMe" smooth>About Me</Link>
				    <Link to="goals" smooth>Goals</Link>
                </div>
            </div>
            <div className="test"></div>
            <div className="footer_box_tagline">
             <b>The greatest discovery is to find yourself</b>
            </div>
        </div>
        <div className="footer_box_sorce">
            <b>*Designed by SoulKing</b>
            <div className="footer_sorce">
             <a href="https://github.com/Rahil2892/MyPortfolio">Website Sorce Code</a>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer
