import React from "react";

const Button = ({ type, size, text, color, style, onClick, hoverColor }) => {
  // const colorData = color && color.slice(-3);
  // const newColorData = parseInt(colorData) + 100;
  // const hoverColor = color && color.slice(0, -3) + newColorData;
  // const hoverClass = hoverColor ? `hover:${hoverColor}` : "hover:bg-slate-900";

  // bug : hoverClass is not getting generated dynamically somehow it works after we use it once manually and let the project cache it for once

  return (
    <>
      <button
        onClick={onClick}
        className={`${
          color ? color : "bg-slate-800"
        } hover:${hoverColor} ${style}  text-${size} ${
          style ? style : "py-2 px-5 m-1"
        }  rounded-full font-family-bebas text-white font-bold `}
        type={`${type}`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
