import { Moon, Sun } from "lucide-react";
import { useTheme } from "./useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-2 text-sm font-medium text-[var(--text)] shadow-sm transition hover:border-[var(--accent)]"
      aria-label="Toggle color theme"
    >
      <span
        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 transition ${!isDark ? "bg-[var(--accent)] text-white" : "text-[var(--muted)]"}`}
      >
        <Sun size={14} />
        Light
      </span>
      <span
        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 transition ${isDark ? "bg-[var(--text)] text-[var(--surface)]" : "text-[var(--muted)]"}`}
      >
        <Moon size={14} />
        Dark
      </span>
    </button>
  );
};

export default ThemeToggle;
