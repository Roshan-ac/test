import React from "react";
import { FilterMenubar } from "@/components/FilterMenubar";
import SectionOne from "../../../components/Internals/SectionOne";
import { CardContainer } from "../../../components/Internals/CardContainer";
import { redirect } from "next/navigation";
import { UserType, getCurrentUser } from "@/lib/session";
import PageNotAccessible from "@/components/Internals/PageNotAccessible";

const page = async () => {
  const user: UserType = await getCurrentUser();
  console.log(user);

  if (!user) {
    redirect("/login");
  }
  if (user.role === "Admin" || user.role === "Sales") {
    return (
      <div className="h-full w-full space-y-2 pb-20">
        <FilterMenubar />
        <SectionOne varient="orders" />
        <CardContainer />
        <SectionOne varient="orders" />
      </div>
    );
  } else {
    return <PageNotAccessible />;
  }
};

export default page;
