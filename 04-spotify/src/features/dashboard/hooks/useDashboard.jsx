import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { playNewSong, setQueue } from "../../player/state/musicSlice";
import { allSongs } from "../api/SongApi";
import { useEffect } from "react";

export const useDashboard = () => {
  const songs = allSongs();
  const { currentPlayingSong, isPlaying } = useSelector(
    (store) => store.player,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Navigate to details page
  const handleNavigate = (song) => {
    dispatch(playNewSong(song));
    navigate(`/dashboard/details/${song.id}`);
  };

  const isCurrentSong = (song) => {
    return currentPlayingSong?.id === song.id;
  };

  const { id } = useParams();

  const updatedSong = songs.find((elem) => elem.id === Number(id));

  //queue update
  useEffect(() => {
    dispatch(setQueue(songs));
  }, [dispatch]);

  return {
    dispatch,
    handleNavigate,
    isCurrentSong,
    isPlaying,
    currentPlayingSong,
    navigate,
    updatedSong,
    songs,
  };
};
