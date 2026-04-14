import Input from "../../../shared/components/Input";
import FormButton from "../../../shared/components/FormButton";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  const { register, handleSubmit, errors, navigate, onLoggedSubmit } =
    useAuth();
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-between bg-slate-900 p-10 text-white">
          <div>
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="mt-4 text-slate-300 max-w-md">
              Sign in to continue to your dashboard and manage everything in one
              place.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <p className="text-sm text-slate-300">
              Secure access, smooth experience, and responsive design across all
              devices.
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 md:p-10">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900">
                Administrator Login
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Enter your details to sign in.
              </p>
            </div>

            <form onSubmit={handleSubmit(onLoggedSubmit)} className="space-y-5">
              <Input
                register={register}
                name={"email"}
                rules={{ required: "Email is required" }}
                error={errors.email}
                type={"email"}
                placeholder={"you@example.com"}
                label={"Email address"}
              />
              <Input
                register={register}
                name="password"
                rules={{ required: "Password is required" }}
                error={errors.password}
                type={"password"}
                placeholder={"Enter your password"}
                label={"Password"}
              />

              <FormButton text={"Admin login"} />
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Don’t have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="font-medium text-slate-900 hover:underline cursor-pointer"
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
