import React from 'react';
import {usePopularMoviesQuery} from "../../../../hooks/usePopularMovies";
import {Alert} from "react-bootstrap";

const Banner = () => {
    const {data, isLoading, isError, error} = usePopularMoviesQuery();
    console.log("ddd", data);
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        <Alert variant="danger">{error.message}</Alert>
    }
    return (
        <div>
            Banner
        </div>
    );
};

export default Banner;