import type { Metadata } from "next";
import "./globals.css";
import { fontCursive } from "@/config/fonts";



export const metadata: Metadata = {
  title: "Kasinathan Portfolio",
  description: "A portfolio showcasing Kasinathan's projects, skills, and achievements",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-192x192.png", sizes: "192x192" },
      { url: "/favicon-512x512.png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }
    ],
    shortcut: [
      { url: "/favicon.ico" }
    ]
  },
  manifest: "/site.webmanifest"
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
