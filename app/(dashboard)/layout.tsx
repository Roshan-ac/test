import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      <div className="flex w-full justify-end">
        <Sidebar />
        <main className="w-[85%] bg-secondaryBackground text-primaryText">
          {children}
        </main>
      </div>
    </main>
  );
}
