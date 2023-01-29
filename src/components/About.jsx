import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section id="about">
    <div className="container">
      <div className="row">
        <div className="about__text--wrapper">
          <h1 className="about__h1">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <h2 className="about__h2">FIND THE <span className="aqua--text">MOVIE</span> OF YOUR CHOICE.</h2>
          <Link to="/movies" className="about__a cursor">Browse Movies</Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About