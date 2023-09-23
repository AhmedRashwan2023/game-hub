import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleten from "./GameCardSkeleten";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  selected: Genre | Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform, selected }: Props) => {
  const { data, error, isLoading } = useGames(
    selectedGenre,
    selectedPlatform,
    selected
  );
  const skeletens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={5}>
        {isLoading &&
          skeletens.map((skeleten) => <GameCardSkeleten key={skeleten} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
