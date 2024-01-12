import { StarshipType } from "./Starship.types.ts";
import { VehicleType } from "./Vehicle.types.ts";
import { SpeciesType } from "./Species.types.ts";
import { CharacterTypes } from "./Character.types.ts";
import { PlanetType } from "./Planet.types.ts";

export interface FilmType {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  characters: CharacterTypes[];
  planets: PlanetType[];
  starships: StarshipType;
  vehicles: VehicleType[];
  species: SpeciesType[];
  url: string;
  release_date: string;
}
