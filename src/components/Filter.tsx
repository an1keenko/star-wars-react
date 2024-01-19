import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";

import { FiltersTypes } from "../types/Filter.types.ts";
import { FilmType } from "../types/Film.types.ts";

import { api } from "../services/api.ts";

const paperStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  p: "16px 32px",
  maxHeight: "500px",
  maxWidth: "168px",
};

export function Filter({
  onFilterChange,
}: {
  onFilterChange: (filters: FiltersTypes) => void;
}) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [massMin, setMassMin] = useState("");
  const [massMax, setMassMax] = useState("");
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState<FilmType[]>([]);

  useEffect(() => {
    onFilterChange({ name, gender, massMin, massMax, movie });
  }, [name, gender, massMin, massMax, movie]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await api.get("films");
      setMovies(response.data.results);
    };

    fetchMovies();
  }, []);

  const handleReset = () => {
    setName("");
    setGender("");
    setMassMin("");
    setMassMax("");
    setMovie("");
  };

  return (
    <Paper sx={paperStyles}>
      <FormControl>
        <InputLabel id="movie-label">Film</InputLabel>
        <Select
          labelId="movie-label"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        >
          {movies.length === 0 ? (
            <MenuItem value="">Loading...</MenuItem>
          ) : (
            movies.map((movie) => (
              <MenuItem key={movie.url} value={movie.url}>
                {movie.title}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <RadioGroup
        sx={{ display: "flex", flexDirection: "row" }}
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      <TextField
        label="Mass Min"
        value={massMin}
        onChange={(e) => setMassMin(e.target.value)}
      />
      <TextField
        label="Mass Max"
        value={massMax}
        onChange={(e) => setMassMax(e.target.value)}
      />
      <Button onClick={handleReset}>Clear</Button>
    </Paper>
  );
}
