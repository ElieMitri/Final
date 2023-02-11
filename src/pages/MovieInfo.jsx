import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const MoviesInfo = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=8d3516ff`
    );
    setMovie(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="movies">
        {loading ? (
          <div className="main-item">
            <div className="animated-poster-background"></div>
            <div className="animated-title-background"></div>
            <div className="animated-type-background"></div>
            <div className="animated-year-background"></div>
            <div className="animated-id-background"></div>
          </div>
        ) : (
          <div className="moive__wrapper">
            <Link to="/movies">
              <div className="back__btn--wrapper">
            <span className="aqua--text back__btn">BACK</span>
              </div>
            </Link>
            <div className="movie__more">
              <figure>
                <div className="links">
                  <img src={movie.Poster} alt="" />
                </div>
              </figure>
              <div className="links">Title: {movie.Title}</div>
              <h2 className="links">Type: {movie.Type}</h2>
              <h2 className="links">Year: {movie.Year}</h2>
              <h2 className="links">imdbID: {movie.imdbID}</h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MoviesInfo;
