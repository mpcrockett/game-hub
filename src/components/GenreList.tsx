import useGenres from "../hooks/useGenres"

function GenreList() {
  const { data, error} = useGenres();
  return (
    <ul>
      {data.map(g => <li key={g.id}>{g.name}</li>)}
    </ul>
  )
}

export default GenreList