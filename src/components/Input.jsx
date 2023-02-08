import "./more.css";
import { VscSearch } from "react-icons/vsc";
import { AiOutlineSync } from "react-icons/ai";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Search = () => {
  const searchRef = useRef("");

  const [movie, setMovie] = useState([]);

  async function fetchData() {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=8d3516ff&s=Fast`
    );
    console.log(response.data.Search)
    let arr = [];
    for (let i = 0; i < response.data.Search.length; ++i) {
      if (response.data.Search[i].Poster !== "N/A") {
        arr.push(response.data.Search[i]);
      }
    }
    // console.log(arr)
    setMovie(arr);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function getMovie(e) {
    const inputValue = searchRef.current.value;
    e.preventDefault();
    const moviesWrapper = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=8d3516ff&s=${inputValue}`
    );
    const movie = await moviesWrapper.json();

    let arr = [];
    for (let i = 0; i < movie.Search.length; ++i) {
      if (movie.Search[i].Poster !== "N/A") {
        arr.push(movie.Search[i]);
      }
    }

    console.log(arr);
    setMovie(arr);
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <section id="movies">
      <div className="container">
        <div className="row">
          <form action="" onSubmit={(e) => getMovie(e)}>
            <input
              className="movies__input"
              type="text"
              placeholder="Type You Favorite Movie..."
              ref={searchRef}
            />
            <div className="magnifying__glass--wrapper">
              <VscSearch className="cursor aqua--text " onClick={getMovie} />
              <AiOutlineSync
                className="refresh__page cursor"
                onClick={refreshPage}
              />
            </div>
          </form>
          <div className="movies__wrapper">
            <div className="search__loading">
              <h1 className="aqua--text search">Search Results:</h1>
            </div>
            <div className="movies">
              {movie.map((movie) => (
                <div className="movie">
                  <figure>
                    <Link className="links" to="/movie">
                      <img src={movie.Poster} alt="" />
                    </Link>
                  </figure>
                  <Link className="links" to="/movie">
                    {movie.Title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;

// {movie.map((movie) => (
//   <div className="movie">
//     <figure>
//       <Link className="links" to="/movie">
//         <img src={movie.Poster} alt="" />
//       </Link>
//     </figure>
//     <Link className="links" to="/movie">
//       {movie.Title}
//     </Link>
//   </div>
// ))}
