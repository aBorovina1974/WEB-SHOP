import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const resData = await res.json();
        setResponseData(resData);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [isLoading, options, url]);

  return [{ responseData, error, isLoading }, doFetch];
};

export default useFetch;
