import React from 'react'
import "./Landing.css"
import landing_img from '../Img/landing_img.png'
import forward_arrow from "../Img/forward_arrow.png";

const Landing = () => {
  return (
    <div className='bg_landing'>
        <div class="">
         <div class="cube"></div>
         <div class="cube"></div>
         <div class="cube"></div>
         <div class="cube"></div>
        <div class="cube"></div>
        </div>
        <div className="landing_body">
        <div className="landing_contain">
            
            <div className='landing_left'>
                <div className="welcome_text">
                    <p>HI!, <b className="user">I’M RAHIL </b>, <br></br>WEB DEVELOPER, <br></br>STUDENT & GAMER</p>
                </div>
                <div className="landing_text2">
                    <p>Familiar With:</p>
                </div>
                <div className="landing_familiar_tools">
                    <span class="dot" style={{ backgroundSize: "52px 52px"}}><img src='https://img.icons8.com/ios-glyphs/512/github.png' alt='git_img' ></img></span>
                    <span class="dot" style={{ backgroundSize: "52px 52px"}}><img src='https://img.icons8.com/color/512/visual-studio-code-2019.png' alt='vs_img'></img></span>
                    <span class="dot" style={{ backgroundSize: "52px 52px"}}><img src='https://img.icons8.com/color/512/figma.png' alt='figma_img'></img></span>
                    <span class="dot" style={{ backgroundSize: "52px 52px"}}><img src='https://img.icons8.com/color/512/linkedin-2.png' alt='linkedin_img'></img></span>
                    <span class="dot" style={{ backgroundSize: "52px 52px"}}><img src='https://img.icons8.com/color/512/discord-logo.png' alt='discord_img'></img></span>
                    <span class="dot" style={{ backgroundSize: "52px 52px"}}><img src='https://img.icons8.com/fluency/512/instagram-new.png' alt='insta_img'></img></span>
                    <span class="dot" style={{ backgroundSize: "52px 52px"}}><img src='https://img.icons8.com/color/512/gmail-new.png' alt='gmail_img'></img></span>
                </div>
            </div>
            <div className="landing_bg">
                <div className="landing_img">
                    <img src={landing_img} alt="img"></img>
                </div>
            </div> 
        </div>
        <div className='forward_arrow'><img src={forward_arrow} alt="forward_arr" /> </div>
        </div>
        
    </div>
  )
}

export default Landing
