import React from 'react'
import Landing from './Landing'
import AboutMe from './AboutMe'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="background">
          <Landing />
          <AboutMe />
      </div>
    </div>
  )
}

export default Home
