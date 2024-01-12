import { FilmType } from "./Film.types.ts";
import { VehicleType } from "./Vehicle.types.ts";
import { StarshipType } from "./Starship.types.ts";
import { SpeciesType } from "./Species.types.ts";
import { PlanetType } from "./Planet.types.ts";

export type CharacterTypes = {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: PlanetType;
  films: FilmType[];
  species: SpeciesType[];
  vehicles: VehicleType[];
  starships: StarshipType[];
  created: string;
  edited: string;
  url: string;
};
