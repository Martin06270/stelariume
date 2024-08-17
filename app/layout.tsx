import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stelariume",
  description: "Stelariume est un roman de science-fiction où une civilisation humaine explore un univers mystérieux, rempli de mondes étranges et de technologies avancées",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >*
      <StarsCanvas />
      <Navbar />
      {children}
      </body>
    </html>
  );
}
