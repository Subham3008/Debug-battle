import React from "react";
import { usePlayer } from "../../hooks/usePlayer";

const Player = () => {
  const { togglePlayAndPause } = usePlayer();
  return (
    <div className="text-xl flex justify-center items-center">
      <button
        onClick={() => togglePlayAndPause()}
        className=" bottom-3 right-3 bg-green-500 p-3 rounded-full shadow-lg 
                group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 
               transition-all duration-300 hover:scale-110"
      >
        ▶
      </button>
    </div>
  );
};

export default Player;
