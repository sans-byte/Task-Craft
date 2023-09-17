import Link from "next/link";
import React from "react";
import { GiCutDiamond, GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const isSignedIn = false;
  return (
    <main className="fixed z-10 w-screen backdrop-blur-sm bg-white/20">
      <nav className="flex items-center container mx-auto">
        <section className="flex flex-1 justify-start items-start flex-col mx-4">
          <GiCutDiamond className="text-5xl m-2  " />
          {/* <h3 className="text-2xl font-family-shadowhand text-white">
            TaskCraft
          </h3> */}
        </section>

        <ul className="font-family-bebas flex flex-1 justify-around font-sans tracking-wide text-lg text-white font-medium max-sm:hidden">
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

        <section className="flex flex-1 justify-end items-center w-full max-sm:hidden">
          {isSignedIn ? (
            <div></div>
          ) : (
            <button className="bg-black text-white rounded-full font-family-bebas py-2 px-4">
              Sign in
            </button>
          )}
        </section>

        <section className="flex justify-end w-full mx-4 sm:hidden">
          <GiHamburgerMenu className="text-lg cursor-pointer" />
        </section>
      </nav>
    </main>
  );
};

export default Navbar;
