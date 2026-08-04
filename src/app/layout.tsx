import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Home } from "lucide-react";
import NavMenu from "@/components/Navigation/NavMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Holy Ghost Housing",
  description: "A ministry dedicated to providing housing for men in need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="grid grid-cols-3 items-center px-4 py-2 h-16 bg-foreground text-background dark:bg-background dark:text-foreground relative">
          <Link href="/" className="justify-self-start">
            <Home className="w-6 h-6" />
          </Link>
          <h1 className="md:text-2xl text-xl font-bold justify-self-center col-start-2 text-center">
            Holy Ghost Housing
          </h1>
          <NavMenu />
        </header>
        {children}
      </body>
    </html>
  );
}
