import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { setItem, getItem } from "../../services/storage";
import enHancedFetch from "../../services/http";
import MoviePost from "../../components/MoviePost";
// import { getMovieById } from "../../services/movieService";
// import { getMovieCredits } from "../../services/movieService";
// import { getMovieReviews } from "../../services/movieService";
// import { getMovieImages } from "../../services/movieService";

const BASE_API_URL = "https://moviesapi.ir/api/v1/movies";

const Movie = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {

        const fetchMovie = async () => {
            let res = getItem(`movie${id}`);
            console.log(res);

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
            {/* <div className="container">
                <div className="row">

                    <div className="col-12 col-md-6">
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <h1>title:{movie.title}</h1>
                        <p>year:{movie.year}</p>
                        <p>plot:{movie.plot}</p>
                    </div>
                </div>
            </div>
        </div> */}
            <MoviePost movie={movie} />
        </div>
    );
}

export default Movie;
