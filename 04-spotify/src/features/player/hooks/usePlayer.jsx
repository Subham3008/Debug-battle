import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pause, play } from "../state/musicSlice";

const sharedAudio = new Audio(); //global single audio instance

export const usePlayer = () => {
  const dispatch = useDispatch();

  const audioRef = useRef(sharedAudio);

  const [songTime, setSongTime] = useState(0);
  const [songDuration, setSongDuration] = useState(0);

  const { currentPlayingSong, isPlaying } = useSelector(
    (store) => store.player,
  );

  // Song change
  useEffect(() => {
    if (!currentPlayingSong) return;

    setSongTime(0);
    setSongDuration(0);

    audioRef.current.src = currentPlayingSong.url;
    audioRef.current.play();
  }, [currentPlayingSong]);

  // Play / Pause
  useEffect(() => {
    if (!currentPlayingSong) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Progress tracking
  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setSongTime(audio.currentTime);
    };

    const loadedMetadata = () => {
      setSongDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", loadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", loadedMetadata);
    };
  }, []);

  const togglePlayAndPause = () => {
    if (isPlaying) {
      dispatch(pause());
    } else {
      dispatch(play());
    }
  };

  const handleSeek = (value) => {
    audioRef.current.currentTime = value;
    setSongTime(value);
  };

  const formatTime = (time) => {
    if (!time) return "0:00";

    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);

    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return {
    togglePlayAndPause,
    isPlaying,
    currentPlayingSong,
    dispatch,
    songTime,
    songDuration,
    formatTime,
    handleSeek,
  };
};
