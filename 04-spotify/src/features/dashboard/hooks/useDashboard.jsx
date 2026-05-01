import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { playNewSong, setQueue } from "../../player/state/musicSlice";
import { allSongs } from "../api/SongApi";
import { useEffect, useState } from "react";

export const useDashboard = () => {
  const songs = allSongs();
  console.log(songs);
  

  const { currentPlayingSong, isPlaying, queue } = useSelector(
    (store) => store.player,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Navigate to song details
  const handleNavigate = (song) => {
    dispatch(playNewSong(song));
    navigate(`/dashboard/details/${song.id}`);
  };

  const isCurrentSong = (song) => {
    return currentPlayingSong?.id === song.id;
  };

  const { id } = useParams();

  const updatedSong = songs.find((elem) => elem.id === Number(id));

  // queue update
  useEffect(() => {
    dispatch(setQueue(songs));
  }, [dispatch]);

  // all unique artists
  const allArtists = [...new Set(queue.map((song) => song.artist))];

  // ✅ FIXED artist navigation
  const handleArtistNavigate = (artist) => {
    navigate(`/dashboard/artist/${artist.replaceAll(" ", "-").toLowerCase()}`);
  };

  return {
    dispatch,
    handleNavigate,
    isCurrentSong,
    isPlaying,
    currentPlayingSong,
    navigate,
    updatedSong,
    songs,
    allArtists,
    handleArtistNavigate,
  };
};
