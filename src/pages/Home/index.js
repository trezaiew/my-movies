import React from "react";
import { useState, useEffect } from 'react';
import Header from "../../components/Header";
import Posts from '../../components/post';
import Pagination from "react-js-pagination";
import Loading from '../../components/Loading';
import enHancedFetch from "../../services/http";
import { getItem, setItem } from "../../services/storage";

import './style.css';

const Home = () => {
  let numberpage = 1;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(numberpage);
  const [postsPerPage] = useState(10);
  const [movieId, setMovieId] = useState(1);
  const [search, setSearch] = useState('');
  const [totalPosts, setTotalPosts] = useState(0);
  const [error, setError] = useState(false);

  const BASE_API_URL = "https://moviesapi.ir/api/v1/movies";

  useEffect(() => {

    const fetchPosts = async () => {
      setLoading(true);

      let data = getItem(currentPage);
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
        setItem(currentPage, res);
        setTotalPosts(res.metadata.total_count);

        setPosts(res.data);
        setError(false);

      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }

    };

    fetchPosts();
  }, [currentPage]);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(posts);

  return (
    <div>
      <Header > </Header>
      
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => {
        setCurrentPage(search);
        setMovieId(search);
      }}>Search</button>
      <Posts posts={posts} loading={loading}  movieId={movieId}/>
      <Pagination className="pagination"
        itemsCountPerPage={postsPerPage}
        totalItemsCount={totalPosts}
        pageRangeDisplayed={5}
        onChange={paginate}
        activePage={currentPage}
      
      />
    </div>
  );
}

export default Home;