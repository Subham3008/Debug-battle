import { useState } from "react";
import { useMyContext } from "../context/AppContext";

const StartsCard = () => {
  const { statsData } = useMyContext();
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      {statsData.map((item, index) => (
        <div
          key={index}
          className="bg-[#111] border border-white/60 rounded-3xl p-6 flex items-start gap-4"
        >
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.bg} ${item.color}`}
          >
            {item.icon}
          </div>

          <div>
            <p className="font-bold text-2xl text-white">{item.value}</p>
            <p className="text-white/50 text-sm">{item.title}</p>
            <p className="text-white/25 text-xs mt-0.5">{item.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StartsCard;
