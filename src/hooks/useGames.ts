import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id } },
    selectedGenre
  );

export default useGames;
