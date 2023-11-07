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

const Notes = () => {
  const create = true;
  const [data, setData] = useState();

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
            "absolute bottom-0 sm:text-2xl bg-gradient-to-r from-indigo-500 to-pink-500 sm:p-5 m-3 mx-5 sm:mx-12 sm:my-5 p-3"
          }
          text={<BsFillPencilFill />}
        />
        <Button
          style={
            "absolute bottom-0 sm:text-2xl bg-gradient-to-r from-indigo-500 to-pink-500 sm:p-5 m-3 mx-16 sm:mx-32 sm:my-5 p-3"
          }
          text={<BsFillJournalBookmarkFill />}
        />
      </section>
      <section className="container mx-auto my-4">
        <h1 className="text-5xl font-family-bebas ">NOTES</h1>
      </section>
      <section className="container mx-auto">
        {create ? (
          <div className="flex flex-col">
            <div className="flex gap-4">
              <Input label={"Title"} placeholder={"Black Hole"} type={"text"} />
              <Select
                id={"folder"}
                label={"Folder"}
                displayText={"Select Folder"}
                border={"border-2"}
              />
            </div>
            <Editor setData={setData} />
            <section>
              <Button
                text={"Save"}
                size={"lg"}
                type={"submit"}
                onClick={save}
              />
              <Button
                text={"Cancel"}
                size={"lg"}
                type={"reset"}
                color={"bg-slate-500"}
              />
            </section>
          </div>
        ) : (
          <></>
        )}
      </section>
      <ScrollToTopButton />
    </main>
  );
};

export default Notes;
