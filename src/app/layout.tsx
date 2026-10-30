import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Ajay Kote | Portfolio",
  description:
    "Portfolio of Ajay Kote — CSE undergrad and full-stack developer building React, Node.js, and ML products. 1700+ LeetCode, SIH semi-finalist."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${jetbrains.variable} relative min-h-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
