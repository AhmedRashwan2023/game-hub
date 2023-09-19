import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleten = () => {
  return (
    <GameCardContainer>
      <Card>
        <Skeleton height="250px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCardSkeleten;
