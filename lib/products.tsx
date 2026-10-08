import type { ReactNode } from "react";

export type Product = {
  name: string;
  description: string;
  icon: ReactNode;
  tag?: string;
};

export const products: Product[] = [
  {
    name: "Bike seat covers",
    description: "Stylish, water-resistant covers in many colours and designs for motorcycles and scooters.",
    tag: "Popular",
    icon: (
      <>
        <path d="M6 30c0-8 8-13 20-13h22c6 0 10 4 10 8 0 3-3 5-6 5H30c-6 0-8 3-8 8H10c-2 0-4-3-4-8z" fill="currentColor" />
        <rect x="26" y="42" width="8" height="12" fill="currentColor" />
      </>
    ),
  },
  {
    name: "Handle grips & covers",
    description: "Comfortable grips and handlebar covers for a better hold on every ride.",
    icon: (
      <>
        <circle cx="32" cy="32" r="18" fill="none" stroke="currentColor" strokeWidth="8" />
        <rect x="4" y="28" width="12" height="8" fill="currentColor" />
        <rect x="48" y="28" width="12" height="8" fill="currentColor" />
      </>
    ),
  },
  {
    name: "Mirrors & lights",
    description: "Rear-view mirrors, indicators and LED lights to keep you seen and safe.",
    icon: (
      <>
        <circle cx="28" cy="32" r="16" fill="currentColor" />
        <path d="M48 24h12M48 32h14M48 40h12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: "Mobile holders & chargers",
    description: "Sturdy phone mounts and USB chargers for navigation on the move.",
    icon: (
      <>
        <rect x="18" y="6" width="28" height="46" rx="5" fill="none" stroke="currentColor" strokeWidth="5" />
        <rect x="26" y="52" width="12" height="8" fill="currentColor" />
      </>
    ),
  },
  {
    name: "Helmets & riding gear",
    description: "Helmets, gloves and rain gear for comfort in every season.",
    icon: (
      <>
        <path d="M8 38c0-16 10-26 24-26s24 10 24 26v8H8z" fill="currentColor" />
        <rect x="30" y="30" width="26" height="8" fill="#15161a" />
      </>
    ),
  },
  {
    name: "Car & scooter accessories",
    description: "Seat covers, mats, stickers and other add-ons for other vehicles.",
    icon: (
      <>
        <path d="M8 40l6-16c1-3 3-4 6-4h24c3 0 5 1 6 4l6 16v10H8z" fill="currentColor" />
        <circle cx="20" cy="50" r="6" fill="#15161a" />
        <circle cx="44" cy="50" r="6" fill="#15161a" />
      </>
    ),
  },
];
