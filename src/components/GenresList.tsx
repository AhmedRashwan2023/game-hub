import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { data } = useGenres();

  console.log(data, "genres");
  return (
    <ul>
      {data.map((d) => (
        <li key={d.id}>{d.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
