import { FilmType } from "./Film.types.ts";

export type PlanetType = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: FilmType[];
  created: string;
  edited: string;
  url: string;
};
