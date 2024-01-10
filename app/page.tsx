import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="flex w-full">
        <Sidebar />
        <main className="h-screen w-full"></main>
      </div>
    </main>
  );
}
