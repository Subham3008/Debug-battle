import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useMyContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

const RightPanel = () => {
  const navigate = useNavigate();
  const { registeredUser, setLoggedUser, show, setShow } = useMyContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  let handleFormSubmit = (data) => {
    let user = registeredUser.find(
      (user) => user.email === data.email && user.password === data.password,
    );

    if (!user) {
      toast.error("User not found");
      reset();
      return;
    }
    setLoggedUser(user);
    navigate("/dashboard");
    localStorage.setItem("logUser", JSON.stringify(user));
    toast.success("User logged in successfully.");
    reset();
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="w-full max-w-md mx-auto animate-[scale-in_0.3s_ease]">
        {/* Logo (hidden on lg screens) */}
        <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
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
          <h2 className="font-bold text-2xl mb-1 text-white">Sign in</h2>
          <p className="text-white/40 text-sm mb-8">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
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
                name="email"
                placeholder="Email address"
                autoComplete="email"
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
                placeholder="Password"
                autoComplete="current-password"
                className="w-full bg-transparent border border-white/10 rounded-lg py-3 pl-10 pr-10 text-white placeholder-white/40 focus:outline-none focus:border-[#C8F400]"
              />
              {errors.password && (
                <p className="text-sm text-red-400">
                  {errors.password.message}
                </p>
              )}

              <button
                onClick={() => setShow(!show)}
                type="button"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition cursor-pointer"
              >
                {show ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              className={`w-full flex items-center justify-center gap-2 py-3.5 mt-2 text-base font-bold rounded-lg ${isValid ? "bg-[#C8F400]" : "bg-gray-500 cursor-not-allowed"} text-black hover:opacity-90 transition`}
            >
              Sign in →
            </button>
          </form>

          <p className="text-center text-white/30 text-sm mt-6">
            Don&apos;t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-[#C8F400] hover:underline font-semibold cursor-pointer"
            >
              Create one
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
