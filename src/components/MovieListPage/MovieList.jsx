import { useState } from "react";

import MovieCard from "./MovieCard";

const MovieList = ({ movies, onClick }) => {
  return (
    <div className="movie-list-container">
      {movies.map((movie) => (
        <MovieCard movie={movie} onClick={onClick} />
      ))}
    </div>
  );
};

export default MovieList;
