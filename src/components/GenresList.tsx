import { Button, HStack, Heading, Image, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImages from "../services/img-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBlock={3}>
        Genres
      </Heading>
      {isLoading && <Spinner />}
      {data.map((genre) => (
        <HStack key={genre.id} padding="5px">
          <Image
            src={getCroppedImages(genre.image_background)}
            boxSize="30px"
            borderRadius="10px"
            objectFit="cover"
          />
          <Button
            whiteSpace="normal"
            textAlign="left"
            variant="link"
            fontSize="xl"
            fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
