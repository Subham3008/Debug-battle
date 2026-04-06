import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useMyContext } from "../context/AppContext";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";

const Register = () => {
  const { registeredUser, setRegisteredUser, show, setShow } = useMyContext();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  //create password logic function
  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const getStrength = (password) => {
    const value = password.trim();
    if (!value) return { label: "", level: 0 };
    if (value.length < 6) return { label: "Weak", level: 1 };
    if (value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/)) {
      return { label: "Strong", level: 3 };
    }
    if (value.match(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/)) {
      return { label: "Medium", level: 2 };
    }

    return { label: "Weak", level: 1 };
  };

  const strength = getStrength(password);

  {
    /*----Form submit function------ */
  }

  let handleFormSubmit = (data) => {
    let user = [...(registeredUser || []), data];

    setRegisteredUser(user);
    localStorage.setItem("regUser", JSON.stringify(user));

    toast.success("User registered successfully.");

    reset();
    navigate("/login");

    console.log(user);
  };

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

          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
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
                {...register("name", {
                  required: "Name is required!",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 chartars is required!",
                  },
                  maxLength: {
                    value: 30,
                    message: "Maximum 30 chartars is required!",
                  },
                })}
                type="text"
                placeholder="Full name"
                className="w-full bg-transparent border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-[#C8F400]"
              />
              {errors.name && (
                <p className="text-sm text-red-400">{errors.name.message}</p>
              )}
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
                {...register("email", {
                  required: "Email is required!",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email Format",
                  },
                })}
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-[#C8F400]"
              />
              {errors.email && (
                <p className="text-sm text-red-400">{errors.email.message}</p>
              )}
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
                {...register("password", { required: true })}
                type={show ? "text" : "password"}
                placeholder="Password (min 6 chars)"
                className="w-full bg-transparent border border-white/10 rounded-lg py-3 pl-10 pr-10 text-white placeholder-white/40 focus:outline-none focus:border-[#C8F400]"
              />

              <button
                onClick={() => setShow(!show)}
                type="button"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 cursor-pointer"
              >
                {show ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
            {password && (
              <div className="flex gap-1.5 mt-2 items-center">
                <div
                  className={`h-1 flex-1 rounded-full ${
                    strength.level >= 1 ? "bg-red-500" : "bg-white/10"
                  }`}
                ></div>

                <div
                  className={`h-1 flex-1 rounded-full ${
                    strength.level >= 2 ? "bg-yellow-500" : "bg-white/10"
                  }`}
                ></div>

                <div
                  className={`h-1 flex-1 rounded-full ${
                    strength.level >= 3 ? "bg-green-500" : "bg-white/10"
                  }`}
                ></div>

                <span
                  className={`text-xs ml-1 ${
                    strength.level === 1
                      ? "text-red-400"
                      : strength.level === 2
                        ? "text-yellow-400"
                        : "text-green-400"
                  }`}
                >
                  {strength.label}
                </span>
              </div>
            )}

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
                {...register("confirmPassword", {
                  required: true,
                })}
                type="password"
                placeholder="Confirm password"
                className="w-full bg-transparent border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-[#C8F400]"
              />
            </div>

            {/* Button */}
            <button
              className={`w-full flex items-center justify-center gap-2 py-3.5 mt-2 text-base font-bold rounded-lg ${isValid && password === confirmPassword ? "bg-[#C8F400]" : "bg-gray-500 cursor-not-allowed"}  text-black hover:opacity-90 transition`}
            >
              Create Account →
            </button>
          </form>

          <p className="text-center text-white/30 text-sm mt-6">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#C8F400] hover:underline font-semibold cursor-pointer"
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
      <div className="position: fixed; z-index: 9999; inset: 16px; pointer-events: none;">
        <div className="left: 0px; right: 0px; display: flex; position: absolute; transition: 230ms cubic-bezier(0.21, 1.02, 0.73, 1); transform: translateY(0px); bottom: 0px; justify-content: flex-end;"></div>
      </div>
    </div>
  );
};

export default Register;
