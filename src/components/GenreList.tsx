import { list } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres"


function GenreList() {
  const {genres, error} = useGenres();
  return (
    <ul>
      {genres.map(g => <li key={g.id}>{g.name}</li>)}
    </ul>
  )
}

export default GenreList