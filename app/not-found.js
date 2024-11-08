"use client";
import { Button } from "@rohitgadekar/kimui";
import React from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

function NotFound() {
  const path = usePathname().split("/")[1];
  return (
    <>
      <div className="z-10 min-h-screen rounded-2xl flex flex-col items-center w-full mt-2 p-10 text-zinc-700 dark:text-white">
        <h1 className="z-10 font-trap text-9xl text-success">404</h1>
        <span className="w-11/12 lg:w-1/2 z-10">
          <h1 className="font-graftyne text-center text-lg z-10 lowercase">
            {path} not found
            <br />
            <hr className="h-px my-8 border-0 dark:bg-[#ffffff33] bg-zinc-300 z-10 text-lg lowercase" />
            Get started by editing page.js in app directory
          </h1>
        </span>
      </div>
    </>
  );
}

export default NotFound;
