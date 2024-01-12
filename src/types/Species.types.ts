import { FilmType } from "./Film.types.ts";
import { CharacterTypes } from "./Character.types.ts";

export type SpeciesType = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string | null;
  language: string;
  people: CharacterTypes[];
  films: FilmType[];
  created: string;
  edited: string;
  url: string;
};
