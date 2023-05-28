import React from "react";
import { useState, useEffect } from 'react';
import Header from "../../components/Header";
import Posts from '../../components/post';
import Pagination from "react-js-pagination";
import ListGenres from "../../components/ListGenres";
import SearchBox from "../../components/SearchBox";
import Loading from '../../components/Loading';
import enHancedFetch from "../../services/http";
import { getItem, setItem } from "../../services/storage";
import { useParams } from "react-router-dom";
import './style.css';

const Home = () => {

  const { numberPage } = useParams();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(numberPage);
  const [postsPerPage] = useState(10);
  const [movieId, setMovieId] = useState(1);
  const [search, setSearch] = useState('');
  const [totalPosts, setTotalPosts] = useState(0);
  const [error, setError] = useState(false);
  const [genres, setGenres] = useState([]);
  const [genreId, setGenreId] = useState(0);

  let BASE_API_URL = "https://moviesapi.ir/api/v1/movies";
  const BASE_API_URL_GENRES = "https://moviesapi.ir/api/v1/genres";

  if (genreId) {

    BASE_API_URL = "https://moviesapi.ir/api/v1/genres/" + genreId + "/movies";

  }

  useEffect(() => {

    
    const fetchPosts = async () => {
      setLoading(true);

      let data = getItem(`${genreId}-${currentPage}`);
      if (data) {
        setTotalPosts(data.metadata.total_count);
        setPosts(data.data);
        setLoading(false);
        return;
      }
      try {
        let endPoint = BASE_API_URL + '?page=' + currentPage;
        if (search) {
          endPoint = endPoint + '&q=' + search;
        }
        const res = await enHancedFetch(
          'GET',
          endPoint,
          ""
        );
        setItem(`${genreId}-${currentPage}`, res);
        setTotalPosts(res.metadata.total_count);

        setPosts(res.data);
        setError(false);

      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }

    };

    const fetchGenres = async () => {
      try {
        const res = await enHancedFetch(
          'GET',
          BASE_API_URL_GENRES,
          ""
        );

        setItem('genres', res);
        setGenres(res);
        setError(false);

      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }


    };

    fetchGenres();
    fetchPosts();
  }, [genreId, currentPage]);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (

    <div>
      <Header  > </Header>
      <SearchBox setCurrentPage={setCurrentPage} setSearch={setSearch} search={search} genres={genres} genreId={genreId} setGenreId={setGenreId} />
      <Posts posts={posts} loading={loading} movieId={movieId} />
      <Pagination className="pagination"
        itemsCountPerPage={postsPerPage}
        totalItemsCount={totalPosts}
        pageRangeDisplayed={5}
        onChange={paginate}
        activePage={Number(currentPage)}

      />

    </div>


  );
}

export default Home;