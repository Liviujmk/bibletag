import type { Metadata } from "next";
import { Lexend } from "next/font/google";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

import { Navbar } from "@/components/shared/navbar/navbar";

const font = Lexend({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "BibleTag - Exploring the Scriptures",
  description: "Exploring the Scriptures: Insights and Reflections",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
