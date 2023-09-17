import React from "react";
import Select from "./Select";

const Input = ({ label, placeholder, type, width }) => {
  return (
    <>
      <div className="font-family-bebas flex flex-start items-start flex-col">
        <label className="text-lg">{label}</label>
        <input
          className={`border-2 rounded-md p-2 hover:border-slate-400 ${width}`}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
