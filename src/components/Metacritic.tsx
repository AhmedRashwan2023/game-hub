import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const Metacritic = ({ score }: Props) => {
  return (
    <Badge
      colorScheme={score >= 80 ? "green" : "red"}
      fontSize="md"
      paddingX={2}
    >
      {score}
    </Badge>
  );
};

export default Metacritic;
