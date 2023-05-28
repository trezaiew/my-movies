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

            try {
                if (res === null) {
                    res = await fetch(
                        BASE_API_URL + '/' + id
                    );
                    res = await res.json();
                }

                setItem(`movie${id}`, res);
                setMovie(res);
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

            <MoviePost movie={movie} />

        </div>


    );
}

export default Movie;

