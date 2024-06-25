import React from "react";
import Select from "./Select";

function Input({
  label,
  required,
  placeholder,
  type,
  width,
  value,
  setValue,
  backgroundColor,
  showError = false,
}) {
  return (
    <>
      <div className="font-family-bebas flex flex-start items-start flex-col">
        <label className="text-base">
          {label}
          <span className="text-red-500">{required && `*`} </span>
        </label>
        <input
          className={`border-[1px] ${
            showError ? `border-red-500` : `border-slate-600`
          } rounded-md px-1 py-2 hover:border-slate-400 ${width} ${backgroundColor}`}
          type={type}
          placeholder={placeholder}
          value={value}
          required
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </>
  );
}

export default Input;
