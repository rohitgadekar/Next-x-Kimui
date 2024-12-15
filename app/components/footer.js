"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center border-zinc-700 border-zinc-300 border-t-[1px] text-sm py-3">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://kimui.rohitgadekar.dev/docs/getting-started/components/accordion"
        target="_blank"
        rel="noopener noreferrer"
      >
        components
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://kimui.rohitgadekar.dev/docs/getting-started/introduction"
        target="_blank"
        rel="noopener noreferrer"
      >
        go to kimui →
      </a>

      <p className="flex flex-wrap items-center gap-2">
        template by _
        <Link href={"https://www.rohitgadekar.dev"} target="_blank">
          rohitgadekar
        </Link>
      </p>
    </footer>
  );
}
