import React from 'react'
import { Link } from 'react-router-dom'
import waiting from "./assets/waiting.png"

const About = () => {
  return (
    <section id="about">
    <div className="container">
      <div className="row">
        <div className="about__text--wrapper">
          <div className='waiting__img--wrapper'>
          <img className='waiting__img' src={waiting} alt="" />
          </div>
          <h2 className="about__h2">FIND THE <span className="aqua--text">MOVIE</span> OF YOUR CHOICE.</h2>
          <Link to="/movies" className="about__a cursor">Browse Movies</Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About