import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CharacterTypes } from "../types/Character.types.ts";
import { RootState } from "./index.ts";

const characterSlice = createSlice({
  name: "character",
  initialState: <CharacterTypes[]>[],
  reducers: {
    setFavouriteCharacter: (state, action: PayloadAction<CharacterTypes>) => {
      const characterToAdd = action.payload;

      const isFavouriteAlready = state.find(
        (character) => character.url === characterToAdd.url,
      );

      if (!isFavouriteAlready) {
        state.push(characterToAdd);
      }
    },
    removeFavouriteCharacter: (
      state,
      action: PayloadAction<CharacterTypes>,
    ) => {
      const characterToRemove = action.payload;

      return state.filter(
        (character) => character.url !== characterToRemove.url,
      );
    },
  },
});

export const { setFavouriteCharacter, removeFavouriteCharacter } =
  characterSlice.actions;

export const selectIsFavourite = (state: RootState, characterName: string) => {
  return state.character.some((character) => character.name === characterName);
};

export default characterSlice.reducer;
