"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command";

import { useSelector, useDispatch } from "react-redux";
import {
  addSongToPlaylist,
  createPlaylist,
} from "@/features/dashboard/state/playlistSlice";

const AddToPlaylist = ({ song }) => {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { playlists = [] } = useSelector((store) => store.playlist);

  const handleAdd = (playlistId) => {
    if (!song) return; // ✅ safety

    dispatch(
      addSongToPlaylist({
        playlistId,
        song,
      }),
    );

    setOpen(false);
  };

  const handleCreatePlaylist = () => {
    const name = `My Playlist #${playlists.length + 1}`;
    dispatch(createPlaylist(name));
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="bg-[#242424] px-3 py-2 rounded flex gap-2"
      >
        <Plus />
        Add to playlist
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Find a playlist" />

          <CommandList>
            <CommandItem onSelect={handleCreatePlaylist}>
              <Plus /> New Playlist
            </CommandItem>

            {playlists.length === 0 && <CommandEmpty>No playlist</CommandEmpty>}

            {playlists.map((p) => (
              <CommandItem key={p.id} onSelect={() => handleAdd(p.id)}>
                {p.name}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
};

export default AddToPlaylist;
