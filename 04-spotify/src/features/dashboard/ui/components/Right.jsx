import React from "react";
import { useDashboard } from "../../hooks/useDashboard";

const Right = () => {
  const { currentPlayingSong } = useDashboard();
  console.log(currentPlayingSong);

  return (
    <div className="h-full">
      <img className="h-full object-cover" src={currentPlayingSong?.thumbnail} alt="" />
    </div>
  );
};

export default Right;
