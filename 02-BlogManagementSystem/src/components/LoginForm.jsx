import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { MyContext } from "../context/BlogContext";
import { toast } from "react-toastify";

const LoginForm = () => {
  const { setLoggedUser, user } = MyContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let onSubmit = (data) => {
    let currentUser = user.find(
      (regUser) =>
        regUser.email === data.email && regUser.password === data.password,
    );

    if (!currentUser) {
      toast.error("User not found");
      return;
    }
    setLoggedUser(currentUser);
    localStorage.setItem("blog_current_user", JSON.stringify(currentUser));
    toast.success("User logged in successfully.");
    navigate("/"); 
    reset();
  };

  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm w-full max-w-md">
      {/* Header */}
      <div className="text-center px-6">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
          ✏️
        </div>
        <h2 className="font-semibold text-2xl">Welcome Back</h2>
        <p className="text-muted-foreground text-sm">
          Sign in to your account to continue
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-6 flex flex-col gap-6">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
              className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
              })}
              className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-primary text-white rounded-md py-2 hover:bg-primary/90 cursor-pointer"
          >
            Sign In
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-primary hover:underline cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
