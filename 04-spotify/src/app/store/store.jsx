import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../../features/player/state/musicSlice";
import playlistReducer from "../../features/dashboard/state/playlistSlice";
export const store = configureStore({
  reducer: {
    player: playerReducer,
    playlist: playlistReducer,
  },
});
