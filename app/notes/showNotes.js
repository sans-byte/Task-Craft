import React from "react";
import { PiSortAscendingLight } from "react-icons/pi";
import { FcOpenedFolder } from "react-icons/fc";

function ShowNotes() {
  //   const [folderData, setFolderData] = useState([]);
  return (
    <>
      <div className="flex justify-between flex-rows mt-10 mb-5 items-center">
        <h6> Folders </h6>
        <div className="flex">
          <input
            className={`border-[1px] border-slate-300 rounded-md rounded-r-none border-r-0 p-2 hover:border-slate-400}`}
            type="search"
            placeholder="Search Folders"
          />
          <button className="py-2 px-4 border-[1px] border-slate-300 rounded-md rounded-l-none flex justify-center items-center">
            <PiSortAscendingLight className="ms-1 me-2 text-2xl text-slate-400" />{" "}
            Sort
          </button>
        </div>
      </div>
      <hr className="my-5 h-[0.8px] border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
      <div className="my-12 grid lg:grid-cols-5 gap-4">
        <div
          className="flex flex-col justify-center items-center cursor-pointer"
          onDoubleClick={() => console.log("double clicked")}
        >
          <FcOpenedFolder className="text-9xl" />
          <p className="select-none"> Coding </p>
        </div>
      </div>
    </>
  );
}

export default ShowNotes;
