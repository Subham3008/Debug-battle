import React from "react";

const Input = ({ label, register, name, rules, error, ...props }) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        {...register(name, rules)}
        {...props}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
      />
      {error && <p className="text-[12px] text-red-600">{error.message}</p>}
    </div>
  );
};

export default Input;
