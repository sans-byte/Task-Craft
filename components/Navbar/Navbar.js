import Button from "@components/Forms/Button";
import Link from "next/link";
import React from "react";
import { GiCutDiamond, GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const isSignedIn = false;
  return (
    <main className="fixed z-10 w-screen backdrop-blur-sm bg-white/20">
      <nav className="flex items-center container mx-auto">
        <section className="flex justify-start items-start flex-col mx-4">
          <GiCutDiamond className="text-4xl m-2  " />
          {/* <h3 className="text-2xl font-family-shadowhand text-white">
            TaskCraft
          </h3> */}
        </section>

        <ul className="font-family-bebas flex lg:flex-[0.5] flex-1 justify-around items-center font-sans text-white max-sm:hidden mx-auto">
          <Link href={"/"}>
            <li className="nav-li">HOME</li>
          </Link>
          <Link href={"/notes"}>
            <li className="nav-li">NOTES</li>
          </Link>
          <Link href={"/todo"}>
            <li className="nav-li">TODO LIST</li>
          </Link>
        </ul>

        <section className="flex justify-end items-center me-8 max-sm:hidden">
          {isSignedIn ? <div></div> : <Button text={"Sign In"} />}
        </section>

        <section className="flex justify-end w-full mx-6 sm:hidden">
          <GiHamburgerMenu className="text-lg cursor-pointer" />
        </section>
      </nav>
    </main>
  );
};

export default Navbar;
