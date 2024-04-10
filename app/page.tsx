import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  } else {
    redirect("/dashboard");
  }
  return (<>hello world</>)
}
