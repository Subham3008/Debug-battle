import React from "react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#111] border border-white/60 p-8 sm:p-12 mb-10">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 bg-[#C8F400]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-[#C8F400]/5 rounded-full blur-3xl"></div>

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgb(200,244,0) 1px, transparent 1px), linear-gradient(90deg, rgb(200,244,0) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        {/* Left */}
        <div>
          <p className="text-[#C8F400]/70 text-sm tracking-widest uppercase mb-3">
            Good evening 👋
          </p>

          <h1 className="font-bold text-4xl sm:text-5xl text-white leading-tight mb-4">
            Welcome back,
            <br />
            <span className="text-[#C8F400]">Subham!</span>
          </h1>

          <p className="text-white/40 max-w-md">
            Discover today's picks — hand-curated products across electronics,
            fashion, and more.
          </p>

          <div className="flex gap-3 mt-6 flex-wrap">
            <a
              href="/products"
              className="flex items-center gap-2 bg-[#C8F400] text-black px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Shop Now →
            </a>

            <a
              href="/products"
              className="flex items-center gap-2 border border-white/10 text-white px-5 py-2.5 rounded-lg hover:border-white/60 transition"
            >
              View All Products
            </a>
          </div>
        </div>

        {/* Right Stats */}
        <div className="shrink-0 flex flex-col gap-3">
          <div className="bg-[#C8F400]/10 border border-[#C8F400]/20 rounded-2xl px-6 py-4 text-center">
            <p className="font-bold text-4xl text-[#C8F400]">20+</p>
            <p className="text-white/40 text-xs mt-1">Products Available</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-center">
            <p className="font-bold text-2xl text-white">Free</p>
            <p className="text-white/40 text-xs mt-1">Delivery on ₹999+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
