import React from "react";
import { FaSearch } from 'react-icons/fa';
import ListGenres from "../ListGenres";

const SearchBox = ({ search, setCurrentPage, setSearch, genres, genreId, setGenreId }) => {
  return (
    <div className="container w-100 bg-dark">
      <div className="d-flex flex-wrap">
        <input type="text" className="form-control my-3 w-75 " onChange={(e) => setSearch(e.target.value)} placeholder="Search Movie" />
        <button className="btn btn-light m-4 py-1 border rounded-circle " style={{ width: '50px', height: '50px' }} onClick={() => {
          setCurrentPage(search);
        }}><FaSearch /></button>
      </div>
      <ListGenres genres={genres} genreId={genreId} setGenreId={setGenreId} />
    </div>
  );
}

export default SearchBox;
