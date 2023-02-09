import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const MoviesInfo = ({ inputValue }) => {
  const { imdbID } = useParams();
  const [movieArr, setMovieArr] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchData() {
    setLoading(true);
    const response = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=8d3516ff&s=${inputValue}`
    );
    setMovieArr(response.data.Search);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Link to="/movies">
        <h1 className="aqua--text back__btn">BACK</h1>
      </Link>
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
          movieArr
            .filter((movie) => movie.imdbID === imdbID)
            .map((movie, index) => (
              <div className="movie" key={index}>
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
            ))
        )}
      </div>
    </>
  );
};

export default MoviesInfo;
