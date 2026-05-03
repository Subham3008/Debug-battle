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

      if (!song || !song.id) return;

      const playlist = state.playlists.find((p) => p.id === playlistId);

      if (!playlist) return;

      playlist.songs = playlist.songs.filter(Boolean);

      const alreadyExists = playlist.songs.some((s) => s?.id === song.id);

      if (alreadyExists) return;

      playlist.songs.push(song);
      storage.set(STORAGE_KEY, state.playlists);
    },

    removeSongFromPlaylist: (state, action) => {
      const { playlistId, songId } = action.payload;

      const playlist = state.playlists.find((p) => p.id === playlistId);

      if (playlist) {
        playlist.songs = playlist.songs.filter((s) => s.id !== songId);

        storage.set(STORAGE_KEY, state.playlists);
      }
    },

    renamePlaylist: (state, action) => {
      const { playlistId, newName } = action.payload;

      const playlist = state.playlists.find((p) => p.id === playlistId);

      if (playlist) {
        playlist.name = newName;

        storage.set("playlists", state.playlists);
      }
    },
    deletePlaylist: (state, action) => {
      const playlistId = action.payload;

      state.playlists = state.playlists.filter((p) => p.id !== playlistId);

      storage.set("playlists", state.playlists);
    },
  },
});

export const {
  createPlaylist,
  addSongToPlaylist,
  removeSongFromPlaylist,
  renamePlaylist,
  deletePlaylist,
} = playlistSlice.actions;

export default playlistSlice.reducer;
