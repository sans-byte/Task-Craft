import React from "react";
import Select from "./Select";

const Input = ({ label, placeholder, type, width }) => {
  return (
    <>
      <div className="font-family-bebas flex flex-start items-start flex-col">
        <label className="text-base">{label}</label>
        <input
          className={`border-[1px] border-slate-300  rounded-md px-1 py-2 hover:border-slate-400 ${width}`}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
