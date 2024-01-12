import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./Character.slice";

const store = configureStore({
  reducer: {
    character: characterReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
