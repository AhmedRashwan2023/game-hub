import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: Platforms[];
  metacritic: number;
}

interface Platforms {
  platform: {
    id: number;
    name: string;
    slug: string;
    image_background: string;
  };
}

const useGames = () => useData<Game>("/games");

export default useGames;
