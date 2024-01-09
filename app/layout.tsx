import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next js starter",
  description: "Just clone and start",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex w-full">
          <Sidebar />
          <main className=" bg-secondaryBackground text-primaryText h-screen w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
