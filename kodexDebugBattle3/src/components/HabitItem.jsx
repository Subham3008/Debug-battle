import { useState } from "react";
import { useHabit } from "../hooks/useHabit";

const priorityStyles = {
  Low: "text-emerald-600 bg-emerald-50",
  Medium: "text-amber-600 bg-amber-50",
  High: "text-red-600 bg-red-50",
};

const HabitItem = ({ habit }) => {
  const { toggleHabit, deleteHabit, updateHabit, getStreak } = useHabit();

  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState(habit);

  const today = new Date().toISOString().split("T")[0];
  const isDoneToday = (habit.completedDates ?? []).includes(today);
  const streak = getStreak(habit.completedDates);
  const priority = habit.priority || "Medium";
  const category = habit.category || "Focus";
  const goalUnit = (habit.unit || "mins").toLowerCase();
  const motivation = habit.motivation?.trim() || "Stay consistent and keep moving.";

  const handleSave = () => {
    updateHabit(habit.id, editData);
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all">
        <div className="space-y-4">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
            Edit Habit
          </p>

          <input
            value={editData.name}
            className="w-full rounded-md border border-indigo-500 px-3 py-2.5 text-sm outline-none ring-1 ring-indigo-500/20"
            onChange={(e) =>
              setEditData((prev) => ({ ...prev, name: e.target.value }))
            }
          />

          <div className="grid grid-cols-2 gap-3">
            <select
              value={editData.priority || "Medium"}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-indigo-500"
              onChange={(e) =>
                setEditData((prev) => ({ ...prev, priority: e.target.value }))
              }
            >
              <option value="Low">Low Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="High">High Priority</option>
            </select>

            <select
              value={editData.category || "Health"}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-indigo-500"
              onChange={(e) =>
                setEditData((prev) => ({ ...prev, category: e.target.value }))
              }
            >
              <option value="Health">Health</option>
              <option value="Focus">Focus</option>
              <option value="Growth">Growth</option>
              <option value="Mindset">Mindset</option>
            </select>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleSave}
              className="flex-1 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 active:bg-indigo-800"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => {
                setEditData(habit);
                setEditing(false);
              }}
              className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase text-indigo-600">
            {category}
              </span>
              <span
                className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${priorityStyles[priority]}`}
              >
                {priority}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-800">{habit.name}</h3>
          </div>

          <div className="ml-4 text-right">
            <div className="flex items-center justify-end text-slate-700">
              <span className="text-sm font-bold">{streak}</span>
              <span className="ml-1 text-xs font-black text-orange-500">^^</span>
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-tight text-slate-400">
              Streak
            </p>
          </div>
        </div>

        <p className="border-l-2 border-slate-100 pl-3 py-0.5 text-sm text-slate-500">
          {motivation}
        </p>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="text-xs">
            <span className="block font-medium uppercase text-slate-400">Goal</span>
            <span className="font-semibold text-slate-700">
              {habit.goalValue} {goalUnit}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => setEditing(true)}
                className="p-1.5 text-slate-600 transition-colors hover:text-blue-900"
                title="Edit"
              >
                Edit
              </button>

              <button
                type="button"
                onClick={() => deleteHabit(habit.id)}
                className="p-1.5 text-slate-700 transition-colors hover:text-red-500"
                title="Delete"
              >
                Delete
              </button>
            </div>

            <button
              type="button"
              onClick={() => toggleHabit(habit.id)}
              className={`rounded text-sm font-semibold transition-colors ${
                isDoneToday
                  ? "bg-indigo-700 px-4 py-2 text-white hover:bg-indigo-800"
                  : "bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
              }`}
            >
              {isDoneToday ? "Completed" : "Complete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitItem;
