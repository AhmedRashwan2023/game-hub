import React from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { Genre } from "./useGenres";

interface FetchData<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dep?: Genre | null
) => {
  const [data, setData] = React.useState<T[]>([]);
  const [error, setError] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchData<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [dep]);
  console.log(data, "DATA");
  return { data, error, isLoading };
};

export default useData;
