import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrentUser();
  console.log(user);

  if (!user) {
    redirect("/login");
  } else {
    redirect("/dashboard");
  }

  if (user)
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

