import { useSelector } from "react-redux";
import { Play, Heart, MoreHorizontal, MoveLeft, Pause } from "lucide-react";
import { useDashboard } from "../../hooks/useDashboard";
import { pause, play, playNewSong } from "../../../player/state/musicSlice";

const SongDetails = () => {
  const { currentPlayingSong, navigate, isPlaying, dispatch, updatedSong } =
    useDashboard();

  console.log(updatedSong);
  const songData = currentPlayingSong || updatedSong;

  if (!songData) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-gray-400 text-xl">
        No song selected
      </div>
    );
  }

  return (
    <div>
      <div
        onClick={() => navigate("/dashboard")}
        className="flex gap-2 text-gray-500 cursor-pointer
      "
      >
        <MoveLeft />
        Back to home
      </div>
      <div className="min-h-screen bg-linear-to-b from-gray-900 to-black text-white p-6 md:p-10">
        {/* Top Section */}

        <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
          {/* Song Image */}
          <img
            src={songData.thumbnail}
            alt="song"
            className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-lg shadow-2xl"
          />

          {/* Song Info */}
          <div className="text-center md:text-left">
            <p className="uppercase text-sm text-gray-400">Now Playing</p>

            <h1 className="text-3xl md:text-2xl font-bold mt-2">
              {songData.title}
            </h1>

            <p className="text-lg text-gray-300 mt-3">{songData.artist}</p>

            {/* Controls */}
            <div className="flex items-center justify-center md:justify-start gap-6 mt-6">
              {/* Play Button */}
              {isPlaying ? (
                <button
                  onClick={() => dispatch(pause())}
                  className="bg-green-500 hover:bg-green-400 text-black p-4 rounded-full"
                >
                  <Pause size={22} fill="black" />
                </button>
              ) : (
                <button
                  onClick={() => dispatch(playNewSong(updatedSong))}
                  className="bg-green-500 hover:bg-green-400 text-black p-4 rounded-full"
                >
                  <Play size={22} fill="black" />
                </button>
              )}

              {/* Like Button */}
              <button className="text-gray-400 hover:text-white">
                <Heart size={22} />
              </button>

              {/* More Options */}
              <button className="text-gray-400 hover:text-white">
                <MoreHorizontal size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-800 pt-6">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-gray-400 max-w-2xl">
            Enjoy this track by {songData.artist}. Dive into the vibe and let
            the music take over.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
