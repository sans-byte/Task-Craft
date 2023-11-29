"use client";

import React from "react";
import { useEffect, useState } from "react";
import Button from "./Forms/Button";
import { BsArrowUp } from "react-icons/bs";

function ScrollToTopButton() {
  const [scrollTopButton, setScrollTopButton] = useState(false);
  const handleScroll = async () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const innerHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;

    scrollTop + innerHeight > (2 * scrollHeight) / 3
      ? setScrollTopButton(true)
      : setScrollTopButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      style={`fixed bottom-5 right-5 bg-gradient-to-r from-indigo-500 to-pink-500 p-4 transition-opacity ease-in-out duration-300 ${
        scrollTopButton ? "opacity-100 " : "opacity-0"
      }`}
      text={<BsArrowUp />}
      onClick={scrollToTop}
    />
  );
}

export default ScrollToTopButton;
