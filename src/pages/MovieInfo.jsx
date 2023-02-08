import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const MoviesInfo = () => {
  return (
    <>
      <Navbar />
      <Link to="/movies">
        <h1 className="aqua--text back__btn">BACK</h1>
      </Link>
      <div className="movies">
        <div className="movie">
          <figure>
            <div className="links">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"
                alt=""
              />
            </div>
          </figure>
          <div className="links">The Fast and the Furious</div>
          <h2 className="links">Type: movie</h2>
          <h2 className="links">Year: 2013</h2>
          <h2 className="links">imdbID: tt1905041</h2>
        </div>
      </div>
    </>
  );
};

export default MoviesInfo;
