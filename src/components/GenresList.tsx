import usegenress from "../hooks/useGenres";

const GenresList = () => {
  const { genres } = usegenress();

  console.log(genres, "genres");
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
