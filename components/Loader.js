import React from "react";
import "@styles/loader.css";

function Loader({ addClasses, hidden }) {
  return <div className={`loader ${addClasses} ${hidden && "hidden"}`}></div>;
}

export default Loader;
