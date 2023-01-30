import React from 'react'
import "./CircleAnimation.css"
import './Goals.css'

const Goals = () => {
  return (
    <>
    <div className='goals_main'>
      <div className="goals_title"><h1>Goals</h1></div>
      <div id='goals'>
        <div className="tech_goals">
          <b><h3>Tech Goals</h3></b>
          <ul>
            <li style={{textDecoration: "line-through"}}>Build a Mern App</li>
            <li>Build a Mobile App</li>
            <li>Build a Game in Unity</li>
            <li>Make an Application using AI/ML</li>
          </ul>
        </div>
        <div className="places_to_visit">
        <b><h3>Places to visit</h3></b>
          <ul>
            <li>Amsterdam</li>
            <li>Tokyo</li>
            <li>Manchester</li>
            <li style={{textDecoration: "line-through"}}>Laughtale</li>
          </ul>
        </div>
        <div className="gaming_goals">
        <b><h3>Gaming Goals</h3></b>
          <ul>
            <li>Reach Platinum in Valorant</li>
            <li>Buy Multiple Skins in Valorant</li>
            <li>Complete Minecraft Story</li>
            <li style={{textDecoration: "line-through"}}>Unlock All Agents in Valorant</li>
            <li>Start Streaming</li>
            <li>Upload Gaming videos on YouTube</li>
          </ul>
        </div>
        <div className="insane_goals">
        <b><h3>Insane/Fun Goals</h3></b>
          <ul>
            <li>Own Mustang</li>
            <li>Own an Island</li>
            <li>Go to space</li>
            <li>Survive a week in wild with the Boyz</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Goals
