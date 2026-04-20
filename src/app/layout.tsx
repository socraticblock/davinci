import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import { LenisProvider } from "@/components/lenis-provider";
import { FilmGrain } from "@/components/film-grain";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DaVinci Dental",
  description: "Simplicity is the ultimate sophistication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <FilmGrain />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
