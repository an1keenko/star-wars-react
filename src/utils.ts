import { CharacterTypes } from "./types/Character.types.ts";
import { FiltersTypes } from "./types/Filter.types.ts";
import { api } from "./services/api.ts";
import { FilmType } from "./types/Film.types.ts";

export function filterCharacters(
  characters: CharacterTypes[],
  filters: FiltersTypes,
) {
  return characters.filter((character) => {
    const characterMass =
      character.mass === "unknown"
        ? 0
        : Number(character.mass.replace(",", "."));
    if (isNaN(characterMass)) {
      return false;
    }
    const massMin =
      filters.massMin === "" ? -Infinity : Number(filters.massMin);
    const massMax = filters.massMax === "" ? Infinity : Number(filters.massMax);

    return (
      (filters.movie === "" ||
        character.films.includes(filters.movie as unknown as FilmType)) &&
      (filters.name === "" || character.name.includes(filters.name)) &&
      (filters.gender === "" ||
        character.gender === filters.gender ||
        (filters.gender === "other" &&
          character.gender !== "male" &&
          character.gender !== "female")) &&
      characterMass >= massMin &&
      characterMass <= massMax
    );
  });
}

export async function getData(
  setCharacters: React.Dispatch<React.SetStateAction<CharacterTypes[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
) {
  try {
    setIsLoading(true);
    let characters: CharacterTypes[] = [];

    const storedCharacters = localStorage.getItem("characters");
    if (storedCharacters) {
      characters = JSON.parse(storedCharacters);
    } else {
      let nextPage = `people/?page=1`;

      while (nextPage) {
        const response = await api.get(nextPage);
        const returnedData = await response.data;

        characters = [...characters, ...returnedData.results];
        nextPage = returnedData.next?.split("https://swapi.dev/api/")[1];
      }

      localStorage.setItem("characters", JSON.stringify(characters));
    }

    setCharacters(characters);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
}
