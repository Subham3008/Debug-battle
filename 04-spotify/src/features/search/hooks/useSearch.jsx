import { useRef, useState } from "react";
import { allSongs } from "../../dashboard/api/SongApi";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { playNewSong } from "../../player/state/musicSlice";

export const useSearch = () => {
  const songs = allSongs();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState(null);
  const [searchSong, setSearchSong] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  let timer = useRef(null);

  const handleSearch = (e) => {
    let value = e.target.value;
    if (value.trim()) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const filteredSong = songs.filter((elem) =>
        elem.title.toLowerCase().includes(value.toLowerCase()),
      );
      console.log("Running...");

      setSearchSong(filteredSong);
    }, 1000);
  };

  const handleNavigate = (song) => {
    setIsVisible(false);
    dispatch(playNewSong(song));
    navigate(`/dashboard/details/${song.id}`);
  };

  return {
    handleSearch,
    searchValue,
    searchSong,
    navigate,
    handleNavigate,
    setIsVisible,
    isVisible,
  };
};
