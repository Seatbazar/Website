import type { Metadata, Viewport } from "next";
import { Archivo_Black, Manrope } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Manrope({ weight: ["400", "600", "800"], subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Fancy Decor - Seat Bazar | Bike Seat Covers & Accessories, Thrissur",
  description: "Stylish bike seat covers, bike accessories and vehicle accessories in Thrissur, Kerala.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
