import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="flex w-full justify-end">
        <Sidebar />
        <main className="h-full w-full bg-secondaryBackground text-primaryText">
          Hello!
        </main>
      </div>
    </main>
  );
}
