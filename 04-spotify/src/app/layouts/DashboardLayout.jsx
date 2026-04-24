import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../features/dashboard/ui/components/Navbar";
import { Group, Panel } from "react-resizable-panels";
import Player from "../../features/player/ui/components/Player";
import { useSelector } from "react-redux";
import PlayingMusicInfo from "../../features/player/ui/components/PlayingMusicInfo";

const DashboardLayout = () => {
  const { isPlaying, currentPlayingSong } = useSelector(
    (store) => store.player,
  );
  console.log(isPlaying);

  return (
    <div className="h-screen bg-black text-white">
      <Navbar />

      <div className="h-[76%] w-full">
        <Group className="gap-2">
          <Panel maxSize={"20%"} minSize={"15%"} className="bg-[#121212] p-5">
            left
          </Panel>
          <Panel className="bg-[#121212] p-5">
            <Outlet />
          </Panel>
          <Panel maxSize={"20%"} minSize={"15%"} className="bg-[#121212] p-5">
            right
          </Panel>
        </Group>
      </div>
      <div className="relative p-2 flex w-full">
        <div className="">
          <PlayingMusicInfo />
        </div>
        <div>{currentPlayingSong && <Player />}</div>
        <div></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
