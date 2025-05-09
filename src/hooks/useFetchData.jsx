import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = (method, page = 1) => {
  const [data, setData] = useState({
    dates: null,
    results: [],
    total_pages: null,
    total_results: null,
    page: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`
  
  const options = {
    method,
    url,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options)

        setData(prevData => {
          return {
          dates: prevData.dates ?? response.data.dates,
          results: prevData.results.length > 0 && prevData.page != page ? [...prevData.results, ...response.data.results] : response.data.results,
          page: prevData.page != page ? page : prevData.page
          };
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, [page]);

  return {
    data,
    loading,
    error
  };
};

export default useFetchData;