import { useDashboard } from "../../hooks/useDashboard";

const Artist = ({ artists }) => {
  const { handleArtistNavigate } = useDashboard();
  return (
    <div className="h-95 overflow-y-auto px-2 overflow-x-hidden">
      <h2 className="text-white font-semibold text-lg mb-4">Artists</h2>

      <div className="flex flex-col gap-2">
        {artists?.map((artist, index) => (
          <div
            onClick={() => handleArtistNavigate(artist)}
            key={index}
            className="flex items-center gap-3 p-2 rounded-md 
             hover:bg-[#2a2a2a] transition cursor-pointer"
          >
            {/* Avatar circle */}
            <div
              className="w-10 h-10 min-w-10 min-h-10 
                  rounded-full bg-[#3a3a3a] 
                  flex items-center justify-center 
                  text-white font-semibold"
            >
              {artist?.trim()?.charAt(0)?.toUpperCase() || "?"}
            </div>

            {/* Artist name */}
            <p className="text-gray-300 text-sm hover:text-white">{artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artist;
