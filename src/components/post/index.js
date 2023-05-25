import React from 'react';
import {FaStar} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

const Posts = ({ posts, loading,movieId }) => {
  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <div className='container col col-sm-12 col-md-6 col-lg-12  card-group d-flex flex-start '>
      {posts.map(post => (
        <div key={movieId++} className='mb-4'>
          <div className="card  text-center m-2 h-100 d-inline-block col col-sm-12 col-md-6 col-lg-12 col-xl-4"
            style={{ width: '12rem',backgroundColor:'rgb(22, 22, 22)' }}>
            <div className="card-body ">
              <h5 className="card-title"></h5>
              <div className="col-auto d-none d-lg-block ">
                    <img
                        className="img-fluid"
                        src={post.poster}
                        alt="movie poster"
                    />
                </div>
            <div className=''style={{ height: '50px' }}>
              <p className="card-text"> title : {post.title}</p>
           
            </div>
            <small className=" card-text text-muted d-flex justify-content-center mt-4 ">{post.imdb_rating}<FaStar style={{color:'yellow' }} /></small>
            <Link to={`/movie/${movieId}`} className="btn btn-sm btn-warning mt-2">read more</Link>
          </div>
          </div>

        </div>

      ))}
    </div>

  );
};

export default Posts;