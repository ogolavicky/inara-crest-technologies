import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";  // <-- This imports our new Navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inara Crest Technologies",
  description: "Your trusted partner for ISP solutions, domain registration, email services, website hosting, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />  {/* <-- Navbar added here – appears on all pages */}
        {children}  {/* This is where the page content (like home) goes */}
      </body>
    </html>
  );
}