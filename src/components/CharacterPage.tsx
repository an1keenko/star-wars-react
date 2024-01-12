import { Link, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { CharacterTypes } from "../types/Character.types.ts";
import { api } from "../services/api.ts";
import { CircularProgress, Typography, Box, IconButton } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { FilmType } from "../types/Film.types.ts";
import { SpeciesType } from "../types/Species.types.ts";
import { VehicleType } from "../types/Vehicle.types.ts";
import { StarshipType } from "../types/Starship.types.ts";
import { PlanetType } from "../types/Planet.types.ts";
import { ErrorComponent } from "./Error.tsx";

export default function CharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterTypes | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchLinkData = useCallback(async (url: string) => {
    const response = await api.get(url);
    return response.data;
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await api.get(`people/${id}`);
        const returnedData = await response.data;

        const homeworldData: PlanetType = await fetchLinkData(
          returnedData.homeworld,
        );
        const filmsData: FilmType[] = await Promise.all(
          returnedData.films.map((url: string) => fetchLinkData(url)),
        );
        const speciesData: SpeciesType[] = await Promise.all(
          returnedData.species.map((url: string) => fetchLinkData(url)),
        );
        const vehiclesData: VehicleType[] = await Promise.all(
          returnedData.vehicles.map((url: string) => fetchLinkData(url)),
        );
        const starshipsData: StarshipType[] = await Promise.all(
          returnedData.starships.map((url: string) => fetchLinkData(url)),
        );

        setCharacter({
          ...returnedData,
          homeworld: homeworldData,
          films: filmsData,
          species: speciesData,
          vehicles: vehiclesData,
          starships: starshipsData,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [id]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return character ? (
    <>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <IconButton disableRipple>
          <ArrowBack fontSize="large" />
        </IconButton>
        <Typography variant="h5" color="#757575">
          Back to characters
        </Typography>
      </Link>
      <Box sx={{ display: "flex", gap: "60px", my: 4 }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          style={{ width: "360px" }}
          alt={character?.name}
        />
        <Box sx={{ textAlign: "start" }}>
          <Typography variant="h3">{character?.name}</Typography>
          {character.height && (
            <Typography variant="subtitle1">
              <b>Height:</b> {character.height} cm
            </Typography>
          )}
          {character.mass && (
            <Typography variant="subtitle1">
              <b>Weight:</b> {character.mass} kg
            </Typography>
          )}
          {character.hair_color && (
            <Typography variant="subtitle1">
              <b>Hair color:</b> {character.hair_color}
            </Typography>
          )}
          {character.skin_color && (
            <Typography variant="subtitle1">
              <b>Skin color:</b> {character.skin_color}
            </Typography>
          )}
          {character.eye_color && (
            <Typography variant="subtitle1">
              <b>Eye color:</b> {character.eye_color}
            </Typography>
          )}
          {character.birth_year && (
            <Typography variant="subtitle1">
              <b>Birth year:</b> {character.birth_year}
            </Typography>
          )}
          {character.gender && (
            <Typography variant="subtitle1">
              <b>Gender:</b> {character.gender}
            </Typography>
          )}
          {character.homeworld.name && (
            <Typography variant="subtitle1">
              <b>Homeworld:</b> {character.homeworld.name}
            </Typography>
          )}
          {character.films.length > 0 && (
            <Typography variant="subtitle1">
              <b>Films:</b>{" "}
              {character.films.map((film) => film.title).join(", ")}
            </Typography>
          )}
          {character.species.length > 0 && (
            <Typography variant="subtitle1">
              <b>Species:</b>{" "}
              {character.species.map((species) => species.name).join(", ")}
            </Typography>
          )}
          {character.vehicles.length > 0 && (
            <Typography variant="subtitle1">
              <b>Vehicles:</b>{" "}
              {character.vehicles.map((vehicle) => vehicle.name).join(", ")}
            </Typography>
          )}
          {character.starships.length > 0 && (
            <Typography variant="subtitle1">
              <b>Starships:</b>{" "}
              {character.starships.map((starship) => starship.name).join(", ")}
            </Typography>
          )}
          {character.created && (
            <Typography variant="subtitle1">
              <b>Created:</b> {new Date(character.created).toLocaleString()}
            </Typography>
          )}
          {character.edited && (
            <Typography variant="subtitle1">
              <b>Edited:</b> {new Date(character.edited).toLocaleString()}
            </Typography>
          )}
        </Box>
      </Box>
    </>
  ) : (
    <ErrorComponent />
  );
}
