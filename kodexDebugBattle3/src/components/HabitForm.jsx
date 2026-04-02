import { useForm } from "react-hook-form";
import { useHabit } from "../hooks/useHabit";

const getToday = () => new Date().toISOString().split("T")[0];

const HabitForm = () => {
  const { addHabit } = useHabit();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      goalValue: "",
      unit: "mins",
      startDate: getToday(),
      category: "Mindset",
      motivation: "",
      priority: "Medium",
    },
  });

  const onCommit = (values) => {
    const payload = {
      ...values,
      goalValue: Number(values.goalValue) || 1,
      unit: values.unit || "mins",
      startDate: values.startDate || getToday(),
      category: values.category || "General",
      motivation: values.motivation?.trim() || "",
      priority: values.priority || "Medium",
    };

    addHabit(payload);
    reset({
      name: "",
      goalValue: "",
      unit: "mins",
      startDate: getToday(),
      category: "Mindset",
      motivation: "",
      priority: "Medium",
    });
  };

  return (
    <div className="w-full bg-white p-1">
      <form onSubmit={handleSubmit(onCommit)} className="space-y-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-600" htmlFor="name">
            Habit Name
          </label>
          <input
            id="name"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none transition-placeholder focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder="e.g. Morning Exercise"
            {...register("name", { required: true })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600" htmlFor="goalValue">
              Daily Goal
            </label>
            <input
              id="goalValue"
              type="number"
              min="1"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500"
              placeholder="30"
              {...register("goalValue")}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600" htmlFor="unit">
              Unit
            </label>
            <select
              id="unit"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-indigo-500"
              {...register("unit")}
            >
              <option value="mins">Minutes</option>
              <option value="pages">Pages</option>
              <option value="reps">Reps</option>
              <option value="liters">Liters</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600" htmlFor="startDate">
              Start Date
            </label>
            <input
              id="startDate"
              type="date"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 outline-none focus:border-indigo-500"
              {...register("startDate")}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-indigo-500"
              {...register("category")}
            >
              <option value="Health">Health</option>
              <option value="Focus">Focus</option>
              <option value="Growth">Growth</option>
              <option>Mindset</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-600" htmlFor="motivation">
            Motivation
          </label>
          <textarea
            id="motivation"
            rows="2"
            className="w-full resize-none rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 outline-none transition-all focus:border-indigo-500"
            placeholder="Why is this important to you?"
            {...register("motivation")}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-600">
            Priority Level
          </label>
          <div className="grid grid-cols-3 gap-2">
            {["Low", "Medium", "High"].map((level) => (
              <label
                key={level}
                className="flex cursor-pointer items-center gap-2"
              >
                <input
                  type="radio"
                  value={level}
                  className="h-4 w-4 border-slate-300 text-indigo-600"
                  {...register("priority")}
                />
                <span className="text-sm text-slate-600">{level}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-md bg-indigo-600 py-2.5 font-semibold text-white transition-colors hover:bg-indigo-700 active:bg-indigo-800"
        >
          Create Habit
        </button>
      </form>
    </div>
  );
};

export default HabitForm;
