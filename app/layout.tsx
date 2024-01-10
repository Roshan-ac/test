import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cashkr - Admin Panel",
  description: "cashkr admin dashboard",
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
          <main className=" h-screen w-full bg-secondaryBackground text-primaryText">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
