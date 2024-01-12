import { CharacterTypes } from "./Character.types.ts";

export interface DataTypes {
  count: number;
  next: string | null;
  previous: string | null;
  results: CharacterTypes[];
}
