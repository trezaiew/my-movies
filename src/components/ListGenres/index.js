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

    <div className='col-sm-12 col-m-12 col-lg-6 d-flex flex-row align-item-center' id="viewport ">

      <label for='sidebar' className='text-center w-25 p-3'>genres</label>
      <div className='w-75 m-2' id="sidebar">
        <Select className='select' options={options} onChange={e => {
          setGenreId(e.value)
        }} />

      </div>
    </div>
  );

}


export default ListGenres;