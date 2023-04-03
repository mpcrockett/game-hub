import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre}: Props) {
  const { data, error, loading  } = useGenres();

  if(error) return null;
  if(loading) return <Spinner/>;

  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(g.image_background)}
            />
            <Button fontWeight={g.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(g)} fontSize='lg' variant='link'>{g.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
