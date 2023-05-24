import React from "react";
import {FaPlay} from 'react-icons/fa';
import './style.css';
function MoviePost({movie}) {
    return (
        <div className="container">
        <div className="movie-container m-5 p-5">
        <div className="row d-flex align-items-stretch">
          <div className="col-md-5 col-lg-5">
            <img src={movie.poster} className="img-fluid movie-img">
                </img>
          </div>
          <div className="col-md-7 col-lg-7 d-flex flex-column justify-content-start">
            <h1 className="mb-3">{movie.title}</h1>
            <ul className="movie-tags">
              <li className="selected">{movie.imdb_rating}</li>
              <li>{movie.year}</li>
              <li>3h 1min</li>
              <li>Action</li>
            </ul>
            <div style={{clear:'both'}}> </div>
            <p className="movie-info mt-3">
              After the devastating events of Avengers: Sonsuzluk Savaşı (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.
            </p>
            <div className="mt-auto bd-highlight mb-2">
            <a href="#" className="btn-watch"><FaPlay/>Watch Trailer</a>
            </div>
          </div>
        </div>
      </div>
      </div>
     
        

    );

    }

export default MoviePost;