import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';


const ListGenres = ({ genres,genreId, setGenreId }) => {

    return (
        // <>

<div id="viewport">
  
  <div id="sidebar">
    <header>
      <a href="#">genres</a>
    </header>
    <ul class="nav">
    {genres.map(genre => (
        <li key={genre.id}>
          
          <button onClick={() => {
            setGenreId(genre.id);
            console.log(genre.id);
          }
          } className="list-item mt-2">{genre.name}</button>
        </li>
    ))}

    </ul>
  </div>
 
</div>
        
    );

}


export default ListGenres;