import MovieCard from "./MovieCard";
import Button from "./Button";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list-container">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
