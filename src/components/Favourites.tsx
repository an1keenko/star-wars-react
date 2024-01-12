import { useSelector } from "react-redux";
import { RootState } from "../store";
import { CharacterCard } from "./CharacterCard.tsx";
import { Box, Card, Typography } from "@mui/material";
import { BackButton } from "./BackButton.tsx";

const boxStyles = {
  display: "flex",
  flexWrap: "wrap",
  gap: "32px",
  justifyContent: "center",
  alignItems: "center",
};

export function Favourites() {
  const favouriteCharacters = useSelector(
    (state: RootState) => state.character,
  );

  return (
    <>
      <BackButton />
      <Typography variant="h4" sx={{ mb: 2 }}>
        Favourite Characters
      </Typography>
      {favouriteCharacters.length > 0 ? (
        <Box sx={boxStyles}>
          {favouriteCharacters.map((character) => (
            <Box key={character.name}>
              <CharacterCard key={character.name} character={character} />
            </Box>
          ))}
        </Box>
      ) : (
        <Card sx={{ p: "16px", backgroundColor: "gray" }}>
          <Typography variant="h5">
            You have no favourite characters yet :(
            <br />
            Please add some
          </Typography>
        </Card>
      )}
    </>
  );
}
