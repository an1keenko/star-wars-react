import { useSelector } from "react-redux";
import { RootState } from "../store";
import { CharacterCard } from "./CharacterCard.tsx";
import { Box, Card, Typography } from "@mui/material";

export function Favourites() {
  const favouriteCharacters = useSelector(
    (state: RootState) => state.character,
  );

  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Favourite Characters
      </Typography>
      {favouriteCharacters.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {favouriteCharacters.map((character) => (
            <Box sx={{ margin: "auto" }} key={character.name}>
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
