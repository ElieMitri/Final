import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MoviesInfo = () => {
  const [movie, setMovie] = useState([]);

  async function fetchData() {
    const response = await axios.get(
      "https://www.omdbapi.com/?i=tt3896198&apikey=8d3516ff&s=spiderman"
    );
    setMovie(response.data.Search);
  }
  // console.log(movie);

  useEffect(() => {
    fetchData();
  }, []);

  
    return (movie?.map((movie) => [
      <div className="movie">
        <figure>
          <Link to="/movie">
            <img src={movie.Poster} alt="" />
          </Link>
        </figure>
        <Link to="/movie">{movie.Title}</Link>
      </div>
    ]))
  }


  
  export default MoviesInfo;