import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import { Dancing_Script as FontCursive } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontCursive = FontCursive({
  subsets: ["latin"],
  variable: "--font-cursive",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});