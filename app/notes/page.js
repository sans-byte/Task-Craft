"use client";

import Image from "next/image";
import noteBanner from "@assets/images/note-banner.jpg";
import { BsFillPencilFill, BsFillJournalBookmarkFill } from "react-icons/bs";
import Input from "@components/Forms/Input";
import Select from "@components/Forms/Select";
import Button from "@components/Forms/Button";
import ScrollToTopButton from "@components/ScrollToTopButton";
import { useState } from "react";
import Editor from "./editor";
import ShowNotes from "./showNotes";

const Notes = () => {
  const [create, setCreate] = useState(true);
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(true);

  const save = async () => {
    if (data) {
      await data
        .save()
        .then((outputData) => {
          console.log("Article data: ", outputData);
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    }
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
              <div className="flex gap-4">
                <Input
                  label={"Title"}
                  placeholder={"Black Hole"}
                  type={"text"}
                />
                <Select
                  id={"folder"}
                  label={"Folder"}
                  displayText={"Select Folder"}
                />
              </div>
              <div className="flex gap-4 justify-end items-end max-md:hidden">
                <div className="flex gap-2 justify-center items-center relative">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={toggle}
                    onChange={(e) => (e.target.checked = toggle)}
                  />
                  <div
                    className="h-6 w-12 bg-slate-200 rounded-full cursor-pointer flex justify-end peer-checked:justify-start peer-checked:bg-slate-800"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <button className="h-full w-6 bg-gradient-to-r to-pink-400 from-indigo-500  rounded-full"></button>
                  </div>
                  <p> Auto Save </p>
                  <Button text={"Save"} size={"sm"} onClick={save} />
                  <Button text={"Clear"} size={"sm"} color={"bg-slate-400"} />
                </div>
              </div>
            </div>
            <Editor setData={setData} />
            <div className="flex gap-4 justify-start items-end md:hidden">
              <div className="flex gap-2 justify-center items-center relative">
                <Button text={"Save"} size={"sm"} />
                <Button text={"Clear"} size={"sm"} color={"bg-slate-400"} />
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={toggle}
                  onChange={(e) => (e.target.checked = toggle)}
                />
                <div
                  className="h-6 w-12 bg-slate-200 rounded-full cursor-pointer flex justify-end peer-checked:justify-start peer-checked:bg-slate-800"
                  onClick={() => {
                    setToggle(!toggle);
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
      <ScrollToTopButton />
    </main>
  );
};

export default Notes;
