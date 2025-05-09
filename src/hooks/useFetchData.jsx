import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = (method, url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

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
        const response = await axios
        .request(options)
        setData(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
    error
  };
};

export default useFetchData;