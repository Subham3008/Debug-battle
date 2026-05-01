import React, { useState } from "react";
import Playlist from "../components/Playlist";
import Artist from "../components/Artist";
import { useDashboard } from "../../hooks/useDashboard";
import PlaylistPage from "./PlaylistPage";
import { CirclePlus } from "lucide-react";

const Left = () => {
  const { allArtists } = useDashboard();
  const [activeTab, setActiveTab] = useState("playlist");
  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex items-center gap-1
                bg-[#1db954] text-black 
                px-3 py-2 rounded-full 
                cursor-pointer 
                hover:shadow-lg hover:shadow-green-500/20 
                hover:scale-105 
                transition-all duration-200 
                w-fit font-semibold"
      >
        <CirclePlus size={18} />
        Create Playlist
      </div>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setActiveTab("playlist")}
          className={`px-3 py-1 rounded-full ${
            activeTab === "playlist"
              ? "bg-white text-black"
              : "bg-[#cbcbcb1e] text-white"
          }`}
        >
          Playlist
        </button>

        <button
          onClick={() => setActiveTab("artist")}
          className={`px-3 py-1 rounded-full ${
            activeTab === "artist"
              ? "bg-white text-black"
              : "bg-[#cbcbcb1e] text-white"
          }`}
        >
          Artist
        </button>
      </div>

      {/* UI Content */}
      <div className="bg-[#cbcbcb1e] p-3 rounded-2xl">
        {activeTab === "playlist" ? (
          <PlaylistPage />
        ) : (
          <Artist artists={allArtists} />
        )}
      </div>
    </div>
  );
};

export default Left;
