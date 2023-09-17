"use client";

import Image from "next/image";
import noteBanner from "@assets/images/note-banner.jpg";
import { BsFillPencilFill } from "react-icons/bs";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaListUl,
  FaListOl,
  FaFileImage,
} from "react-icons/fa";
import Input from "@components/Forms/Input";
import Select from "@components/Forms/Select";
import Button from "@components/Forms/Button";
import ScrollToTopButton from "@components/ScrollToTopButton";
import { useState } from "react";

const Notes = () => {
  const create = true;
  const list = [];
  const textSizeList = ["Small", "Normal", "Medium", "Large", "Extra Large"];
  const fontFamilyList = ["Sans Serif"];
  const [note, setNote] = useState("");

  const hadleBold = () => {};
  const handleItalic = () => {};
  const handleUnderLine = () => {};
  const handleStrikeThrough = () => {};
  const handleListUl = () => {};
  const handleListOl = () => {};
  const handleImage = () => {};

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
      </section>
      <section className="container mx-auto my-4">
        <h1 className="text-5xl font-family-bebas">NOTES</h1>
      </section>

      <section className="container mx-auto">
        {create ? (
          <div className="flex flex-col">
            <div className="flex gap-4">
              <Input label={"Title"} placeholder={"Black Hole"} type={"text"} />
              <Select
                id={"folder"}
                label={"Folder"}
                list={list}
                displayText={"Select Folder"}
                border={"border-2"}
              />
            </div>
            <nav className="my-4 p-3 border-slate-200 shadow-md flex flex-row gap-3 items-center pointer-cursor">
              <Select defaultValue={"Sans Serif"} list={fontFamilyList} />
              <Select defaultValue={"Normal"} list={textSizeList} />
              <span className="text-gray-200"> | </span>
              <FaBold onClick={hadleBold} />
              <FaItalic onClick={handleItalic} />
              <FaUnderline onClick={handleUnderLine} />
              <FaStrikethrough onClick={handleStrikeThrough} />
              <span className="text-gray-200"> | </span>
              <FaListUl onClick={handleListUl} />
              <FaListOl onClick={handleListOl} />
              <span className="text-gray-200"> | </span>
              <FaFileImage onClick={handleImage} />
            </nav>
            <seciton className="my-4">
              <textarea className="w-full min-h-screen p-5 rounded-md shadow-md focus:outline-none border-transparent"></textarea>
            </seciton>
            <section className="mb-4">
              <Button text={"Save"} size={"lg"} type={"submit"} />
              <Button
                text={"Cancel"}
                size={"lg"}
                type={"reset"}
                color={"bg-slate-500"}
              />
            </section>
          </div>
        ) : (
          <div> show list </div>
        )}
      </section>
      <ScrollToTopButton />
    </main>
  );
};

export default Notes;
