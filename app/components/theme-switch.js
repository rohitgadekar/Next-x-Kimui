"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

export default function ThemeButton() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-1 rounded-full flex items-center justify-center transition-colors duration-300"
    >
      <div className="h-8 w-8 flex flex-col items-center justify-center">
        <IoSunny className={`sun`} size={25} color="orange" />
        <FaMoon className={`moon`} size={20} color="gray" />
      </div>
    </button>
  );
}
