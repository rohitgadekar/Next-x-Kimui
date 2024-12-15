"use client";
import { GiEagleHead } from "react-icons/gi";
import { useState, useEffect } from "react";
import ToggleSwitch from "@/app/components/theme-switch";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav className="backdrop-blur-lg p-4">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center">
          <Link href={"/"}>
            <div className="flex items-center space-x-2 z-50">
              <GiEagleHead size={30} color="black dark:white" />
              <span className="text-2xl font-semibold dark:text-white ">
                KIMUI
              </span>
            </div>
          </Link>
          <div className="hidden md:flex md:order-4 ">
            <ToggleSwitch />
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            {siteConfig.navItems.map((i, _) => {
              return (
                <a
                  key={i.label + _}
                  href={i.href}
                  className="dark:text-white hover:text-green-500 transition duration-300"
                >
                  {i.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden pr-5 flex space-x-4 items-center">
            <ToggleSwitch />
            <button
              onClick={toggleMenu}
              className="text-white flex flex-wrap items-start justify-start cursor-pointer z-50 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-4 flex flex-wrap items-start justify-center relative cursor-pointer">
                <span
                  className={`absolute h-0.5 w-full bg-zinc-600 transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-full bg-zinc-600 transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0" : "translate-y-2"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-full bg-zinc-600 transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 translate-y-2.5" : "translate-y-4"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Full-screen Mobile Menu */}
        <div
          className={`fixed inset-0 h-screen z-40 flex items-center justify-center bg-zinc-900 transition-opacity duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="text-center">
            {siteConfig.navItems.map((i, _) => {
              return (
                <a
                  key={i + _}
                  href={i.href}
                  className="block text-white text-lg mb-6 hover:text-purple-200 transition duration-300"
                  onClick={toggleMenu}
                >
                  {i.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
