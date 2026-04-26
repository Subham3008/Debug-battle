import React from "react";
import { SkipBack, SkipForward, Play, Pause } from "lucide-react";

import { usePlayer } from "../../hooks/usePlayer";
import { playNextSong, playPreviousSong } from "../../state/musicSlice";

const Player = () => {
  const {
    togglePlayAndPause,
    isPlaying,
    dispatch,
    // progress,
    // songDuration,
    // songTime,
    // formatTime,
  } = usePlayer();

  return (
    <div className="fixed left-1/2 -translate-x-1/2">
      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mb-3">
        <button onClick={() => dispatch(playPreviousSong())}>
          <SkipBack className="text-white" />
        </button>

        <button
          onClick={togglePlayAndPause}
          className="w-12 h-12 bg-green-500 rounded-full
                     flex items-center justify-center"
        >
          {isPlaying ? <Pause fill="black" /> : <Play fill="black" />}
        </button>

        <button onClick={() => dispatch(playNextSong())}>
          <SkipForward className="text-white" />
        </button>
      </div>

      {/* Timer + Progress */}
      <div className="flex items-center gap-3 w-96">
        {/* <span className="text-xs text-zinc-400">{formatTime(songTime)}</span> */}

        <div className="flex-1 h-1 bg-zinc-700 rounded-full overflow-hidden">
          <div
            // style={{ width: `${progress}%` }}
            className="h-full bg-green-500"
          />
        </div>

        {/* <span className="text-xs text-zinc-400">
          {formatTime(songDuration)}
        </span> */}
      </div>
    </div>
  );
};

export default Player;
