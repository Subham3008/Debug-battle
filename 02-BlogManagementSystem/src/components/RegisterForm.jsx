import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { MyContext } from "../context/BlogContext";
import { toast } from "react-toastify";
import { nanoid } from "nanoid/non-secure";

const RegisterForm = () => {
  const { user, setUser } = MyContext();
  const navigate = useNavigate();
  const [selected, setSelected] = useState("reader");
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newUser = [...user, {data, id: nanoid()}];
    setUser(newUser);
    localStorage.setItem("blog_user", JSON.stringify(newUser));
    toast.success("User registered successfully.");
    reset();
    navigate("/login");
  };

  const password = watch("password");

  return (
    <div className="w-full max-w-md rounded-xl border bg-card text-card-foreground shadow-sm">
      {/* Header */}
      <div className="px-6 pt-6 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
          ✏️
        </div>

        <h2 className="text-2xl font-semibold">Create an Account</h2>
        <p className="text-sm text-muted-foreground">
          Join Inkwell to start reading or writing
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-6 space-y-5">
        {/* Name */}
        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            type="text"
            placeholder="John Doe"
            {...register("name", { required: "Name is required" })}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email",
              },
            })}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters required",
              },
            })}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-sm font-medium">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Account Type */}
        <div>
          <label className="text-sm font-medium">Account Type</label>

          <div className="mt-2 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                setSelected("reader");
                setValue("role", "reader");
              }}
              className={`rounded-lg border-2 p-4 text-center ${
                selected === "reader"
                  ? "border-primary bg-primary/10"
                  : "border-gray-200"
              }`}
            >
              <p className="font-medium">Reader</p>
              <p className="text-xs text-muted-foreground">Read articles</p>
            </button>

            <button
              type="button"
              onClick={() => {
                setSelected("author");
                setValue("role", "author");
              }}
              className={`rounded-lg border-2 p-4 text-center ${
                selected === "author"
                  ? "border-primary bg-primary/10"
                  : "border-gray-200"
              }`}
            >
              <p className="font-medium">Author</p>
              <p className="text-xs text-muted-foreground">Write & publish</p>
            </button>
          </div>

          {/* hidden input for RHF */}
          <input
            type="hidden"
            {...register("role", { required: "Select account type" })}
          />

          {errors.role && (
            <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-md bg-primary py-2 text-sm font-medium text-white hover:bg-primary/90 cursor-pointer"
        >
          Create Account
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-primary hover:underline cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
