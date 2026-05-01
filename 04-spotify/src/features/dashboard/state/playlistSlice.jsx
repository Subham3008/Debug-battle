import { createSlice } from "@reduxjs/toolkit";
import { storage } from "../../../utils/localStorage";

const STORAGE_KEY = "playlists";

const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    playlists: storage.get(STORAGE_KEY, []),
  },

  reducers: {
    createPlaylist: (state, action) => {
      state.playlists.push({
        id: Date.now(),
        name: action.payload,
        songs: [],
      });

      storage.set(STORAGE_KEY, state.playlists);
    },

    addSongToPlaylist: (state, action) => {
      const { playlistId, song } = action.payload;

      const playlist = state.playlists.find((p) => p.id === playlistId);

      if (playlist) {
        playlist.songs.push(song);

        storage.set(STORAGE_KEY, state.playlists);
      }
    },

    removeSongFromPlaylist: (state, action) => {
      const { playlistId, songId } = action.payload;

      const playlist = state.playlists.find((p) => p.id === playlistId);

      if (playlist) {
        playlist.songs = playlist.songs.filter((s) => s.id !== songId);

        storage.set(STORAGE_KEY, state.playlists);
      }
    },
  },
});

export const { createPlaylist, addSongToPlaylist, removeSongFromPlaylist } =
  playlistSlice.actions;

export default playlistSlice.reducer;
