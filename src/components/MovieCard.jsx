const MovieCard = ({ movie }) => {
  const { id, poster_path, title, vote_average } = movie;

  return (
    <article key={id} className="movie-card">
      <div className="movie-image">
        <img src={`${import.meta.env.VITE_IMAGE_BASE_URL}${poster_path}`} />
      </div>
      <div className="movie-info">
        <h2>{title}</h2>
        <h3>Rating: {vote_average} / 10</h3>
      </div>
    </article>
  );
};

export default MovieCard;
