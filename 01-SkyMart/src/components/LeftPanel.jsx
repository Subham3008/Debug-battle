const LeftPanel = () => {
  return (
    <div className="hidden lg:flex flex-col w-1/2 bg-[#111] border-r border-white/10 p-12 relative overflow-hidden">
      {/* Blur Effects */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#C8F400]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-[#C8F400]/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Logo */}
      <div className="flex items-center gap-3 relative z-10">
        <div className="w-10 h-10 bg-[#C8F400] rounded-2xl flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-black fill-black"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
          >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
          </svg>
        </div>
        <span className="font-bold text-2xl text-white">
          Sky<span className="text-[#C8F400]">Mart</span>
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <p className="text-[#C8F400] text-sm font-medium mb-4 tracking-widest uppercase">
          Welcome back
        </p>

        <h1 className="font-bold text-5xl leading-tight mb-6 text-white">
          Shop the future.
          <br />
          <span className="text-[#C8F400]">Today.</span>
        </h1>

        <p className="text-white/40 text-base max-w-sm leading-relaxed">
          Thousands of products, lightning-fast delivery, and prices that make
          your wallet happy.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <p className="font-bold text-xl text-[#C8F400]">20K+</p>
            <p className="text-white/40 text-xs mt-1">Products</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <p className="font-bold text-xl text-[#C8F400]">50K+</p>
            <p className="text-white/40 text-xs mt-1">Users</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <p className="font-bold text-xl text-[#C8F400]">4.9★</p>
            <p className="text-white/40 text-xs mt-1">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
