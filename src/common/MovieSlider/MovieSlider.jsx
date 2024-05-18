import React from 'react';
import "./MovieSlider.style.css";
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard";

const MovieSlider = ({title, movies, responsive}) => {
    return (
        <div>
            <h3>{title}</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                // swipeable={false}
                // draggable={false}
                // itemClass="carousel-item-padding-40-px"
                itemClass="movie-slider p-1"
                containerClass="carousel-container"
                responsive={responsive}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                // ssr={true} // means to render carousel on server-side.
                // autoPlaySpeed={1000}
                // keyBoardControl={true}
                // customTransition="all .5"
                // transitionDuration={500}
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                // dotListClass="custom-dot-list-style"
            >
                {movies.map((movie, index)=> (
                    <MovieCard movie={movie} key={index}/>
                ))}
            </Carousel>
        </div>
    );
};

export default MovieSlider;