import React from "react";
import { FcOpenedFolder } from "react-icons/fc";

function Folder({ folderName }) {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center cursor-pointer"
        onDoubleClick={() => console.log("double clicked")}
      >
        <FcOpenedFolder className="text-9xl" />
        <p className="select-none"> {folderName} </p>
      </div>
    </div>
  );
}

export default Folder;
