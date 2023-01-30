import React from "react";
import About_img from "../Img/about_img.png";
import react_icon from "../Img/react_icon.png";
import python_icon from "../Img/python_icon.png";
import c_icon from "../Img/c_icon.png";
import "./AboutMe.css"
// import { Link } from "react-router-dom";
// import resume_pdf from "./rahil_resume.pdf";
// import './CircleAnimation.css'

const AboutMe = () =>{
    // const onButtonClick = () => {
    //     // using Java Script method to get PDF file
    //     fetch('rahil_resume.pdf').then(response => {
    //         response.blob().then(blob => {
    //             // Creating new object of PDF file
    //             const fileURL = window.URL.createObjectURL(blob);
    //             // Setting various property values
    //             let alink = document.createElement('a');
    //             alink.href = fileURL;
    //             alink.download = 'rahil_resume.pdf';
    //             alink.click();
    //         })
    //     })
    // }
    return (
        <>
         <div className="AboutMe" id="aboutMe">
            <div className="about_header"><h1>About Me</h1></div>
            <div className="about_main">
                <div className="about_main_pic"><img src={About_img} alt="about_img" /></div>
                <div className="about_main_title">
                    <div className="about_title_text"><h2>Rahil Gavande</h2><h4>Web Developer & Student</h4></div>
                    <div className="about_title_icons">
                     <span class="lang_icon" style={{ backgroundSize: "52px 52px"}}><img src={react_icon} alt="icons"></img></span>
                     <span class="lang_icon" style={{ backgroundSize: "52px 52px"}}><img src={python_icon} alt="icons"></img></span>
                     <span class="lang_icon" style={{ backgroundSize: "52px 52px"}}><img src={c_icon} alt="icons"></img></span>
                    </div>
                </div>
            </div>
            <div className="about_describe"><p>Hello there, myself Rahil Gavande , a skilled software developer, web developer & UI-UX designer with a passion for creating intuitive and functional applications. Currently pursuing my 4 year Bachelors program - B.E. and resides in mumbai.</p></div>
            <div className="about_skills">
                <div className="about_skills_header"><h3>Skills</h3></div>
                <div className="about_skills_desc">
                 <div className="about_skills_frontend">
                    <b>Frontend</b>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>ReactJs</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                 <div className="about_skills_backend">
                    <b>Backend</b>
                    <ul>
                        <li>NodeJS</li>
                        <li>MongoDB</li>
                        <li>Expressjs</li>
                        <li>RESTful API</li>
                    </ul>
                </div>
                 <div className="about_skills_knowledge">
                    <b>Knowledge</b>
                    <ul>
                        <li>Responsive Design</li>
                        <li>Data Visualization</li>
                        <li>Accsessability</li>
                        <li>JS Frameworks</li>
                        <li>CSS Frameworks</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="about_resume">
                {/* <button onClick={onButtonClick}>Resume</button> */}
                {/* <Link to="resume" download>Resume</Link> */}
            </div>
         </div>    
        </>
    );
}

export default AboutMe;