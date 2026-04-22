import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import { playNewSong } from "../../player/state/musicSlice";
import { allSongs } from "../api/SongApi";

export const useDashboard = () => {
  const { currentPlayingSong, isPlaying } = useSelector(
    (store) => store.player,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (song) => {
    if (location.pathname === "/dashboard") {
      dispatch(playNewSong(song));
      navigate(`/dashboard/details/${song.id}`);
    }
  };

  const isCurrentSong = (song) => {
    return currentPlayingSong?.id === song.id;
  };

  const { id } = useParams();

  const song = allSongs();

  const updatedSong = song.find((elem) => {
    return elem.id === Number(id);
  });

  return {
    dispatch,
    handleNavigate,
    isCurrentSong,
    isPlaying,
    currentPlayingSong,
    navigate,
    updatedSong,
  };
};
