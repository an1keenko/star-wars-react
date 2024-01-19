import { useEffect, useMemo, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

import { CharacterCard } from "./CharacterCard.tsx";
import { ErrorComponent } from "./Error.tsx";
import { Filter } from "./Filter.tsx";
import { CharacterTypes } from "../types/Character.types.ts";
import { FiltersTypes } from "../types/Filter.types.ts";
import { filterCharacters, getData } from "../utils.ts";

export default function Home() {
  const [characters, setCharacters] = useState<CharacterTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<FiltersTypes>({
    name: "",
    gender: "",
    massMin: "",
    massMax: "",
    movie: "",
  });

  useEffect(() => {
    getData(setCharacters, setIsLoading);
  }, []);

  const handleFilterChange = (newFilters: FiltersTypes) => {
    setFilters(newFilters);
  };

  const filteredCharacters = useMemo(
    () => filterCharacters(characters, filters),
    [characters, filters],
  );

  if (isLoading) {
    return (
      <>
        <CircularProgress color="inherit" />
        <Typography sx={{ mt: "8px" }}>Loading all of characters...</Typography>
      </>
    );
  }

  return characters.length > 0 ? (
    <>
      <Typography textAlign="start" sx={{ p: "16px" }}>
        Total characters: {filteredCharacters.length}
      </Typography>
      <Box sx={{ display: "flex", gap: "32px" }}>
        <Filter onFilterChange={handleFilterChange} />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {filteredCharacters.map((character, index) => (
            <CharacterCard key={index} character={character} />
          ))}
        </Box>
      </Box>
    </>
  ) : (
    <ErrorComponent />
  );
}
