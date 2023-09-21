import { Button, HStack, Image, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImages from "../services/img-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenresList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;

  return (
    <>
      {isLoading && <Spinner />}
      {data.map((genre) => (
        <HStack key={genre.id} padding="5px">
          <Image
            src={getCroppedImages(genre.image_background)}
            boxSize="30px"
            borderRadius="10px"
          />
          <Button
            variant="link"
            fontSize="xl"
            onClick={() => onSelectGenre(genre)}
          >
            {genre.name}
          </Button>
        </HStack>
      ))}
    </>
  );
};

export default GenresList;
