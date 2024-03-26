import React from "react";

import { redirect } from "next/navigation";

import { UserType, getCurrentUser } from "@/lib/session";

import { FilterMenubar } from "@/components/FilterMenubar";
import SectionOne from "./_components/BasePage";
import { CardContainer } from "../../../components/Internals/CardContainer";

import PageNotAccessible from "@/components/Internals/PageNotAccessible";
import ConditionalRender from "./_components/BasePage";
import BasePage from "./_components/BasePage";

const page = async () => {
  const user: UserType = await getCurrentUser();
  console.log(user);

  if (!user) {
    redirect("/login");
  }
  if (user.role === "Admin" || user.role === "Sales") {
    return (
      <div className="h-full w-full space-y-2 pb-20">
        <BasePage />
      </div>
    );
  } else {
    return <PageNotAccessible />;
  }
};

export default page;
