import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformsIconsList from "./PlatformsIconsList";
import getCroppedImages from "../services/img-url";
import Metacritic from "./Metacritic";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  console.log("object: ", game);
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={getCroppedImages(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformsIconsList platform={game.platforms} />
          <Metacritic score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
