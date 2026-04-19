import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../../features/player/state/musicSlice";
export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});
