import React from "react";

function Select({
  id,
  label,
  list,
  defaultValue,
  width,
  onChange,
  displayText,
  values,
  setValue,
}) {
  return (
    <>
      <div className="font-family-bebas flex flex-start items-start flex-col">
        <label className="text-base">{label}</label>
        <select
          id={id}
          defaultValue={defaultValue ? defaultValue : -1}
          className={`border-[1px] border-slate-300 px-2 py-[10px] rounded-md cursor-pointer hover:border-indigo-200 ${width} focus:outline-none`}
          onChange={(e) => setValue(e.target.value)}
        >
          {!defaultValue && <option value={-1}>{`${displayText}`}</option>}
          {Array.isArray(list) &&
            list.map((item, key) => (
              <option key={key} value={values[key]}>
                {item}
              </option>
            ))}
        </select>
      </div>
    </>
  );
}

export default Select;
