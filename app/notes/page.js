"use client";

import Image from "next/image";
import noteBanner from "@public/images//note-banner.jpg";
import { BsFillPencilFill, BsFillJournalBookmarkFill } from "react-icons/bs";
import Input from "@components/Forms/Input";
import Select from "@components/Forms/Select";
import Button from "@components/Forms/Button";
import ScrollToTopButton from "@components/ScrollToTopButton";
import { useState } from "react";
import Editor from "./editor";
import ShowNotes from "./showNotes";
import { saveNotes, updateNotes } from "@services/noteService";
import Loader from "@components/Loader";
import Alert from "@components/Alert";

function Notes() {
  const autoSave = localStorage.getItem("autoSave");
  const [create, setCreate] = useState(true);
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState();
  const [autoSaveToggle, setAutoSaveToggle] = useState(
    autoSave == "true" ? true : false
  );
  const [title, setTitle] = useState("");
  const [folderId, setFolderId] = useState("");
  const [decisionClose, setDecisionClose] = useState(false);
  const [dialogClose, setDialogClose] = useState(false);
  const [decisionClear, setDecisionClear] = useState(false);
  const [dialogClear, setDialogClear] = useState(false);

  //saving notes to DB
  const save = async (data) => {
    try {
      setLoader(true);
      console.log(data);
      if (data) {
        const notesDataObject = {
          notesData: data,
          folderId,
          title,
        };
        const res = await saveNotes(notesDataObject);
        localStorage.setItem("currentNoteId", res);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  //updating the notes by taking notes id from local storage
  const update = async (id, data) => {
    try {
      setLoader(true);
      const notesDataObject = {
        notesData: data,
        folderId,
        title,
      };
      const res = await updateNotes(id, notesDataObject);
      console.log(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    setDialogClose(true);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setDialogClear(true);
  };

  const perforomClearTask = () => {
    data.blocks.clear();
  };

  const perforomCloseTask = () => {
    setCreate(false);
    localStorage.removeItem("currentNoteId");
  };

  return (
    <main className="w-full">
      <section className="relative">
        <Image src={noteBanner} alt="note-banner" />
        <Button
          style={
            "absolute bottom-0 sm:text-base bg-gradient-to-r from-indigo-500 to-pink-500 sm:p-4 m-2 mx-5 sm:mx-10 sm:my-5 p-3"
          }
          onClick={() => setCreate(true)}
          text={<BsFillPencilFill />}
        />
        <Button
          style={
            "absolute bottom-0 sm:text-base bg-gradient-to-r from-indigo-500 to-pink-500 sm:p-4 m-2 mx-16 sm:mx-24 sm:my-5 p-3"
          }
          onClick={() => setCreate(false)}
          text={<BsFillJournalBookmarkFill />}
        />
      </section>
      <section className="container mx-auto my-4 xl:w-[90%] xl:mx-auto max-sm:w-[94%]">
        <h1 className="text-4xl font-family-bebas ">NOTES</h1>
      </section>
      <section className="container mx-auto mt-10 mb-5 xl:w-[90%] xl:mx-auto max-sm:w-[94%] max-sm:mx-auto">
        {create ? (
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="flex gap-4 items-end">
                <Input
                  label={"Title"}
                  placeholder={"Black Hole"}
                  type={"text"}
                  value={title}
                  setValue={setTitle}
                />
                <Select
                  id={"folder"}
                  label={"Folder"}
                  displayText={"Select Folder"}
                  list={["Work", "Personal"]}
                  values={[1, 2]}
                  setValue={setFolderId}
                />
                <Loader addClasses="m-4" hidden={loader ? false : true} />
              </div>
              <div className="flex gap-4 justify-end items-end max-lg:hidden">
                <div className="flex gap-2 justify-center items-center relative">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={autoSaveToggle}
                    onChange={() => {
                      e.target.checked = autoSaveToggle;
                    }}
                  />
                  <div
                    className="h-6 w-12 bg-slate-200 rounded-full cursor-pointer flex justify-end peer-checked:justify-start peer-checked:bg-slate-800"
                    onClick={() => {
                      localStorage.setItem("autoSave", !autoSaveToggle);
                      setAutoSaveToggle(!autoSaveToggle);
                    }}
                  >
                    <button className="h-full w-6 bg-gradient-to-r to-pink-400 from-indigo-500  rounded-full"></button>
                  </div>
                  <p> Auto Save </p>
                  <Button
                    text={"Save"}
                    hoverColor={"bg-slate-900"}
                    size={"sm"}
                    onClick={() => {
                      update(localStorage.getItem("currentNoteId"));
                    }}
                  />
                  <Button
                    text={"Clear"}
                    size={"sm"}
                    color={"bg-slate-400"}
                    hoverColor={"bg-slate-600"}
                    onClick={(e) => handleClear(e)}
                  />
                  <Button
                    text={"Close"}
                    size={"sm"}
                    color={"bg-red-300"}
                    hoverColor={"bg-red-500"}
                    onClick={(e) => handleClose(e)}
                  />
                </div>
              </div>
            </div>
            <Editor setData={setData} saveData={save} updateData={update} />
            <div className="flex gap-4 justify-start items-end lg:hidden">
              <div className="flex gap-2 justify-center items-center relative">
                <Button
                  text={"Save"}
                  size={"sm"}
                  onClick={() => {
                    update(localStorage.getItem("currentNoteId"));
                  }}
                />
                <Button text={"Clear"} size={"sm"} color={"bg-slate-400"} />
                <Button
                  text={"Close"}
                  size={"sm"}
                  color={"bg-red-300"}
                  hoverColor={"bg-red-500"}
                  onClick={(e) => handleClose(e)}
                />
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={autoSaveToggle}
                  onChange={(e) => (e.target.checked = autoSaveToggle)}
                />
                <div
                  className="h-6 w-12 bg-slate-200 rounded-full cursor-pointer flex justify-end peer-checked:justify-start peer-checked:bg-slate-800"
                  onClick={() => {
                    setAutoSaveToggle(!autoSaveToggle);
                  }}
                >
                  <button className="h-full w-6 bg-gradient-to-r to-pink-400 from-indigo-500  rounded-full"></button>
                </div>
                <p> Auto Save </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <ShowNotes />
          </>
        )}
      </section>
      {dialogClose && (
        <Alert
          setDecision={setDecisionClose}
          dialog={dialogClose}
          setDialog={setDialogClose}
          message={"Do you want to close this note? Your progress will be lost"}
          buttonText={"Close"}
          performTask={perforomCloseTask}
        />
      )}
      {dialogClear && (
        <Alert
          setDecision={setDecisionClear}
          dialog={dialogClear}
          setDialog={setDialogClear}
          message={"Do you want to clear this note? Your progress will be lost"}
          buttonText={"Clear"}
          performTask={perforomClearTask}
        />
      )}
      <ScrollToTopButton />
    </main>
  );
}

export default Notes;
