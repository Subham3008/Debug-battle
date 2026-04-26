import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pause, play } from "../state/musicSlice";
// import { allSongs } from "../../dashboard/api/SongApi";

export const usePlayer = () => {
  const dispatch = useDispatch();
  const audioRef = useRef(new Audio());
  console.log(audioRef);

  const { currentPlayingSong, isPlaying } = useSelector(
    (store) => store.player,
  );

  // useEffect(() => {
  //   if (!currentPlayingSong) return;

  //   audioRef.current.src = currentPlayingSong.url;
  //   audioRef.current.play();
  // }, [currentPlayingSong]);

  // useEffect(() => {
  //   if (!currentPlayingSong) return;
  //   if (isPlaying) {
  //     audioRef.current.play();
  //   } else {
  //     audioRef.current.pause();
  //   }
  // }, [isPlaying]);

  useEffect(() => {
    if (!currentPlayingSong) return;

    audioRef.current.src = currentPlayingSong.url;

    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [currentPlayingSong, isPlaying]);

  const togglePlayAndPause = () => {
    if (isPlaying) {
      dispatch(pause());
    } else {
      dispatch(play());
    }
  };

  //progress bar logic

  // let songTime = audioRef.current.currentTime;
  // let songDuration = audioRef.current.duration;
  // const formatTime = (time) => {
  //   if (!time) return "0:00";

  //   const mins = Math.floor(time / 60);
  //   const secs = Math.floor(time % 60);

  //   return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  // };

  // const progress = songDuration ? (songTime / songDuration) * 100 : 0;

  return {
    togglePlayAndPause,
    isPlaying,
    currentPlayingSong,
    dispatch,
    // progress,
    // songDuration,
    // songTime,
    // formatTime,
  };
};
