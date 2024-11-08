"use client";
import { TextGradient } from "@rohitgadekar/kimui";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20  ">
      <main className="flex flex-col  gap-8 row-start-2 items-center sm:items-start">
        <h1>Ship faster with</h1>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          <h1 className="text-4xl">NEXT</h1>
          <h1 className="text-2xl font-light">x</h1>
          <h1 className="text-4xl">
            kimui <sup className="text-xs">v8.0.5</sup>
          </h1>
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.js
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </main>
    </div>
  );
}
