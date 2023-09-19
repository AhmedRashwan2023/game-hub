import React from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: Platforms[];
  metacritic: number;
}

export interface Platforms {
  platform: {
    id: number;
    name: string;
    slug: string;
    image_background: string;
  };
}

interface FetchGames {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = React.useState<Game[]>([]);
  const [error, setError] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGames>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
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
  }, []);

  return { games, error, isLoading };
};

export default useGames;
