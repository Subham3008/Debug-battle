import { useState } from "react";
import { LockKeyhole, LogIn, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router";
import ThemeToggle from "../../../shared/theme/ThemeToggle";
import { loginUser } from "../services/auth.api";
import { saveAuthUser } from "../utils/authStorage";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const data = await loginUser(formData);
      saveAuthUser(data.user);
      navigate("/analytics");
    } catch (apiError) {
      setError(apiError.response?.data?.message || "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--surface)] px-4 py-6 text-[var(--text)]">
      <div className="mx-auto flex max-w-5xl justify-end">
        <ThemeToggle />
      </div>

      <section className="mx-auto mt-12 w-full max-w-md rounded-lg border border-[var(--border)] bg-[var(--panel)] p-7 shadow-[var(--shadow)]">
        <div className="mb-8">
          <p className="text-sm font-medium text-[var(--accent)]">Welcome back</p>
          <h1 className="mt-2 text-3xl font-semibold text-[var(--text)]">Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)]">
              <Mail size={16} />
              Email or username
            </span>
            <input
              type="text"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)]"
              required
            />
          </label>

          <label className="block">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)]">
              <LockKeyhole size={16} />
              Password
            </span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)]"
              required
            />
          </label>

          {error ? (
            <p className="rounded-md border border-[var(--danger-border)] bg-[var(--danger-bg)] px-4 py-3 text-sm text-[var(--danger-text)]">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-4 py-3 font-semibold text-white transition hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            <LogIn size={18} />
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[var(--muted)]">
          New here?{" "}
          <Link to="/register" className="font-medium text-[var(--accent)] hover:text-[var(--accent-strong)]">
            Create account
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Login
