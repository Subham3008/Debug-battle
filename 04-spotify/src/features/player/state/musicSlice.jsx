import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    currentPlayingSong: null,
    isPlaying: false,
  },
  reducers: {
    playNewSong: (state, action) => {
      state.currentPlayingSong = action.payload;
      state.isPlaying = true;
    },
    play: (state) => {
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
  },
});

export const { playNewSong, play, pause } = playerSlice.actions;
export default playerSlice.reducer;
