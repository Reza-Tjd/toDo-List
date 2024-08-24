import React, { useState } from "react";
import "./SegmentControl.css";

export default function SegmentedControl() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const items = [
    { children: "All" },
    { children: "Done" },
    { children: "Not Done" }
  ];

  return (
    <div className="inline-flex h-9 w-full items-baseline justify-start rounded-lg bg-gray-100 p-1 sm:w-auto">
      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          className={`group inline-flex items-center justify-center whitespace-nowrap py-2 align-middle font-semibold transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-blue-700 min-w-[32px] gap-1.5 text-xs disabled:stroke-slate-400 disabled:text-slate-400 hover:stroke-blue-950 hover:text-blue-950 h-7 w-full sm:w-auto px-3 ${
            index === activeIndex
              ? "rounded-md bg-white drop-shadow text-slate-950"
              : "bg-transparent text-slate-600"
          }`}
          onClick={() => handleButtonClick(index)}
        >
          <span>{item.children}</span>
        </button>
      ))}
    </div>
  );
}
