import type { Metadata } from "next";

import { Toaster } from "@/components/ui/sonner"

import { Navbar } from "@/components/shared/navbar/navbar";
import { lato } from "@/app/fonts";

import "./globals.css";

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
      <body className={lato.className}>
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
