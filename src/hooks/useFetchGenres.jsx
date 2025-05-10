import { useEffect, useState } from "react";
import axios from "axios";

const useFetchGenres = () => {
  const [data, setData] = useState({
    dates: null,
    results: [],
    total_pages: null,
    total_results: null,
    page: null,
  });

  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);

        console.log(response);

        setData({
          genres: response.data.genres,
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchGenres;
