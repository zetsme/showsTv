import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    const fetchData = async (url) => {
      try {
        const response = await fetch(url, { signal: abortCont.signal });
        if (!response.ok) {
          throw Error('could not fetch');
        }
        const data = await response.json();

        setData(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setLoading(false);
          setError(error.message);
        }
      }
    };
    fetchData(url);
    return () => abortCont.abort();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
