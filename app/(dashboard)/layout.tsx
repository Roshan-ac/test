import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import "react-photo-view/dist/react-photo-view.css";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <Toaster />
      <Navbar />
      <div className="flex w-full justify-end">
        <Sidebar />
        <main className="w-[82%] mt-10 bg-secondaryBackground text-primaryText">
          {children}
        </main>
      </div>
    </main>
  );
}
