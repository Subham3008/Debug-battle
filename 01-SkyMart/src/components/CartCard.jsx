import { useMyContext } from "@/context/AppContext";
import React from "react";

const CartCard = ({ cartProduct }) => {
  const { handleDelete, incrementCountity, decrementCountity } = useMyContext();
  return (
    <div className="flex gap-4 p-3 bg-white/4 border border-white/50 rounded-2xl animate-fade-in">
      <div className="w-18 h-18 bg-white rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2">
        <img
          src={cartProduct.thumbnail}
          alt="Smart Watch Series 5"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm text-white/80 font-body clamp-2 leading-snug">
          {cartProduct.title}
        </p>

        <p className="text-volt font-heading font-bold text-base mt-1">
          ${Math.floor(cartProduct.price)}
        </p>

        <p className="text-white/30 text-xs">${cartProduct.price} each</p>

        <div className="flex items-center gap-2 mt-2">
          {/* Minus */}
          <button
            onClick={() => decrementCountity(cartProduct)}
            className="w-7 h-7 flex items-center justify-center bg-white/8 hover:bg-white/15 rounded-lg transition-colors border border-white/10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
            </svg>
          </button>

          <span className="text-sm font-bold font-body w-5 text-center">
            {cartProduct.quentity}
          </span>

          {/* Plus */}
          <button
            onClick={() => incrementCountity(cartProduct)}
            className="w-7 h-7 flex items-center justify-center bg-white/8 hover:bg-white/15 rounded-lg transition-colors border border-white/10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </button>

          {/* Delete */}
          <button
            onClick={() => handleDelete(cartProduct.id)}
            className="ml-auto text-red-400/60 hover:text-red-400 transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1="10" x2="10" y1="11" y2="17" />
              <line x1="14" x2="14" y1="11" y2="17" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
