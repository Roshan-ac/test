import React from "react";
import { redirect } from "next/navigation";
import { UserType, getCurrentUser } from "@/lib/session";
import { FilterMenubar } from "@/components/FilterMenubar";
import { CardContainer } from "../../../components/Internals/CardContainer";
import PageNotAccessible from "@/components/Internals/PageNotAccessible";
import BasePage from "./_components/BasePage";


const page = async () => {
  const user: UserType = await getCurrentUser();
  console.log(user);

  if (!user) {
    redirect("/login");
  }
  if (user.role === "Admin" || user.role === "Sales") {
    return (
      <div className="w-full bg-secondaryBackground space-y-2 pb-20">
        <BasePage />
      </div>
    );
  } else {
    return <PageNotAccessible />;
  }
};

export default page;
