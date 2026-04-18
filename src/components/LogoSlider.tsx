"use client";

import { JF_COMPANIES } from "@/data";

export default function LogoSlider() {
  const names = JF_COMPANIES.map((c) => c.name);
  const items = [...names, ...names]; // duplicate for seamless loop

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white/70 backdrop-blur-xl overflow-hidden py-4 z-10 rounded-b-2xl">
      <div
        className="flex gap-12 items-center whitespace-nowrap w-max"
        style={{ animation: "logoScroll 120s linear infinite" }}
      >
        {items.map((name, i) => (
          <span key={i}>
            <span className="font-semibold text-sm text-dark/70 tracking-wider uppercase">
              {name}
            </span>
            {i < items.length - 1 && (
              <span className="text-dark/30 ml-12">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
