import React from "react";

const Select = ({ id, label, list, defaultValue, border, width, onChange }) => {
  return (
    <>
      <div className="font-family-bebas flex flex-start items-start flex-col">
        <label className="text-lg">{label}</label>
        <select
          id={id}
          defaultValue={defaultValue ? defaultValue : -1}
          className={`${border} p-[10px] rounded-md cursor-pointer hover:border-indigo-200 ${width} focus:outline-none`}
          onChange={onChange}
        >
          {!defaultValue && <option value={-1}>{"Choose Option"}</option>}
          {Array.isArray(list) &&
            list.map((item, key) => (
              <option key={key} value={item}>
                {item}
              </option>
            ))}
        </select>
      </div>
    </>
  );
};

export default Select;
