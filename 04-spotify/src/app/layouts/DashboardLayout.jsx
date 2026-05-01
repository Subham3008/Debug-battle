import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../features/dashboard/ui/components/Navbar";
import { Group, Panel } from "react-resizable-panels";
import Player from "../../features/player/ui/components/Player";
import { useSelector } from "react-redux";
import PlayingMusicInfo from "../../features/player/ui/components/PlayingMusicInfo";
import Right from "../../features/dashboard/ui/components/Right";
import Left from "../../features/dashboard/ui/pages/Left";

const DashboardLayout = () => {
  const { isPlaying, currentPlayingSong } = useSelector(
    (store) => store.player,
  );
  // console.log(isPlaying);

  return (
    <div className="h-screen bg-black text-white">
      <Navbar />

      <div className="h-[76%] w-full">
        <Group className="gap-2">
          <Panel maxSize={"20%"} minSize={"15%"} className="bg-[#121212] p-5">
            <Left />
          </Panel>
          <Panel className="bg-[#121212] p-5">
            <Outlet />
          </Panel>
          <Panel maxSize={"20%"} minSize={"15%"} className="bg-[#121212] p-5">
            <Right />
          </Panel>
        </Group>
      </div>
      <div className="relative flex w-full px-5 gap-4 py-2">
        <div className="w-[25%]">
          <PlayingMusicInfo />
        </div>
        <div>{currentPlayingSong && <Player />}</div>
        <div></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
