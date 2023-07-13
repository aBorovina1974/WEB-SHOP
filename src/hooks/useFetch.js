import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const request = async (url, method = "GET", body = null, headers = {}) => {
    setIsLoading(true);

    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      setData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const get = (url, headers = {}) => {
    return request(url, "GET", null, headers);
  };

  const post = (url, body, headers = {}) => {
    return request(url, "POST", JSON.stringify(body), {
      ...headers,
      "Content-Type": "application/json",
    });
  };

  const put = (url, body, headers = {}) => {
    return request(url, "PUT", JSON.stringify(body), {
      ...headers,
      "Content-Type": "application/json",
    });
  };

  const patch = (url, body, headers = {}) => {
    return request(url, "PATCH", JSON.stringify(body), {
      ...headers,
      "Content-Type": "application/json",
    });
  };

  const del = (url, headers = {}) => {
    return request(url, "DELETE", null, headers);
  };

  return {
    data,
    error,
    isLoading,
    get,
    post,
    put,
    patch,
    del,
  };
};

export default useFetch;
