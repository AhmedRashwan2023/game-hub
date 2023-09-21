import { HStack, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImages from "../services/img-url";

const GenresList = () => {
  const { data } = useGenres();

  return (
    <>
      {data.map((genre) => (
        <HStack key={genre.id} padding="5px">
          <Image
            src={getCroppedImages(genre.image_background)}
            boxSize="30px"
            borderRadius="10px"
          />
          <Text fontSize="xl">{genre.name}</Text>
        </HStack>
      ))}
    </>
  );
};

export default GenresList;
