import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformsIconsList from "./PlatformsIconsList";
import getCroppedImages from "../services/img-url";

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

        <PlatformsIconsList platform={game.platforms} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
