"use client";
import React, { useEffect, useState } from "react";
import { PiSortAscendingLight } from "react-icons/pi";
import Folder from "./folder";
import Button from "@components/Forms/Button";
import Prompt from "@components/Prompt";
import { FaPlus } from "react-icons/fa6";
import { createFolder, fetchFolders } from "@services/folderService";

function ShowNotes() {
  //   const [folderData, setFolderData] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [decision, setDecision] = useState();
  const [inputValue, setInputValue] = useState("");
  const [folders, setFolders] = useState([]);

  const folderModel = {
    folderName: inputValue,
    files: [],
  };

  const handleCreate = async () => {
    try {
      const res = await createFolder(folderModel);
    } catch (error) {
      console.error(error);
    }
  };

  const getFolders = async () => {
    try {
      const res = await fetchFolders();
      setFolders(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFolders();
  }, []);

  return (
    <>
      <div className="flex justify-between flex-rows mt-10 mb-5 items-center">
        <h6> Folders </h6>
        <div className="flex">
          <Button
            text={<FaPlus />}
            size={"lg"}
            style={"py-1 px-2 m-1"}
            onClick={() => {
              setDialog(true);
            }}
          />
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
        {folders &&
          folders.length > 0 &&
          folders.map((ele, key) => (
            <Folder key={key} folderName={ele.folderName} />
          ))}
      </div>
      {dialog && (
        <Prompt
          dialog={dialog}
          setDialog={setDialog}
          setDecision={setDecision}
          message={"Name"}
          buttonText={"Create"}
          inputValue={inputValue}
          setInputValue={setInputValue}
          performTask={handleCreate}
        />
      )}
    </>
  );
}

export default ShowNotes;
