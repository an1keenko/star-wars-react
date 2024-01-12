import { Button, Card, CardContent } from "@mui/material";
import { CharacterTypes } from "../types/Character.types.ts";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import {
  setFavouriteCharacter,
  removeFavouriteCharacter,
} from "../store/Character.slice.ts";
import { useDispatch } from "react-redux";
import { useState } from "react";

export function CharacterCard({ character }: { character: CharacterTypes }) {
  const characterId = character.url.split("/").slice(-2, -1)[0];
  const dispatch = useDispatch();
  const [isFavourite, setIsFavourite] = useState(false);

  const handleAddToFavourites = () => {
    if (character) {
      dispatch(setFavouriteCharacter(character));
      setIsFavourite(true);
    }
  };

  const handleRemoveFromFavourites = () => {
    if (character) {
      dispatch(removeFavouriteCharacter(character));
      setIsFavourite(false);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: "200px",
        width: "100%",
        margin: 1,
        "&:hover, &:focus-within": {
          backgroundColor: "grey.200",
        },
      }}
    >
      <Link
        to={`/characters/${characterId}`}
        style={{ textDecoration: "none" }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            {character.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Gender: {character.gender}
            <br />
            Height: {character.height} cm
            <br />
            Weight: {character.mass} kg
            <br />
            Hair color: {character.hair_color}
            <br />
            Skin color: {character.skin_color}
          </Typography>
        </CardContent>
      </Link>
      <Button
        onClick={
          isFavourite ? handleRemoveFromFavourites : handleAddToFavourites
        }
      >
        {isFavourite ? "Remove" : "Add to Favourites"}
      </Button>
    </Card>
  );
}
