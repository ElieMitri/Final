import React from "react";
import { Link } from "react-router-dom";
import "./more.css";
import Logo from "./assets/Capture-removebg-preview.png"

const Navbar = () => {

  return (
    <nav>
      <div className="navbar">
        <div className="nav__wrapper">
          <div className="name__wrapper">
            <div className="nav__name">
              <img className="personal__logo" src={Logo} alt="" />
            </div>
          </div>
          <ul className="nav__links">
            <li className="nav__link">
              <Link to="/" className="nav__a cursor" href="">
                Home
              </Link>
            </li>
            <li className="nav__link">
              <Link to="/movies" className="nav__a2 cursor">
                Find Your Movie
              </Link>
            </li>
            <button
              className="nav__btn no-cursor"
              onClick={() => alert(`Haven't got around to doing this :(`)}
            >
              Contact
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
