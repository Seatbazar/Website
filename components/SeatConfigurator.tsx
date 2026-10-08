"use client";

import { useState, type CSSProperties } from "react";
import { waLink } from "@/lib/shop";

type Swatch = { name: string; hex: string };

const COVERS: Swatch[] = [
  { name: "Black", hex: "#1c1c1f" },
  { name: "Oxblood", hex: "#8b1e2d" },
  { name: "Navy", hex: "#1d3557" },
  { name: "Tan", hex: "#b07a3c" },
  { name: "Forest", hex: "#2f6b4a" },
  { name: "Grey", hex: "#7a7d85" },
];

const STITCHES: Swatch[] = [
  { name: "Gold", hex: "#e0b04a" },
  { name: "White", hex: "#f2f2f2" },
  { name: "Red", hex: "#d33a3a" },
  { name: "Blue", hex: "#4a8fe0" },
];

function Chips({ label, list, value, onChange }: { label: string; list: Swatch[]; value: Swatch; onChange: (s: Swatch) => void }) {
  return (
    <div className="chips" role="group" aria-label={label}>
      {list.map((s) => (
        <button
          key={s.name}
          type="button"
          className="chip"
          style={{ background: s.hex }}
          aria-label={s.name}
          aria-pressed={s === value}
          onClick={() => onChange(s)}
        />
      ))}
    </div>
  );
}

export default function SeatConfigurator() {
  const [car, setCar] = useState(false);
  const [cover, setCover] = useState(COVERS[0]);
  const [stitch, setStitch] = useState(STITCHES[0]);

  const vehicle = car ? "car seat" : "bike seat";
  const msg = `Hi, I'd like a ${cover.name} ${vehicle} cover with ${stitch.name} stitching. Please share price and availability.`;
  const vars = { "--seat": cover.hex, "--stitch": stitch.hex } as CSSProperties;

  return (
    <div className="cfg" style={vars}>
      <div className="tabs" role="group" aria-label="Vehicle type">
        <button type="button" aria-pressed={!car} onClick={() => setCar(false)}>Bike seat</button>
        <button type="button" aria-pressed={car} onClick={() => setCar(true)}>Car seat</button>
      </div>
      <div className="view">
        {car ? (
          <svg viewBox="0 0 300 300" role="img" aria-label="Car seat preview">
            <ellipse cx="150" cy="288" rx="110" ry="9" fill="#000" opacity=".18" />
            <rect className="seat-body" x="104" y="10" width="92" height="48" rx="20" />
            <path className="seat-body" d="M66 82c0-14 10-22 24-22h120c14 0 24 8 24 22l12 124H54z" />
            <path className="seat-body" d="M48 212h204c10 0 16 8 14 18l-6 38c-1 8-8 12-16 12H56c-8 0-15-4-16-12l-6-38c-2-10 4-18 14-18z" />
            <path className="st" d="M118 80v110M182 80v110M80 238h140" />
            <path d="M92 80h116" fill="none" stroke="#fff" strokeOpacity=".22" strokeWidth="5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 420 250" role="img" aria-label="Bike seat preview">
            <ellipse cx="210" cy="226" rx="140" ry="12" fill="#000" opacity=".18" />
            <rect x="196" y="172" width="28" height="42" rx="4" fill="#6b5a52" />
            <rect x="150" y="206" width="120" height="10" rx="5" fill="#6b5a52" />
            <path className="seat-body" d="M28 92c0-26 36-42 96-42h170c56 0 98 26 98 62 0 26-22 44-52 44H196c-40 0-56 10-70 24-10 10-30 8-46-2-34-20-52-46-52-86z" />
            <path className="st" d="M56 96c12 22 36 38 66 30 22-6 40-14 76-14h150" />
            <path d="M92 66c30-8 70-8 120-8h90" fill="none" stroke="#fff" strokeOpacity=".25" strokeWidth="5" strokeLinecap="round" />
          </svg>
        )}
      </div>
      <div className="lab">Cover colour</div>
      <Chips label="Cover colour" list={COVERS} value={cover} onChange={setCover} />
      <div className="lab">Stitch colour</div>
      <Chips label="Stitch colour" list={STITCHES} value={stitch} onChange={setStitch} />
      <a className="btn btn-wa" href={waLink(msg)} target="_blank" rel="noopener">
        Request this design on WhatsApp
      </a>
    </div>
  );
}
