import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MoviesList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MoviesList title={"Upcoming"} movies={movies?.upcomingMovies} />
          <MoviesList title={"Popular"} movies={movies?.popularMovies} />
        </div>{" "}
      </div>
    )
  );
};

export default SecondaryContainer;
