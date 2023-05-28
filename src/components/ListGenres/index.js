import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import './style.css';


const ListGenres = ({ genres, genreId, setGenreId }) => {
  const options = [
    { value: '1', label: 'All' },
  ]
  genres.map(genre => (
    options.push({ value: genre.id, label: genre.name })
  ))
  return (

    <div id="viewport ">

      <label for='sidebar' className='d-flex '>genres</label>
      <div id="sidebar">
        <header>
          {/* <a href="#">genres</a> */}
        </header>
        <Select className='select' options={options} onChange={e => {
          setGenreId(e.value)
        }} />

      </div>
    </div>
  );

}


export default ListGenres;