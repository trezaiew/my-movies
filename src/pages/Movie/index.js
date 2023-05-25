import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { setItem, getItem } from "../../services/storage";
import enHancedFetch from "../../services/http";
import MoviePost from "../../components/MoviePost";

const BASE_API_URL = "https://moviesapi.ir/api/v1/movies";

const Movie = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {

        const fetchMovie = async () => {
            let res = getItem(`movie${id}`);
           
            // setLoading(true);
            try {
                if (res === null) {
                    res = await fetch(
                        BASE_API_URL + '/' + id
                    );
                    res = await res.json();
                }
                
                setItem(`movie${id}`, res);
                setMovie(res);
                // console.log(data);
                console.log('id is:',id);
                setError(false);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [id]);


    if (loading) {
        return <Loading />;
    }

    if (error) {

        return <div>error</div>;
    }
    return (
        
        <div>
            <Header />
            {/* <MoviePost movie={movie} /> */}
            {/* <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            className="img-fluid"
                        />
                        
                    </div>
                    <div className="col-md-8">
                        <h1>{movie.title}</h1>
                        <p>{movie.year}</p>
                        <p>{movie.plot}</p>
                        <p>{movie.director}</p>
                        <p>{movie.imdb_rating}</p>
                        <p>{movie.genres}</p>
                        <p>{movie.actors}</p>
                        <p>{movie.runtime}</p>
                        <p>{movie.language}</p>
                        <p>{movie.country}</p>
                        <p>{movie.awards}</p>
                        <p>{movie.imdb_id}</p>
                        <p>{movie.type}</p>
                        <p>{movie.production}</p>

                        </div>

                </div>
             </div>    */}
                <MoviePost movie={movie} />

        </div>
        
        
    );
}

export default Movie;

