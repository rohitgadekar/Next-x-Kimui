"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { FaRegCopyright } from "react-icons/fa6";
import { Sheet,Chip } from "@rohitgadekar/kimui";

export default function Footer() {
  const sheetRef = useRef(null);
  const openSheet = () => {
    sheetRef.current?.openSheet();
  };
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center border-zinc-700 border-zinc-300 border-t-[1px] text-sm py-3">
      <Sheet ref={sheetRef}>
        <p className="text-justify text-md">
          kimui is currently under active development with ongoing updates and
          new deployments. Stay tuned for enhanced components, improved
          performance, and new features to help you build faster and better UI
          experiences. Your feedback is valuable as we continue to improve! 🚀💻
        </p>
      </Sheet>
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

      <Chip  variant="pastel" onClick={openSheet}>
        update
      </Chip>
    </footer>
  );
}
