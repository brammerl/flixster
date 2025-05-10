import { useState } from "react";

import MovieList from "./MovieList";
import Header from "../Header";
import SearchInput from "../SearchInput";
import Dropdown from "../Dropdown";
import Button from "../Button";
import Modal from "../Modal";
import Footer from "../Footer";

import useFetchMovieData from "../../hooks/useFetchMovieData";
import { sortMovies, getSelectValue } from "../../helper-functions/sortMovies";

import { DROPDOWN_OPTIONS } from "../../constants/constants";

const MovieListPage = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [sortQuery, setSortQuery] = useState("");
  const [movieId, setMovieId] = useState(null);

  const { data, error, loading } = useFetchMovieData(page);

  if (loading) {
    return <div>loading</div>;
  }

  const filteredData = data.results.filter((data) => {
    if (query == "") {
      return data;
    }
    const trimmedQuery = query.toLowerCase().trimEnd().trimStart();
    return data.original_title.toLowerCase().includes(trimmedQuery);
  });

  const sortedMovies = sortMovies(filteredData, sortQuery);

  const selectedMovie = sortedMovies.filter((movie) => {
    return movie.id == movieId;
  });

  return (
    <div class="wrapper">
      <Header>
        <h1>Flixter</h1>
        <div className="nav-bar">
          <div>
            <SearchInput
              placeholder={"Search.."}
              value={query}
              onChange={setQuery}
            />
            <Dropdown
              options={DROPDOWN_OPTIONS}
              onChange={() => {
                const sortQuery = getSelectValue();
                setSortQuery(sortQuery);
              }}
            />
            <Button
              onClick={() => {
                setQuery("");
                setSortQuery("");
              }}
              text="Clear Search"
            />
          </div>
        </div>
      </Header>
      <div className="main-content">
        {sortedMovies.length ? (
          <>
            <MovieList movies={sortedMovies} onClick={setMovieId} />
            <div className="load-more">
              <Button
                onClick={() => setPage((prevPage) => prevPage + 1)}
                text="Load more"
              />
            </div>
          </>
        ) : (
          <div>sorry nothing here</div>
        )}
        {movieId && <Modal movie={selectedMovie} onClick={setMovieId} />}
      </div>
      <Footer>
        <p>Flixter @ 2005</p>
      </Footer>
    </div>
  );
};

export default MovieListPage;
