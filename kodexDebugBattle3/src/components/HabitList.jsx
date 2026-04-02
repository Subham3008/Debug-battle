import { useHabit } from "../hooks/useHabit";
import HabitItem from "./HabitItem";

const priorityTone = {
  High: "1 High Tasks",
  Medium: "1 Medium Task",
  Low: "1 Low Task",
};

const HabitList = () => {
  const { habits, showAll, setShowAll } = useHabit();

  const today = new Date().toISOString().split("T")[0];

  const completedToday = habits.filter((h) =>
    (h.completedDates ?? []).includes(today),
  ).length;

  const progressPercent =
    habits.length > 0 ? Math.round((completedToday / habits.length) * 100) : 0;

  const topCategory = habits.reduce((acc, h) => {
    const category = h.category || "Focus";
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const mainFocus =
    Object.keys(topCategory).length > 0
      ? Object.keys(topCategory).reduce((a, b) =>
          topCategory[a] < topCategory[b] ? b : a,
        )
      : "Focus";

  const highPriorityCount = habits.filter(
    (habit) => (habit.priority || "Medium") === "High",
  ).length;

  const headline =
    progressPercent === 100
      ? "All set"
      : progressPercent > 0
        ? "Making progress"
        : "Keep going";

  if (habits.length === 0) {
    return (
      <div className="mx-auto mt-12 max-w-md rounded-lg border border-slate-200 bg-slate-50 p-8 text-center">
        <h3 className="text-lg font-semibold text-slate-700">
          No habits yet
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          Start your journey by adding a new habit above.
        </p>
      </div>
    );
  }

  const visibleHabits = showAll ? habits : habits.slice(0, 3);
  const hasHiddenHabits = habits.length > visibleHabits.length;

  return (
    <div className="mx-auto mt-6 max-w-md px-4 pb-20">
      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Daily Progress
            </span>
            <h2 className="text-xl font-bold text-slate-800">
              {headline}
            </h2>
          </div>
          <div className="text-right">
            <span className="text-sm font-medium text-slate-600">
            {completedToday} / {habits.length}
            </span>
          </div>
        </div>

        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full bg-indigo-600 transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
          <div>
            <p className="text-[11px] font-bold uppercase text-slate-400">
              Focus
            </p>
            <p className="text-sm font-semibold text-slate-700">
              {mainFocus}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase text-slate-400">
              Priority
            </p>
            <p className="text-sm font-semibold text-slate-700">
              {highPriorityCount > 0 ? `${highPriorityCount} High Tasks` : priorityTone.Medium}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase text-slate-500">
          Your Routine
        </h3>
      </div>

      <div className="space-y-3">
        {visibleHabits.map((habit) => (
          <HabitItem key={habit.id} habit={habit} />
        ))}
      </div>

      {(hasHiddenHabits || showAll) && (
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-4 text-left text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4"
        >
          {showAll ? "Show fewer habits" : `Show all ${habits.length} habits`}
        </button>
      )}
    </div>
  );
};

export default HabitList;
