import React from "react";
import { FaPlay } from 'react-icons/fa';
import './style.css';

function MoviePost({ movie }) {
  return (
    <div className="container" >
      <div className="movie-container m-5 p-5 ">
        <div className="row d-flex align-items-stretch">
          <div className="col-md-5 col-lg-5 " style={{ marginTop: '4%' }}>
            <img src={movie.poster} className="img-fluid movie-img">
            </img>
          </div>
          <div className="col-md-7 col-lg-7 d-flex flex-column justify-content-start">
            <h1 className="mb-3">{movie.title}</h1>
            <ul className="movie-tags flex-wrap ">
              <li className="selected bg-warning m-2">{movie.imdb_rating}</li>
              <li className="m-2">{movie.year}</li>
              <li className="m-2">{movie.runtime}</li>
              <li className="m-2">{movie.genres}</li>
            </ul>
            <div style={{ clear: 'both' }}> </div>
            <p className="movie-info mt-3">
              {movie.plot}
            </p>
            <div className="mt-auto bd-highlight mb-2">
              <a href="#" className="btn-watch bg-warning"><FaPlay />Watch Trailer</a>
            </div>
          </div>
        </div>
      </div>
    </div>



  );

}

export default MoviePost;