import React from "react";

const FormButton = ({text}) => {
  return (
    <button
      type="submit"
      className="w-full rounded-xl bg-slate-900 px-4 py-3 font-medium text-white transition hover:bg-slate-800 active:scale-[0.99]"
    >
      {text}
    </button>
  );
};

export default FormButton;
