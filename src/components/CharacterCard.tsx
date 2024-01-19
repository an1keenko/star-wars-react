import { Button, Card, CardContent, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { CharacterTypes } from "../types/Character.types.ts";
import {
  setFavouriteCharacter,
  removeFavouriteCharacter,
  selectIsFavourite,
} from "../store/Character.slice.ts";
import { RootState } from "../store";

const cardStyles = {
  maxWidth: "300px",
  width: "100%",
  height: "280px",
  margin: 1,
  "&:hover, &:focus-within": {
    backgroundColor: "grey.200",
  },
};

export function CharacterCard({ character }: { character: CharacterTypes }) {
  const characterId = character.url.split("/").slice(-2, -1)[0];
  const dispatch = useDispatch();
  const isFavourite = useSelector((state: RootState) =>
    selectIsFavourite(state, character.name),
  );

  const handleFavouriteToggle = () => {
    if (isFavourite) {
      dispatch(removeFavouriteCharacter(character));
    } else {
      dispatch(setFavouriteCharacter(character));
    }
  };

  return (
    <Card sx={cardStyles}>
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
      <Button onClick={handleFavouriteToggle}>
        {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
      </Button>
    </Card>
  );
}
