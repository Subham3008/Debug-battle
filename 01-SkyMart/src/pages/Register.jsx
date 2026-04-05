import React from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0d0d0d] flex justify-center items-center">
      <div className="w-full max-w-md mx-auto animate-[scale-in_0.3s_ease]">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8 justify-center">
          <div className="w-9 h-9 bg-[#C8F400] rounded-xl flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-black fill-black"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
          </div>
          <span className="font-bold text-xl text-white">
            Sky<span className="text-[#C8F400]">Mart</span>
          </span>
        </div>

        {/* Card */}
        <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 shadow-lg">
          <h2 className="font-bold text-2xl mb-1 text-white">Create account</h2>
          <p className="text-white/40 text-sm mb-8">
            Join SkyMart and start shopping
          </p>

          <form className="space-y-4">
            {/* Name */}
            <div className="relative">
              <svg
                className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <input
                type="text"
                placeholder="Full name"
                className="w-full bg-transparent border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-[#C8F400]"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <svg
                className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-[#C8F400]"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <svg
                className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                type="password"
                placeholder="Password (min 6 chars)"
                className="w-full bg-transparent border border-white/10 rounded-lg py-3 pl-10 pr-10 text-white placeholder-white/40 focus:outline-none focus:border-[#C8F400]"
              />

              <button
                type="button"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60"
              >
                👁
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <svg
                className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full bg-transparent border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-[#C8F400]"
              />
            </div>

            {/* Button */}
            <button className="w-full flex items-center justify-center gap-2 py-3.5 mt-2 text-base font-bold rounded-lg bg-[#C8F400] text-black hover:opacity-90 transition">
              Create Account →
            </button>
          </form>

          <p className="text-center text-white/30 text-sm mt-6">
            Already have an account?{" "}
            <p
              onClick={() => navigate("/login")}
              className="text-[#C8F400] hover:underline font-semibold cursor-pointer"
            >
              Sign in
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
