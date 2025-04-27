import type { Metadata } from "next";
import "./globals.css";
import { fontCursive } from "@/config/fonts";



export const metadata: Metadata = {
  title: "Kasinathan Portfolio",
  description: "A portfolio showcasing Kasinathan's projects, skills, and achievements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontCursive.variable} ${fontCursive.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
