import songs from "../../../utils/songs.json";

export const allSongs = () => {
  return songs.map((song, index) => ({
    ...song,
    id: index + 1,
  }));
};
