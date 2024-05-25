import React from "react";
import Select from "./Select";

function Input({
  label,
  placeholder,
  type,
  width,
  value,
  setValue,
  backgroundColor,
}) {
  return (
    <>
      <div className="font-family-bebas flex flex-start items-start flex-col">
        <label className="text-base">{label}</label>
        <input
          className={`border-[1px] border-slate-600  rounded-md px-1 py-2 hover:border-slate-400 ${width} ${backgroundColor}`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
}

export default Input;
