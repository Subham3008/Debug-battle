import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useNavigate } from "react-router";
import { useMyContext } from "@/context/AppContext";
import CartCard from "./CartCard";

const Aside = ({ openCart, setOpenCart }) => {
  const { cart } = useMyContext();
  const navigate = useNavigate();
  return (
    <Sheet open={openCart} onOpenChange={setOpenCart}>
      <SheetContent
        side="right"
        className="bg-[#111] text-white [&>button]:hidden"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#C8F400]"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>

            <h2 className="font-heading font-bold text-lg">Cart</h2>
          </div>
          <button
            onClick={() => setOpenCart(false)}
            className="p-2 hover:bg-white/8 rounded-xl transition-colors text-white/50 hover:text-white cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {cart.length > 0 ? (
            cart.map((elem) => {
              return <CartCard key={elem.id} cartProduct={elem} />;
            })
          ) : (
            <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-16">
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/20"
                >
                  <path d="M12 22v-9" />
                  <path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" />
                  <path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" />
                  <path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z" />
                </svg>
              </div>

              <div>
                <p className="font-heading font-semibold text-white/70 text-lg">
                  Cart is empty
                </p>
                <p className="text-white/30 text-sm mt-1">
                  Go shop something cool!
                </p>
              </div>

              <button
                onClick={() => {
                  setOpenCart(false);
                  navigate("/home");
                }}
                className="btn-volt mt-2 bg-[#C8F400] text-black/90 px-4 py-2 rounded-xl cursor-pointer hover:bg-[#e0fb69] active:scale-95 transition-all duration-200"
              >
                Browse Products
              </button>
            </div>
          )}
        </div>
        <div className="px-6 py-5 border-t border-white/8 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-white/50 text-sm font-body">Total</span>

            <span className="font-heading font-bold text-2xl text-white">
              $24.99
            </span>
          </div>

          <button className="w-full btn-volt flex items-center justify-center gap-2 py-3.5 text-base font-heading font-bold">
            Checkout
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>

          <button className="w-full text-center text-xs text-white/25 hover:text-red-400 transition-colors py-1">
            Clear cart
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Aside;
