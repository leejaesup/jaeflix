import React from 'react';
import {Alert} from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import "./TopRatedMovieSlide.style.css"
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import {responsive} from "../../../../constants/responsive";
import {useTopRatedMoviesQuery} from "../../../../hooks/useTopRatedMovies";

const TopRatedMovieSlide = () => {
    const {data, isLoading, isError, error} = useTopRatedMoviesQuery();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        <Alert variant="danger">{error.message}</Alert>
    }
    return (
        <div>
            <MovieSlider
                title='Top Rated Movies'
                movies={data.results}
                responsive={responsive}/>
        </div>
    );
};

export default TopRatedMovieSlide;