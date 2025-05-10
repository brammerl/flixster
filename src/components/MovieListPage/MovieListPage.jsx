import { useState } from "react";

import MovieList from "../MovieList";
import Header from "../Header";
import SearchInput from "../SearchInput";
import Dropdown from "../Dropdown";
import Button from "../Button";

import useFetchData from "../../hooks/useFetchData";
import { sortMovies, getSelectValue } from "../../helper-functions/sortMovies";

import { REQUEST_METHOD, DROPDOWN_OPTIONS } from "../../constants/constants";

const MovieListPage = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [sortQuery, setSortQuery] = useState("");
  const [modalControl, setModalControl] = useState({
    open: false,
    id: null,
  });

  const { data, error, loading } = useFetchData(REQUEST_METHOD.GET, page);

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

  return (
    <div>
      <Header>
        <SearchInput
          placeholder={"Search.."}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
      </Header>
      <div className="main-content">
        {sortedMovies.length ? (
          <>
            <MovieList
              movies={sortedMovies}
              onCardClick={() => setModalOpen()}
            />
            <div className="load-more">
              <Button onClick={() => setPage((prevPage) => prevPage + 1)} />
            </div>
          </>
        ) : (
          <div>sorry nothing here</div>
        )}
      </div>
    </div>
  );
};

export default MovieListPage;
