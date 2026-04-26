import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    currentPlayingSong: null,
    isPlaying: false,
    queue: [],
    currentIndex: 0,
  },
  reducers: {
    playNewSong: (state, action) => {
      const selectedSong = action.payload;

      state.currentPlayingSong = selectedSong;
      state.currentIndex = state.queue.findIndex(
        (song) => song.id === selectedSong.id,
      );
      state.isPlaying = true;
    },
    play: (state) => {
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
    setQueue: (state, action) => {
      state.queue = action.payload;
    },
    playNextSong: (state) => {
      if (!state.queue.length) return;

      state.currentIndex =
        state.currentIndex === state.queue.length - 1
          ? 0
          : state.currentIndex + 1;

      state.currentPlayingSong = state.queue[state.currentIndex];
      state.isPlaying = true;
    },
    playPreviousSong: (state) => {
      if (!state.queue.length) return;

      state.currentIndex =
        state.currentIndex === 0
          ? state.queue.length - 1
          : state.currentIndex - 1;

      state.currentPlayingSong = state.queue[state.currentIndex];
      state.isPlaying = true;
    },
  },
});

export const {
  playNewSong,
  play,
  pause,
  setQueue,
  playNextSong,
  playPreviousSong,
} = playerSlice.actions;
export default playerSlice.reducer;
