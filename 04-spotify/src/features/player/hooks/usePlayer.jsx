import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pause, play } from "../state/musicSlice";

export const usePlayer = () => {
  const dispatch = useDispatch();
  const audioRef = useRef(new Audio());

  const { currentPlayingSong, isPlaying } = useSelector(
    (store) => store.player,
  );

  useEffect(() => {
    if (!currentPlayingSong) return;
    audioRef.current.src = currentPlayingSong.url;
    audioRef.current.play();
  }, [currentPlayingSong]);

  useEffect(() => {
    if (!currentPlayingSong) return;
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlayAndPause = () => {
    if (isPlaying) {
      dispatch(pause());
    } else {
      dispatch(play());
    }
  };

  return {
    togglePlayAndPause,
  };
};
