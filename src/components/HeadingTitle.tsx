import { Heading, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  selectedQueries: GameQuery;
}

const HeadingTitle = ({ selectedQueries }: Props) => {
  return (
    <Heading as="h1" paddingY="10px">
      {`${selectedQueries.platform?.name || ""} ${
        selectedQueries.genre?.name || ""
      } Games`}
    </Heading>
  );
};

export default HeadingTitle;
