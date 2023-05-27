import React from 'react';
import {FaStar} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

const Posts = ({ posts, loading}) => {
  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <div className='container d-flex flex-wrap'style={{transform:'translateX(-10%)'}}>
      {posts.map(post => (
        <div key={post.id} className='mb-4'>
          <div className="card  text-center m-2 h-100 col col-sm-12 col-md-6 col-lg-12 col-xl-4"
            style={{ width: '12rem',backgroundColor:'rgb(22, 22, 22)' }}>
            <div className="card-body ">
              <h5 className="card-title"></h5>
              <div className="col-auto d-lg-block ">
                    <img
                        className="img-fluid"
                        src={post.poster}
                        alt="movie poster"
                    />
                </div>
            <div className=''style={{ height: '50px' }}>
              <p className="card-text">{post.title}</p>
           
            </div>
            <small className=" card-text text-muted d-flex justify-content-center mt-4 ">{post.imdb_rating}<FaStar style={{color:'yellow' }} /></small>
            <Link to={`/movie/${post.id}`} className="btn btn-lg btn-warning mt-2">read more</Link>
          </div>
          </div>

        </div>

      ))}
    </div>

  );
};

export default Posts;