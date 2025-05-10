import useFetchGenres from "../hooks/useFetchGenres";

const Modal = ({ movie, onClick }) => {
  if (!movie.length) {
    return null;
  }

  const { data, loading, error } = useFetchGenres();

  if (loading) {
    return <div>loading</div>;
  }

  const { genres } = data;
  const { original_title, release_date, poster_path, genre_ids, overview } =
    movie[0];

  const filteredGenres = genres.filter(({ id }) => genre_ids.includes(id));

  return (
    <card className="modal-overlay">
      <div className="modal-content">
        <h1>{original_title}</h1>
        <img src={`${import.meta.env.VITE_IMAGE_BASE_URL}${poster_path}`} />
        <p>Release Date: {release_date}</p>
        <p>Overview: {overview}</p>
        <div className="genres">
          {" "}
          <p>Genres: </p>
          {filteredGenres.map((genre, index) => {
            console.log(filteredGenres.length - 1);
            console.log(index);
            console.log(index !== filteredGenres.length - 1);
            return (
              <p>
                {genre.name}
                {index == filteredGenres.length - 1 ? "" : ","}
              </p>
            );
          })}
        </div>
      </div>
      <div>
        <button onClick={() => onClick(null)}>Exit</button>
      </div>
    </card>
  );
};

export default Modal;
