"use client";

import { useState } from "react";
import { waLink } from "@/lib/shop";

const colours = [
  { name: "Black", hex: "#15161a" },
  { name: "Red", hex: "#c2202b" },
  { name: "Blue", hex: "#1f5fbf" },
  { name: "Tan", hex: "#a8712f" },
  { name: "Green", hex: "#2f8a4b" },
];

export default function SeatPicker() {
  const [selected, setSelected] = useState(colours[0]);

  return (
    <div className="stage">
      <svg viewBox="0 0 420 250" role="img" aria-label="Bike seat cover preview">
        <ellipse cx="210" cy="222" rx="150" ry="14" fill="#000" opacity=".35" />
        <rect x="196" y="170" width="28" height="42" rx="4" fill="#3a3c44" />
        <rect x="150" y="204" width="120" height="10" rx="5" fill="#3a3c44" />
        <path
          className="seat-body"
          style={{ fill: selected.hex }}
          d="M28 92c0-26 36-42 96-42h170c56 0 98 26 98 62 0 26-22 44-52 44H196c-40 0-56 10-70 24-10 10-30 8-46-2-34-20-52-46-52-86z"
          stroke="#000"
          strokeOpacity=".25"
          strokeWidth="3"
        />
        <path d="M56 96c12 22 36 38 66 30 22-6 40-14 76-14h150" fill="none" stroke="#f5b700" strokeWidth="2.5" strokeDasharray="7 7" strokeLinecap="round" />
        <path d="M92 66c30-8 70-8 120-8h90" fill="none" stroke="#fff" strokeOpacity=".28" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <div className="row">
        <div className="swatches" role="group" aria-label="Choose a seat cover colour">
          <span>Pick a colour:</span>
          {colours.map((c) => (
            <button
              key={c.name}
              type="button"
              className="sw"
              style={{ background: c.hex }}
              aria-pressed={selected.name === c.name}
              aria-label={c.name}
              onClick={() => setSelected(c)}
            />
          ))}
        </div>
        <a
          className="btn btn-wa btn-sm"
          href={waLink(`Hi, I'm interested in a ${selected.name} bike seat cover. Please share designs and prices.`)}
          target="_blank"
          rel="noopener"
        >
          Ask for this colour
        </a>
      </div>
    </div>
  );
}
