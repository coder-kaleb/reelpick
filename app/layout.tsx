import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import NavContextProvider from "@/context";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dim">
      <body className={`${inter.className} bg-background-1`}>
        <NavContextProvider>
          <Nav />
          <Sidebar />
        </NavContextProvider>
        {children}
      </body>
    </html>
  );
}
