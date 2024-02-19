import { FilterMenubar } from "@/components/FilterMenubar";
import React from "react";
import SectionOne from "./SectionOne";
import { CardContainer } from "../../../components/Internals/CardContainer";
import { UserType, getCurrentUser } from "@/lib/session";
import PageNotAccessible from "@/components/Internals/PageNotAccessible";
import { redirect } from "next/navigation";

const page = async () => {
  const user: UserType = await getCurrentUser();
  console.log(user);

  if (!user) {
    redirect("/login");
  }

  if (user.role === "Admin" || user.role === "Sales")
    return (
      <div className="h-full w-full space-y-2 pb-20">
        <FilterMenubar />
        <SectionOne varient="lead" />
        <CardContainer />
      </div>
    );
  else {
    return <PageNotAccessible />;
  }
};

export default page;
